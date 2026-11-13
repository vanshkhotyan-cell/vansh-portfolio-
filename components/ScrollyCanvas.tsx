"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FRAME_FILES, FRAME_COUNT } from "@/lib/frames";
import Loader from "./Loader";
import Overlay from "./Overlay";
import { ChevronDown } from "lucide-react";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Framer Motion scroll hook bound to the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring smoothing for scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.0005,
  });

  // Transform progress [0, 1] -> frame index [0, FRAME_COUNT - 1]
  const frameIndexValue = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Transform progress for scroll indicator fade-out (< 5% scroll)
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  /**
   * Manual Canvas Cover Logic:
   * Scales and centers the frame like object-fit: cover
   */
  const renderFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasW = canvas.width;
    const canvasH = canvas.height;

    // Clear with exact background color (#000000)
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvasW, canvasH);

    // Compute cover scaling
    const scale = Math.max(canvasW / img.naturalWidth, canvasH / img.naturalHeight);
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const offsetX = (canvasW - drawW) / 2;
    const offsetY = (canvasH - drawH) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    currentFrameRef.current = frameIdx;
  }, []);

  /**
   * Setup canvas resolution respecting DPR (capped at 2)
   */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    // Force re-render current frame after resize
    const activeIdx = Math.max(0, currentFrameRef.current);
    renderFrame(activeIdx);
  }, [renderFrame]);

  /**
   * Preload Sequence:
   * 1. Load frame 0 immediately and draw it
   * 2. Concurrently load remaining frames using img.decode()
   */
  useEffect(() => {
    let isCancelled = false;
    const imageElements: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = imageElements;

    let loaded = 0;

    const loadSingleFrame = async (idx: number, isCritical = false): Promise<void> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = FRAME_FILES[idx];

        const onDone = async () => {
          if (isCancelled) return;
          try {
            if ("decode" in img) {
              await img.decode();
            }
          } catch {
            // fallback if decode fails
          }
          imageElements[idx] = img;
          loaded++;
          setLoadedCount(loaded);

          if (isCritical) {
            resizeCanvas();
            renderFrame(0);
          }
          resolve();
        };

        if (img.complete) {
          onDone();
        } else {
          img.onload = onDone;
          img.onerror = () => {
            console.warn(`Failed to load frame ${idx}`);
            resolve();
          };
        }
      });
    };

    const preloadAll = async () => {
      // 1. Load critical frame 0 first
      await loadSingleFrame(0, true);

      // 2. Load the rest of the sequence
      const promises: Promise<void>[] = [];
      for (let i = 1; i < FRAME_COUNT; i++) {
        promises.push(loadSingleFrame(i));
      }

      await Promise.all(promises);
      if (!isCancelled) {
        setIsReady(true);
      }
    };

    preloadAll();

    window.addEventListener("resize", resizeCanvas, { passive: true });
    resizeCanvas();

    return () => {
      isCancelled = true;
      window.removeEventListener("resize", resizeCanvas);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [resizeCanvas, renderFrame]);

  /**
   * Animation Frame Loop:
   * Subscribes to smoothProgress and renders only when index changes
   */
  useEffect(() => {
    const unsubscribe = frameIndexValue.on("change", (latest) => {
      const targetIdx = Math.min(
        Math.max(Math.round(latest), 0),
        FRAME_COUNT - 1
      );

      if (targetIdx !== currentFrameRef.current) {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => {
          renderFrame(targetIdx);
        });
      }
    });

    return () => {
      unsubscribe();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [frameIndexValue, renderFrame]);

  const progressPercentage = (loadedCount / FRAME_COUNT) * 100;

  return (
    <>
      {/* Preloading Screen */}
      <Loader
        progress={progressPercentage}
        total={FRAME_COUNT}
        loaded={loadedCount}
        isLoading={!isReady}
      />

      {/* 500vh Sticky Scroll Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[500vh] bg-black"
        style={{ backgroundColor: "var(--bg)" }}
      >
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
          {/* HTML5 Canvas for Image Sequence */}
          <canvas
            ref={canvasRef}
            className="w-full h-full block object-cover bg-black select-none pointer-events-none"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Cinematic Vignette / Radial Darkening for Text Legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.85) 100%)",
            }}
          />

          {/* Parallax Overlay Text (Z-Index 10) */}
          <Overlay scrollYProgress={scrollYProgress} />

          {/* Scroll Down Indicator (fades out at 5% scroll) */}
          <motion.div
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none text-slate-400 select-none"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400/80">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

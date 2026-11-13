"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  progress: number;
  total: number;
  loaded: number;
  isLoading: boolean;
}

export default function Loader({ progress, total, loaded, isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black select-none pointer-events-auto"
        >
          {/* Subtle radial cyan glow behind logo */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6 max-w-xs w-full px-6 text-center">
            {/* VK Monogram */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16"
            >
              <Image
                src="/assets/vk-logo.svg"
                alt="VK Monogram"
                width={64}
                height={64}
                priority
                className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              />
            </motion.div>

            {/* Title / Status */}
            <div className="space-y-1">
              <h2 className="font-display font-medium text-sm tracking-wider uppercase text-slate-300">
                Vansh Khotyan
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                Scrollytelling Experience · {loaded} of {total} frames
              </p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full space-y-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_12px_#22D3EE]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>

              {/* Percentage */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>PRELOADING FRAMES</span>
                <span className="text-cyan-400 font-semibold">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // --- Section 1: Hero (0% to ~18%) ---
  const s1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.15, 0.22], [1, 1, 0.8, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], [0, -60]);

  // --- Section 2: Turning Data into Decisions (~25% to ~45%) ---
  const s2Opacity = useTransform(scrollYProgress, [0.22, 0.30, 0.40, 0.48], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.22, 0.35, 0.48], [40, 0, -40]);

  // --- Section 3: Bridging Data and AI (~52% to ~72%) ---
  const s3Opacity = useTransform(scrollYProgress, [0.50, 0.58, 0.68, 0.76], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.50, 0.63, 0.76], [40, 0, -40]);

  // --- Section 4: Call to Action (~80% to 100%) ---
  const s4Opacity = useTransform(scrollYProgress, [0.78, 0.86, 0.98, 1], [0, 1, 1, 1]);
  const s4Y = useTransform(scrollYProgress, [0.78, 0.90], [50, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-6 sm:px-12 lg:px-24">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y }}
        className="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center"
      >
        {/* Recruiter Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Data Analyst Intern · Actively Seeking Roles</span>
        </div>

        {/* Large Display Heading */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-6 drop-shadow-2xl">
          Vansh <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-indigo-300">Khotyan.</span>
        </h1>

        {/* Subline */}
        <p className="font-sans text-lg sm:text-2xl text-slate-300 max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-md">
          Data Analyst.{" "}
          <span className="text-cyan-400 font-normal">Python</span> ·{" "}
          <span className="text-cyan-400 font-normal">SQL</span> ·{" "}
          <span className="text-cyan-400 font-normal">Machine Learning.</span>
        </p>

        <p className="text-xs sm:text-sm text-slate-400/90 font-mono mt-4">
          B.Tech (Data Science) @ TMU · 2x ISRO Certified · Moradabad, India
        </p>
      </motion.div>

      {/* ---------------- SECTION 2: PHILOSOPHY (LEFT ALIGNED) ---------------- */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="w-full max-w-3xl mr-auto text-left"
      >
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-cyan-600 shadow-[0_0_12px_#22D3EE]" />
          
          <div className="text-xs uppercase font-mono tracking-widest text-cyan-400 mb-3">
            Core Philosophy
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-5">
            I turn raw data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              into decisions.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
            Cleaning messy datasets, finding the signal through rigorous EDA, and building models that answer real questions.
          </p>
        </div>
      </motion.div>

      {/* ---------------- SECTION 3: BRIDGE (RIGHT ALIGNED) ---------------- */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="w-full max-w-3xl ml-auto text-right"
      >
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-right">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500 shadow-[0_0_12px_#8B5CF6]" />

          <div className="text-xs uppercase font-mono tracking-widest text-cyan-400 mb-3">
            Academics & Practical AI
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-5">
            Bridging data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              and modern AI.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
            B.Tech Data Science at TMU. From exploratory data analysis to Flask APIs and predictive ML models. 2x ISRO certified.
          </p>
        </div>
      </motion.div>

      {/* ---------------- SECTION 4: CALL TO ACTION (CENTERED) ---------------- */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center pointer-events-auto"
      >
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Immediate Availability
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight mb-4">
            Let&apos;s build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              something.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mb-8 font-light">
            Actively seeking Data Analyst and Machine Learning internship opportunities. Ready to make an impact on Day 1.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all transform active:scale-95"
            >
              <span>View my work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="mailto:vanshkhotyan@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass-pill text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all border border-white/15"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

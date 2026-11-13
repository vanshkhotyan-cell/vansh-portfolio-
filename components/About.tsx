"use client";

import { profile } from "@/data/profile";
import { Award, Shield, Heart, Compass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const statIcons = [Award, Compass, Shield, Heart];

  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
              Background & Focus
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Curious about patterns. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                Grounded in data.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                {profile.bio}
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Whether tackling high-dimensional demographic records or evaluating crop yields across meteorological seasons, my methodology centers on thorough exploration before jumping to modeling.
              </p>
            </div>

            {/* Quick Facts List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>B.Tech in Data Science (2025–2029)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Teerthanker Mahaveer University</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Remote & On-site Availability</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Moradabad, Uttar Pradesh, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stat Tiles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {profile.stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between border-white/10 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />

                  <div className="p-2.5 rounded-xl bg-white/5 w-fit mb-4 border border-white/10 text-cyan-400 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="font-display font-bold text-3xl sm:text-4xl text-white group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

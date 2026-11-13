"use client";

import { beyondItems } from "@/data/beyondCode";
import { Rocket, Cpu, Shield, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function BeyondCode() {
  const iconMap: Record<string, React.ElementType> = {
    Rocket,
    Cpu,
    Shield,
    Award,
    Trophy,
  };

  return (
    <section className="relative py-28 px-6 sm:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
            Holistic Perspective
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Beyond the Terminal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Space tech awareness, hardware tinkering, NCC cadet discipline, and competitive cognitive strategy.
          </p>
        </div>

        {/* Grid of Beyond Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beyondItems.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Award;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-7 rounded-2xl flex flex-col justify-between border-white/10 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

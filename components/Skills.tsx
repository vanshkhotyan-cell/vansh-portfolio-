"use client";

import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";
import { Check, Sparkles, Terminal } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
            Technical Toolkit
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Clear separation by real-world competence. No arbitrary percentage bars—just transparent proficiencies.
          </p>
        </div>

        {/* 3 Skill Tiers */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => {
            const isAdvanced = category.tier === "advanced";
            const isExploring = category.tier === "exploring";

            return (
              <motion.div
                key={category.tier}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className={`p-8 sm:p-10 rounded-3xl relative overflow-hidden ${
                  isAdvanced
                    ? "glass-panel border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-slate-950/60 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                    : isExploring
                    ? "border border-dashed border-white/15 bg-white/[0.01]"
                    : "glass-card border-white/10"
                }`}
              >
                {/* Header of Tier */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {category.title}
                      </h3>
                      <span
                        className={`text-[11px] font-mono px-3 py-0.5 rounded-full uppercase tracking-wider ${
                          isAdvanced
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                            : isExploring
                            ? "bg-purple-500/10 text-purple-300 border border-purple-500/30"
                            : "bg-white/10 text-slate-300 border border-white/15"
                        }`}
                      >
                        {category.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {category.skills.map((skill, sIdx) => {
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: sIdx * 0.04 }}
                        whileHover={{ y: -2 }}
                        className={`flex items-center gap-2.5 transition-all cursor-default select-none ${
                          isAdvanced
                            ? "px-5 py-3 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 text-cyan-100 font-medium text-sm sm:text-base shadow-[0_0_20px_rgba(34,211,238,0.12)] hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                            : isExploring
                            ? "px-4 py-2.5 rounded-xl border border-dashed border-white/20 bg-white/[0.03] text-slate-300 text-xs sm:text-sm hover:border-purple-400/50 hover:text-purple-200"
                            : "px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        {isAdvanced ? (
                          <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        ) : isExploring ? (
                          <Terminal className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        ) : (
                          <Check className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

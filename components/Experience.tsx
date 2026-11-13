"use client";

import { timeline } from "@/data/experience";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
            Career & Education
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Experience & Learning Path
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl">
            Hands-on internships in emerging technologies alongside rigorous undergraduate studies in Data Science.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 sm:space-y-16">
          {timeline.map((item, idx) => {
            const isExperience = item.type === "experience";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_#22D3EE] group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card Container */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border-white/10 relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                        {isExperience ? (
                          <Briefcase className="w-3.5 h-3.5" />
                        ) : (
                          <GraduationCap className="w-3.5 h-3.5" />
                        )}
                        <span>{item.organization}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {item.role}
                      </h3>
                    </div>

                    {/* Period & Location Pills */}
                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-slate-300 text-sm sm:text-base font-light mb-6">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

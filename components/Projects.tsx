"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="work" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-black">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
              Portfolio Showcase
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Data analytics projects exploring real datasets through exploratory data analysis, pattern discovery, and predictive modeling.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isUpcoming = project.isUpcoming;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden glass-card flex flex-col justify-between ${
                  isUpcoming
                    ? "border-dashed border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 via-black to-slate-950/40"
                    : "border-white/10"
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent" />

                  {/* Badge */}
                  {isUpcoming && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-mono text-cyan-300 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                      In Progress
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                        <span>{project.linkText || "View Project"}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>

                      <span className="text-xs font-mono text-slate-500">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
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

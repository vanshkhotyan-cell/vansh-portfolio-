"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Mail, Linkedin, Github, FileDown, Check, Copy, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-12 lg:px-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Recruiter Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Actively Seeking Data Analytics & ML Internships</span>
        </motion.div>

        {/* Main Pitch */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-6"
        >
          Open to internships in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-indigo-300">
            Data Analytics, ML
          </span>{" "}
          and Data Engineering.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Ready to dive into complex datasets, construct dependable pipelines, and extract measurable signals. Reach out directly or grab my resume below.
        </motion.p>

        {/* Quick Email Pill & Copy Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 max-w-md mx-auto"
        >
          <a
            href={`mailto:${profile.email}`}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all transform active:scale-95"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>{profile.email}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all border border-white/10"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono">Copy</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Channels Grid: LinkedIn, GitHub, Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-2xl flex items-center justify-between group border-white/10 hover:border-cyan-400/40"
          >
            <div className="flex items-center gap-3 text-left">
              <Linkedin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  LinkedIn
                </div>
                <div className="text-xs text-slate-400 font-mono">/in/vansh-khotyan</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-2xl flex items-center justify-between group border-white/10 hover:border-cyan-400/40"
          >
            <div className="flex items-center gap-3 text-left">
              <Github className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  GitHub
                </div>
                <div className="text-xs text-slate-400 font-mono">/vanshkhotyan-cell</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-2xl flex items-center justify-between group border-white/10 hover:border-cyan-400/40"
          >
            <div className="flex items-center gap-3 text-left">
              <FileDown className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  Resume
                </div>
                <div className="text-xs text-slate-400 font-mono">PDF Download</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { profile } from "@/data/profile";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-24 bg-black border-t border-white/5 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Location */}
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 rounded-md overflow-hidden opacity-70">
            <Image
              src="/assets/vk-logo.svg"
              alt="VK Monogram"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-slate-300 font-medium">{profile.name}</span>
            <span className="mx-2 text-slate-600">·</span>
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Tech Stack credit & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 font-mono text-[11px] text-slate-500">
          <span>Engineered with Next.js 14, Framer Motion & Canvas</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span>© {currentYear} Vansh Khotyan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

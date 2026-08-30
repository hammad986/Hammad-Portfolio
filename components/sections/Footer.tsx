"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { sounds } from "@/components/sound-effects";

export function Footer() {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-cyan-500/20 px-4 sm:px-6 py-10 z-10 relative bg-[#050814]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs sm:text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-1">
            <Image
              src="/assets/aetherion_logo.webp"
              alt="Aetherion Logo"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <div>
            <span className="font-bold text-white block">
              Muhammed Hammad
            </span>
            <span className="text-[11px] font-mono text-cyanCore">
              Full-Stack AI Developer & Systems Specialist
            </span>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-center sm:text-left text-slate-400 text-xs font-normal">
          Designed & Engineered by Muhammed Hammad • Next.js 15, Three.js & Python • 2026
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyanCore hover:bg-cyan-500/30 hover:text-white transition w-fit mx-auto sm:mx-0 shadow-sm"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}

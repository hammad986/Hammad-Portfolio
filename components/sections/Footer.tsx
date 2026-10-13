"use client";

import Image from "next/image";
import Link from "next/link";
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
            <span className="text-[11px] font-mono text-slate-400">
              AI/ML Engineer and Full-Stack Developer
            </span>
          </div>
        </div>

        {/* Legal and Stack */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms and Conditions
          </Link>
          <span className="text-slate-500">
            Built with Next.js 15, Three.js and Python
          </span>
        </nav>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="mx-auto flex w-fit items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-white/25 hover:text-white sm:mx-0"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}

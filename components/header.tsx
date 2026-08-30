"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Command,
  Download,
  Menu,
  Terminal,
  Volume2,
  VolumeX,
  X,
  Sparkles
} from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sounds } from "@/components/sound-effects";
import { TerminalModal } from "@/components/terminal-modal";
import { AiAssistantModal } from "@/components/ai-assistant-modal";
import { CommandPalette } from "@/components/command-palette";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) sounds.playClick();
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4">
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-2 sm:py-2.5 transition-all duration-300",
            scrolled
              ? "border-cyan-500/25 bg-[#080E21]/95 shadow-[0_20px_60px_rgba(5,8,20,0.9),0_0_30px_rgba(0,242,254,0.12)] backdrop-blur-xl"
              : "border-cyan-500/15 bg-[#080E21]/75 shadow-lg backdrop-blur-md"
          )}
          aria-label="Primary navigation"
        >
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            onClick={() => sounds.playHover()}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-1 transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              <Image
                src="/assets/aetherion_logo.webp"
                alt="Muhammed Hammad"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-bold tracking-tight text-white group-hover:text-cyanCore transition">
                Muhammed Hammad
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => sounds.playHover()}
                className="rounded-xl px-3 py-1 text-xs font-medium text-slate-300 transition hover:bg-cyan-500/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Quick Action Dock */}
          <div className="flex items-center gap-2">
            {/* Ask AI Assistant Button */}
            <button
              onClick={() => {
                sounds.playClick();
                setIsAiAssistantOpen(true);
              }}
              className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 text-xs font-semibold text-cyanCore transition hover:bg-cyan-500/30 hover:border-cyan-500 hover:text-white shadow-[0_0_15px_rgba(0,242,254,0.25)]"
              title="Ask Hammad AI Assistant"
            >
              <Bot className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>

            {/* Command Palette Trigger */}
            <button
              id="cmd-k-trigger"
              onClick={() => {
                sounds.playClick();
                setIsCommandPaletteOpen(true);
              }}
              className="hidden md:flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-mono text-slate-400 hover:border-cyan-500/30 hover:text-slate-200 transition"
              title="Command Palette (Cmd+K)"
            >
              <Command className="h-3 w-3 text-cyanCore" />
              <span className="text-[10px]">K</span>
            </button>

            {/* Terminal Button */}
            <button
              onClick={() => {
                sounds.playClick();
                setIsTerminalOpen(true);
              }}
              className="flex items-center gap-1.5 rounded-xl border border-bluecore/30 bg-bluecore/15 px-2.5 py-1.5 text-xs font-mono text-blue-200 transition hover:bg-bluecore/30 hover:text-white"
              title="Open Developer CLI"
            >
              <Terminal className="h-3.5 w-3.5 text-bluecore" />
              <span className="hidden sm:inline">CLI</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white transition"
              title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="h-3.5 w-3.5 text-slate-600" />
              ) : (
                <Volume2 className="h-3.5 w-3.5 text-cyanCore" />
              )}
            </button>

            {/* Resume Button */}
            <Link
              href="/assets/Muhammed_Hammad_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "primary",
                size: "sm",
                className: "hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
              })}
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </Link>

            {/* Mobile Drawer Button */}
            <button
              className="lg:hidden grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => {
                sounds.playClick();
                setOpen((value) => !value);
              }}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {open && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-cyan-500/25 bg-[#080E21]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-white transition"
                  onClick={() => {
                    sounds.playClick();
                    setOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-white/10 flex gap-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsAiAssistantOpen(true);
                  }}
                  className="flex-1 rounded-xl border border-cyan-500/30 bg-cyan-500/15 py-2 text-xs font-semibold text-cyanCore text-center flex items-center justify-center gap-1.5"
                >
                  <Bot className="h-3.5 w-3.5" />
                  Ask AI Bot
                </button>
                <Link
                  href="/assets/Muhammed_Hammad_S_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2 text-xs font-bold text-white text-center flex items-center justify-center gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  Resume
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />
    </>
  );
}

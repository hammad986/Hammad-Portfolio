"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  Sparkles,
  Bot,
  Terminal,
  Download,
  Award,
  Layers,
  Code2,
  Briefcase,
  Mail,
  X
} from "lucide-react";
import { navItems, projects, certificatesList } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

export function CommandPalette({
  isOpen,
  onClose,
  onOpenAiAssistant,
  onOpenTerminal
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenAiAssistant: () => void;
  onOpenTerminal: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        sounds.playClick();
        if (isOpen) {
          onClose();
        } else {
          // Open
          const btn = document.getElementById("cmd-k-trigger");
          btn?.click();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredSections = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.type.toLowerCase().includes(query.toLowerCase()) ||
    p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
    >
      <div onClick={onClose} className="absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -10 }}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#080E21] shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(0,242,254,0.15)]"
      >
        {/* Search Bar */}
        <div className="flex items-center gap-3 border-b border-cyan-500/20 bg-[#0C132C] px-4 py-3.5">
          <Search className="h-4 w-4 text-cyanCore" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section to navigate..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-400 outline-none"
          />
          <kbd className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-mono text-cyanCore">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Tools */}
          <div>
            <span className="px-3 text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Interactive Tools
            </span>
            <div className="mt-1 space-y-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenAiAssistant();
                }}
                className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs text-slate-200 hover:bg-cyan-500/15 hover:text-white transition"
              >
                <div className="flex items-center gap-2.5">
                  <Bot className="h-4 w-4 text-cyanCore" />
                  <span className="font-semibold">Ask Hammad AI Assistant</span>
                </div>
                <span className="font-mono text-[10px] text-cyanCore">AI Agent</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenTerminal();
                }}
                className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs text-slate-200 hover:bg-blue-500/15 hover:text-white transition"
              >
                <div className="flex items-center gap-2.5">
                  <Terminal className="h-4 w-4 text-bluecore" />
                  <span className="font-semibold">Open Developer CLI Terminal</span>
                </div>
                <span className="font-mono text-[10px] text-bluecore">CLI</span>
              </button>

              <a
                href="/assets/Muhammed_Hammad_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onClose()}
                className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs text-slate-200 hover:bg-emerald-500/15 hover:text-white transition"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="h-4 w-4 text-emeraldCore" />
                  <span className="font-semibold">Download Verified Resume PDF</span>
                </div>
                <span className="font-mono text-[10px] text-emeraldCore">PDF</span>
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {filteredSections.length > 0 && (
            <div>
              <span className="px-3 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Navigation
              </span>
              <div className="mt-1 space-y-1">
                {filteredSections.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      sounds.playClick();
                      onClose();
                    }}
                    className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs text-slate-300 hover:bg-white/[0.08] hover:text-white transition"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="px-3 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Projects & Builds
              </span>
              <div className="mt-1 space-y-1">
                {filteredProjects.slice(0, 4).map((p) => (
                  <a
                    key={p.id}
                    href="/projects"
                    onClick={() => {
                      sounds.playClick();
                      onClose();
                    }}
                    className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs text-slate-300 hover:bg-white/[0.08] hover:text-white transition"
                  >
                    <div>
                      <span className="font-semibold text-white block">{p.title}</span>
                      <span className="text-[11px] text-slate-400">{p.type}</span>
                    </div>
                    <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] font-mono text-cyanCore">
                      {p.category.toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

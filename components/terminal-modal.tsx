"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { terminalCommands } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { sounds } from "@/components/sound-effects";

interface CommandLog {
  id: string;
  command: string;
  output: string;
  isError?: boolean;
}

export function TerminalModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: "init",
      command: "welcome",
      output: `╔═══════════════════════════════════════════════════════════════╗
║   MUHAMMED HAMMAD - AI/ML & GENAI SYSTEM TERMINAL v2.5.0      ║
║   Type "help" to list available system commands.              ║
╚═══════════════════════════════════════════════════════════════╝`
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      sounds.playCyberChime();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cleanCmd = rawCmd.trim().toLowerCase();
    if (!cleanCmd) return;

    sounds.playTerminalBeep();

    if (cleanCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (cleanCmd === "sudo hire-hammad" || cleanCmd === "hire") {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore
      }
    }

    let output = "";
    let isError = false;

    if (cleanCmd in terminalCommands) {
      output = terminalCommands[cleanCmd as keyof typeof terminalCommands];
    } else if (cleanCmd === "sudo hire-hammad") {
      output = `🎉 ACCESS GRANTED: Offer letter generated!
Muhammed Hammad is ready to accelerate your AI & Engineering team.
Direct contact: mdhammad2906@gmail.com | +91 6369740522`;
    } else {
      isError = true;
      output = `zsh: command not found: "${cleanCmd}". Type "help" to see available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: rawCmd,
        output,
        isError
      }
    ]);
    setInput("");
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/80 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 flex h-[620px] max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-bluecore/30 bg-[#050B14]/95 shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(59,130,246,0.25)] font-mono"
        >
          {/* Terminal Window Titlebar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button
                  onClick={onClose}
                  className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition"
                  aria-label="Close"
                />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                <TerminalIcon className="h-3.5 w-3.5 text-bluecore" />
                hammad@ai-workstation:~
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-blue-400/80 hidden sm:inline">
                interactive CLI
              </span>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Terminal Output Stream */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="flex-1 overflow-y-auto p-4 text-xs sm:text-sm leading-relaxed text-slate-200 cursor-text selection:bg-bluecore/40"
          >
            {history.map((log) => (
              <div key={log.id} className="mb-4">
                {log.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-cyan-300">hammad@ai-core</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-purple-300">~</span>
                    <span className="text-white font-medium">$ {log.command}</span>
                  </div>
                )}
                <pre
                  className={`mt-1.5 whitespace-pre-wrap font-mono ${
                    log.isError ? "text-rose-400" : "text-slate-300"
                  }`}
                >
                  {log.output}
                </pre>
              </div>
            ))}

            {/* Current Input Prompt */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 text-blue-400">
              <span className="text-emerald-400">➜</span>
              <span className="text-cyan-300">hammad@ai-core</span>
              <span className="text-slate-500">:</span>
              <span className="text-purple-300">~</span>
              <span className="text-white">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white outline-none border-none font-mono text-xs sm:text-sm caret-blue-400"
                placeholder="type a command (e.g. 'help', 'skills', 'hire')..."
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Quick Helper Action Buttons */}
          <div className="flex items-center gap-2 border-t border-white/10 bg-slate-950/70 px-4 py-2.5 overflow-x-auto">
            <span className="text-[11px] text-muted shrink-0">Quick run:</span>
            {["help", "skills", "projects", "certs", "hire", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  executeCommand(cmd);
                }}
                className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-1 text-[11px] text-blue-200 hover:border-bluecore/50 hover:bg-bluecore/20 shrink-0 transition"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

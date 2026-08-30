"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Terminal,
  Workflow,
  X
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { aetherionHighlights } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

export function AetherionVision() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-4 sm:px-6 pb-16 z-10 relative">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-bluecore/40 bg-[radial-gradient(circle_at_18%_15%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(168,85,247,0.2),transparent_40%),linear-gradient(135deg,rgba(11,16,32,0.9),rgba(13,19,40,0.95))] p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.2)] backdrop-blur-2xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-bluecore/40 bg-bluecore/15 px-3.5 py-1 text-xs font-semibold text-blue-200 shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-cyanCore animate-spin-slow" />
              <span>Flagship Autonomous Project</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
              Aetherion AI
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 font-normal">
              Building an autonomous cognitive intelligence ecosystem engineered for
              agentic workflows, dynamic reasoning loops, and multi-model collaboration that transcends traditional tool execution.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => {
                  sounds.playClick();
                  setOpen(true);
                }}
                className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-bold hover:from-blue-600 hover:to-purple-700 shadow-[0_0_25px_rgba(59,130,246,0.4)] rounded-2xl"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Explore Architecture Vision
              </Button>
              <span className="text-xs font-mono text-cyanCore font-semibold">
                v1.0 Stealth Alpha
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* Visual Branding Card */}
            <div className="relative min-h-44 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:col-span-2 shadow-inner">
              <div className="relative flex h-full items-center gap-5">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-500/10 p-2 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                  <Image
                    src="/assets/aetherion_logo.webp"
                    alt="Aetherion Visual"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Cognitive Swarm Architecture
                  </p>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
                    Engineered from first principles with memory persistence, hybrid vector/graph retrieval, and autonomous self-correction.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            {aetherionHighlights.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => sounds.playHover()}
                className="group rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition-all duration-300 hover:border-bluecore/50 hover:bg-bluecore/[0.08]"
              >
                <item.icon className="h-4 w-4 text-cyanCore group-hover:scale-110 transition-transform" />
                <p className="mt-2.5 text-xs sm:text-sm font-bold text-white">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-full max-w-2xl rounded-3xl border border-bluecore/40 bg-slate-950/95 p-6 sm:p-8 shadow-2xl backdrop-blur-3xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Workflow className="h-5 w-5 text-cyanCore" />
                <h3 className="text-lg font-bold text-white">
                  Aetherion AI: Technical Blueprint
                </h3>
              </div>
              <button
                className={buttonVariants({ variant: "secondary", size: "icon", className: "h-8 w-8 rounded-full border-white/15" })}
                onClick={() => setOpen(false)}
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-slate-200 leading-relaxed font-normal">
              <p>
                Aetherion AI is being built to bridge the gap between static LLM completions and fully autonomous, multi-turn reasoning agents that can operate across production environments.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="font-bold text-white block mb-1 text-xs sm:text-sm text-blue-200">
                    🧠 Dynamic Cognitive Routing
                  </span>
                  <span className="text-xs text-slate-300">
                    Intelligently routes sub-tasks across specialized models (Fast local LLMs vs. Deep Reasoning frontiers).
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="font-bold text-white block mb-1 text-xs sm:text-sm text-purple-200">
                    🔄 Self-Reflective Loops
                  </span>
                  <span className="text-xs text-slate-300">
                    Validates generated outputs, unit tests generated code, and self-corrects without requiring human intervention.
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-bluecore/30 bg-bluecore/10 p-4 mt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-cyanCore">
                  <Terminal className="h-4 w-4" />
                  Development Status: Active Stealth Phase
                </div>
                <p className="mt-1 text-xs text-slate-200">
                  Core modules currently being trained and evaluated. Live public testing scheduled for upcoming release.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={() => setOpen(false)} className="rounded-xl">
                Close Preview
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

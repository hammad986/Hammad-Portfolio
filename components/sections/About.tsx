"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { AiPipelinePlayground } from "@/components/ai-pipeline-playground";
import { sounds } from "@/components/sound-effects";
import { Code2, Cpu, ShieldCheck, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-24 z-10 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Systems Architecture & Philosophy"
          title="Engineering AI products that survive contact with reality."
          body="Production AI applications require more than static API wrappers. They demand robust schema normalization, low-latency client state, multi-model fallback redundancy, and verified execution proof."
        />

        {/* Top Story & Engineering Principles */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] items-stretch">
          {/* Engineering Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-between rounded-3xl border border-cyan-500/20 bg-[#080E21] p-6 sm:p-7 shadow-[0_20px_70px_rgba(5,8,20,0.8)]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyanCore">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Full-Stack AI Engineering</h3>
                  <span className="text-xs font-mono text-cyanCore">Silicon Valley Standards</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300 font-normal">
                I build end-to-end software systems that combine mathematical AI foundations with high-velocity product execution. 
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
                My work spans multimodal document intelligence engines, real-time computer vision utilities, offline-first client CRMs, and autonomous agent workflows. Every project is shipped with live demo links, source code, and verified performance benchmarks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> 100% Deployed Proof
              </span>
              <span className="text-cyanCore">Next.js 15 • Python • WebGL</span>
            </div>
          </motion.div>

          {/* 3 Core Production Tenets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {[
              {
                icon: Cpu,
                title: "Deterministic AI Output",
                desc: "Strict Pydantic JSON schema validators and self-correction loops to eliminate hallucinations in production."
              },
              {
                icon: ShieldCheck,
                title: "Zero-Latency Local State",
                desc: "Encrypted client-side persistence and Zustand reactive state for instant 0ms user interactions."
              },
              {
                icon: Code2,
                title: "Full Hardware Efficiency",
                desc: "Multithreaded Python & OpenCV processing delivering 60 FPS real-time webcam frame analytics."
              }
            ].map((item) => (
              <div
                key={item.title}
                onMouseEnter={() => sounds.playHover()}
                className="flex flex-col justify-between rounded-3xl border border-cyan-500/15 bg-[#080E21] p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0C132C]"
              >
                <div>
                  <item.icon className="h-5 w-5 text-cyanCore" />
                  <h4 className="mt-3 text-xs font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Live Interactive AI Pipeline Simulator Hub */}
        <div className="mt-8">
          <AiPipelinePlayground />
        </div>
      </div>
    </section>
  );
}

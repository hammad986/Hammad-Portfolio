"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Zap,
  Activity,
  Terminal
} from "lucide-react";
import { sounds } from "@/components/sound-effects";

interface TaskPreset {
  id: string;
  name: string;
  query: string;
  expectedTokens: number;
  latencyMs: number;
  steps: {
    title: string;
    detail: string;
    tech: string;
  }[];
  outputJson: string;
}

const presets: TaskPreset[] = [
  {
    id: "doc-intel",
    name: "Smart Doc Extraction",
    query: "Extract normalized invoice line items, tax breakdown, and vendor IBAN from complex irregular PDF.",
    expectedTokens: 640,
    latencyMs: 142,
    steps: [
      { title: "Multimodal Vision OCR", detail: "Sample document coordinates and construct layout bounding boxes", tech: "Vision AI / OpenCV" },
      { title: "Hybrid Vector Retrieval", detail: "BM25 keyword search + ChromaDB dense embeddings retrieval", tech: "ChromaDB" },
      { title: "Schema Normalization", detail: "Validate against Pydantic schema with automated self-correction", tech: "JSON Schema Validator" },
      { title: "Deterministic Output", detail: "Emit sanitized JSON with 99.2% extraction confidence", tech: "Structured Parser" }
    ],
    outputJson: JSON.stringify(
      {
        vendor: "Acme Logistics Inc.",
        invoice_no: "INV-2026-894",
        total_amount: "$14,850.00",
        tax: "$1,240.00",
        validation_status: "VERIFIED_VALID",
        confidence: 0.994
      },
      null,
      2
    )
  },
  {
    id: "video-qa",
    name: "Video QA Timestamp Search",
    query: "Locate exact timestamp where database migration failure was diagnosed during 2-hour recording.",
    expectedTokens: 820,
    latencyMs: 188,
    steps: [
      { title: "Whisper Audio Ingestion", detail: "Transcribe spoken audio streams with precise word-level time offsets", tech: "Whisper AI" },
      { title: "Keyframe Visual Extraction", detail: "Sample visual screen frames at scene transitions", tech: "OpenCV Engine" },
      { title: "Cross-Modal Correlation", detail: "Correlate audio timestamps with terminal error frames", tech: "Multimodal Reranker" },
      { title: "Timestamp Evidence Synthesis", detail: "Return jump-link with video playback sync at 01:14:22", tech: "PyQt Desktop Sync" }
    ],
    outputJson: JSON.stringify(
      {
        matched_timestamp: "01:14:22.450",
        event: "PostgreSQL connection pool exhaustion",
        confidence: 0.988,
        citation_type: "TRANSCRIPT_AND_FRAME_PROOF"
      },
      null,
      2
    )
  },
  {
    id: "agentic-crm",
    name: "CRM Autonomous Pipeline",
    query: "Evaluate inbound lead, calculate deal closure probability, and generate next follow-up action.",
    expectedTokens: 410,
    latencyMs: 96,
    steps: [
      { title: "Intent & Sentiment Scoring", detail: "Analyze client interaction history and budget signals", tech: "Zustand / Recharts" },
      { title: "Probabilistic Deal Scoring", detail: "Calculate win rate percentage across 5 deal stages", tech: "Predictive Analytics" },
      { title: "Automated Task Dispatch", detail: "Schedule follow-up reminder and update Kanban board", tech: "dnd-kit Engine" }
    ],
    outputJson: JSON.stringify(
      {
        deal_id: "DEAL-781",
        stage: "Proposal Sent",
        win_probability: "84.5%",
        recommended_action: "Send pricing breakdown within 24 hours",
        privacy_status: "ENCRYPTED_LOCAL_STORAGE"
      },
      null,
      2
    )
  }
];

export function AiPipelinePlayground() {
  const [selectedTask, setSelectedTask] = useState<TaskPreset>(presets[0]);
  const [selectedModel, setSelectedModel] = useState("Gemini 2.0 Flash");
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(selectedTask.steps.length);
  const [showOutput, setShowOutput] = useState(true);

  const runSimulation = () => {
    sounds.playClick();
    setIsRunning(true);
    setActiveStep(0);
    setShowOutput(false);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setActiveStep(step);
      if (step >= selectedTask.steps.length) {
        clearInterval(interval);
        setIsRunning(false);
        setShowOutput(true);
        sounds.playClick();
      }
    }, 450);
  };

  return (
    <div className="rounded-3xl border border-cyan-500/25 bg-[#080E21] p-5 sm:p-7 shadow-[0_20px_70px_rgba(5,8,20,0.8),0_0_30px_rgba(0,242,254,0.1)]">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-cyan-500/20 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-cyanCore animate-spin-slow" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyanCore">
              Interactive AI Pipeline Simulator
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-300">
            Simulate real-time multi-agent reasoning, hybrid vector retrieval, and structured JSON output.
          </p>
        </div>

        {/* Model Switcher */}
        <div className="flex items-center gap-1.5 rounded-xl border border-cyan-500/25 bg-[#0C132C] p-1">
          {["Gemini 2.0 Flash", "Claude 3.5", "Llama 3.3 (Local)"].map((m) => (
            <button
              key={m}
              onClick={() => {
                sounds.playClick();
                setSelectedModel(m);
              }}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-mono font-medium transition ${
                selectedModel === m
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Task Selector Buttons */}
      <div className="mt-5 flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              sounds.playClick();
              setSelectedTask(p);
              setActiveStep(p.steps.length);
              setShowOutput(true);
            }}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
              selectedTask.id === p.id
                ? "border border-cyan-500/60 bg-cyan-500/20 text-white shadow-[0_0_15px_rgba(0,242,254,0.25)]"
                : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-500/30 hover:text-slate-200"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Query Banner */}
      <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-[#0C132C] p-3.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="text-cyanCore font-semibold flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5" />
            Input Prompt Payload:
          </span>
          <span>{selectedTask.expectedTokens} tokens</span>
        </div>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-200 font-normal">
          &quot;{selectedTask.query}&quot;
        </p>
      </div>

      {/* Execution Tree & Output Grid */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {/* Left: Step-by-Step Reasoning Tree */}
        <div className="space-y-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
            Multi-Agent Execution Loop:
          </span>

          {selectedTask.steps.map((step, idx) => {
            const isCompleted = activeStep > idx;
            const isCurrent = activeStep === idx && isRunning;

            return (
              <motion.div
                key={step.title}
                animate={{
                  borderColor: isCurrent
                    ? "rgba(0, 242, 254, 0.7)"
                    : isCompleted
                    ? "rgba(0, 245, 160, 0.4)"
                    : "rgba(255, 255, 255, 0.08)",
                  backgroundColor: isCurrent
                    ? "rgba(0, 242, 254, 0.12)"
                    : isCompleted
                    ? "rgba(0, 245, 160, 0.05)"
                    : "rgba(255, 255, 255, 0.02)"
                }}
                className="rounded-2xl border p-3 transition-all"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {isCompleted ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : isCurrent ? (
                      <Zap className="h-4 w-4 animate-bounce text-cyanCore" />
                    ) : (
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-slate-800 text-[10px] font-mono text-slate-400">
                        {idx + 1}
                      </span>
                    )}
                    <span className="font-bold text-white">{step.title}</span>
                  </div>
                  <span className="rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-cyanCore">
                    {step.tech}
                  </span>
                </div>
                <p className="mt-1 pl-6 text-[11px] text-slate-300 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Output Telemetry & JSON */}
        <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-[#050814] p-4 font-mono">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5" />
                Live Structured Output (JSON)
              </span>
              <span className="text-cyanCore">{selectedTask.latencyMs}ms p95</span>
            </div>

            {showOutput ? (
              <pre className="mt-3 overflow-x-auto text-[11px] text-cyan-200 leading-relaxed max-h-48 scrollbar-thin">
                {selectedTask.outputJson}
              </pre>
            ) : (
              <div className="flex h-36 items-center justify-center text-xs text-slate-500 gap-2">
                <Cpu className="h-4 w-4 animate-spin text-cyanCore" />
                <span>Synthesizing agentic reasoning stream...</span>
              </div>
            )}
          </div>

          {/* Trigger Button */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">
              Provider: <span className="text-white font-semibold">{selectedModel}</span>
            </span>

            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              {isRunning ? (
                <>
                  <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" />
                  <span>Run Live Pipeline</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Workflow,
  X,
  AlertCircle,
  TrendingUp,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ProjectAction } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { sounds } from "@/components/sound-effects";

interface ProjectModalProps {
  project: Project | null;
  projectsList: Project[];
  onClose: () => void;
  onSelect: (proj: Project) => void;
}

export function ProjectModal({
  project,
  projectsList,
  onClose,
  onSelect
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const images = project.gallery?.length ? project.gallery : [project.image];
  const currentIndex = projectsList.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projectsList[currentIndex - 1] : projectsList[projectsList.length - 1];
  const nextProject =
    currentIndex < projectsList.length - 1 ? projectsList[currentIndex + 1] : projectsList[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#050814]/90 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
    >
      <div onClick={onClose} className="absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#080E21] shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(0,242,254,0.15)]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 bg-[#0C132C] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1 font-mono text-xs font-bold text-cyanCore">
              {project.category.toUpperCase()}
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs text-slate-400 font-mono">{project.type}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sounds.playClick();
                onSelect(prevProject);
              }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:border-cyan-500 hover:text-white transition"
              title="Previous Project"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onSelect(nextProject);
              }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:border-cyan-500 hover:text-white transition"
              title="Next Project"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:border-cyan-500 hover:text-white transition"
              title="Close Modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual Display */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#050814] shadow-inner">
            <Image
              src={images[activeImageIndex]}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Gallery Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => {
                    sounds.playClick();
                    setActiveImageIndex(idx);
                  }}
                  className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-xl border transition ${
                    activeImageIndex === idx
                      ? "border-cyanCore ring-2 ring-cyan-500/50"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`thumb-${idx}`} fill className="object-cover object-top" sizes="80px" />
                </button>
              ))}
            </div>
          )}

          {/* Deep Case Study Breakdown */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Problem Statement */}
            {project.problem && (
              <div className="rounded-2xl border border-cyan-500/20 bg-[#0C132C] p-4">
                <span className="text-xs font-mono font-bold text-amberCore uppercase flex items-center gap-1.5 mb-1.5">
                  <AlertCircle className="h-4 w-4" /> Problem Statement
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Engineering Solution */}
            {project.solution && (
              <div className="rounded-2xl border border-cyan-500/20 bg-[#0C132C] p-4">
                <span className="text-xs font-mono font-bold text-cyanCore uppercase flex items-center gap-1.5 mb-1.5">
                  <Cpu className="h-4 w-4" /> Engineering Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Quantifiable Impact & Metrics */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5 mb-2">
                <TrendingUp className="h-4 w-4" /> Quantified Outcome & Metrics
              </span>
              <div className="grid gap-2 sm:grid-cols-3">
                {project.impactMetrics.map((metric) => (
                  <div key={metric} className="rounded-xl border border-emerald-500/20 bg-[#050814]/80 p-2.5 text-xs text-slate-200 font-medium flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Architecture Blueprint */}
          {project.architectureSvg && (
            <div className="rounded-2xl border border-cyan-500/20 bg-[#0C132C] p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-cyanCore uppercase flex items-center gap-1.5">
                  <Workflow className="h-4 w-4" /> System Architecture Diagram
                </span>
                <span className="text-[10px] font-mono text-slate-400">Interactive SVG Blueprint</span>
              </div>
              <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl border border-white/10 bg-[#050814] p-3 flex items-center justify-center">
                <Image
                  src={project.architectureSvg}
                  alt={`${project.title} Architecture`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            </div>
          )}

          {/* Technical Stack */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Technology Toolchain:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(project.tech || []).map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-cyan-500/20 bg-[#0C132C] px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-cyan-500/20 bg-[#0C132C] p-4 sm:px-8">
          <div className="text-xs font-mono text-slate-400">
            Project {currentIndex + 1} of {projectsList.length}
          </div>

          <div className="flex items-center gap-2.5">
            {project.actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className={buttonVariants({
                  variant: action.type === "live" ? "primary" : "secondary",
                  size: "sm",
                  className: `rounded-xl text-xs font-bold ${
                    action.type === "live"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                      : "border border-cyan-500/30 bg-[#080E21] text-white hover:bg-cyan-500/20"
                  }`
                })}
              >
                {action.type === "live" && <ExternalLink className="mr-1.5 h-3.5 w-3.5" />}
                {action.type === "github" && <Github className="mr-1.5 h-3.5 w-3.5" />}
                {action.type === "download" && <Download className="mr-1.5 h-3.5 w-3.5" />}
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Maximize2,
  Minimize2,
  Share2,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CertificateItem } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { sounds } from "@/components/sound-effects";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  certificatesList: CertificateItem[];
  onClose: () => void;
  onSelect: (cert: CertificateItem) => void;
}

export function CertificateModal({
  certificate,
  certificatesList,
  onClose,
  onSelect
}: CertificateModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  const currentIndex = certificatesList.findIndex((c) => c.id === certificate.id);
  const prevCert =
    currentIndex > 0 ? certificatesList[currentIndex - 1] : certificatesList[certificatesList.length - 1];
  const nextCert =
    currentIndex < certificatesList.length - 1 ? certificatesList[currentIndex + 1] : certificatesList[0];

  const handleShare = () => {
    sounds.playClick();
    navigator.clipboard.writeText(window.location.origin + certificate.filePath);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#050814]/90 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
    >
      <div onClick={onClose} className="absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 flex flex-col overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#080E21] shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(0,242,254,0.15)] transition-all duration-300 ${
          isFullscreen ? "h-[98vh] w-[98vw] max-w-none" : "h-[90vh] w-full max-w-5xl"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 bg-[#0C132C] px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1 font-mono text-xs font-bold text-cyanCore">
              {certificate.category}
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1">
                {certificate.title}
              </h2>
              <p className="text-xs text-slate-400 font-mono">{certificate.issuer}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => {
                sounds.playClick();
                onSelect(prevCert);
              }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:border-cyan-500 hover:text-white transition"
              title="Previous Certificate"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onSelect(nextCert);
              }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:border-cyan-500 hover:text-white transition"
              title="Next Certificate"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setIsFullscreen(!isFullscreen);
              }}
              className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:border-cyan-500 hover:text-white transition"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:border-cyan-500 hover:text-white transition"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Viewer Content Area */}
        <div className="flex-1 grid lg:grid-cols-[1fr_320px] overflow-hidden">
          {/* Main Document / PDF / Image Viewport */}
          <div className="relative h-full w-full bg-[#050814] flex items-center justify-center p-3 sm:p-4 overflow-hidden border-b lg:border-b-0 lg:border-r border-cyan-500/15">
            {certificate.fileType === "pdf" ? (
              <iframe
                src={`${certificate.filePath}#toolbar=0&navpanes=0&scrollbar=1`}
                title={certificate.title}
                className="h-full w-full rounded-2xl border border-white/10 bg-white shadow-2xl"
              />
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={certificate.filePath}
                  alt={certificate.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            )}
          </div>

          {/* Right Metadata Sidebar */}
          <div className="flex flex-col justify-between overflow-y-auto p-5 sm:p-6 bg-[#080E21] space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyanCore">
                  Issuer Institution
                </span>
                <p className="text-base font-bold text-white mt-0.5">{certificate.issuer}</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Calendar className="h-3.5 w-3.5 text-slate-500" />
                  <span>Issued: {certificate.date}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Verification & Scope
                </span>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {certificate.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Verified Skills:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-cyan-500/20 bg-[#0C132C] px-2.5 py-1 text-xs text-slate-300 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300 flex items-center gap-2 font-semibold">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>Verified Official Credential Document</span>
              </div>
            </div>

            {/* Sidebar Actions */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <a
                href={certificate.filePath}
                download
                onClick={() => sounds.playClick()}
                className={buttonVariants({
                  variant: "primary",
                  size: "sm",
                  className: "w-full justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(0,242,254,0.3)] text-xs"
                })}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Original ({certificate.fileType.toUpperCase()})
              </a>

              <button
                onClick={handleShare}
                className="w-full rounded-xl border border-cyan-500/20 bg-[#0C132C] py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-white transition flex items-center justify-center gap-1.5"
              >
                <Share2 className="h-3.5 w-3.5 text-cyanCore" />
                <span>{copiedLink ? "Link Copied!" : "Copy Credential Link"}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Phone,
  ShieldCheck,
  Mail
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { socials } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { sounds } from "@/components/sound-effects";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(socials.rawEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-24 z-10 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Direct Engineering Contact"
          title="Build the next intelligent platform together."
          body="Reach out for full-stack AI engineering roles, product builds, generative AI pipelines, or technical consultations."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Direct Communication Channels Card */}
          <div className="rounded-3xl border border-cyan-500/20 bg-[#080E21] p-6 sm:p-8 shadow-[0_20px_70px_rgba(5,8,20,0.8)] space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyanCore">
                Direct Channels
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-white tracking-tight">
                Muhammed Hammad
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
                Available for software engineering roles, generative AI development, and scalable system architecture.
              </p>
            </div>

            {/* Quick One-Click Email Copy Box */}
            <div className="rounded-2xl border border-cyan-500/25 bg-[#0C132C] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-cyan-200 uppercase tracking-wider">
                    Primary Email
                  </p>
                  <p className="text-sm font-mono text-white mt-0.5 font-semibold">
                    {socials.rawEmail}
                  </p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/20 px-3 py-1.5 text-xs text-cyanCore hover:bg-cyan-500 hover:text-white transition shadow-sm font-semibold"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Links List */}
            <div className="space-y-2.5 text-sm">
              <Link
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHover()}
                className="flex items-center justify-between rounded-2xl border border-cyan-500/15 bg-[#0C132C] p-3 text-slate-300 hover:border-cyan-500/50 hover:text-white transition"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-cyanCore" />
                  <span>github.com/hammad986</span>
                </div>
                <span className="text-xs text-slate-400">View Code</span>
              </Link>

              <Link
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHover()}
                className="flex items-center justify-between rounded-2xl border border-cyan-500/15 bg-[#0C132C] p-3 text-slate-300 hover:border-cyan-500/50 hover:text-white transition"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-cyanCore" />
                  <span>linkedin.com/in/muhammed-hammad</span>
                </div>
                <span className="text-xs text-slate-400">Connect</span>
              </Link>

              <Link
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHover()}
                className="flex items-center justify-between rounded-2xl border border-cyan-500/15 bg-[#0C132C] p-3 text-slate-300 hover:border-cyan-500/50 hover:text-white transition"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 text-cyanCore" />
                  <span>@mud_.hammad</span>
                </div>
                <span className="text-xs text-slate-400">Follow</span>
              </Link>

              <div className="flex items-center justify-between rounded-2xl border border-cyan-500/15 bg-[#0C132C] p-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyanCore" />
                  <span>{socials.phone}</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Direct</span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

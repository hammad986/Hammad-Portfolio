"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  ShieldCheck
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { certificatesList, socials } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-32 pb-12"
    >
      {/* 3D WebGL Canvas (safely placed on the far right) */}


      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Left Column: Profile Card */}
        <div className="relative order-2 lg:order-1 mx-auto w-full max-w-[240px] sm:max-w-sm">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080E21] p-3.5 shadow-[0_20px_60px_rgba(5,8,20,0.8)]">
            {/* Availability Beacon */}
            <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#050814]/90 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px]">Open to work</span>
            </div>

            {/* Profile Image Viewport */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#0C132C]">
              <Image
                src="/assets/my_pic.webp"
                alt="Muhammed Hammad"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 384px"
              />
            </div>

            {/* Telemetry Footer */}
            <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-[#0C132C] px-3.5 py-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyanCore" />
                <span className="font-mono text-xs text-slate-200">
                  AI/ML Engineer
                </span>
              </div>
              <span className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-300">
                {certificatesList.length} credentials
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="order-1 lg:order-2 min-w-0 space-y-5">
          {/* Eyebrow Label */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span className="break-words font-mono text-[11px] sm:text-xs tracking-wide">AI Engineering & Full-Stack Systems</span>
          </div>

          {/* Name and Role */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Muhammed <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyanCore bg-clip-text text-transparent">Hammad</span>
            </h1>
            <p className="mt-2.5 text-lg font-semibold text-slate-200 sm:text-2xl lg:text-3xl">
              AI/ML Engineer & Full-Stack Developer
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 font-mono text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyanCore"></span>
                @hammad986
              </span>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline">•</span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">B.Tech CSBS (2027)</span>
            </div>
          </div>

          {/* Value Proposition */}
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
            B.Tech Computer Science & Business Systems student (graduating 2027). Building production-grade generative AI platforms, intelligent document extraction pipelines, video question answering models, and scalable full-stack web applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 pt-2">
            <Link
              href="/projects"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "primary",
                size: "lg",
                className: "w-full sm:w-auto justify-center rounded-xl font-semibold shadow-[0_0_20px_rgba(0,242,254,0.2)]"
              })}
            >
              View projects
            </Link>

            <Link
              href="/assets/Muhammed_Hammad_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "w-full sm:w-auto justify-center rounded-xl font-semibold border-white/15 bg-white/[0.04] hover:border-cyan-500/40"
              })}
            >
              <Download className="mr-2 h-4 w-4 text-cyanCore" />
              Download resume
            </Link>

            <Link
              href="/contact/"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "w-full sm:w-auto justify-center rounded-xl font-semibold border-white/15 bg-white/[0.04] hover:border-emerald-500/40"
              })}
            >
              <Award className="mr-2 h-4 w-4 text-emeraldCore" />
              Contact me
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-400">
            Selected work: <Link className="text-cyanCore underline hover:text-cyan-300 transition" href="/projects/advanced-video-qa/">Video QA</Link> · <Link className="text-cyanCore underline hover:text-cyan-300 transition" href="/projects/smart-doc-ai/">Smart Doc AI</Link> · <Link className="text-cyanCore underline hover:text-cyan-300 transition" href="/projects/dealflow-crm/">DealFlow CRM</Link>
          </p>

          {/* Social Handles */}
          <div className="flex items-center gap-3 pt-2">
            {[
              { href: socials.github, label: "GitHub", icon: Github },
              { href: socials.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: socials.instagram, label: "Instagram", icon: Instagram },
              { href: socials.email, label: "Email", icon: Mail }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                onClick={() => sounds.playHover()}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-[#0C132C] text-slate-300 transition hover:border-white/25 hover:text-white"
                aria-label={item.label}
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

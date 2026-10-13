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

const CommandScene = dynamic(
  () => import("@/components/command-scene").then((mod) => mod.CommandScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-32 pb-16"
    >
      {/* 3D WebGL Canvas (safely placed on the far right) */}
      <CommandScene />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Left Column: Profile Card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080E21] p-3.5 shadow-[0_20px_60px_rgba(5,8,20,0.8)]">
            {/* Availability Beacon */}
            <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-[#050814]/90 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
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
        <div className="space-y-6">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300">
            <span>Full-Stack AI Engineering and Applied Systems</span>
          </div>

          {/* Name and Role */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Muhammed Hammad
            </h1>
            <p className="mt-3 text-xl font-semibold text-slate-200 sm:text-2xl lg:text-3xl">
              AI/ML Engineer and Full-Stack Developer
            </p>
            <p className="mt-2 font-mono text-sm text-slate-500">
              hammad986
            </p>
          </div>

          {/* Value Proposition */}
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I build production generative AI platforms, retrieval and agent
            systems, and full-stack web applications. Every project ships with a
            live demo, source code, and verified results.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "primary",
                size: "lg",
                className: "rounded-lg"
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
                className: "rounded-lg"
              })}
            >
              <Download className="mr-2 h-4 w-4 text-cyanCore" />
              Download resume
            </Link>

            <Link
              href="/certifications"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "rounded-lg"
              })}
            >
              <Award className="mr-2 h-4 w-4 text-emeraldCore" />
              {certificatesList.length} credentials
            </Link>
          </div>

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

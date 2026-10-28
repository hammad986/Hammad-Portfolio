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
        <div className="order-1 lg:order-2 min-w-0 space-y-5">
          {/* Eyebrow Label */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300">
            <span className="break-words">AI Engineering and Full-Stack Development</span>
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
            B.Tech CSBS student, graduating in 2027. I build Python, generative AI and full-stack applications, from video question answering to document extraction.
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
              href="/contact/"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "rounded-lg"
              })}
            >
              <Award className="mr-2 h-4 w-4 text-emeraldCore" />
              Contact me
            </Link>
          </div>

          <p className="text-sm text-slate-300">Selected work: <Link className="text-cyanCore underline" href="/projects/advanced-video-qa/">Video QA</Link> · <Link className="text-cyanCore underline" href="/projects/smart-doc-ai/">Smart Doc AI</Link> · <Link className="text-cyanCore underline" href="/projects/dealflow-crm/">DealFlow CRM</Link></p>

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

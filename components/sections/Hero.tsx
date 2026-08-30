"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Bot,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

const CommandScene = dynamic(
  () => import("@/components/command-scene").then((mod) => mod.CommandScene),
  { ssr: false }
);

const titles = [
  "Full-Stack AI Developer",
  "Generative AI & Agentic Systems Builder",
  "AI Product Engineer & SaaS Creator",
  "Multimodal & Computer Vision Specialist"
];

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-32 pb-16"
    >
      {/* 3D WebGL Canvas (Safely placed on far right) */}
      <CommandScene />

      {/* Cyber Ambient Volumetric Lighting */}
      <div className="absolute top-1/4 -left-20 h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-1/3 h-[24rem] w-[24rem] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Left Column: Solid Carbon Developer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Subtle Ambient Backlight Glow */}
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-blue-600/25 to-emerald-500/20 blur-xl opacity-70 animate-pulse-slow" />

          {/* Main Solid Carbon Frame */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-[#080E21] p-3.5 shadow-[0_25px_80px_rgba(5,8,20,0.9),0_0_35px_rgba(0,242,254,0.15)] transition-all duration-300 hover:border-cyan-500/45">
            {/* Live Availability Beacon */}
            <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-[#050814]/90 px-3 py-1 text-xs font-semibold text-emerald-400 shadow-xl backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px]">Available for Hire</span>
            </div>

            {/* Profile Image Viewport */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0C132C]">
              <Image
                src="/assets/my_pic.webp"
                alt="Muhammed Hammad"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E21] via-transparent to-transparent opacity-60" />
            </div>

            {/* Bottom Cybernetic Telemetry Footer */}
            <div className="mt-3 flex items-center justify-between rounded-xl border border-cyan-500/20 bg-[#0C132C] px-3.5 py-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyanCore" />
                <span className="text-xs font-mono text-slate-200 font-medium">
                  Verified AI Engineer
                </span>
              </div>
              <span className="rounded-md bg-cyan-500/15 px-2 py-0.5 text-[10px] font-mono text-cyanCore border border-cyan-500/30">
                37+ Credentials
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 5-Second Scan High-Impact Typography & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-200 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-cyanCore animate-spin-slow" />
            <span>Full-Stack AI Engineering & Applied Systems</span>
          </div>

          {/* Name & Animated Dynamic Role */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Muhammed Hammad
            </h1>

            {/* Dynamic Rotating Role Switcher */}
            <div className="mt-3 h-10 sm:h-12 overflow-hidden relative">
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-cyan whitespace-nowrap"
                >
                  {titles[currentTitleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* 1-Line Clean Value Proposition */}
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
            Building production generative AI platforms, intelligent SaaS systems, and autonomous agent workflows with real-world impact.
          </p>

          {/* High-Impact Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "primary",
                size: "lg",
                className: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(0,242,254,0.35)] rounded-xl"
              })}
            >
              <Rocket className="mr-2 h-4 w-4" />
              Explore 24+ Builds
            </Link>

            <Link
              href="/assets/Muhammed_Hammad_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "border border-cyan-500/30 bg-[#0C132C] text-white hover:border-cyan-500/60 hover:bg-cyan-500/15 rounded-xl shadow-sm"
              })}
            >
              <Download className="mr-2 h-4 w-4 text-cyanCore" />
              Download Resume
            </Link>

            <Link
              href="/certifications"
              onClick={() => sounds.playClick()}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "border border-white/10 bg-[#080E21] text-slate-300 hover:border-white/25 hover:text-white rounded-xl shadow-sm"
              })}
            >
              <Award className="mr-2 h-4 w-4 text-emeraldCore" />
              37+ Credentials
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
                className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-500/20 bg-[#0C132C] text-slate-300 hover:border-cyan-500 hover:bg-cyan-500/20 hover:text-white transition shadow-sm"
                aria-label={item.label}
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

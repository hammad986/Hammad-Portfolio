"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { githubStats, socials } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

export function GithubOverview() {
  return (
    <section className="px-4 sm:px-6 py-12 z-10 relative">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.7),0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-bluecore/40 bg-bluecore/15 px-3.5 py-1 text-xs font-semibold text-blue-200 shadow-sm">
              <Github className="h-3.5 w-3.5 text-cyanCore" />
              <span>Engineering Telemetry</span>
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Product-Focused GitHub Workspace
            </h2>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
              Active open-source repositories covering autonomous AI agents, document intelligence models, computer vision utilities, and full-stack SaaS.
            </p>
          </div>

          <Link
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className={buttonVariants({
              variant: "primary",
              size: "md",
              className: "shrink-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:from-blue-600 hover:to-indigo-700 shadow-[0_0_20px_rgba(59,130,246,0.4)] rounded-xl"
            })}
          >
            <Github className="mr-2 h-4 w-4" />
            Explore GitHub Profile
          </Link>
        </div>

        {/* 3 Metric Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => sounds.playHover()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-bluecore/40 hover:bg-bluecore/[0.08] hover:-translate-y-1"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-cyanCore">
                {stat.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300 font-normal">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

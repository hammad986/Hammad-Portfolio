"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { sounds } from "@/components/sound-effects";

export function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 py-24 z-10 relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Industry Trajectory"
          title="Engineering Internships & Real Experience"
          body="A proven track record of shipping production code, Python automation pipelines, data extraction algorithms, and modern full-stack web applications."
        />

        {/* Chronological Cyber Node Timeline */}
        <div className="relative mt-12 space-y-6 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-600 before:to-emerald-500 sm:before:left-1/2">
          {experience.map((item, index) => {
            const hasCert = Boolean(item.certId);
            return (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={cn(
                  "relative grid gap-4 sm:grid-cols-2",
                  index % 2 === 1 ? "sm:text-right" : ""
                )}
              >
                <div
                  onMouseEnter={() => sounds.playHover()}
                  className={cn(
                    "group relative rounded-3xl border border-cyan-500/20 bg-[#080E21] p-6 shadow-[0_20px_60px_rgba(5,8,20,0.8)] transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#0C132C] hover:shadow-[0_20px_60px_rgba(0,242,254,0.15)] hover:-translate-y-1",
                    index % 2 === 1 ? "sm:col-start-1" : "sm:col-start-2"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center gap-2 text-xs font-semibold text-cyan-200",
                      index % 2 === 1 ? "sm:justify-end" : ""
                    )}
                  >
                    <span className="flex items-center gap-1.5 font-bold text-cyanCore">
                      <Briefcase className="h-3.5 w-3.5" />
                      {item.company}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="flex items-center gap-1 font-mono text-slate-400">
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-white tracking-tight group-hover:text-cyanCore transition">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                    {item.detail}
                  </p>

                  <div
                    className={cn(
                      "mt-4 flex flex-wrap gap-1.5",
                      index % 2 === 1 ? "sm:justify-end" : ""
                    )}
                  >
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-cyan-500/15 bg-[#0C132C] px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {hasCert && (
                    <div
                      className={cn(
                        "mt-4 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold pt-3 border-t border-white/10",
                        index % 2 === 1 ? "sm:justify-end" : ""
                      )}
                    >
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Verified Completion in Credentials Vault</span>
                    </div>
                  )}
                </div>

                {/* Timeline Radiant Node */}
                <span className="absolute left-4 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-cyanCore bg-[#050814] shadow-[0_0_15px_rgba(0,242,254,1)] sm:left-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

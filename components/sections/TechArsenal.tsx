"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { TechSphere3D } from "@/components/tech-sphere-3d";
import { sounds } from "@/components/sound-effects";

export function TechArsenal() {
  return (
    <section id="tech-arsenal" className="px-4 sm:px-6 py-24 z-10 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Architectural Arsenal"
          title="Technical Stack & AI Ecosystem"
          body="Technologies, frameworks, mathematical foundations, and AI toolchains utilized to engineer scalable intelligent applications."
        />

        {/* 3D Tech Sphere & Core Arsenal Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center">
          {/* Left Column: Interactive 3D Tech Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <TechSphere3D />
          </motion.div>

          {/* Right Column: Categorized Skill Matrix */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onMouseEnter={() => sounds.playHover()}
                className="group rounded-3xl border border-cyan-500/20 bg-[#080E21] p-5 shadow-[0_15px_40px_rgba(5,8,20,0.8)] transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#0C132C] hover:shadow-[0_20px_50px_rgba(0,242,254,0.15)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyanCore shadow-sm">
                    <group.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyanCore transition">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-cyan-500/15 bg-[#0C132C] px-2.5 py-1 text-xs text-slate-300 transition hover:border-cyan-500/50 hover:bg-cyan-500/15 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

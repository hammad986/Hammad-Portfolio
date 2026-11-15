"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

export function Metrics() {
  return (
    <section className="relative -mt-6 sm:-mt-10 px-3 sm:px-6 z-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 sm:gap-4 rounded-2xl border border-cyan-500/20 bg-[#080E21] p-2.5 sm:p-5 lg:grid-cols-4 shadow-[0_20px_60px_rgba(5,8,20,0.8)]">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            onMouseEnter={() => sounds.playHover()}
            className="group relative overflow-hidden rounded-xl border border-cyan-500/15 bg-[#0C132C] p-3 sm:p-4 text-center transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0E1736]"
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <metric.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyanCore shrink-0" />
              <p className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                {metric.value}
              </p>
            </div>
            <p className="mt-1 text-[11px] sm:text-xs font-medium text-slate-400 group-hover:text-slate-200 transition">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

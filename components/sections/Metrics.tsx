"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

export function Metrics() {
  return (
    <section className="relative -mt-6 sm:-mt-10 px-4 sm:px-6 z-20">
      <div className="mx-auto grid max-w-7xl gap-3.5 rounded-2xl border border-white/10 bg-[#080E21] p-3.5 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            onMouseEnter={() => sounds.playHover()}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0C132C] p-4 text-center transition-colors duration-300 hover:border-white/25"
          >
            <div className="flex items-center justify-center gap-2">
              <metric.icon className="h-5 w-5 text-cyanCore" />
              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {metric.value}
              </p>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-400 group-hover:text-slate-200 transition">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

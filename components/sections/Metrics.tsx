"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

export function Metrics() {
  return (
    <section className="relative -mt-6 sm:-mt-10 px-4 sm:px-6 z-20">
      <div className="mx-auto grid max-w-7xl gap-3.5 rounded-3xl border border-cyan-500/25 bg-[#080E21] p-3.5 sm:p-5 shadow-[0_20px_70px_rgba(5,8,20,0.9),0_0_30px_rgba(0,242,254,0.1)] sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            onMouseEnter={() => sounds.playHover()}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/15 bg-[#0C132C] p-4 text-center transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/[0.08] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)]"
          >
            <div className="flex items-center justify-center gap-2">
              <metric.icon className="h-5 w-5 text-cyanCore group-hover:scale-110 transition-transform" />
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-cyan-200 transition">
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

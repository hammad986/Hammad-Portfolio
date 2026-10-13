"use client";

import { useRef, useState } from "react";
import { Pause, Play, Square } from "lucide-react";
import {
  GrokBot,
  type AnimationName,
  type AvatarHandle
} from "@/components/grok-bot";
import { SectionHeading } from "./SectionHeading";

const animations: { id: AnimationName; label: string }[] = [
  { id: "idle", label: "Idle" },
  { id: "listening", label: "Listening" },
  { id: "thinking", label: "Thinking" },
  { id: "working", label: "Working" },
  { id: "searching", label: "Searching" },
  { id: "curious", label: "Curious" },
  { id: "happy", label: "Happy" },
  { id: "excited", label: "Excited" },
  { id: "surprised", label: "Surprised" },
  { id: "celebrate", label: "Celebrate" }
];

export function GrokBotShowcase() {
  const [animation, setAnimation] = useState<AnimationName>("idle");
  const [playing, setPlaying] = useState(true);
  const avatarRef = useRef<AvatarHandle>(null);

  return (
    <section id="grok-bot" className="px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interactive Demo"
          title="Grok Bot procedural avatar engine"
          body="A dependency-free SVG avatar engine that renders facial expression and blink animation in the browser from a compact JSON export. The React component and the reusable vanilla JavaScript module share the same runtime."
        />

        <div className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          {/* Live preview */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#080E21] p-8 sm:min-h-[440px]">
            <GrokBot
              ref={avatarRef}
              animation={animation}
              playing={playing}
              size={320}
            />
            <span className="absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
              Live SVG preview
            </span>
            <span className="absolute right-5 top-4 font-mono text-[11px] text-cyanCore">
              {playing ? "Playing" : "Paused"}
            </span>
          </div>

          {/* Controls */}
          <div className="rounded-2xl border border-white/10 bg-[#080E21] p-6">
            <h3 className="text-sm font-semibold text-white">Animations</h3>
            <p className="mt-1 text-xs text-slate-400">
              Select an exported expression set to play it.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {animations.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setAnimation(item.id);
                    setPlaying(true);
                    avatarRef.current?.play(item.id);
                  }}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                    animation === item.id
                      ? "border-cyan-500/60 bg-cyan-500/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="text-sm font-semibold text-white">Playback</h3>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(true);
                    avatarRef.current?.play(animation);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-white/25 hover:text-white"
                >
                  <Play className="h-3.5 w-3.5" />
                  Play
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    avatarRef.current?.pause();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-white/25 hover:text-white"
                >
                  <Pause className="h-3.5 w-3.5" />
                  Pause
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    avatarRef.current?.stop();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-white/25 hover:text-white"
                >
                  <Square className="h-3.5 w-3.5" />
                  Stop
                </button>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="text-sm font-semibold text-white">JavaScript API</h3>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-[#05070f] p-3 font-mono text-[11px] leading-relaxed text-slate-300">
                {`const avatar = createAvatar("#avatar", {\n  animation: "idle",\n  size: 320\n})\n\navatar.play("thinking")\navatar.pause()\navatar.stop()`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

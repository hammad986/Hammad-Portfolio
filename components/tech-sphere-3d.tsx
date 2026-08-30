"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Terminal } from "lucide-react";
import { sounds } from "@/components/sound-effects";

interface TechItem {
  name: string;
  category: string;
  color: string;
  x: number;
  y: number;
  z: number;
}

const techSkills = [
  { name: "Generative AI", category: "AI/ML", color: "#00F2FE" },
  { name: "Python 3", category: "Language", color: "#1E60FF" },
  { name: "LLM Agents", category: "AI/ML", color: "#00F5A0" },
  { name: "RAG Systems", category: "AI/ML", color: "#00F2FE" },
  { name: "Next.js 15", category: "Frontend", color: "#FFFFFF" },
  { name: "TypeScript", category: "Language", color: "#38BDF8" },
  { name: "OpenCV", category: "Vision", color: "#00F5A0" },
  { name: "Three.js / WebGL", category: "3D", color: "#00F2FE" },
  { name: "Whisper AI", category: "Audio/ML", color: "#F59E0B" },
  { name: "LangChain", category: "AI/ML", color: "#F59E0B" },
  { name: "AWS SageMaker", category: "Cloud", color: "#FB923C" },
  { name: "Oracle Cloud OCI", category: "Cloud", color: "#F87171" },
  { name: "Tailwind CSS", category: "Frontend", color: "#38BDF8" },
  { name: "Scikit-Learn", category: "Data", color: "#F59E0B" },
  { name: "NumPy & Pandas", category: "Data", color: "#60A5FA" },
  { name: "Ollama / Local LLM", category: "AI/ML", color: "#00F2FE" },
  { name: "PyQt Desktop", category: "Desktop", color: "#00F5A0" },
  { name: "Vector Search", category: "AI/ML", color: "#38BDF8" },
  { name: "Docker / CI/CD", category: "DevOps", color: "#00F2FE" },
  { name: "SQL & MySQL", category: "Backend", color: "#60A5FA" },
  { name: "REST APIs", category: "Backend", color: "#00F5A0" },
  { name: "Gemini 2.0", category: "AI/ML", color: "#38BDF8" },
  { name: "Claude 3.5", category: "AI/ML", color: "#F59E0B" },
  { name: "PyTorch", category: "AI/ML", color: "#FB923C" }
];

export function TechSphere3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TechItem[]>([]);
  const [activeItem, setActiveItem] = useState<TechItem | null>(null);
  const rotationRef = useRef({ rx: 0.002, ry: 0.003 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const radius = 165;
    const count = techSkills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden spiral angle

    const initialItems: TechItem[] = techSkills.map((tech, i) => {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...tech,
        x: x * radius,
        y: y * radius,
        z: z * radius
      };
    });

    setItems(initialItems);
  }, []);

  useEffect(() => {
    let animFrame: number;

    const animate = () => {
      setItems((prevItems) => {
        const { rx, ry } = rotationRef.current;
        const cosX = Math.cos(rx);
        const sinX = Math.sin(rx);
        const cosY = Math.cos(ry);
        const sinY = Math.sin(ry);

        return prevItems.map((item) => {
          // Rotate around Y axis
          let x1 = item.x * cosY - item.z * sinY;
          let z1 = item.z * cosY + item.x * sinY;

          // Rotate around X axis
          let y2 = item.y * cosX - z1 * sinX;
          let z2 = z1 * cosX + item.y * sinX;

          return {
            ...item,
            x: x1,
            y: y2,
            z: z2
          };
        });
      });

      // Gradually damp user drag velocity back to ambient rotation
      if (!isDraggingRef.current) {
        rotationRef.current.rx += (0.0015 - rotationRef.current.rx) * 0.05;
        rotationRef.current.ry += (0.0025 - rotationRef.current.ry) * 0.05;
      }

      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    rotationRef.current.ry = dx * 0.004;
    rotationRef.current.rx = -dy * 0.004;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    const dx = e.touches[0].clientX - lastMousePosRef.current.x;
    const dy = e.touches[0].clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    rotationRef.current.ry = dx * 0.005;
    rotationRef.current.rx = -dy * 0.005;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080E21] p-6 shadow-[0_20px_60px_rgba(5,8,20,0.8)]">
      <div className="flex w-full items-center justify-between border-b border-cyan-500/15 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-cyanCore animate-spin-slow" />
          <span className="text-xs font-bold tracking-wider text-white uppercase">
            3D Holographic Tech Sphere
          </span>
        </div>
        <span className="text-xs font-mono text-cyanCore">Click & Drag to Rotate</span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative my-6 h-[400px] w-full max-w-[400px] cursor-grab active:cursor-grabbing select-none"
      >
        {/* Soft Ambient Beacon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl pointer-events-none" />

        {/* Orbiting 3D Nodes */}
        {items.map((item) => {
          const depth = (item.z + 165) / 330; // 0 (back) to 1 (front)
          const scale = 0.75 + depth * 0.45;
          const opacity = 0.35 + depth * 0.65;
          const zIndex = Math.round(depth * 100);

          return (
            <div
              key={item.name}
              style={{
                transform: `translate3d(${item.x + 200}px, ${item.y + 200}px, 0px) translate(-50%, -50%) scale(${scale})`,
                opacity,
                zIndex
              }}
              onMouseEnter={() => {
                setActiveItem(item);
                sounds.playHover();
              }}
              className="absolute left-0 top-0 transition-transform duration-75"
            >
              <button
                className="group flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-[#080E21]/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-xl transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/25 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,242,254,0.5)]"
                style={{
                  boxShadow: depth > 0.7 ? `0 0 15px ${item.color}35` : undefined
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-white group-hover:text-cyan-100 whitespace-nowrap">
                  {item.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Active Selection Telemetry Banner */}
      <div className="w-full rounded-2xl border border-cyan-500/15 bg-[#0C132C] p-3 text-center transition-all duration-300">
        {activeItem ? (
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-bold text-white">{activeItem.name}</span>
            <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 font-mono text-cyanCore border border-cyan-500/40 font-semibold">
              {activeItem.category}
            </span>
          </div>
        ) : (
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-cyanCore" />
            Hover over any orbiting node to inspect proficiency
          </p>
        )}
      </div>
    </div>
  );
}

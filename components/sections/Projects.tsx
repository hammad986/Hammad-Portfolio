"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Download,
  Info,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { sounds } from "@/components/sound-effects";
import { ProjectModal } from "@/components/project-modal";

const categories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Builds" },
  { id: "ai", label: "AI & GenAI" },
  { id: "saas", label: "Web & SaaS" },
  { id: "desktop", label: "Desktop (.exe)" },
  { id: "vision", label: "Computer Vision" }
];

interface ProjectsProps {
  limit?: number;
  showFilters?: boolean;
  showViewAllButton?: boolean;
}

export function Projects({
  limit,
  showFilters = true,
  showViewAllButton = false
}: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [previewIndices, setPreviewIndices] = useState<Record<string, number>>({});

  const filteredProjects = (
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)
  ).slice(0, limit ?? projects.length);

  const handleThumbnailClick = (projectId: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    setPreviewIndices((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section id="projects" className="px-3 sm:px-6 py-16 sm:py-24 z-10 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Production Work & Case Studies"
          title="Engineered systems with real quantifiable impact."
          body="Each project represents a production-grade application engineered to solve specific real-world problems with verified working demos, source code, and measurable performance metrics."
        />

        {/* Category Filters (Only shown when showFilters is true) */}
        {showFilters && (
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`rounded-xl px-3 sm:px-4 py-1.5 text-xs font-semibold transition duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                    : "border border-cyan-500/20 bg-[#0C132C] text-slate-300 hover:border-cyan-500/50 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const currentImageIndex = previewIndices[project.id] ?? 0;
              const activeImage = project.gallery?.[currentImageIndex] ?? project.image;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => sounds.playHover()}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080E21] shadow-[0_20px_60px_rgba(5,8,20,0.8)] transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(0,242,254,0.18)] hover:-translate-y-1"
                >
                  <div>
                    {/* macOS / Browser Chrome Header Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-cyan-500/15 bg-[#050814]">
                      {/* Window Controls */}
                      <div className="absolute left-3 top-2.5 sm:left-3.5 sm:top-3 z-10 flex items-center gap-1.5 rounded-full bg-[#050814]/80 px-2 py-1 backdrop-blur-md border border-white/10">
                        <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                        <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                        <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                      </div>

                      {/* Domain Badge */}
                      <div className="absolute right-3 top-2.5 sm:right-3.5 sm:top-3 z-10 rounded-lg border border-cyan-500/30 bg-[#080E21]/90 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono text-cyanCore backdrop-blur-md shadow-sm">
                        {project.badge || project.type}
                      </div>

                      {/* Main Image Viewport */}
                      <Image
                        src={activeImage}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080E21] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyanCore transition">
                          {project.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                          {project.type}
                        </p>
                      </div>

                      {/* Problem & Solution Mini Case Study */}
                      {project.problem && (
                        <div className="rounded-2xl border border-cyan-500/15 bg-[#0C132C] p-3 space-y-2 text-xs">
                          <div>
                            <span className="text-[10px] font-mono font-bold text-amberCore uppercase flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> Challenge:
                            </span>
                            <p className="text-slate-300 mt-0.5 text-[11px] font-normal leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          {project.impactMetrics && project.impactMetrics.length > 0 && (
                            <div className="pt-2 border-t border-white/5">
                              <span className="text-[10px] font-mono font-bold text-emeraldCore uppercase flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" /> Outcome & Metrics:
                              </span>
                              <p className="text-cyan-200 mt-0.5 text-[11px] font-semibold">
                                ✓ {project.impactMetrics[0]}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {(project.tech || []).slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-cyan-500/15 bg-[#0C132C] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {(project.tech || []).length > 4 && (
                          <span className="rounded-lg border border-cyan-500/15 bg-[#0C132C] px-1.5 py-0.5 text-[10px] sm:text-[11px] font-mono text-cyanCore">
                            +{(project.tech || []).length - 4}
                          </span>
                        )}
                      </div>

                      {/* Multi-Screenshot Gallery Thumbnail Selector */}
                      {project.gallery && project.gallery.length > 1 && (
                        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1">
                          {project.gallery.map((thumb, idx) => (
                            <button
                              key={thumb}
                              onClick={(e) => handleThumbnailClick(project.id, idx, e)}
                              className={`relative h-8 w-12 sm:h-9 sm:w-14 shrink-0 overflow-hidden rounded-lg border transition ${
                                currentImageIndex === idx
                                  ? "border-cyanCore ring-2 ring-cyan-500/50"
                                  : "border-white/10 opacity-60 hover:opacity-100"
                              }`}
                            >
                              <Image
                                src={thumb}
                                alt={`preview-${idx}`}
                                fill
                                className="object-cover object-top"
                                sizes="56px"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-cyan-500/15">
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setActiveProject(project);
                        }}
                        className={buttonVariants({
                          variant: "secondary",
                          size: "sm",
                          className: "flex-1 justify-center rounded-xl border border-cyan-500/30 bg-[#0C132C] text-xs font-semibold text-cyanCore hover:bg-cyan-500/20"
                        })}
                      >
                        <Info className="mr-1.5 h-3.5 w-3.5" />
                        Case Study
                      </button>

                      {project.actions.map((action) => (
                        <Link
                          key={action.href}
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sounds.playClick()}
                          className={buttonVariants({
                            variant: action.type === "live" ? "primary" : "secondary",
                            size: "sm",
                            className: `flex-1 justify-center rounded-xl text-xs font-bold ${
                              action.type === "live"
                                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                                : "border border-white/10 bg-[#0C132C] text-white hover:border-cyan-500/40"
                            }`
                          })}
                        >
                          {action.type === "live" && <ExternalLink className="mr-1.5 h-3.5 w-3.5" />}
                          {action.type === "github" && <Github className="mr-1.5 h-3.5 w-3.5" />}
                          {action.type === "download" && <Download className="mr-1.5 h-3.5 w-3.5" />}
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              onClick={() => sounds.playClick()}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(0,242,254,0.2)] hover:border-cyan-500 hover:bg-cyan-500/30 hover:scale-105 transition duration-300"
            >
              <span>Explore All 24+ Projects & Case Studies</span>
              <ArrowRight className="h-4 w-4 text-cyanCore" />
            </Link>
          </div>
        )}
      </div>

      {/* Deep-Dive Case Study & Architecture Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          projectsList={projects}
          onClose={() => setActiveProject(null)}
          onSelect={(nextProj) => setActiveProject(nextProj)}
        />
      )}
    </section>
  );
}

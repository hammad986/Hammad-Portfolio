"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Search,
  Sparkles,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import {
  certificatesList,
  type CertificateItem,
  type CertificateCategory
} from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { sounds } from "@/components/sound-effects";
import { CertificateModal } from "@/components/certificate-modal";

const certCategories: { id: CertificateCategory; label: string }[] = [
  { id: "All", label: "All" },
  { id: "AI & Machine Learning", label: "AI & Machine Learning" },
  { id: "Data Science & Analytics", label: "Data Science & Analytics" },
  { id: "Cloud & Infrastructure", label: "Cloud & Infrastructure" },
  { id: "Internships & Experience", label: "Internships & Experience" },
  { id: "Development & Programming", label: "Development & Programming" },
  { id: "Professional Programs", label: "Professional Programs" }
];

interface CertificationsProps {
  limit?: number;
  showSearch?: boolean;
  showFilters?: boolean;
  showViewAllButton?: boolean;
}

export function CertificationsAndStack({
  limit,
  showSearch = true,
  showFilters = true,
  showViewAllButton = false
}: CertificationsProps) {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  const filteredCerts = useMemo(() => {
    const list = certificatesList.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.description.toLowerCase().includes(q) ||
        cert.skills.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });

    return limit ? list.slice(0, limit) : list;
  }, [selectedCategory, searchQuery, limit]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: certificatesList.length };
    for (const c of certificatesList) {
      counts[c.category] = (counts[c.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <section id="certifications" className="px-3 sm:px-6 py-16 sm:py-24 z-10 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Credentials & Verified Mastery"
          title="37+ Verified Industry Certifications"
          body="A comprehensive vault of verified credentials across AI/ML engineering, data science, cloud architecture, government accreditations, and industry internships."
        />

        {/* Search & Category Filter Controls */}
        {(showSearch || showFilters) && (
          <div className="mt-8 sm:mt-10 space-y-4">
            {/* Search Bar */}
            {showSearch && (
              <div className="mx-auto max-w-xl relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-cyanCore" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword, skill, or issuer (e.g. 'AWS', 'Deloitte', 'Python', 'Stanford')..."
                  className="w-full rounded-2xl border border-cyan-500/25 bg-[#080E21] pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500 focus:bg-[#0C132C] focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            )}

            {/* Category Tabs */}
            {showFilters && (
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
                {certCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      sounds.playClick();
                      setSelectedCategory(cat.id);
                    }}
                    className={`flex items-center gap-1 sm:gap-1.5 rounded-xl px-3 sm:px-3.5 py-1.5 text-xs font-semibold transition duration-200 ${
                      selectedCategory === cat.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                        : "border border-cyan-500/20 bg-[#0C132C] text-slate-300 hover:border-cyan-500/50 hover:text-white"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                        selectedCategory === cat.id
                          ? "bg-white/20 text-white font-bold"
                          : "bg-cyan-500/10 text-cyanCore font-semibold"
                      }`}
                    >
                      {categoryCounts[cat.id] || 0}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Certificate Cards Grid */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.article
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  sounds.playClick();
                  setActiveCert(cert);
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080E21] p-4 sm:p-5 shadow-[0_20px_60px_rgba(5,8,20,0.8)] transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#0C132C] hover:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(0,242,254,0.15)] hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  {/* Top Bar: Issuer & File Type Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyanCore">
                      {cert.issuer}
                    </span>
                    <span className="rounded-md border border-white/10 bg-[#050814] px-2 py-0.5 text-[10px] font-mono text-slate-400 uppercase font-semibold">
                      {cert.fileType}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-3.5 text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-cyanCore transition">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Competency Skills */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-cyan-500/15 bg-[#0C132C] px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="rounded-md border border-cyan-500/15 bg-[#0C132C] px-1.5 py-0.5 text-[10px] font-mono text-cyanCore">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Verification Trigger Bar */}
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified Authenticity
                  </span>
                  <span className="text-[11px] font-bold text-cyanCore group-hover:translate-x-1 transition-transform">
                    Preview ↗
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredCerts.length === 0 && (
          <div className="mt-12 text-center py-12 rounded-3xl border border-cyan-500/20 bg-[#080E21]">
            <p className="text-sm text-slate-300">
              No certifications matched your search &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 rounded-xl border border-cyan-500/40 bg-cyan-500/20 px-4 py-1.5 text-xs font-semibold text-cyanCore hover:bg-cyan-500/30 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Certifications Button */}
        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Link
              href="/certifications"
              onClick={() => sounds.playClick()}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(0,242,254,0.2)] hover:border-cyan-500 hover:bg-cyan-500/30 hover:scale-105 transition duration-300"
            >
              <span>Explore All 37+ Verified Credentials Vault</span>
              <ArrowRight className="h-4 w-4 text-cyanCore" />
            </Link>
          </div>
        )}
      </div>

      {/* Interactive Full-Screen Certificate Modal */}
      {activeCert && (
        <CertificateModal
          certificate={activeCert}
          certificatesList={certificatesList}
          onClose={() => setActiveCert(null)}
          onSelect={(nextCert) => setActiveCert(nextCert)}
        />
      )}
    </section>
  );
}

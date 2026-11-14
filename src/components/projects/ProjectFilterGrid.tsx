"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Image as ImageIcon,
  Filter,
  ChevronLeft,
  ChevronRight,
  Layers,
  LayoutGrid,
  Play,
  Pause,
  FolderKanban,
  Sparkles,
} from "lucide-react";
import { ProjectDetailModal } from "./ProjectDetailModal";

interface ProjectFilterGridProps {
  projects: Project[];
  categories: string[];
}

export function ProjectFilterGrid({
  projects,
  categories,
}: ProjectFilterGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : activeCategory === "Work" || activeCategory === "Work Projects"
      ? projects.filter(
          (p) =>
            p.category === "Work Projects" ||
            p.category === "Work" ||
            p.projectType === "Work Project" ||
            p.projectType?.toLowerCase().includes("work project") ||
            (Array.isArray(p.category) && (p.category.includes("Work Projects") || p.category.includes("Work")))
        )
      : activeCategory === "Others"
      ? [] // Empty placeholder for now
      : projects.filter((p) => {
          if (Array.isArray(p.category)) {
            return p.category.includes(activeCategory);
          }
          return p.category === activeCategory;
        });

  const checkScrollState = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  const handleManualScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -320 : 320;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Continuous gliding conveyor animation for Showcase mode
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || viewMode !== "showcase" || isPaused) return;

    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 240, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, viewMode, filteredProjects.length]);

  return (
    <div className="space-y-6">
      {/* Category Pills & Controls Header (Refined, Scaled Down) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#EBE8E1]">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71717A] mr-1 hidden sm:inline-flex items-center space-x-1">
            <Filter className="w-3 h-3 text-[#2E6FA0]" />
            <span>Filter:</span>
          </span>
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#18181B] text-white shadow-2xs"
                    : "bg-white text-[#71717A] border border-[#EBE8E1] hover:bg-[#F4F2EC] hover:text-[#18181B]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Right: View Switcher (Showcase Gliding vs Grid) & Navigation Arrows */}
        <div className="flex items-center space-x-2 self-end md:self-center">
          <span className="text-[10.5px] font-mono text-[#71717A] hidden lg:inline-block">
            {filteredProjects.length} Projects
          </span>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#F2F2ED] p-0.5 rounded-lg border border-[#EBE8E1] text-[10px] font-bold">
            <button
              type="button"
              onClick={() => setViewMode("showcase")}
              className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === "showcase"
                  ? "bg-white text-[#2E6FA0] shadow-2xs"
                  : "text-[#71717A] hover:text-[#18181B]"
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Showcase</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white text-[#2E6FA0] shadow-2xs"
                  : "text-[#71717A] hover:text-[#18181B]"
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Grid</span>
            </button>
          </div>

          {/* Showcase Arrow Controls */}
          {viewMode === "showcase" && (
            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={() => handleManualScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous projects"
                className="w-7 h-7 rounded-full bg-white text-[#18181B] border border-[#EBE8E1] shadow-2xs hover:bg-[#F4F2EC] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleManualScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next projects"
                className="w-7 h-7 rounded-full bg-white text-[#18181B] border border-[#EBE8E1] shadow-2xs hover:bg-[#F4F2EC] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* EMPTY STATE (e.g. For "Others" or Empty Categories)                       */}
      {/* ========================================================================= */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-[#E5E0D8] bg-[#F2F2ED]/60 p-10 sm:p-14 text-center space-y-2.5 my-4">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E0D8] flex items-center justify-center mx-auto text-[#71717A] shadow-2xs">
            <FolderKanban className="w-5 h-5 text-[#2E6FA0]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#18181B]">
              {activeCategory === "Others" ? "Coming Soon" : "No Projects Found"}
            </h3>
            <p className="text-xs text-[#71717A] max-w-sm mx-auto">
              {activeCategory === "Others"
                ? "Section ini masih kosong. Detail project akan segera ditambahkan."
                : "Belum ada project yang cocok dengan filter yang dipilih."}
            </p>
          </div>
        </div>
      ) : viewMode === "showcase" ? (
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle top indicator */}
          <div className="flex items-center justify-between pb-1 text-[10px] font-mono text-[#71717A]">
            <span className="inline-flex items-center space-x-1 text-[#2E6FA0]">
              {isPaused ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5 animate-pulse" />}
              <span>{isPaused ? "Paused on hover" : "Continuous moving showcase"}</span>
            </span>
            <span className="hidden sm:inline">Drag or hover to explore</span>
          </div>

          {/* Horizontal Gliding Conveyor */}
          <div
            ref={scrollRef}
            onScroll={checkScrollState}
            className="relative w-full overflow-x-auto overflow-y-visible py-8 sm:py-10 md:py-12 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
          >
            <div className="flex items-center min-w-max space-x-6 sm:space-x-7 px-2 sm:px-4">
              {filteredProjects.map((project, idx) => {
                const hasCoverImage = !!project.coverImage && project.coverImage.trim() !== "";
                const formattedId = project.id < 10 ? `0${project.id}` : `${project.id}`;
                const categoryLabel =
                  typeof project.category === "string" ? project.category : project.category.join(" · ");

                return (
                  <motion.div
                    key={project.slug}
                    animate={{
                      y: isPaused ? 0 : [0, idx % 2 === 0 ? -6 : -4, 0],
                      rotate: isPaused ? 0 : [0, idx % 2 === 0 ? -0.8 : 0.8, 0],
                    }}
                    transition={{
                      duration: 3.5 + (idx % 3) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (idx % 4) * 0.25,
                    }}
                    className="shrink-0"
                  >
                    {/* Folio-style 3D Card with Scaled-Down Typography */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block w-[285px] sm:w-[305px] md:w-[325px] h-[430px] sm:h-[445px] md:h-[465px] bg-[#FAF7F2] rounded-3xl border border-[#E5E0D8] overflow-hidden shadow-[0_8px_0_0_#D5CEC2,0_16px_24px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_14px_0_0_#C5BDAE,0_26px_36px_-6px_rgba(0,0,0,0.18)] hover:-translate-y-2.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer"
                    >
                      {/* Top Half: Visual Cover Asset with Corner Year Badge */}
                      <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-[#EFECE5] border-b border-[#E7E2D8] shrink-0">
                        {hasCoverImage ? (
                          <Image
                            src={project.coverImage!}
                            alt={project.title}
                            fill
                            sizes="320px"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#EFECE5]">
                            <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E0D8] flex items-center justify-center text-[#78716C] shadow-2xs mb-1.5">
                              <ImageIcon className="w-4 h-4" />
                            </div>
                            <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#2E6FA0]">
                              {project.domain}
                            </span>
                          </div>
                        )}

                        {/* Subtle dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

                        {/* Top-Left ID Badge */}
                        <div className="absolute top-3 left-3 z-10 pointer-events-none">
                          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-mono font-bold bg-white/95 text-[#18181B] backdrop-blur-md shadow-2xs">
                            #{formattedId}
                          </span>
                        </div>

                        {/* Bottom-Right Year Badge (Exact match to 2023, 2022 in Folio screenshot) */}
                        {project.year && (
                          <div className="absolute bottom-2 right-3 z-10 pointer-events-none">
                            <span className="text-[11px] font-mono font-bold text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                              {project.year}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Half: Warm Cream Editorial Content */}
                      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-[#FAF7F2] space-y-2.5">
                        <div className="space-y-1.5">
                          {/* Domain / Category Label (Small uppercase tracked font) */}
                          <div className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-[0.16em] font-bold text-[#78716C] truncate">
                            {categoryLabel}
                          </div>

                          {/* Scaled-Down Elegant Serif Title */}
                          <h3 className="font-serif font-bold text-[13.5px] sm:text-[14.5px] text-[#18181B] group-hover:text-[#2E6FA0] transition-colors leading-snug line-clamp-3 min-h-[2.8rem]">
                            {project.title}
                          </h3>

                          {/* Scaled-Down Description */}
                          <p className="text-[11px] sm:text-[11.5px] text-[#57534E] leading-relaxed line-clamp-2">
                            {project.shortDescription || project.overview}
                          </p>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap items-center gap-1 pt-0.5">
                          {project.tools.slice(0, 3).map((tool) => (
                            <span
                              key={tool}
                              className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white text-[#57534E] border border-[#E5E0D8]"
                            >
                              {tool}
                            </span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="text-[9px] font-mono text-[#A8A29E] pl-0.5">
                              +{project.tools.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Bottom Meta Row (Location on Left, VIEW CASE → on Right) */}
                        <div className="pt-2.5 border-t border-[#EAE5DC] flex items-center justify-between gap-2 mt-auto">
                          <span className="text-[10.5px] font-serif italic text-[#78716C] truncate max-w-[55%]">
                            {project.affiliation ? project.affiliation.split("·")[0].trim() : "Jakarta, Indonesia"}
                          </span>

                          <span className="inline-flex items-center space-x-1 text-[10.5px] font-bold uppercase tracking-wider text-[#C2410C] group-hover:text-[#EA580C] group-hover:translate-x-1 transition-all shrink-0">
                            <span>VIEW CASE</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* VIEW 2: FULL GRID VIEW                                                    */
        /* ========================================================================= */
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch pb-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const hasCoverImage = !!project.coverImage && project.coverImage.trim() !== "";
              const formattedId = project.id < 10 ? `0${project.id}` : `${project.id}`;
              const categoryLabel =
                typeof project.category === "string" ? project.category : project.category.join(" · ");

              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25, delay: idx * 0.02 }}
                  key={project.slug}
                  className="group relative"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block h-full bg-[#FAF7F2] rounded-3xl border border-[#E5E0D8] overflow-hidden shadow-[0_8px_0_0_#D5CEC2,0_16px_24px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_14px_0_0_#C5BDAE,0_26px_36px_-6px_rgba(0,0,0,0.18)] hover:-translate-y-2.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer"
                  >
                    {/* Top Half: Visual Cover Asset */}
                    <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-[#EFECE5] border-b border-[#E7E2D8] shrink-0">
                      {hasCoverImage ? (
                        <Image
                          src={project.coverImage!}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#EFECE5]">
                          <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E0D8] flex items-center justify-center text-[#78716C] shadow-2xs mb-1.5">
                            <ImageIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#2E6FA0]">
                            {project.domain}
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className="px-2 py-0.5 rounded-md text-[9.5px] font-mono font-bold bg-white/95 text-[#18181B] backdrop-blur-md shadow-2xs">
                          #{formattedId}
                        </span>
                      </div>

                      {project.year && (
                        <div className="absolute bottom-2 right-3 z-10 pointer-events-none">
                          <span className="text-[11px] font-mono font-bold text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {project.year}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Half: Warm Cream Editorial Content */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-[#FAF7F2] space-y-2.5">
                      <div className="space-y-1.5">
                        <div className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-[0.16em] font-bold text-[#78716C] truncate">
                          {categoryLabel}
                        </div>

                        <h3 className="font-serif font-bold text-[13.5px] sm:text-[14.5px] text-[#18181B] group-hover:text-[#2E6FA0] transition-colors leading-snug line-clamp-3 min-h-[2.8rem]">
                          {project.title}
                        </h3>

                        <p className="text-[11px] sm:text-[11.5px] text-[#57534E] leading-relaxed line-clamp-2">
                          {project.shortDescription || project.overview}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 pt-0.5">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white text-[#57534E] border border-[#E5E0D8]"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="text-[9px] font-mono text-[#A8A29E] pl-0.5">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="pt-2.5 border-t border-[#EAE5DC] flex items-center justify-between gap-2 mt-auto">
                        <span className="text-[10.5px] font-serif italic text-[#78716C] truncate max-w-[55%]">
                          {project.affiliation ? project.affiliation.split("·")[0].trim() : "Jakarta, Indonesia"}
                        </span>

                        <span className="inline-flex items-center space-x-1 text-[10.5px] font-bold uppercase tracking-wider text-[#C2410C] group-hover:text-[#EA580C] group-hover:translate-x-1 transition-all shrink-0">
                          <span>VIEW CASE</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        projects={projects}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#EBE8E1] p-8 space-y-3">
          <p className="text-sm text-[#71717A]">
            No projects cataloged under category &ldquo;{activeCategory}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="px-5 py-2 rounded-lg bg-[#18181B] text-xs font-bold uppercase tracking-wider text-white cursor-pointer"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}

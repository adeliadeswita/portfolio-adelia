"use client";

import React, { useEffect, useRef } from "react";
import { Project } from "@/types";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectDetailTemplate } from "./ProjectDetailTemplate";

interface ProjectDetailModalProps {
  project: Project | null;
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export function ProjectDetailModal({
  project,
  projects,
  isOpen,
  onClose,
  onSelectProject,
}: ProjectDetailModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when active project changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [project?.slug]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen || !project) return;

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
    const next = projects[(currentIndex + 1) % projects.length];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onSelectProject(prev);
      } else if (e.key === "ArrowRight") {
        onSelectProject(next);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, project, projects, onClose, onSelectProject]);

  if (!isOpen || !project) return null;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex !== -1
      ? projects[(currentIndex - 1 + projects.length) % projects.length]
      : projects[0];
  const nextProject =
    currentIndex !== -1 ? projects[(currentIndex + 1) % projects.length] : projects[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F8FAFC] rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Modal Top Bar */}
        <div className="h-14 px-5 sm:px-6 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center space-x-2.5">
            <span className="px-2 py-0.5 rounded-md text-[10.5px] font-bold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
              Project #{project.id}
            </span>
            <span className="text-xs font-semibold text-[#64748B] hidden sm:inline-block">
              {Array.isArray(project.category) ? project.category.join(" · ") : project.category}
            </span>
          </div>

          <div className="flex items-center space-x-1.5">
            {/* Quick Prev / Next in Header */}
            <div className="flex items-center space-x-0.5 mr-1 bg-[#F8FAFC] p-0.5 rounded-lg border border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                title={`Previous: #${prevProject.id} ${prevProject.title}`}
                className="p-1.5 rounded-md text-[#64748B] hover:text-[#0F172A] hover:bg-white transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                title={`Next: #${nextProject.id} ${nextProject.title}`}
                className="p-1.5 rounded-md text-[#64748B] hover:text-[#0F172A] hover:bg-white transition-all cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 px-2.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-all cursor-pointer flex items-center space-x-1"
            >
              <span className="text-xs font-semibold hidden sm:inline">Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Project Body */}
        <div
          ref={scrollContainerRef}
          className="overflow-y-auto flex-1 bg-white"
        >
          <ProjectDetailTemplate
            project={project}
            prevProject={prevProject}
            nextProject={nextProject}
            isModal={true}
            onClose={onClose}
            onSelectProject={onSelectProject}
          />
        </div>
      </div>
    </div>
  );
}

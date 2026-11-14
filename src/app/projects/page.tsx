import { Metadata } from "next";
import { projectsData, projectCategories } from "@/data/projects";
import { ProjectFilterGrid } from "@/components/projects/ProjectFilterGrid";
import { BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Adelia Deswita | BI & Data Analytics Case Studies",
  description:
    "Explore data-driven case studies by Adelia Deswita covering e-commerce live shopping analytics, fintech payment margins, geospatial catchment modeling, and credit risk classification.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-6 md:py-8 space-y-6">
      {/* Header (Refined, Scaled Down Typography) */}
      <div className="space-y-1 pb-2.5 border-b border-[#EBE8E1]">
        <div className="flex items-center space-x-1.5 text-[9.5px] font-bold uppercase tracking-wider text-[#2E6FA0]">
          <BarChart3 className="w-3 h-3" />
          <span>TECHNICAL &amp; INDUSTRY PORTFOLIO</span>
        </div>
        <h1 className="text-lg sm:text-xl font-serif font-bold text-[#18181B] tracking-tight">
          Projects &amp; Case Studies
        </h1>
        <p className="text-xs text-[#71717A]">
          Explore production analytical pipelines, BigQuery data marts, Looker Studio dashboards, ML models, and work projects.
        </p>
      </div>

      {/* Interactive Gliding & Grid Showcase with All Categories (Work Projects, Data Science, BI, Others) */}
      <ProjectFilterGrid projects={projectsData} categories={projectCategories} />
    </div>
  );
}

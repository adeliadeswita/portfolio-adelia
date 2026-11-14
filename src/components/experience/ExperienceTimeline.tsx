"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Experience } from "@/types";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  ShoppingBag,
  Wallet,
  BarChart3,
  Database,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  // All cards collapsed by default so it's clean and not overwhelming
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const companyFilters = [
    { id: "All", label: "All" },
    { id: "blibli-bi", label: "Blibli" },
    { id: "amartha-payment", label: "Amartha Financial" },
    { id: "adira-finance", label: "Adira Finance" },
    { id: "ivosights", label: "Ivosights" },
    { id: "home-credit", label: "Home Credit Indonesia" },
  ];

  const filteredExperiences =
    selectedFilter === "All"
      ? experiences
      : experiences.filter((e) => e.id === selectedFilter);

  const companyLogoMap: Record<string, React.ReactNode> = {
    "blibli-bi": <ShoppingBag className="w-3.5 h-3.5 shrink-0 stroke-[1.75]" />,
    "amartha-payment": <Wallet className="w-3.5 h-3.5 shrink-0 stroke-[1.75]" />,
    "adira-finance": <BarChart3 className="w-3.5 h-3.5 shrink-0 stroke-[1.75]" />,
    "ivosights": <Database className="w-3.5 h-3.5 shrink-0 stroke-[1.75]" />,
    "home-credit": <ShieldCheck className="w-3.5 h-3.5 shrink-0 stroke-[1.75]" />,
  };

  return (
    <div className="space-y-6">
      {/* 1. Quick Company Filter Pills Row (Exact match to screenshot) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EBE8E1]">
        <div className="flex flex-wrap items-center gap-1.5">
          {companyFilters.map((filter) => {
            const isSelected = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#18181B] text-white shadow-2xs"
                    : "bg-white text-[#71717A] border border-[#EBE8E1] hover:bg-[#F4F2EC] hover:text-[#18181B]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <span className="text-[10px] font-mono text-[#71717A] self-end sm:self-auto">
          Showing {filteredExperiences.length} of {experiences.length} Positions
        </span>
      </div>

      {/* 2. Timeline List (Exact match to media_1794551103790_1f608512.jpg) */}
      <div className="relative pl-6 sm:pl-7 space-y-6 sm:space-y-8 before:absolute before:left-[9px] before:top-4 before:bottom-4 before:w-[1.5px] before:bg-[#EBE8E1]">
        {filteredExperiences.map((exp, index) => {
          const isExpanded = expandedMap[exp.id] ?? false;
          const logo = companyLogoMap[exp.id] || <Building2 className="w-3.5 h-3.5 shrink-0 stroke-[1.75]" />;

          return (
            <FadeIn key={exp.id} direction="up" delay={index * 0.05}>
              <div className="relative">
                {/* Timeline Bullet Node */}
                <div className="absolute -left-[29px] sm:-left-[33px] top-6 w-3 h-3 rounded-full border-2 border-[#2E6FA0] bg-white ring-4 ring-[#2E6FA0]/15" />

                {/* Experience Card */}
                <article className="bg-white rounded-2xl border border-[#EBE8E1] p-5 sm:p-6 shadow-2xs hover:border-[#D4D0C8] transition-all space-y-3.5">
                  {/* Top Meta Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    {/* Left: Company Pill, Internship Pill, Division */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
                        <span className="text-[#71717A]">{logo}</span>
                        <span>{exp.company}</span>
                      </div>

                      <span className="px-2 py-0.5 rounded-md text-[9.5px] font-medium bg-[#F2F2ED] border border-[#EBE8E1] text-[#71717A]">
                        {exp.employmentType || "Internship"}
                      </span>

                      <span className="text-[10.5px] text-[#52525B] font-semibold hidden sm:inline-block">
                        {exp.badge}
                      </span>
                    </div>

                    {/* Right: Period & Location */}
                    <div className="sm:text-right flex flex-wrap sm:flex-col items-center sm:items-end gap-2 sm:gap-0.5 text-[10px] sm:text-[10.5px] text-[#71717A] font-mono">
                      <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-[#F2F2ED] border border-[#EBE8E1]">
                        <Calendar className="w-3 h-3 text-[#A1A1AA]" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center space-x-1 text-[10px] text-[#A1A1AA] pt-0.5">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Division on Mobile if hidden above */}
                  <div className="text-[10.5px] text-[#52525B] font-semibold sm:hidden block">
                    {exp.badge}
                  </div>

                  {/* Position Title (Scaled down, elegant) */}
                  <h3 className="text-base sm:text-lg font-bold text-[#18181B] tracking-tight">
                    {exp.position}
                  </h3>

                  {/* Narrative Summary */}
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements Box */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F2F2ED] border border-[#EBE8E1] space-y-2">
                      <div className="text-[9.5px] font-mono uppercase tracking-wider font-bold text-[#71717A] flex items-center space-x-1">
                        <Award className="w-3 h-3 text-[#2E6FA0]" />
                        <span>Key Commercial &amp; Technical Achievements</span>
                      </div>

                      <div className="space-y-1.5">
                        {exp.achievements.map((ach, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2 text-[11px] sm:text-xs text-[#3F3F46] leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expand / Collapse Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wider text-[#2E6FA0] hover:text-[#23567D] transition-colors cursor-pointer"
                    >
                      <span>
                        {isExpanded ? "Hide Detailed Responsibilities" : "Show Detailed Responsibilities"}
                      </span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Detailed Responsibilities List */}
                  {isExpanded && (
                    <div className="pt-2 border-t border-[#F4F2EC] space-y-2 animate-in fade-in duration-200">
                      <div className="text-[9.5px] font-mono uppercase tracking-wider font-bold text-[#71717A]">
                        Scope of Responsibilities &amp; Operations:
                      </div>
                      <div className="space-y-1.5">
                        {exp.responsibilities.map((resp, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-2 text-[11px] sm:text-xs text-[#3F3F46] leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#18181B] shrink-0 mt-1.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Row: Tools on Left, Read Case Study on Right */}
                  <div className="pt-3 border-t border-[#F4F2EC] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[9.5px] font-mono bg-[#F2F2ED] text-[#52525B] border border-[#EBE8E1]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {exp.relatedProjectSlug && (
                      <Link
                        href={`/projects/${exp.relatedProjectSlug}`}
                        className="inline-flex items-center space-x-1 text-[10.5px] font-bold uppercase tracking-wider text-[#18181B] hover:text-[#2E6FA0] transition-colors shrink-0"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}

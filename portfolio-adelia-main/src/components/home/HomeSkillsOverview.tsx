"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  BarChart3,
  Layers,
  Code2,
  Wrench,
} from "lucide-react";
import { skillGroupsData, pythonFrameworksData } from "@/data/skills";
import { getTechLogo } from "@/components/ui/BrandLogos";

export function HomeSkillsOverview() {
  const [selectedTool, setSelectedTool] = useState<{
    name: string;
    description: string;
    group: string;
    projects: string[];
  }>({
    name: "Python",
    description:
      "Full Python data science stack with specialized libraries for exploratory data analysis (EDA), automated geocoding pipelines, customer segmentation, and predictive risk modeling.",
    group: "Programming, BI & Data Warehouse",
    projects: [
      "web-based-geospatial-visualization-pt-xyz",
      "customer-address-geocoding-adira-finance",
      "credit-risk-prediction",
    ],
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming, BI & Data Warehouse": <Database className="w-4 h-4 text-[#2E6FA0]" />,
    "Other Tools": <Wrench className="w-4 h-4 text-[#2E6FA0]" />,
  };

  const renderCard = (
    group: (typeof skillGroupsData)[number],
    groupIdx: number
  ) => {
    return (
      <div
        key={group.group}
        className="bg-white rounded-2xl border border-[#EBE8E1] p-4 sm:p-5 shadow-2xs hover:shadow-sm hover:border-[#D4D0C8] transition-all flex flex-col justify-between space-y-3"
      >
        {/* Category Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#F4F2EC]">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#F2F2ED] flex items-center justify-center border border-[#EBE8E1] shrink-0">
              {categoryIcons[group.group] || (
                <Database className="w-3.5 h-3.5 text-[#2E6FA0]" />
              )}
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-[#18181B] whitespace-normal leading-snug">
              {group.group}
            </h3>
          </div>
          <span className="text-[9.5px] font-mono font-medium text-[#71717A] bg-[#F2F2ED] px-2 py-0.5 rounded-md border border-[#EBE8E1] shrink-0 ml-2">
            {group.skills.length} tools
          </span>
        </div>

        {/* Interactive Floating Tool Bubbles */}
        <div className="relative min-h-[135px] flex items-center justify-center p-3.5 bg-[#F2F2ED]/60 rounded-xl border border-[#F4F2EC] flex-wrap gap-2.5 sm:gap-3">
          {group.skills.map((skill, skillIdx) => {
            const isSelected = selectedTool.name === skill.name;
            const techIcon = getTechLogo(skill.name, "w-5 h-5 shrink-0");

            const motionPresets = [
              { y: [0, -4, 2, -3, 0], x: [0, 2, -1, 1, 0], duration: 4.2 },
              { y: [0, 4, -3, 2, 0], x: [0, -2, 2, -1, 0], duration: 3.8 },
              { y: [0, -3, 3, -4, 0], x: [0, 1, -2, 1, 0], duration: 4.5 },
              { y: [0, 3, -2, 2, 0], x: [0, -1, 1, -2, 0], duration: 4.0 },
            ];
            const preset = motionPresets[(groupIdx * 2 + skillIdx) % motionPresets.length];
            const delay = (skillIdx * 0.2 + groupIdx * 0.1) % 1.2;

            return (
              <div key={skill.name} className="relative group/tool">
                <motion.button
                  type="button"
                  animate={{
                    y: preset.y,
                    x: preset.x,
                  }}
                  transition={{
                    duration: preset.duration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay,
                  }}
                  whileHover={{ scale: 1.15, zIndex: 40 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedTool({
                      name: skill.name,
                      description: skill.applicationSummary,
                      group: group.group,
                      projects: skill.projectsUsed,
                    })
                  }
                  onMouseEnter={() =>
                    setSelectedTool({
                      name: skill.name,
                      description: skill.applicationSummary,
                      group: group.group,
                      projects: skill.projectsUsed,
                    })
                  }
                  aria-label={skill.name}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs border ${
                    isSelected
                      ? "bg-white border-[#18181B] ring-2 ring-[#18181B]/20 shadow-md scale-105 z-20"
                      : "bg-white hover:bg-white border-[#E8E5DD] hover:border-[#D4D0C8] hover:shadow-md"
                  }`}
                >
                  {techIcon ? (
                    <span className="flex items-center justify-center pointer-events-none drop-shadow-2xs">
                      {techIcon}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-bold text-[#18181B]">
                      {skill.name.slice(0, 3)}
                    </span>
                  )}
                </motion.button>

                {/* Hover Tooltip */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#18181B] text-white text-[9px] font-mono font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover/tool:opacity-100 transition-opacity z-50 shadow-md">
                  {skill.name}
                  {skill.name === "Python" && " (Click to view libraries)"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-5">
      {/* 1. Grouped Interactive Categories Grid (2 Balanced & Proportional Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillGroupsData.map((group, idx) => renderCard(group, idx))}
      </div>

      {/* 2. Interactive Tool Explanation & Project Scope Box */}
      {selectedTool && (
        <div className="bg-white rounded-2xl border border-[#EBE8E1] p-4 sm:p-5 shadow-2xs space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center space-x-2">
                <span className="p-1.5 rounded-lg bg-[#F2F2ED] border border-[#EBE8E1]">
                  {getTechLogo(selectedTool.name, "w-4 h-4")}
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2E6FA0]">
                  {selectedTool.name} · {selectedTool.group}
                </span>
              </div>
              <p className="text-xs text-[#52525B] leading-relaxed">
                {selectedTool.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center space-x-3">
              <Link
                href="/projects"
                target="_self"
                className="inline-flex items-center space-x-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#18181B] hover:text-[#2E6FA0] transition-colors px-3.5 py-1.5 rounded-lg bg-[#F2F2ED] border border-[#EBE8E1] hover:bg-white shadow-2xs"
              >
                <span>Explore Projects Using {selectedTool.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* When Python is selected: Show the 8 Data Science Frameworks & Libraries */}
          {selectedTool.name === "Python" && (
            <div className="pt-3 border-t border-[#F4F2EC] space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#71717A]">
                  <Code2 className="w-3.5 h-3.5 text-[#2E6FA0]" />
                  <span>Python Libraries &amp; Frameworks ({pythonFrameworksData.length})</span>
                </div>
                <span className="text-[10px] font-mono text-[#71717A]">
                  Applied in Analytics &middot; Machine Learning &middot; NLP &middot; Geospatial
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {pythonFrameworksData.map((fw) => (
                  <div
                    key={fw.name}
                    className="p-2 rounded-lg bg-[#F2F2ED]/70 border border-[#EBE8E1] hover:bg-white hover:border-[#D4D0C8] transition-all flex items-center space-x-2.5 shadow-2xs group"
                  >
                    <div className="w-7 h-7 rounded-md bg-white border border-[#EBE8E1] flex items-center justify-center shrink-0 shadow-2xs">
                      {getTechLogo(fw.name, "w-4 h-4")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold text-[#18181B] truncate group-hover:text-[#2E6FA0] transition-colors">
                        {fw.name}
                      </div>
                      <div className="text-[9px] text-[#71717A] truncate font-mono">
                        {fw.role.split(",")[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

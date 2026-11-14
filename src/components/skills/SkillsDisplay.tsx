"use client";

import { useState } from "react";
import Link from "next/link";
import { SkillGroup } from "@/types";
import { Database, BarChart3, Code2, Layers, TrendingUp, CheckCircle, ArrowRight, Wrench } from "lucide-react";

interface SkillsDisplayProps {
  skillGroups: SkillGroup[];
}

export function SkillsDisplay({ skillGroups }: SkillsDisplayProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const iconMap: Record<string, React.ReactNode> = {
    Database: <Database className="w-5 h-5 text-[#0F172A]" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-[#0F172A]" />,
    Code2: <Code2 className="w-5 h-5 text-[#0F172A]" />,
    Layers: <Layers className="w-5 h-5 text-[#0F172A]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#0F172A]" />,
    Wrench: <Wrench className="w-5 h-5 text-[#0F172A]" />
  };

  const filteredGroups =
    selectedGroup === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.group === selectedGroup);

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-[#18181B] text-white border-[#18181B]";
      case "Proficient":
        return "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]";
      case "Working Knowledge":
      default:
        return "bg-[#F2F2ED] text-[#71717A] border-[#EBE8E1]";
    }
  };

  return (
    <div className="space-y-10">
      {/* Group Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E2E8F0]">
        <button
          onClick={() => setSelectedGroup("All")}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all ${
            selectedGroup === "All"
              ? "bg-[#18181B] text-white shadow-xs"
              : "bg-[#F2F2ED] text-[#71717A] hover:bg-white hover:text-[#18181B] border border-[#EBE8E1]"
          }`}
        >
          All Domains ({skillGroups.reduce((acc, g) => acc + g.skills.length, 0)})
        </button>

        {skillGroups.map((g) => (
          <button
            key={g.group}
            onClick={() => setSelectedGroup(g.group)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all ${
              selectedGroup === g.group
                ? "bg-[#18181B] text-white shadow-xs"
                : "bg-[#F2F2ED] text-[#71717A] hover:bg-white hover:text-[#18181B] border border-[#EBE8E1]"
            }`}
          >
            {g.group}
          </button>
        ))}
      </div>

      {/* Groups Display */}
      <div className="space-y-12">
        {filteredGroups.map((group) => (
          <section key={group.group} className="space-y-6">
            <div className="flex items-start space-x-3 pb-2 border-b border-[#E2E8F0]/60">
              <div className="p-2.5 rounded-xl bg-[#EBF3F8] shrink-0">
                {iconMap[group.iconName] || <Layers className="w-5 h-5 text-[#0F172A]" />}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  {group.group}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
                  {group.summary}
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-2xl border border-[#EBE8E1] p-6 editorial-shadow hover:shadow-lg hover:border-[#D4D0C8] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-base text-[#18181B]">
                        {skill.name}
                      </h4>
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10.5px] font-semibold border ${getBadgeStyle(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
                      {skill.applicationSummary}
                    </p>
                  </div>

                  {/* Cross-project references */}
                  {skill.projectsUsed.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-[#EBE8E1] space-y-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#71717A] block">
                        Applied in Projects:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.projectsUsed.map((slug) => (
                          <Link
                            key={slug}
                            href={`/projects/${slug}`}
                            className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1] hover:bg-[#EAE6DC] transition-colors"
                          >
                            <span className="capitalize">{slug.replace(/-/g, " ")}</span>
                            <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

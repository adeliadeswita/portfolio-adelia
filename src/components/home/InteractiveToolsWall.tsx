"use client";

import { useState } from "react";
import Link from "next/link";
import { interactiveToolsData, InteractiveTool } from "@/data/tools";
import { ArrowUpRight, Sparkles, CheckCircle2, Layers } from "lucide-react";

export function InteractiveToolsWall() {
  const [activeTool, setActiveTool] = useState<InteractiveTool>(interactiveToolsData[0]);

  return (
    <div className="space-y-8">
      {/* Interactive Tool Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {interactiveToolsData.map((tool) => {
          const isActive = activeTool.id === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool)}
              onMouseEnter={() => setActiveTool(tool)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group focus:outline-none ${
                isActive
                  ? "bg-[#18181B] text-white border-[#18181B] shadow-md -translate-y-1"
                  : "bg-white text-[#18181B] border-[#EBE8E1] hover:border-[#D4D0C8] hover:bg-[#F2F2ED] hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span
                  className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#F2F2ED] text-[#71717A] border border-[#EBE8E1]"
                  }`}
                >
                  {tool.tag}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                )}
              </div>

              <h4 className="font-bold text-base sm:text-lg tracking-tight">
                {tool.name}
              </h4>
              <p
                className={`text-xs mt-1 line-clamp-1 ${
                  isActive ? "text-[#94A3B8]" : "text-[#64748B]"
                }`}
              >
                {tool.category}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Tool Dynamic Inspector Card */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 editorial-shadow transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6E6F2] text-[#23567D]">
                {activeTool.tag}
              </span>
              <span className="text-xs text-[#64748B] font-medium">
                {activeTool.category}
              </span>
            </div>
            <h3 className="font-bold text-2xl sm:text-3xl text-[#0F172A]">
              {activeTool.name}
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {activeTool.shortDesc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5 max-w-sm self-stretch md:self-auto shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Production Value Metric</span>
            </span>
            <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
              {activeTool.highlight}
            </p>
          </div>
        </div>

        {/* Linked Case Studies */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-2">
              Applied in Case Studies:
            </span>
            {activeTool.projects.map((proj) => (
              <Link
                key={proj.slug}
                href={`/projects/${proj.slug}`}
                target="_self"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#EBF3F8] text-[#0F172A] hover:bg-[#D6E6F2] transition-all group"
              >
                <span>{proj.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>

          <Link
            href="/skills"
            target="_self"
            className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#2E6FA0] transition-colors inline-flex items-center space-x-1 shrink-0"
          >
            <span>Full Skills Matrix</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

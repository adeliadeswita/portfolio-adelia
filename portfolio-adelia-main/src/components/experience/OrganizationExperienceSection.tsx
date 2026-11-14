"use client";

import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { organizationsData } from "@/data/organizations";
import { FadeIn } from "@/components/ui/MotionWrapper";

export function OrganizationExperienceSection() {
  // All organizations start with detailed contributions collapsed
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {organizationsData.map((org, idx) => {
          const isExpanded = !!expandedIds[org.id];

          return (
            <FadeIn key={org.id} direction="up" delay={idx * 0.05}>
              <div className="bg-white rounded-3xl border border-[#EBE8E1] p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#D4D0C8] transition-all duration-300 space-y-3.5 h-full flex flex-col justify-between group">
                <div className="space-y-3">
                  {/* Header: Organization, Category Badge, and Period */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2E6FA0]">
                        {org.organization}
                      </span>
                      <div className="inline-flex items-center space-x-1 text-[10.5px] font-semibold text-[#71717A] bg-[#F2F2ED] px-2 py-0.5 rounded-md border border-[#EBE8E1] shrink-0 font-mono">
                        <Calendar className="w-3 h-3 text-[#71717A]" />
                        <span>{org.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors leading-snug">
                        {org.role}
                      </h3>
                    </div>

                    {org.category && (
                      <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
                        {org.category}
                      </span>
                    )}
                  </div>

                  {/* Overview Description (Always Visible) */}
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {org.description}
                  </p>

                  {/* Toggle Button for Key Contributions */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => toggleExpand(org.id)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2E6FA0] hover:text-[#23567D] transition-colors py-1 px-2.5 rounded-lg hover:bg-[#EBF3F8] cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? "Hide Key Contributions"
                          : "View Key Contributions"}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* ONLY Key Contributions & Detailed Scope are Collapsed/Expanded */}
                  {isExpanded && org.responsibilities && org.responsibilities.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-[#F1F5F9] animate-in fade-in duration-200">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">
                        Key Contributions &amp; Operational Scope:
                      </div>
                      <ul className="space-y-1.5">
                        {org.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-xs text-[#64748B] flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6FA0] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Highlights & Skills Footer (Always Visible) */}
                <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
                  {org.highlights && org.highlights.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#2E6FA0]">
                        Highlights &amp; Impact
                      </div>
                      {org.highlights.map((hl, hIdx) => (
                        <p key={hIdx} className="text-xs text-[#64748B] leading-relaxed italic">
                          &bull; {hl}
                        </p>
                      ))}
                    </div>
                  )}

                  {org.skills && org.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {org.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F8FAFC] text-[#1E293B] border border-[#E2E8F0]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}

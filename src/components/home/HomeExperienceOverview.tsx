"use client";

import Link from "next/link";
import { ArrowUpRight, ShoppingBag, CreditCard, Database, MessageSquare, ShieldCheck, Calendar } from "lucide-react";
import { experiencesData } from "@/data/experience";

export function HomeExperienceOverview() {
  const iconsMap: Record<string, React.ReactNode> = {
    "blibli-bi": <ShoppingBag className="w-5 h-5 text-[#0072FF]" />,
    "amartha-payment": <CreditCard className="w-5 h-5 text-[#7C3AED]" />,
    "adira-finance": <Database className="w-5 h-5 text-[#D97706]" />,
    "ivosights": <MessageSquare className="w-5 h-5 text-[#059669]" />,
    "home-credit": <ShieldCheck className="w-5 h-5 text-[#DC2626]" />,
  };

  const badgeBgMap: Record<string, string> = {
    "blibli-bi": "bg-[#EBF5FF] border-[#B5D2E7]",
    "amartha-payment": "bg-[#F3E8FF] border-[#E9D5FF]",
    "adira-finance": "bg-[#FEF3C7] border-[#FDE68A]",
    "ivosights": "bg-[#D1FAE5] border-[#A7F3D0]",
    "home-credit": "bg-[#FEE2E2] border-[#FECACA]",
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {experiencesData.map((exp, idx) => (
          <div
            key={exp.id}
            className={`bg-white rounded-3xl border border-[#EBE8E1] p-6 editorial-shadow hover:shadow-xl hover:border-[#D4D0C8] transition-all duration-300 flex flex-col justify-between group ${
              idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="space-y-3.5">
              {/* Header with Visual Identifier & Period */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 ${
                      badgeBgMap[exp.id] || "bg-[#F8FAFC] border-[#E2E8F0]"
                    }`}
                  >
                    {iconsMap[exp.id] || <Database className="w-5 h-5 text-[#0F172A]" />}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors leading-snug">
                      {exp.company}
                    </h3>
                    <p className="text-xs font-semibold text-[#64748B]">
                      {exp.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Period Badge */}
              <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-[#64748B] bg-[#F8FAFC] px-2.5 py-1 rounded-full w-fit border border-[#E2E8F0]">
                <Calendar className="w-3 h-3 text-[#64748B]" />
                <span>{exp.period}</span>
              </div>

              {/* Short One-Two Line Description */}
              <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                {exp.description}
              </p>
            </div>

            {/* View Details Link */}
            <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#64748B]">
                {exp.tools.slice(0, 2).join(" · ")}
              </span>

              <Link
                href="/experience"
                target="_self"
                className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Link to Full Experience */}
      <div className="flex justify-center pt-2">
        <Link
          href="/experience"
          target="_self"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white border border-[#EBE8E1] text-[#18181B] hover:bg-[#F2F2ED] hover:border-[#D4D0C8] transition-all shadow-xs"
        >
          <span>View Full Experience &amp; Achievements</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Award, ExternalLink, CheckCircle2, Filter } from "lucide-react";
import { certificationsData } from "@/data/certifications";
import { FadeIn } from "@/components/ui/MotionWrapper";

export function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Data Analytics & BI",
    "Databases & Cloud",
    "Programming & Data Science",
    "General Analytics",
  ];

  const filtered =
    selectedCategory === "All"
      ? certificationsData
      : certificationsData.filter((c) => c.category === selectedCategory);

  const issuerBadges: Record<string, string> = {
    Certiport: "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    MongoDB: "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    Coursera: "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    DQLab: "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    MySkill: "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    Udemy: "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    RevoU: "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    "Alibaba Cloud": "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    "Badan Nasional Sertifikasi Profesi (BNSP)": "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
    "ETS / IIEF": "bg-[#F2F2ED] text-[#18181B] border-[#EBE8E1]",
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] mr-1 hidden sm:inline-flex items-center space-x-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#18181B] text-white shadow-2xs"
                  : "bg-white text-[#71717A] border border-[#EBE8E1] hover:bg-[#F2F2ED] hover:text-[#18181B]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((cert, idx) => (
          <FadeIn key={cert.id} direction="up" delay={idx * 0.05}>
            <div className="bg-white rounded-2xl border border-[#EBE8E1] p-6 editorial-shadow hover:shadow-lg hover:border-[#D4D0C8] transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3.5">
                {/* Header with Issuer badge and year */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${
                      issuerBadges[cert.issuer] || "bg-[#F8FAFC] text-[#0F172A] border-[#E2E8F0]"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-medium text-[#64748B]">
                    {cert.year || "Verified"}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-bold text-base text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Category tag */}
                <p className="text-xs text-[#64748B]">
                  {cert.category}
                </p>
              </div>

              {/* Skills chips & Credential Link */}
              <div className="pt-4 mt-4 border-t border-[#E2E8F0] space-y-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {cert.skills?.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-1 flex items-center justify-between">
                  {cert.credentialUrl && cert.credentialUrl.trim() !== "" ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-semibold text-[#18181B] bg-[#F2F2ED] border border-[#EBE8E1] hover:bg-[#EAE6DC] hover:border-[#D4D0C8] transition-all"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#2E6FA0]" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-semibold text-[#64748B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Verified Credential</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

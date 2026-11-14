"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, ShoppingBag, CreditCard, Sparkles } from "lucide-react";

export function CareerSnapshot() {
  const stories = [
    {
      phase: "Cornerstone",
      period: "2020 — 2024",
      title: "Academic Foundation",
      organization: "B.S. in Information Systems",
      description:
        "Graduated with 3.88 GPA. Focused on dimensional data modeling, Kimball star schemas, and spatial analytics using PostGIS and Uber H3.",
      icon: <GraduationCap className="w-5 h-5 text-[#0F172A]" />,
      accentBg: "bg-gradient-to-br from-[#EBF3F8] to-[#D6E6F2]",
      tag: "Academic",
      link: "/experience#academic",
      cta: "Explore Thesis",
      image: "/images/projects/gis-hero.svg",
    },
    {
      phase: "Growth",
      period: "2023",
      title: "Payment Business Analytics",
      organization: "Amartha Microfinance",
      description:
        "Audited 1.2M+ PPOB digital transactions, decomposed payment channel unit costs, and modeled fee elasticity yielding +3.8% net margin lift.",
      icon: <CreditCard className="w-5 h-5 text-[#0F172A]" />,
      accentBg: "bg-gradient-to-br from-[#D6E6F2] to-[#EBF3F8]",
      tag: "Fintech",
      link: "/projects/amartha-payment-business-analytics",
      cta: "View Case Study",
      image: "/images/projects/amartha-hero.svg",
    },
    {
      phase: "Effective",
      period: "2023 — 2024",
      title: "BI Analyst Intern",
      organization: "Blibli (PT Global Digital Niaga)",
      description:
        "Engineered Live Studio BigQuery data marts and automated Looker Studio executive suites, eliminating 14 hours of manual reporting per week.",
      icon: <ShoppingBag className="w-5 h-5 text-[#0F172A]" />,
      accentBg: "bg-gradient-to-br from-[#EBF3F8] to-[#EBF3F8]",
      tag: "E-Commerce",
      link: "/projects/blibli-live-studio-analytics",
      cta: "View Case Study",
      image: "/images/projects/blibli-hero.svg",
    },
    {
      phase: "Impact",
      period: "2024 — Present",
      title: "BI & Data Analyst",
      organization: "Open to Opportunities",
      description:
        "Actively exploring full-time BI & Data Analytics roles. Bringing production-tested data modeling, dashboarding, and commercial acumen.",
      icon: <Sparkles className="w-5 h-5 text-[#0F172A]" />,
      accentBg: "bg-gradient-to-br from-[#D6E6F2] via-[#EBF3F8] to-[#EBF3F8]",
      tag: "Active",
      link: "/contact",
      cta: "Let's Connect",
      image: "/images/profile/adelia-portrait.svg",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 4-Column Editorial Timeline matching "The story so far." */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story) => (
          <article
            key={story.phase}
            className="group bg-white rounded-3xl border border-[#EBE8E1] overflow-hidden editorial-shadow hover:shadow-xl hover:border-[#D4D0C8] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Image Preview Header */}
            <div>
              <div className={`relative aspect-[16/10] w-full overflow-hidden ${story.accentBg} p-2`}>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#0F172A] backdrop-blur-md shadow-xs">
                    {story.tag}
                  </span>
                </div>
              </div>

              {/* Story Narrative Content */}
              <div className="p-6 space-y-3">
                <div className="space-y-0.5">
                  <h4 className="text-lg font-extrabold text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors tracking-tight">
                    {story.phase}
                  </h4>
                  <span className="text-xs text-[#64748B] font-semibold block">
                    {story.period}
                  </span>
                </div>

                <div className="pt-1">
                  <div className="text-xs font-bold text-[#0F172A]">
                    {story.title}
                  </div>
                  <div className="text-[11px] font-medium text-[#2E6FA0]">
                    {story.organization}
                  </div>
                </div>

                <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                  &ldquo;{story.description}&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  href={story.link}
                  target="_self"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors"
                >
                  <span>{story.cta}</span>
                  <div className="w-6 h-6 rounded-full bg-[#EBF3F8] group-hover:bg-[#D6E6F2] flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer Navigation Link */}
      <div className="flex items-center justify-center pt-2">
        <Link
          href="/experience"
          target="_self"
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#2E6FA0] transition-colors px-6 py-3 rounded-full bg-white border border-[#E2E8F0] hover:bg-[#EBF3F8] shadow-xs"
        >
          <span>Explore Detailed Roles &amp; Responsibilities</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

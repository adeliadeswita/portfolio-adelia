"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Layers,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { getTechLogo } from "@/components/ui/BrandLogos";

interface FeaturedProjectConfig {
  project: Project;
  categoryLabel: string;
  yearLabel: string;
  watermark: string;
  mockups: [string, string, string]; // [left, center, right]
}

export function HomeCompactProjects() {
  // 1. Top 3 Featured Work Projects
  const blibliProject =
    projectsData.find((p) => p.slug === "live-studio-performance-dashboard-blibli") ||
    projectsData[0];

  const tiktokProject =
    projectsData.find((p) => p.slug === "tiktok-shop-live-video-performance-dashboard") ||
    projectsData[1];

  const adiraProject =
    projectsData.find((p) => p.slug === "customer-address-geocoding-workflow-adira-finance") ||
    projectsData[2];

  const featuredWorkProjects: FeaturedProjectConfig[] = [
    {
      project: blibliProject,
      categoryLabel: "LIVE COMMERCE · STUDIO ANALYTICS",
      yearLabel: "2026",
      watermark: "Live Studio Suite",
      mockups: [
        "/images/projects/fas-studio/02-client-level-performance.svg",
        "/images/projects/fas-studio/01-overview-livestreaming.svg",
        "/images/projects/fas-studio/04-studio-utilization-summary.svg",
      ],
    },
    {
      project: tiktokProject,
      categoryLabel: "E-COMMERCE · LIVE & VIDEO BI",
      yearLabel: "2026",
      watermark: "TikTok Shop Mart",
      mockups: [
        "/images/projects/tiktok-shop/01-general-overview.svg",
        "/images/projects/tiktok-shop/03-brand-deep-dive.svg",
        "/images/projects/tiktok-shop/07-video-deep-dive.svg",
      ],
    },
    {
      project: adiraProject,
      categoryLabel: "GEOSPATIAL ETL · DATA PIPELINE",
      yearLabel: "2025",
      watermark: "Spatial ETL Pipeline",
      mockups: [
        "/images/projects/adira-geocoding-process.png",
        "/images/projects/geocoding-workflow-cover.svg",
        "/images/projects/adira-geocoding-stacking-tree.png",
      ],
    },
  ];

  // 2. Remaining projects for the auto-scrolling track
  const remainingProjects = projectsData.filter(
    (p) =>
      p.slug !== blibliProject.slug &&
      p.slug !== tiktokProject.slug &&
      p.slug !== adiraProject.slug
  );

  // Soft, harmonious, editorial color palette (uniform luminance, muted pastel tones)
  const deckThemes = [
    {
      bg: "bg-[#FAF7F0]", // Soft Linen Cream
      pill: "bg-[#EFE9DF] text-[#484238] border-[#DFD7CA]",
      accent: "text-[#2E6FA0]",
    },
    {
      bg: "bg-[#F1F4F7]", // Soft Slate Mist
      pill: "bg-[#E3E8EE] text-[#3A4552] border-[#D3DCE6]",
      accent: "text-[#2E6FA0]",
    },
    {
      bg: "bg-[#F0F4F2]", // Soft Muted Sage
      pill: "bg-[#E2EBE5] text-[#384A3E] border-[#D2DFD6]",
      accent: "text-[#059669]",
    },
    {
      bg: "bg-[#F5F1EC]", // Soft Pale Oat
      pill: "bg-[#EAE2D8] text-[#4C4237] border-[#DCD1C4]",
      accent: "text-[#D97706]",
    },
    {
      bg: "bg-[#EFF3F8]", // Soft Powder Blue
      pill: "bg-[#E0E9F4] text-[#34475D] border-[#CFDEED]",
      accent: "text-[#2E6FA0]",
    },
    {
      bg: "bg-[#F4F0F2]", // Soft Dusty Blush
      pill: "bg-[#EAE0E5] text-[#4C3A44] border-[#DDCFD6]",
      accent: "text-[#C026D3]",
    },
    {
      bg: "bg-[#F3F2EE]", // Soft Warm Alabaster
      pill: "bg-[#E7E4DC] text-[#464036] border-[#DAD3C7]",
      accent: "text-[#2E6FA0]",
    },
    {
      bg: "bg-[#EDF2F4]", // Soft Glacier Mist
      pill: "bg-[#DDE6EA] text-[#32434A] border-[#CCD9DF]",
      accent: "text-[#0891B2]",
    },
    {
      bg: "bg-[#F2F4EE]", // Soft Pale Willow
      pill: "bg-[#E3E8DA] text-[#3E4734] border-[#D4DCC8]",
      accent: "text-[#16A34A]",
    },
    {
      bg: "bg-[#F5F2ED]", // Soft Warm Canvas
      pill: "bg-[#E8E1D6] text-[#4A4134] border-[#DCD1C2]",
      accent: "text-[#D97706]",
    },
    {
      bg: "bg-[#F0F2F6]", // Soft Cloud Blue
      pill: "bg-[#E0E4ED] text-[#353F52] border-[#CFD6E4]",
      accent: "text-[#2E6FA0]",
    },
    {
      bg: "bg-[#F3F1F5]", // Soft Muted Iris
      pill: "bg-[#E6E1EB] text-[#40354C] border-[#D8D0E0]",
      accent: "text-[#7C3AED]",
    },
    {
      bg: "bg-[#F1F4F3]", // Soft Frosted Mint
      pill: "bg-[#E1EAE6] text-[#354941] border-[#D1DFD9]",
      accent: "text-[#059669]",
    },
    {
      bg: "bg-[#F6F3EE]", // Soft Wheat Cream
      pill: "bg-[#EBE3D8] text-[#494135] border-[#DDCFBF]",
      accent: "text-[#D97706]",
    },
    {
      bg: "bg-[#EFF2F5]", // Soft Mineral Gray
      pill: "bg-[#DEE5EB] text-[#34414E] border-[#CED7E0]",
      accent: "text-[#2E6FA0]",
    },
    {
      bg: "bg-[#F4F1ED]", // Soft Sand Stone
      pill: "bg-[#E7E0D6] text-[#483F33] border-[#DCD0C3]",
      accent: "text-[#C2410C]",
    },
  ];

  // Auto-scroll controller for the bottom track
  const trackSectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [isTrackInView, setIsTrackInView] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Intersection Observer: Only auto-scroll when user has actually scrolled to "Other Case Studies" section
  useEffect(() => {
    const el = trackSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTrackInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const checkScrollState = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  const handleManualScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -280 : 280;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Automatic scrolling loop for remaining projects: stays stationary until user scrolls to it
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!isTrackInView || isAutoScrollPaused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 220, behavior: "smooth" });
      }
    }, 3400);

    return () => clearInterval(interval);
  }, [isTrackInView, isAutoScrollPaused]);

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* 1 & 2: Top Featured Work Projects (Standard Container Width) */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 space-y-10 sm:space-y-12">
        {/* ========================================================= */}
        {/* 1. SECTION HEADER                                         */}
        {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-[#EBE8E1]">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#71717A]">
            <span className="text-[#2E6FA0] font-bold">02 /</span>
            <span>Selected Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] tracking-tight">
            Featured Work Projects
          </h2>
          <p className="text-xs text-[#71717A] max-w-xl">
            Core analytical initiatives across marketplace performance, data cleansing, and customer telemetry. Hover any card to inspect live dashboards.
          </p>
        </div>

        <Link
          href="/projects"
          className="text-[11px] font-bold uppercase tracking-wider text-[#18181B] hover:text-[#2E6FA0] transition-colors inline-flex items-center space-x-1 shrink-0 group"
        >
          <span>All 19 Projects</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#2E6FA0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </Link>
      </div>

      {/* ========================================================= */}
      {/* 2. THREE FEATURED WORK PROJECTS SIDE-BY-SIDE              */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featuredWorkProjects.map((item) => {
          return (
            <Link
              key={item.project.slug}
              href={`/projects/${item.project.slug}`}
              className="group bg-white rounded-2xl border border-[#EBE8E1] p-4 sm:p-5 shadow-2xs hover:shadow-lg hover:border-[#D4D0C8] transition-all duration-300 flex flex-col justify-between cursor-pointer select-none space-y-4"
            >
              <div className="space-y-3.5">
                {/* Visual Canvas (Resting: Watermark & Tag; Hover: 3D Fanning Mockups) */}
                <div className="relative aspect-[16/10] w-full rounded-xl bg-[#F6F5F0] border border-[#EBE8E1] overflow-hidden p-3 flex flex-col justify-between">
                  {/* Top-Left Category Badge */}
                  <span className="text-[9px] font-mono uppercase tracking-wider font-bold text-[#71717A] group-hover:text-[#2E6FA0] transition-colors z-10">
                    {item.categoryLabel}
                  </span>

                  {/* Subtle Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-2 text-xl font-serif font-bold text-[#18181B]/15 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                    {item.watermark}
                  </div>

                  {/* 3 Layered Floating Mockups (Revealed on Hover) */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 scale-95 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
                    {/* Left Mockup (-6deg) */}
                    <div className="absolute bottom-2 left-2 w-[55%] aspect-[16/10] rounded-lg overflow-hidden shadow-xl -rotate-6 border border-white/80 bg-white transition-all duration-500 ease-out group-hover:-rotate-8 group-hover:-translate-x-1.5 z-10">
                      <div className="h-3 bg-[#18181B]/90 flex items-center px-1.5 space-x-0.5">
                        <span className="w-1 h-1 rounded-full bg-[#EF4444]" />
                        <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                        <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                      </div>
                      <div className="relative w-full h-[calc(100%-0.75rem)] bg-[#F2F2ED]">
                        <Image
                          src={item.mockups[0]}
                          alt=""
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Center Mockup (0deg, elevated) */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[55%] aspect-[16/10] rounded-lg overflow-hidden shadow-xl rotate-0 border border-white/80 bg-white transition-all duration-500 ease-out group-hover:-translate-y-2 z-20">
                      <div className="h-3 bg-[#18181B]/90 flex items-center px-1.5 space-x-0.5">
                        <span className="w-1 h-1 rounded-full bg-[#EF4444]" />
                        <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                        <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                      </div>
                      <div className="relative w-full h-[calc(100%-0.75rem)] bg-[#F2F2ED]">
                        <Image
                          src={item.mockups[1]}
                          alt=""
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Right Mockup (+6deg) */}
                    <div className="absolute top-2 right-2 w-[55%] aspect-[16/10] rounded-lg overflow-hidden shadow-xl rotate-6 border border-white/80 bg-white transition-all duration-500 ease-out group-hover:rotate-8 group-hover:translate-x-1.5 z-30">
                      <div className="h-3 bg-[#18181B]/90 flex items-center px-1.5 space-x-0.5">
                        <span className="w-1 h-1 rounded-full bg-[#EF4444]" />
                        <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                        <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                      </div>
                      <div className="relative w-full h-[calc(100%-0.75rem)] bg-[#F2F2ED]">
                        <Image
                          src={item.mockups[2]}
                          alt=""
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Visual Canvas Footer */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717A]">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="font-mono text-[9px] group-hover:text-[#2E6FA0] transition-colors">
                      Hover preview
                    </span>
                  </div>
                </div>

                {/* Project Title & Period */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#71717A]">
                    <span>{item.yearLabel}</span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-[14.5px] text-[#18181B] group-hover:text-[#2E6FA0] transition-colors leading-snug line-clamp-2">
                    {item.project.title}
                  </h3>
                </div>

                {/* Clear Narrative Description */}
                <p className="text-xs text-[#52525B] leading-relaxed line-clamp-3">
                  {item.project.shortDescription || item.project.overview}
                </p>

                {/* Metric Chip */}
                {item.project.keyImpactMetrics && item.project.keyImpactMetrics.length > 0 && (
                  <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-md bg-[#F2F2ED] border border-[#EBE8E1] text-[10.5px] text-[#18181B] font-mono">
                    <TrendingUp className="w-3 h-3 text-[#2E6FA0]" />
                    <span className="font-bold">
                      {item.project.keyImpactMetrics[0].value} {item.project.keyImpactMetrics[0].metric}
                    </span>
                  </div>
                )}
              </div>

              {/* Tools & Explore CTA */}
              <div className="pt-2.5 border-t border-[#F4F2EC] flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {item.project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} title={tool} className="p-1 rounded-md bg-[#F2F2ED] border border-[#EBE8E1]">
                      {getTechLogo(tool, "w-3 h-3")}
                    </span>
                  ))}
                  {item.project.tools.length > 3 && (
                    <span className="text-[9px] font-mono text-[#A1A1AA] pl-0.5">
                      +{item.project.tools.length - 3}
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      {/* End of Top Featured Section */}
    </div>

      {/* ========================================================= */}
      {/* 3. REMAINING PROJECTS - FULL BLEED EDGE-TO-EDGE           */}
      {/* ========================================================= */}
      <div
        ref={trackSectionRef}
        className="w-full space-y-4 pt-8 border-t border-[#EBE8E1] overflow-hidden"
        onMouseEnter={() => setIsAutoScrollPaused(true)}
        onMouseLeave={() => setIsAutoScrollPaused(false)}
      >
        {/* Header Aligned to Main Layout */}
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-[#2E6FA0] font-bold">
              <Sparkles className="w-3 h-3" />
              <span>More Initiatives</span>
            </div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-[#18181B] tracking-tight">
              Other Case Studies &amp; Technical Analytics
            </h4>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-1.5">
            <span className="text-[11px] font-mono text-[#71717A] pr-1 hidden sm:inline-block">
              {remainingProjects.length} more projects · Hover to lift
            </span>
            <button
              type="button"
              onClick={() => handleManualScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous projects"
              className="w-8 h-8 rounded-full bg-white text-[#18181B] border border-[#EBE8E1] shadow-2xs hover:bg-[#F4F2EC] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleManualScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next projects"
              className="w-8 h-8 rounded-full bg-white text-[#18181B] border border-[#EBE8E1] shadow-2xs hover:bg-[#F4F2EC] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 100% Full-Bleed Edge-to-Edge Track (pentokin kanan kiri, compact & judul ga tertimpa) */}
        <div
          ref={scrollRef}
          onScroll={checkScrollState}
          className="relative w-full overflow-x-auto overflow-y-visible py-8 sm:py-10 md:py-12 px-4 sm:px-8 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
        >
          <div className="flex items-center min-w-max pl-6 sm:pl-12 lg:pl-20 pr-16 sm:pr-24 lg:pr-32">
            {remainingProjects.map((p, idx) => {
              const categoryName = typeof p.category === "string" ? p.category : p.category[0];
              const theme = deckThemes[idx % deckThemes.length];
              
              // Forward z-index so newer cards gently overlap trailing edge, NEVER covering the title on the left!
              const zIndex = idx + 1;

              // Alternating dynamic tilts (tidak nyerong ke satu arah doang!)
              const tiltAngles = [
                "-rotate-2",
                "rotate-2",
                "-rotate-1",
                "rotate-1.5",
                "-rotate-1.5",
                "rotate-2",
              ];
              const tilt = tiltAngles[idx % tiltAngles.length];

              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  style={{ zIndex }}
                  className={`group/card relative shrink-0 w-[220px] sm:w-[235px] md:w-[250px] h-[315px] sm:h-[330px] md:h-[345px] rounded-2xl p-4 sm:p-4.5 flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer ${tilt} hover:rotate-0 hover:-translate-y-8 hover:scale-[1.04] hover:!z-50 shadow-[0_4px_0_0_#DDD7CD,0_8px_16px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_0_0_#CEC6B8,0_20px_28px_-4px_rgba(0,0,0,0.14)] border border-[#E5E0D8] ${theme.bg} ${
                    idx > 0 ? "-ml-3 sm:-ml-4 md:-ml-5" : "ml-0"
                  }`}
                >
                  {/* Top: Header with Category Pill, Year, Title & Description */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[9px] font-mono">
                      <span className={`px-2 py-0.5 rounded-full font-semibold border ${theme.pill} truncate max-w-[130px]`}>
                        {categoryName}
                      </span>
                      <span className="text-[#78716C] font-semibold">{p.year || "2025"}</span>
                    </div>

                    {/* Prominent, readable title with plenty of room (never covered by overlapping card) */}
                    <h5 className="font-serif font-bold text-xs sm:text-[13.5px] text-[#18181B] group-hover/card:text-[#2E6FA0] transition-colors leading-snug line-clamp-2 pt-0.5 tracking-tight">
                      {p.title}
                    </h5>

                    {/* Short narrative summary */}
                    <p className="text-[10px] sm:text-[11px] text-[#52525B] leading-relaxed line-clamp-2">
                      {p.shortDescription || p.overview}
                    </p>
                  </div>

                  {/* Middle/Bottom: Visual Cover Mockup */}
                  <div className="relative w-full h-[115px] sm:h-[125px] md:h-[135px] rounded-xl overflow-hidden bg-white/90 border border-[#E5E0D8] shadow-2xs group-hover/card:scale-[1.02] transition-transform duration-300">
                    {p.coverImage ? (
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-[#FAF8F5]">
                        <span className="text-[10px] font-mono font-bold text-[#2E6FA0]">
                          {p.domain}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Bottom: Tool Chips & View Link */}
                  <div className="pt-2 border-t border-[#E8E2D8] flex items-center justify-between text-[9px]">
                    <div className="flex items-center space-x-1">
                      {p.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          title={tool}
                          className="px-1.5 py-0.5 rounded bg-white/80 text-[#52525B] border border-[#E2DDD5] text-[9px] font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center space-x-1 font-bold text-[#2E6FA0] group-hover/card:translate-x-0.5 transition-transform text-[9.5px]">
                      <span>Explore</span>
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  RotateCw,
  FileText,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { useCvModal } from "@/context/CvModalContext";

export function HomeHeroEditorial() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { openCvModal } = useCvModal();

  // Auto-flip: alternates between photo side and profile summary side
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsFlipped((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  // Typewriter effect roles
  const typingRoles = [
    "Data Analyst",
    "Business Intelligence Analyst",
    "BI Developer",
    "Business Analyst",
    "Business Performance Analyst",
    "Business Development",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typingRoles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typingRoles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative pt-2 pb-4 md:py-6">
      {/* ========================================================= */}
      {/* MAIN TWO-COLUMN EDITORIAL HERO                            */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ========================================================= */}
        {/* LEFT COLUMN: ~60% Width (7 of 12 columns)                 */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {/* Availability Status (Clean Editorial Typography, No Chip) */}
          <FadeIn direction="up" delay={0.05}>
            <div className="flex items-center space-x-2 text-[11.5px] font-mono text-[#52525B]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="font-semibold text-[#18181B] tracking-tight">Available for work</span>
              <span className="text-[#A1A1AA]">·</span>
              <span className="flex items-center text-[#71717A]">
                <MapPin className="w-3 h-3 mr-1 text-[#2E6FA0]" />
                Jakarta, Indonesia
              </span>
            </div>
          </FadeIn>

          {/* Professional Label, Name & Tagline */}
          <FadeIn direction="up" delay={0.12}>
            <div className="space-y-2">
              <div className="h-5 sm:h-6 flex items-center">
                <p className="text-[10px] sm:text-[11.5px] uppercase tracking-[0.2em] font-bold text-[#2E6FA0] flex items-center">
                  <span>{displayText}</span>
                  <span className="inline-block w-[1.5px] sm:w-[2px] h-3 sm:h-3.5 bg-[#2E6FA0] ml-1 animate-pulse" />
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-[#18181B] tracking-tight leading-[1.12]">
                Adelia Deswita
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-serif italic text-[#2E6FA0] leading-snug pt-0.5">
                &ldquo;Curious about data, driven by business insights.&rdquo;
              </p>
            </div>
          </FadeIn>

          {/* Supporting Description */}
          <FadeIn direction="up" delay={0.22}>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-[#52525B] leading-relaxed max-w-lg font-normal">
              <p>
                I&apos;m an Information Systems graduate who enjoys working with data and understanding how businesses work.
              </p>
              <p>
                From analyzing marketplace performance and customer behavior to exploring payment and transaction trends, I&apos;ve had the opportunity to work with different types of business data across marketplace and fintech industries. I use SQL, BigQuery, and visualization tools to make sense of the numbers, spot trends, and turn findings into something useful for the business.
              </p>
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn direction="up" delay={0.32}>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* 1. Explore My Work (Primary Dark Button) */}
              <a
                href="#selected-projects"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-white hover:bg-[#2E6FA0] transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* 2. View CV (Secondary Outlined Button) */}
              <button
                type="button"
                onClick={openCvModal}
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white text-[#18181B] border border-[#EBE8E1] hover:bg-[#F4F2EC] hover:border-[#D4D0C8] transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
                title="View Curriculum Vitae"
              >
                <FileText className="w-3 h-3 text-[#2E6FA0]" />
                <span>Curriculum Vitae</span>
              </button>

              {/* 3. Contact (Minimal / Outlined Button) */}
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#52525B] hover:text-[#18181B] hover:bg-white border border-[#EBE8E1] transition-all shadow-2xs hover:-translate-y-0.5"
              >
                <Mail className="w-3 h-3 text-[#71717A]" />
                <span>Contact</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: ~40% Width (5 of 12 columns)                */}
        {/* Flippable Archival Ticket Stub (Notched Analyst Pass)     */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <FadeIn direction="left" delay={0.2}>
            <div className="relative w-[280px] sm:w-[305px] -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 ease-out select-none">
              <div
                className="perspective-1000 w-full group"
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label="Adelia Deswita analyst pass — click to flip"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardToggle}
                onKeyDown={handleKeyDown}
              >
                <div
                  className={`relative grid w-full transition-transform duration-700 ease-in-out transform-style-3d cursor-pointer ${
                    isFlipped ? "rotate-y-180" : "rotate-y-0"
                  }`}
                >
                  {/* ------------------------------------------------- */}
                  {/* FRONT – Photo Ticket                              */}
                  {/* ------------------------------------------------- */}
                  <div className="[grid-area:1/1] backface-hidden relative bg-white border border-[#EBE8E1] rounded-2xl shadow-[0_14px_32px_-14px_rgba(24,24,27,0.22)]">
                    {/* Ticket Header Strip */}
                    <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5 text-[8.5px] font-mono uppercase tracking-[0.18em] text-[#71717A]">
                      <span>Admit One · Analyst Pass</span>
                      <span className="text-[#2E6FA0] font-bold">No. 0391</span>
                    </div>

                    {/* Photo Section */}
                    <div className="px-3">
                      <div className="relative h-[245px] sm:h-[265px] rounded-lg overflow-hidden bg-[#F4F2EC]">
                        <Image
                          src="/images/profile/adelia-portrait.jpg?v=2"
                          alt="Adelia Deswita"
                          fill
                          priority
                          unoptimized
                          sizes="(max-width: 768px) 280px, 305px"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Circular Archival Stamp */}
                        <div className="absolute top-2.5 right-2.5 w-[64px] h-[64px] rounded-full border-[1.5px] border-dashed border-white/90 bg-[#2E6FA0]/85 backdrop-blur-sm flex flex-col items-center justify-center text-white rotate-12 shadow-md">
                          <span className="text-[6px] font-mono tracking-[0.18em] uppercase opacity-90">
                            Fresh Grad
                          </span>
                          <span className="text-[11px] font-serif font-bold leading-none my-0.5">
                            2026
                          </span>
                          <span className="text-[6px] font-mono tracking-[0.18em] uppercase opacity-90">
                            UPNVJ
                          </span>
                        </div>

                        {/* Location Tag */}
                        <div className="absolute bottom-2.5 left-2.5 inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[9px] font-mono font-semibold bg-white/95 text-[#18181B] shadow-2xs">
                          <MapPin className="w-2.5 h-2.5 text-[#2E6FA0]" />
                          <span>Jakarta, ID</span>
                        </div>
                      </div>
                    </div>

                    {/* Perforated Tear Line with Side Notches */}
                    <div className="relative h-8 flex items-center">
                      <span className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#F2F2ED] border border-[#EBE8E1] [clip-path:inset(0_0_0_45%)]" />
                      <span className="absolute -right-[10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#F2F2ED] border border-[#EBE8E1] [clip-path:inset(0_45%_0_0)]" />
                      <div className="mx-5 w-full border-t-2 border-dashed border-[#E4E0D6]" />
                    </div>

                    {/* Ticket Stub */}
                    <div className="px-4 pb-4 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h2 className="text-base font-serif font-bold text-[#18181B] tracking-tight leading-tight">
                            Adelia Deswita
                          </h2>
                          <p className="text-[10px] text-[#71717A] font-medium">
                            Data Analyst · Business Intelligence
                          </p>
                        </div>
                        <span className="shrink-0 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#18181B] text-white">
                          GPA 3.91
                        </span>
                      </div>

                      {/* Metadata Fields */}
                      <div className="grid grid-cols-3 gap-2 text-left">
                        {[
                          { label: "Status", value: "Fresh Grad" },
                          { label: "Period", value: "2022–2026" },
                          { label: "Track", value: "BI & Analytics" },
                        ].map((field) => (
                          <div key={field.label}>
                            <div className="text-[7.5px] font-mono uppercase tracking-[0.16em] text-[#A1A1AA]">
                              {field.label}
                            </div>
                            <div className="text-[10px] font-bold text-[#18181B] leading-tight">
                              {field.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Barcode + Flip Hint */}
                      <div className="flex items-end justify-between pt-1">
                        <div className="flex items-end h-7">
                          {[2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 2, 3, 1].map(
                            (w, i) => (
                              <span
                                key={i}
                                className="h-full bg-[#18181B] mr-[1.5px]"
                                style={{ width: `${w}px`, opacity: i % 7 === 3 ? 0.55 : 1 }}
                              />
                            )
                          )}
                        </div>
                        <span className="inline-flex items-center space-x-1 text-[8px] font-mono tracking-[0.16em] text-[#71717A] uppercase">
                          <RotateCw className="w-2.5 h-2.5" />
                          <span>Flip</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------------------------- */}
                  {/* BACK – Profile Summary & Credentials Ticket       */}
                  {/* ------------------------------------------------- */}
                  <div className="[grid-area:1/1] backface-hidden rotate-y-180 relative bg-white border border-[#EBE8E1] rounded-2xl shadow-[0_14px_32px_-14px_rgba(24,24,27,0.22)] flex flex-col justify-between text-left">
                    {/* Ticket Header Strip */}
                    <div className="flex items-center justify-between px-4 pt-3 pb-2 text-[8.5px] font-mono uppercase tracking-[0.18em] text-[#71717A] border-b border-dashed border-[#EBE8E1]">
                      <span>Profile Summary · Fresh Graduate</span>
                      <span className="text-[#2E6FA0] font-bold">Side B</span>
                    </div>

                    <div className="flex-1 px-4 py-2 space-y-2.5 overflow-hidden">
                      {/* Fresh Graduate Highlight Banner */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#2E6FA0]/10 border border-[#2E6FA0]/25">
                        <div className="flex items-center space-x-2 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-[#2E6FA0] shrink-0 animate-pulse" />
                          <div className="min-w-0">
                            <div className="text-[7.5px] font-mono uppercase tracking-[0.16em] text-[#2E6FA0] font-bold truncate">
                              Available for Opportunities
                            </div>
                            <div className="text-[11px] font-bold text-[#18181B] leading-tight truncate">
                              Fresh Graduate · Class of 2026
                            </div>
                          </div>
                        </div>
                        <span className="shrink-0 px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold bg-[#2E6FA0] text-white ml-2">
                          GPA 3.91
                        </span>
                      </div>

                      {/* Education (2022 - 2026) */}
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[7.5px] font-mono uppercase tracking-[0.16em] text-[#A1A1AA]">
                            Education
                          </span>
                          <span className="text-[8px] font-mono font-bold text-[#2E6FA0]">
                            2022 – 2026
                          </span>
                        </div>
                        <div className="text-[11px] font-bold text-[#18181B] leading-tight">
                          Bachelor in Information Systems
                        </div>
                        <div className="text-[9.5px] text-[#52525B]">
                          UPN Veteran Jakarta · GPA 3.91 / 4.00 (Cum Laude)
                        </div>
                        <div className="text-[9px] text-[#71717A] leading-snug italic pt-0.5">
                          Thesis: Web-Based Geospatial Visualization for Customer Distribution &amp; Segmentation (PT XYZ)
                        </div>
                      </div>

                      {/* Looking For / Core Focus */}
                      <div className="space-y-0.5">
                        <div className="text-[7.5px] font-mono uppercase tracking-[0.16em] text-[#A1A1AA]">
                          Role Focus
                        </div>
                        <div className="text-[10.5px] font-semibold text-[#18181B] leading-snug">
                          Data Analyst <span className="text-[#2E6FA0]">·</span> Business Intelligence <span className="text-[#2E6FA0]">·</span> Data Analytics
                        </div>
                      </div>

                      {/* Key Methodologies & Skills */}
                      <div className="space-y-1">
                        <div className="text-[7.5px] font-mono uppercase tracking-[0.16em] text-[#A1A1AA]">
                          Key Methodologies
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {[
                            "Data Analysis",
                            "Business Intelligence",
                            "EDA",
                            "Predictive Modeling",
                            "Machine Learning",
                            "ETL/ELT",
                            "Data Warehouse",
                            "Dashboarding",
                          ].map((item) => (
                            <span
                              key={item}
                              className="px-1.5 py-0.5 rounded text-[8px] font-medium bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Core Tools & Languages */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[7.5px] font-mono uppercase tracking-[0.16em] text-[#A1A1AA]">
                            Core Tools &amp; Spoken Languages
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                          {[
                            "SQL",
                            "Python",
                            "BigQuery",
                            "Looker Studio",
                            "Tableau",
                            "Power BI",
                            "Excel",
                          ].map((tool) => (
                            <span
                              key={tool}
                              className="px-1.5 py-0.5 rounded text-[8px] font-mono font-medium bg-[#F2F2ED] text-[#27272A] border border-[#EBE8E1]"
                            >
                              {tool}
                            </span>
                          ))}
                          <span className="text-[#D4D0C8]">|</span>
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-[#2E6FA0]/10 text-[#2E6FA0] border border-[#2E6FA0]/20">
                            ID (Native)
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-[#2E6FA0]/10 text-[#2E6FA0] border border-[#2E6FA0]/20">
                            EN (Professional)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Perforated Tear Line with Side Notches */}
                    <div className="relative h-6 flex items-center">
                      <span className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#F2F2ED] border border-[#EBE8E1] [clip-path:inset(0_0_0_45%)]" />
                      <span className="absolute -right-[10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#F2F2ED] border border-[#EBE8E1] [clip-path:inset(0_45%_0_0)]" />
                      <div className="mx-5 w-full border-t-2 border-dashed border-[#E4E0D6]" />
                    </div>

                    {/* Back Stub Footer */}
                    <div className="px-4 pb-3 flex items-center justify-between text-[9px]">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-2.5 h-2.5 text-[#2E6FA0]" />
                        <span className="font-medium text-[#52525B]">Jakarta, Indonesia</span>
                      </div>
                      <span className="inline-flex items-center space-x-1 text-[7.5px] font-mono tracking-[0.16em] text-[#71717A] uppercase">
                        <RotateCw className="w-2.5 h-2.5" />
                        <span>Flip to photo</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ========================================================= */}
      {/* HERO STATISTICS – SINGLE AUTHORITATIVE DISPLAY             */}
      {/* Thin divider with 3 compact statistics                    */}
      {/* ========================================================= */}
      <FadeIn direction="up" delay={0.4}>
        <div className="border-t border-[#EBE8E1] pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EBE8E1]">
            {/* Stat 1: GPA */}
            <div className="sm:pr-4">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] tracking-tight">
                3.91{" "}
                <span className="text-xs sm:text-sm font-sans font-normal text-[#71717A]">
                  / 4.00
                </span>
              </div>
              <p className="text-xs text-[#71717A] mt-0.5 font-medium">
                GPA · Cum Laude
              </p>
            </div>

            {/* Stat 2: Professional Experiences */}
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] tracking-tight">
                5
              </div>
              <p className="text-xs text-[#71717A] mt-0.5 font-medium">
                Professional Experiences
              </p>
            </div>

            {/* Stat 3: Dashboards Built & Maintained */}
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] tracking-tight">
                15+
              </div>
              <p className="text-xs text-[#71717A] mt-0.5 font-medium">
                Dashboards Built &amp; Maintained
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

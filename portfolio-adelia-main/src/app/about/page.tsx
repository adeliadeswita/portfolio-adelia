"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  GraduationCap,
  Briefcase,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { useCvModal } from "@/context/CvModalContext";
import {
  BlibliLogo,
  AmarthaLogo,
  AdiraLogo,
  IvosightsLogo,
  HomeCreditLogo,
  UpnLogo,
} from "@/components/ui/BrandLogos";

interface TimelineEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "work" | "education";
  logo: React.ReactNode;
  summary: string;
  keyPoints: string[];
}

const timelineEntries: TimelineEntry[] = [
  {
    id: "blibli",
    role: "Business Intelligence Intern",
    organization: "PT Global Digital Niaga Tbk (Blibli)",
    period: "May 2026 – Present",
    type: "work",
    logo: <BlibliLogo className="w-8 h-8" />,
    summary:
      "Automating dimensional data marts in BigQuery and architecting executive Looker Studio dashboards for live shopping performance across 30+ brand partners.",
    keyPoints: [
      "Engineered automated data marts tracking GMV, NMV, conversion, and traffic across 7+ marketplaces.",
      "Consolidated live session telemetry from 120+ broadcasts and 450K+ viewer interactions.",
    ],
  },
  {
    id: "amartha",
    role: "Growth Data Analyst, Payment Business Intern",
    organization: "Amartha Financial",
    period: "Feb 2026 – May 2026",
    type: "work",
    logo: <AmarthaLogo className="w-8 h-8" />,
    summary:
      "Formulated unit pricing scenarios and promotional elasticity models for 20+ digital biller categories across an active network of 100K+ agents.",
    keyPoints: [
      "Optimized digital payment unit margins through multi-variable promotional simulations.",
      "Maintained centralized monitoring suites across Looker Studio, Apache Superset, and Power BI.",
    ],
  },
  {
    id: "adira",
    role: "IT Data Science Intern",
    organization: "PT Adira Dinamika Multi Finance, Tbk.",
    period: "Apr 2025 – Sept 2025",
    type: "work",
    logo: <AdiraLogo className="w-8 h-8" />,
    summary:
      "Developed automated ETL and quality validation workflows for 2M+ customer loan records, reducing data preparation latency by ~40%.",
    keyPoints: [
      "Designed defensive schema checks ensuring 99%+ accuracy across enterprise database staging tables.",
      "Authored standardized data dictionaries for downstream business intelligence squads.",
    ],
  },
  {
    id: "ivosights",
    role: "Data Cleansing Analyst Intern",
    organization: "PT Ivonesia Solusi Data (Ivosights)",
    period: "Feb 2025 – Mar 2025",
    type: "work",
    logo: <IvosightsLogo className="w-8 h-8" />,
    summary:
      "Screened and organized incoming digital performance data and social feedback feeds for 40+ corporate brand monitoring dashboards.",
    keyPoints: [
      "Cleaned and categorized 10,000+ unstructured feedback points per week for sentiment analysis.",
      "Delivered daily and weekly brand reputation reporting feeds with 99%+ on-time SLA.",
    ],
  },
  {
    id: "home-credit",
    role: "Project-Based Virtual Intern, Data Scientist",
    organization: "Home Credit Indonesia",
    period: "Jan 2025 – Feb 2025",
    type: "work",
    logo: <HomeCreditLogo className="w-8 h-8" />,
    summary:
      "Exploratory risk modeling across 307,511 loan applications with 122 features, identifying risk thresholds indicating 15% default reduction.",
    keyPoints: [
      "Addressed 69.87% missing data through statistical imputation and categorical target encoding.",
      "Isolated high-risk customer segments to support loan structuring and policy adjustments.",
    ],
  },
  {
    id: "upn",
    role: "Bachelor's Degree in Information Systems (Cum Laude)",
    organization: "Universitas Pembangunan Nasional \"Veteran\" Jakarta",
    period: "Aug 2022 – Sep 2026",
    type: "education",
    logo: <UpnLogo className="w-8 h-8" />,
    summary:
      "Graduated with Cum Laude honors (GPA 3.91 / 4.00) with academic concentration in Data Mining, Data Warehousing, Big Data, and Database Systems.",
    keyPoints: [
      "Achieved a 3.91 / 4.00 cumulative GPA with highest honors.",
      "Served as Data Science study group speaker and mentor for junior students in KSM VeteranTech.",
    ],
  },
];

export default function AboutPage() {
  const [expandedId, setExpandedId] = useState<string>("blibli");
  const [activePhilosophyIndex, setActivePhilosophyIndex] = useState(0);
  const { openCvModal } = useCvModal();

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="py-6 md:py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 space-y-12 sm:space-y-16">
        {/* ========================================================= */}
        {/* EDITORIAL TWO-COLUMN COMPOSITION                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ======================================================= */}
          {/* LEFT SIDE: Personal Introduction & Visual               */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Header & Role */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2E6FA0]">
                About Adelia Deswita
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#18181B] tracking-tight leading-[1.15]">
                Bridging business intuition with{" "}
                <span className="italic font-normal text-[#2E6FA0]">
                  rigorous data engineering.
                </span>
              </h1>
            </div>

            {/* Professional Portrait Card — Compact Size */}
            <div className="relative max-w-[235px] sm:max-w-[260px] bg-white rounded-2xl p-2 border border-[#EBE8E1] shadow-sm overflow-hidden group">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#F4F2EC]">
                <Image
                  src="/images/profile/adelia-portrait.jpg?v=2"
                  alt="Adelia Deswita"
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 768px) 235px, 260px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-xs">Adelia Deswita</span>
                    <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
                      GPA 3.91 · Cum Laude
                    </span>
                  </div>
                  <p className="text-[10px] text-white/80 mt-0.5">
                    Information Systems · UPN Veteran Jakarta
                  </p>
                </div>
              </div>
            </div>

            {/* Short Personal Introduction */}
            <div className="space-y-2.5 text-xs sm:text-[13px] text-[#52525B] leading-relaxed">
              <p>
                I am an Information Systems graduate from UPN &ldquo;Veteran&rdquo; Jakarta specializing in
                Business Intelligence, data warehousing, and business performance analytics across e-commerce
                and fintech sectors.
              </p>
              <p>
                Having analyzed marketplace livestream telemetry, PPOB payment economics, and loan risk factors,
                I focus on creating data marts and executive dashboards that simplify complex metrics and empower
                stakeholders to make sound commercial decisions.
              </p>
            </div>

            {/* Core Analytical Philosophies (Interactive Tabs) */}
            <div className="p-5 rounded-2xl bg-white border border-[#EBE8E1] shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#71717A] pb-2 border-b border-[#F4F2EC]">
                <span className="uppercase tracking-wider">Analytical Principles</span>
                <span className="font-mono text-[11px]">
                  0{activePhilosophyIndex + 1} / 0{profileData.philosophies.length}
                </span>
              </div>

              <div className="min-h-[70px]">
                <h4 className="text-sm font-bold text-[#18181B]">
                  {profileData.philosophies[activePhilosophyIndex].title}
                </h4>
                <p className="text-xs text-[#52525B] mt-1 leading-relaxed">
                  {profileData.philosophies[activePhilosophyIndex].description}
                </p>
              </div>

              {/* Selector Dots */}
              <div className="flex items-center space-x-1.5 pt-1">
                {profileData.philosophies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhilosophyIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activePhilosophyIndex === i
                        ? "w-6 bg-[#2E6FA0]"
                        : "w-2 bg-[#D4D0C8] hover:bg-[#A1A1AA]"
                    }`}
                    aria-label={`View philosophy ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center space-x-3 pt-1">
              <button
                type="button"
                onClick={openCvModal}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-white hover:bg-[#27272A] transition-all shadow-2xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View CV</span>
              </button>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#52525B] hover:text-[#18181B] hover:bg-white border border-[#EBE8E1] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: Expandable Career & Education Timeline      */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 space-y-6">
            <div className="pb-3 border-b border-[#EBE8E1]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2E6FA0] font-bold">
                    Interactive Chronology
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#18181B] tracking-tight mt-1">
                    Career &amp; Academic Timeline
                  </h2>
                </div>
                <Link
                  href="/experience"
                  className="text-xs font-bold uppercase tracking-wider text-[#18181B] hover:text-[#2E6FA0] inline-flex items-center space-x-1"
                >
                  <span>Full CV View</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-xs text-[#71717A] mt-1">
                Click any milestone to inspect key contributions and focus areas.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {timelineEntries.map((item) => {
                const isExpanded = expandedId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? "bg-white border-[#D4D0C8] shadow-sm"
                        : "bg-[#F2F2ED] border-[#EBE8E1] hover:bg-white hover:border-[#D4D0C8]"
                    }`}
                  >
                    {/* Collapsed Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer"
                    >
                      <div className="flex items-center space-x-3.5 min-w-0 pr-4">
                        <div className="shrink-0">{item.logo}</div>
                        <div className="min-w-0">
                          <h3
                            className={`text-sm sm:text-base font-bold truncate ${
                              isExpanded ? "text-[#2E6FA0]" : "text-[#18181B]"
                            }`}
                          >
                            {item.role}
                          </h3>
                          <p className="text-xs text-[#71717A] truncate mt-0.5">
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 shrink-0">
                        <span className="text-xs font-mono text-[#71717A] hidden sm:inline-block">
                          {item.period}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                            isExpanded ? "bg-[#EBF3F8] text-[#2E6FA0] rotate-180" : "text-[#A1A1AA]"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </button>

                    {/* Smooth Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-[#F4F2EC] space-y-3.5">
                            <span className="text-xs font-mono text-[#71717A] sm:hidden block pt-2">
                              {item.period}
                            </span>
                            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                              {item.summary}
                            </p>

                            <div className="space-y-1.5 pt-1">
                              {item.keyPoints.map((point, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-2 text-xs text-[#3F3F46]"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{point}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2 flex items-center justify-between border-t border-[#F4F2EC]">
                              <span className="text-[11px] font-mono text-[#71717A] uppercase">
                                {item.type === "work" ? "Professional Industry Role" : "Academic Degree"}
                              </span>
                              <Link
                                href="/experience"
                                className="text-xs font-bold text-[#18181B] hover:text-[#2E6FA0] inline-flex items-center space-x-1"
                              >
                                <span>Deep dive in Experience</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
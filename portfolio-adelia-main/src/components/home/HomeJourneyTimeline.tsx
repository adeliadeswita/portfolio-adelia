"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
  ShoppingBag,
  Wallet,
  Database,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

interface TimelineStop {
  id: string;
  period: string;
  company: string;
  position: string;
  division: string;
  lineIcon: React.ReactNode;
  previewImage: string;
  badge: string;
  metrics: string;
  description: string;
  tools: string[];
  link: string;
}

const timelineStops: TimelineStop[] = [
  {
    id: "blibli",
    period: "2026 — PRESENT",
    company: "PT Global Digital Niaga Tbk (Blibli)",
    position: "Business Intelligence Intern",
    division: "E-Commerce & Marketplace Analytics",
    lineIcon: <ShoppingBag className="w-3.5 h-3.5 text-[#71717A] stroke-[1.5]" />,
    previewImage: "/images/projects/blibli-dash-1.svg",
    badge: "E-Commerce",
    metrics: "+34.5% GMV Uplift · 14 hrs/wk saved",
    description:
      "Engineered automated BigQuery data marts and Looker Studio executive suites analyzing 120+ live shopping sessions and 450,000+ viewer interactions across 30+ brand partners.",
    tools: ["SQL", "BigQuery", "Looker Studio", "Airflow"],
    link: "/experience",
  },
  {
    id: "amartha",
    period: "FEB 2026 — MAY 2026",
    company: "Amartha Financial",
    position: "Growth Data Analyst, Payment Business Intern",
    division: "Fintech & Payment Analytics",
    lineIcon: <Wallet className="w-3.5 h-3.5 text-[#71717A] stroke-[1.5]" />,
    previewImage: "/images/projects/amartha-hero.svg",
    badge: "Fintech",
    metrics: "20+ Biller Categories · 100K+ Agents",
    description:
      "Formulated pricing scenarios and promotional elasticity models for 20+ digital biller categories across an active network of 100K+ rural agents, building 10+ monitoring dashboards.",
    tools: ["SQL", "Looker Studio", "Superset", "Power BI"],
    link: "/experience",
  },
  {
    id: "adira",
    period: "APR 2025 — SEPT 2025",
    company: "PT Adira Dinamika Multi Finance, Tbk.",
    position: "IT Data Science Intern",
    division: "Data Quality & ETL Engineering",
    lineIcon: <Database className="w-3.5 h-3.5 text-[#71717A] stroke-[1.5]" />,
    previewImage: "/images/projects/blibli-architecture.svg",
    badge: "Automotive Finance",
    metrics: "2,000,000+ Records · ~40% Prep Time Saved",
    description:
      "Automated critical data preparation pipelines for 2,000,000+ customer loan records, ensuring 99%+ quality accuracy and cutting manual preparation latency by ~40%.",
    tools: ["Python", "SQL", "ETL", "Tableau"],
    link: "/experience",
  },
  {
    id: "ivosights",
    period: "FEB 2025 — MAR 2025",
    company: "PT Ivonesia Solusi Data (Ivosights)",
    position: "Data Cleansing Analyst Intern",
    division: "Digital Performance & Sentiment",
    lineIcon: <BarChart3 className="w-3.5 h-3.5 text-[#71717A] stroke-[1.5]" />,
    previewImage: "/images/projects/data-quality/01-check-data-values.jpg",
    badge: "Data Cleansing",
    metrics: "40+ Client Accounts · 10K+ Weekly Data Points",
    description:
      "Monitored and validated incoming digital commerce and social feedback data for 40+ corporate clients, screening 10,000+ data points weekly for sentiment reporting.",
    tools: ["Python", "Data Cleansing", "PostgreSQL", "Excel"],
    link: "/experience",
  },
  {
    id: "home-credit",
    period: "JAN 2025 — FEB 2025",
    company: "Home Credit Indonesia",
    position: "Project-Based Virtual Intern, Data Scientist",
    division: "Credit Risk Modeling & EDA",
    lineIcon: <ShieldCheck className="w-3.5 h-3.5 text-[#71717A] stroke-[1.5]" />,
    previewImage: "/images/projects/ml-hero.svg",
    badge: "Risk Science",
    metrics: "307,511 Loan Records · 15% Default Reduction",
    description:
      "Conducted exploratory default risk segmentation on 307,511 loan applications with 122 features, identifying patterns indicating potential 15% default rate reduction.",
    tools: ["Python", "Machine Learning", "Credit Scoring"],
    link: "/experience",
  },
];

interface InterestItem {
  id: string;
  label: string;
  detail: string;
}

const interestItems: InterestItem[] = [
  {
    id: "marketplace",
    label: "Marketplace analytics",
    detail: "Analyzing multi-channel GMV, livestream conversions, and category sales across 7+ platforms.",
  },
  {
    id: "payment",
    label: "Payment economics",
    detail: "Formulating digital biller product pricing, fee elasticity, and unit margin optimization.",
  },
  {
    id: "risk",
    label: "Credit risk modeling",
    detail: "Exploratory default risk analysis, loan structuring thresholds, and missing data imputation.",
  },
  {
    id: "data-marts",
    label: "Data warehousing",
    detail: "Dimensional data mart modeling with partitioned and clustered tables in Google BigQuery.",
  },
];

export function HomeJourneyTimeline() {
  const [activeStopId, setActiveStopId] = useState<string | null>(null);
  const [activeInterest, setActiveInterest] = useState<string | null>(null);

  return (
    <section className="relative space-y-6 pt-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Editorial Bio & Focus Areas                  */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 space-y-4 lg:space-y-5">
          {/* Section Number & Editorial Tag */}
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#71717A]">
            <span className="text-[#2E6FA0] font-bold">01 /</span>
            <span>The Analyst Behind The Data</span>
          </div>

          {/* Editorial Headline */}
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.15]">
            Context first.
            <br />
            <span className="italic font-normal text-[#2E6FA0]">Queries second.</span>
          </h2>

          {/* Paragraph 1: Current Focus */}
          <p className="text-xs sm:text-[13px] text-[#52525B] leading-relaxed font-normal">
            Currently working in Business Intelligence at{" "}
            <span className="font-semibold text-[#18181B]">Blibli</span>, where I work with marketplace and livestreaming data to understand business performance, build dashboards, and uncover insights. From working with BigQuery and SQL to developing data marts and Looker Studio dashboards, I enjoy connecting the dots between data and business decisions.
          </p>

          {/* Paragraph 2: Beyond day-to-day */}
          <p className="text-xs sm:text-[13px] text-[#52525B] leading-relaxed font-normal">
            Beyond my day-to-day work, I&apos;m interested in exploring how data shapes business strategies, especially in marketplace and fintech industries. I also enjoy learning about new data technologies, sharing knowledge with others, and finding better ways to turn data into something meaningful.
          </p>

          {/* Interactive Interest Chips */}
          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap items-center gap-1.5">
              {interestItems.map((item) => {
                const isActive = activeInterest === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveInterest(isActive ? null : item.id)}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? "bg-[#18181B] text-white border-[#18181B] shadow-2xs"
                        : "bg-white text-[#52525B] border-[#EBE8E1] hover:bg-[#F2F2ED] hover:border-[#D4D0C8] hover:text-[#18181B]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-mono opacity-60">
                      {isActive ? "×" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interest Detail Reveal */}
            <AnimatePresence>
              {activeInterest && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-[11px] text-[#2E6FA0] font-medium p-2.5 rounded-xl bg-[#EBF3F8] border border-[#B5D2E7] mt-1 leading-relaxed">
                    {interestItems.find((i) => i.id === activeInterest)?.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <span className="text-[10px] text-[#A1A1AA] block pt-0.5 font-mono">
              A little more about my focus — choose an interest.
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Clean Timeline with Direct Hover Expansion  */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 relative">
          {/* Header */}
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-[#71717A] pb-3 mb-2 border-b border-[#EBE8E1]">
            <Briefcase className="w-3 h-3 text-[#2E6FA0]" />
            <span className="font-semibold text-[#18181B]">A Few Stops Along The Way</span>
          </div>

          {/* Clean Vertical Timeline List */}
          <div className="relative pl-5 space-y-3.5 before:absolute before:left-[6px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#EBE8E1]">
            {timelineStops.map((stop) => {
              const isOpen = activeStopId === stop.id;

              return (
                <div
                  key={stop.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveStopId(stop.id)}
                  onMouseLeave={() => setActiveStopId(null)}
                  onClick={() => setActiveStopId(isOpen ? null : stop.id)}
                >
                  {/* Timeline Node Bullet */}
                  <div
                    className={`absolute -left-5 top-1.5 w-3 h-3 rounded-full border-2 bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-[#2E6FA0] ring-4 ring-[#2E6FA0]/15 scale-110"
                        : "border-[#D4D0C8] group-hover:border-[#2E6FA0]"
                    }`}
                  />

                  {/* Main Stop Container with generous margins and padding */}
                  <div
                    className={`transition-all duration-200 rounded-2xl ${
                      isOpen
                        ? "p-4 sm:p-5 my-3 bg-white border border-[#E5E0D8] shadow-md ring-1 ring-black/5"
                        : "p-3 sm:p-3.5 my-1 hover:bg-white/80 border border-transparent"
                    }`}
                  >
                    {/* Header Row: Role first, Company below */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0">
                        {/* Period */}
                        <span className="text-[9.5px] font-mono tracking-wider uppercase text-[#71717A] font-semibold block">
                          {stop.period}
                        </span>

                        {/* Role / Position First */}
                        <h3
                          className={`text-xs sm:text-[13.5px] font-bold transition-colors leading-snug ${
                            isOpen ? "text-[#18181B]" : "text-[#18181B] group-hover:text-[#2E6FA0]"
                          }`}
                        >
                          {stop.position}
                        </h3>

                        {/* Company Name & Division Below (Clean wrapping, no truncation) */}
                        <div className="text-[10px] sm:text-[11px] text-[#52525B] font-medium leading-snug">
                          <span className="text-[#18181B] font-semibold">{stop.company}</span>
                          <span className="text-[#D4D0C8] mx-1">·</span>
                          <span className="text-[#71717A]">{stop.division}</span>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-3.5 h-3.5 text-[#A1A1AA] transition-transform duration-200 shrink-0 mt-1.5 ${
                          isOpen ? "rotate-90 text-[#18181B]" : "group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>

                    {/* Direct In-Place Detail Expansion (Generous spacing, uncolored line icons) */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden pt-4 space-y-3.5"
                        >
                          {/* Clean Meta Row: Line Icon + Metric + Category Badge */}
                          <div className="pt-3 border-t border-[#EBE8E1] flex flex-wrap items-center justify-between gap-2.5">
                            <div className="flex items-center space-x-2">
                              {/* Clean Monochrome Line Icon (NO color, stroke only) */}
                              <div className="w-7 h-7 rounded-lg bg-[#F2F2ED] border border-[#E5E0D8] flex items-center justify-center text-[#71717A] shrink-0">
                                {stop.lineIcon}
                              </div>

                              {/* Metric Chip */}
                              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#F2F2ED] border border-[#E5E0D8] text-[10px] sm:text-[10.5px] text-[#18181B] font-mono font-medium">
                                <TrendingUp className="w-3 h-3 text-[#71717A] stroke-[1.5] shrink-0" />
                                <span>{stop.metrics}</span>
                              </div>
                            </div>

                            {/* Category Badge */}
                            <span className="px-2.5 py-0.5 rounded-full text-[9.5px] font-mono uppercase font-semibold text-[#52525B] bg-[#F2F2ED] border border-[#E5E0D8] shrink-0">
                              {stop.badge}
                            </span>
                          </div>

                          {/* Concise Description with comfortable spacing */}
                          <p className="text-xs text-[#52525B] leading-relaxed pt-0.5">
                            {stop.description}
                          </p>

                          {/* Tech Tools & Deep Dive Link */}
                          <div className="pt-3 border-t border-[#F4F2EC] flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap gap-1.5">
                              {stop.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2 py-0.5 rounded text-[9.5px] font-mono font-medium bg-[#F2F2ED] text-[#52525B] border border-[#EBE8E1]"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>

                            <Link
                              href={stop.link}
                              className="inline-flex items-center space-x-1 text-[11px] font-bold text-[#18181B] hover:text-[#2E6FA0] transition-colors shrink-0"
                            >
                              <span>Experience page</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtext */}
          <span className="text-[10px] text-[#A1A1AA] block pt-3 pl-5 font-mono">
            Hover over any stop to open its analytical summary in place.
          </span>
        </div>
      </div>
    </section>
  );
}

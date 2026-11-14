"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ImageGallery } from "@/components/ui/ImageLightbox";
import { Visuals3DCylindricalCarousel } from "@/components/projects/Visuals3DCylindricalCarousel";
import { GeospatialArchitectureSection } from "@/components/projects/GeospatialArchitectureSection";
import { AdiraGeocodingSection } from "@/components/projects/AdiraGeocodingSection";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  BarChart2,
  FileText,
  PlayCircle,
  Copy,
  Check,
  Calendar,
  Clock,
  User,
  Layers,
  Sparkles,
  Database,
  Briefcase,
  Code,
} from "lucide-react";

interface ProjectDetailTemplateProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
  isModal?: boolean;
  onClose?: () => void;
  onSelectProject?: (project: Project) => void;
}

export function ProjectDetailTemplate({
  project,
  prevProject,
  nextProject,
  isModal = false,
  onClose,
  onSelectProject,
}: ProjectDetailTemplateProps) {
  // Active workflow stage for Project #1
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);
  const [activeSnippetIndex, setActiveSnippetIndex] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Determine which links are available and have non-empty URLs
  const links = project.links || {};
  const hasReport = !!links.report && links.report.trim() !== "";
  const hasDashboard = !!links.dashboard && links.dashboard.trim() !== "";
  const hasStreamlit = !!links.streamlit && links.streamlit.trim() !== "";
  const hasGithub = !!links.github && links.github.trim() !== "";
  const hasColab = !!links.colab && links.colab.trim() !== "";
  const hasAnyLink = hasReport || hasDashboard || hasStreamlit || hasGithub || hasColab;

  const isBlibli = project.slug === "live-studio-performance-dashboard-blibli";
  const isGeospatial = project.slug === "web-based-geospatial-visualization-pt-xyz";
  const isAdiraGeocoding = project.slug === "customer-address-geocoding-workflow-adira-finance";
  const isTikTok = project.slug === "tiktok-shop-live-video-performance-dashboard";
  const isCreditRisk = project.slug === "credit-risk-prediction";
  const isDataQuality = project.slug === "e-commerce-data-quality-analysis";
  const isMovieRec = project.slug === "movies-tv-shows-recommendation-system";
  const isRuangguru = project.slug === "customer-review-analysis-ruangguru";
  const isBoycottSentiment = project.slug === "sentiment-analysis-boycott-opinion";
  const isCustomerClustering = project.slug === "customer-clustering-analysis-pt-abc";
  const isHeartDisease = project.slug === "heart-disease-analysis";
  const isWeatherPrediction = project.slug === "weather-prediction-model";
  const isDdosAttack = project.slug === "ddos-attack-analysis";
  const isBmiClustering = project.slug === "clustering-data-body-mass-index";
  const isWatsons = project.slug === "database-system-watsons-indonesia";
  const isSupermarket = project.slug === "database-system-xyz-supermarket";
  const isNikmatRestaurant = project.slug === "database-system-nikmat-restaurant";
  const isJakartaElectionEtl = project.slug === "etl-pipeline-jakarta-election-2017";
  const isTransactionEtl = project.slug === "etl-pipeline-transaction-data-integration";
  const isSalesEtl = project.slug === "etl-pipeline-sales-dataset";
  const isMovieEtl = project.slug === "etl-pipeline-movie-dataset";

  const getVisualsTitle = () => {
    if (
      isJakartaElectionEtl ||
      isTransactionEtl ||
      isSalesEtl ||
      isMovieEtl ||
      isAdiraGeocoding
    ) {
      return "Pipeline Architecture & Workflow Diagrams";
    }

    if (isWatsons || isSupermarket || isNikmatRestaurant) {
      return "Database Architecture & Schema Diagrams";
    }

    if (isMovieRec) {
      return "Application Interface & Visual Analytics";
    }

    if (
      isCreditRisk ||
      isDataQuality ||
      isCustomerClustering ||
      isHeartDisease ||
      isWeatherPrediction ||
      isDdosAttack ||
      isBmiClustering
    ) {
      return "Analytical Visualizations & Model Evaluation";
    }

    if (isBoycottSentiment) {
      return "Analytical Visualizations & Sentiment Charts";
    }

    if (isBlibli || isTikTok || isRuangguru || isGeospatial || project.slug === "sales-data-analysis") {
      return "Project Visuals & Interactive Dashboards";
    }

    const categories = Array.isArray(project.category) ? project.category : [project.category];
    if (categories.some((c) => c.includes("Database"))) {
      return "Database Architecture & Schema Diagrams";
    }
    if (categories.some((c) => c.includes("ETL") || c.includes("Pipeline"))) {
      return "Pipeline Architecture & Workflow Diagrams";
    }
    if (categories.some((c) => c.includes("Data Science"))) {
      return "Analytical Visualizations & Model Evaluation";
    }
    if (categories.some((c) => c.includes("Business Intelligence"))) {
      return "Project Visuals & Interactive Dashboards";
    }

    return "Project Visuals & Documentation";
  };

  return (
    <div className={`max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 ${isModal ? "py-4 sm:py-6 space-y-6" : "py-6 md:py-10 space-y-8"}`}>
      {/* Top Breadcrumb Navigation (hidden if rendered in modal since modal has sticky top bar) */}
      {!isModal && (
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
          <Link
            href="/projects"
            target="_self"
            className="inline-flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[#64748B] hover:text-[#0F172A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center space-x-1.5">
            <span className="px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
              Project #{project.id}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-[#F2F2ED] text-[#71717A] border border-[#EBE8E1]">
              {Array.isArray(project.category) ? project.category.join(" · ") : project.category}
            </span>
          </div>
        </div>
      )}

      {/* 1. HERO / HEADER */}
      <section className={`${isModal ? "space-y-3" : "space-y-4"}`}>
        {/* Badges Bar: Affiliation, Type, Domain, Year, Role, Duration */}
        <div className="flex flex-wrap items-center gap-1.5">
          {project.affiliation && (
            <span className="px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-[#18181B] text-white">
              {project.affiliation}
            </span>
          )}

          {project.projectType && (
            <span className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
              {project.projectType}
            </span>
          )}

          {project.domain && (
            <span className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-[#F2F2ED] text-[#52525B] border border-[#EBE8E1]">
              {project.domain}
            </span>
          )}

          {project.year && (
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-[#F2F2ED] text-[#71717A] border border-[#EBE8E1]">
              <Calendar className="w-2.5 h-2.5 text-[#71717A]" />
              <span>{project.year}</span>
            </span>
          )}

          {project.duration && (
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-[#F2F2ED] text-[#71717A] border border-[#EBE8E1]">
              <Clock className="w-2.5 h-2.5 text-[#71717A]" />
              <span>{project.duration}</span>
            </span>
          )}

          {project.role && (
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-[#F2F2ED] text-[#71717A] border border-[#EBE8E1]">
              <User className="w-2.5 h-2.5 text-[#71717A]" />
              <span>{project.role}</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1.5 pt-1">
          <h1 className={`${isModal ? "text-lg sm:text-xl md:text-2xl" : "text-xl sm:text-2xl lg:text-[28px]"} font-serif font-bold text-[#18181B] tracking-tight leading-snug`}>
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* 2. TECH TAGS */}
        {project.tools && project.tools.length > 0 && (
          <div className="pt-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block mb-1.5">
              Tools Used:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#F2F2ED] text-[#52525B] border border-[#EBE8E1]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 3. LINK BUTTONS (Only show when URL is filled and not empty) */}
        {hasAnyLink && (
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {hasReport && (
              <a
                href={links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isAdiraGeocoding ? "View Documentation" : "View Report"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {hasDashboard && (
              <a
                href={links.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E6FA0] text-white hover:bg-[#3B493D] transition-all shadow-xs"
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>{isRuangguru ? "Open in Looker" : "Open Dashboard"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {hasStreamlit && (
              <a
                href={links.streamlit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF3F8] text-[#0F172A] border border-[#D8D4E5] hover:bg-[#DCD8EA] transition-all shadow-xs"
              >
                <PlayCircle className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Launch Streamlit App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {hasGithub && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-all shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {hasColab && (
              <a
                href={links.colab}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F59E0B]/10 text-[#B45309] border border-[#FCD34D] hover:bg-[#F59E0B]/20 transition-all shadow-xs"
              >
                <Code className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Open in Colab</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </section>

      {/* 2. GALLERY / PROJECT VISUALS / LIVE DASHBOARDS */}
      {project.gallery && project.gallery.length > 0 && (
        isGeospatial || isBlibli || isTikTok || isCreditRisk || isDataQuality || isMovieRec || isBoycottSentiment || isCustomerClustering || isHeartDisease || isWeatherPrediction || isDdosAttack || isRuangguru || isBmiClustering || isWatsons || isSupermarket || isNikmatRestaurant || isJakartaElectionEtl || isTransactionEtl || isSalesEtl || isMovieEtl ? (
          <div className="space-y-3 pt-5 border-t border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
                {getVisualsTitle()}
              </h2>
              {isRuangguru && links.dashboard && (
                <a
                  href={links.dashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#2E6FA0] text-white hover:bg-[#1E4D70] transition-all shadow-xs shrink-0 self-start sm:self-auto"
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Open in Looker</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>

            {project.confidentialityNote && (
              <div className={`${isModal ? "p-3.5 sm:p-4 rounded-xl" : "p-4 sm:p-5 rounded-2xl"} bg-[#F2F2ED] border border-[#EBE8E1] flex items-start space-x-3 text-xs text-[#52525B] leading-relaxed`}>
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#18181B] block mb-0.5">
                    Confidentiality &amp; Compliance Statement:
                  </span>
                  <span>{project.confidentialityNote}</span>
                </div>
              </div>
            )}

            <Visuals3DCylindricalCarousel items={project.gallery} />
          </div>
        ) : isAdiraGeocoding ? null : (
          <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
                {getVisualsTitle()}
              </h2>
              <span className="text-xs text-[#64748B]">
                Click any visual to inspect in full resolution
              </span>
            </div>

            {project.confidentialityNote && (
              <div className={`${isModal ? "p-3.5 sm:p-4 rounded-xl" : "p-4 sm:p-5 rounded-2xl"} bg-[#F2F2ED] border border-[#EBE8E1] flex items-start space-x-3 text-xs text-[#52525B] leading-relaxed`}>
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#18181B] block mb-0.5">
                    Confidentiality &amp; Compliance Statement:
                  </span>
                  <span>{project.confidentialityNote}</span>
                </div>
              </div>
            )}

            <ImageGallery items={project.gallery} />
          </section>
        )
      )}

      {/* DEDICATED DATA ARCHITECTURE, STAR SCHEMA & PHYSICAL ERD SECTION */}
      {isGeospatial && <GeospatialArchitectureSection />}

      {/* DEDICATED ADIRA GEOCODING WORKFLOW & PRESENTATION DECK SECTION */}
      {isAdiraGeocoding && <AdiraGeocodingSection />}

      {/* SPECIAL FOR EXTENDED PROJECTS: KEY IMPACT METRICS */}
      {!isBlibli && project.keyImpactMetrics && project.keyImpactMetrics.length > 0 && (
        <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E6FA0]">
              {isBlibli ? "Commercial Impact" : "Executive Impact & Core Metrics"}
            </span>
            <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
              {isBlibli
                ? "Executive Live Studio Command Center — Key Impact Metrics"
                : `${project.title} — Key Impact Metrics`}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {project.keyImpactMetrics.map((kim, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-[#EBE8E1] ${isModal ? "p-4 sm:p-5 space-y-1" : "p-6 space-y-2"} editorial-shadow hover:border-[#D4D0C8] transition-colors`}
              >
                <span className="text-[11px] text-[#64748B] font-semibold uppercase tracking-wider block">
                  {kim.metric}
                </span>
                <div className={`${isModal ? "text-xl sm:text-2xl" : "text-3xl"} font-extrabold text-[#0F172A] tracking-tight`}>
                  {kim.value}
                </div>
                <p className="text-[11px] sm:text-xs text-[#64748B]">{kim.note}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. PROJECT OVERVIEW */}
      {project.overview && (
        <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
          <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
            Project Overview
          </h2>
          <div className={`bg-white ${isModal ? "rounded-xl p-4 sm:p-5 space-y-2.5" : "rounded-2xl p-5 sm:p-6 space-y-3"} border border-[#EBE8E1] shadow-2xs`}>
            <p className="text-xs sm:text-[13px] text-[#52525B] leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>

            {/* Commercial Context Questions */}
            {project.commercialContext && project.commercialContext.questions && (
              <div className="pt-3 border-t border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
                  {isBlibli ? "Business stakeholders needed answers to:" : "Key Analytical & Business Questions Addressed:"}
                </span>
                <ul className="space-y-1.5">
                  {project.commercialContext.questions.map((q, qIdx) => (
                    <li
                      key={qIdx}
                      className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* PROBLEM STATEMENT & ANALYTICAL OBJECTIVES */}
      {project.problemStatement && (
        <section className="space-y-4 pt-5 border-t border-[#E2E8F0]">
          <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
            Problem Statement &amp; Analytical Objectives
          </h2>

          <div className={`${isModal ? "p-4 sm:p-5 rounded-2xl" : "p-6 rounded-3xl"} bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-1.5`}>
            <span className="font-bold text-[11px] uppercase tracking-wider text-amber-800 flex items-center space-x-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>The Core Operational Bottleneck</span>
            </span>
            <p className={`${isModal ? "text-xs sm:text-sm" : "text-sm"} text-amber-900 leading-relaxed`}>
              {project.problemStatement.bottleneck}
            </p>
          </div>

          <div className={`bg-white ${isModal ? "rounded-2xl p-5 space-y-2.5" : "rounded-3xl p-6 sm:p-8 space-y-3"} border border-[#E2E8F0] editorial-shadow`}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
              Project Objectives:
            </span>
            <ul className="space-y-2">
              {project.problemStatement.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* DATASET SCOPE & ANALYTICAL METHODOLOGY */}
      {project.datasetScopeDetails && (
        <section className="space-y-4 pt-5 border-t border-[#E2E8F0]">
          <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
            Dataset Scope &amp; Analytical Methodology
          </h2>

          <div className={`bg-white ${isModal ? "rounded-2xl p-5 space-y-3" : "rounded-3xl p-6 sm:p-8 space-y-4"} border border-[#E2E8F0] editorial-shadow`}>
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
                Data Scope &amp; Hygiene Standards:
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {project.datasetScopeDetails.standards}
              </p>
            </div>

            {project.datasetScopeDetails.statChips && (
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#EBE8E1]">
                {project.datasetScopeDetails.statChips.map((chip) => (
                  <span
                    key={chip}
                    className={`rounded-md font-semibold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1] ${isModal ? "px-2 py-0.5 text-[10.5px]" : "px-2.5 py-1 text-xs"}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>

          {project.methodologyExecution && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
                Methodology Execution:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.methodologyExecution.map((m) => (
                  <div
                    key={m.step}
                    className={`bg-white ${isModal ? "rounded-xl p-3.5 space-y-1" : "rounded-2xl p-5 space-y-2"} border border-[#E2E8F0] editorial-shadow hover:-translate-y-0.5 transition-transform`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-[#EBF3F8] text-[#0F172A] font-bold text-xs flex items-center justify-center">
                        {m.step}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">{m.title}</h4>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed pl-7">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* CLICKABLE METHODOLOGY WORKFLOW */}
      {project.workflowSteps && project.workflowSteps.length > 0 && (
        <section className="space-y-4 pt-5 border-t border-[#E2E8F0]">
          <div className="space-y-0.5">
            <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
              Clickable Methodology &amp; Engineering Workflow
            </h2>
            <p className="text-[11px] sm:text-xs text-[#64748B] font-medium">
              Tap each stage to inspect pipeline engineering actions
            </p>
          </div>

          {/* Stages Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {project.workflowSteps.map((ws, idx) => {
              const isActive = activeWorkflowIndex === idx;
              return (
                <button
                  key={ws.step}
                  type="button"
                  onClick={() => setActiveWorkflowIndex(idx)}
                  className={`${isModal ? "p-3 rounded-xl" : "p-4 rounded-2xl"} border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md"
                      : "bg-white text-[#0F172A] border-[#E2E8F0] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block ${
                      isActive ? "text-[#D6E6F2]" : "text-[#2E6FA0]"
                    }`}
                  >
                    {ws.step}
                  </span>
                  <div className="font-bold text-xs sm:text-sm mt-0.5">{ws.title}</div>
                  <div
                    className={`text-[11px] mt-0.5 line-clamp-1 ${
                      isActive ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {ws.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          {project.workflowSteps[activeWorkflowIndex] && (
            <div className={`bg-white ${isModal ? "rounded-2xl p-4 sm:p-5 space-y-3" : "rounded-3xl p-6 sm:p-8 space-y-4"} border border-[#E2E8F0] editorial-shadow`}>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E6FA0]">
                    {project.workflowSteps[activeWorkflowIndex].step} ·{" "}
                    {project.workflowSteps[activeWorkflowIndex].title}
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {project.workflowSteps[activeWorkflowIndex].subtitle}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {project.workflowSteps[activeWorkflowIndex].description && (
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {project.workflowSteps[activeWorkflowIndex].description}
                  </p>
                )}

                {(project.workflowSteps[activeWorkflowIndex].deepDiveActions || project.workflowSteps[activeWorkflowIndex].details) && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-2">
                      Key Engineering Actions:
                    </span>
                    <ul className="space-y-2">
                      {(project.workflowSteps[activeWorkflowIndex].deepDiveActions || project.workflowSteps[activeWorkflowIndex].details || []).map((act, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      )}

      {/* TECHNICAL IMPLEMENTATION & CODE */}
      {Boolean(project.codeSnippets?.length || project.codeSnippet) && (() => {
        const snippets = project.codeSnippets && project.codeSnippets.length > 0
          ? project.codeSnippets
          : project.codeSnippet ? [project.codeSnippet] : [];
        const currentSnippet = snippets[activeSnippetIndex] || snippets[0];
        if (!currentSnippet) return null;

        return (
          <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
                  Technical Implementation &amp; Code
                </h2>
                <p className="text-xs text-[#64748B]">{currentSnippet.subtitle}</p>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => handleCopyCode(currentSnippet.code)}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all cursor-pointer shadow-xs"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                </button>
              </div>
            </div>

            {snippets.length > 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {snippets.map((snip, idx) => (
                  <button
                    key={snip.title}
                    type="button"
                    onClick={() => setActiveSnippetIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-tight transition-all cursor-pointer ${
                      activeSnippetIndex === idx
                        ? "bg-[#0F172A] text-white shadow-xs"
                        : "bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0]"
                    }`}
                  >
                    {snip.title}
                  </button>
                ))}
              </div>
            )}

            <div className={`${isModal ? "rounded-2xl" : "rounded-3xl"} overflow-hidden border border-[#0F172A] bg-[#1E1F1C] text-white shadow-xl`}>
              <div className={`${isModal ? "px-4 py-2.5" : "px-6 py-3.5"} bg-[#2A2B27] border-b border-[#3E4039] flex items-center justify-between text-xs`}>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-[#D6E6F2]">
                    {currentSnippet.title}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#33352E] text-[#94A3B8] border border-[#3E4039]">
                    Scrollable Code
                  </span>
                </div>
                <span className="text-[#A3A299] uppercase font-mono text-[11px]">
                  {currentSnippet.language}
                </span>
              </div>
              <p className={`${isModal ? "px-4 pt-3 pb-2 text-[11px]" : "px-6 pt-3 pb-2 text-xs"} text-[#94A3B8] border-b border-[#2A2B27]`}>
                {currentSnippet.description}
              </p>

              <pre className={`${isModal ? "p-4 text-xs h-[280px]" : "p-6 text-xs sm:text-sm h-[320px]"} font-mono leading-relaxed overflow-y-auto overflow-x-auto text-[#E6E4DD]`}>
                <code>{currentSnippet.code}</code>
              </pre>
            </div>
          </section>
        );
      })()}

      {/* 5. KEY NUMBERS (Chips) — Shown if present and not redundant */}
      {!project.keyImpactMetrics && project.keyNumbers && project.keyNumbers.length > 0 && (
        <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2E6FA0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Metrics &amp; Dataset Scope</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.keyNumbers.map((kn) => (
              <span
                key={kn}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-[#18181B] border border-[#EBE8E1] shadow-2xs"
              >
                {kn}
              </span>
            ))}
          </div>

          {/* Optional visual chart representation for Sentiment Analysis project */}
          {project.slug === "sentiment-analysis-boycott-opinion" && (
            <div className="mt-4 p-5 rounded-3xl bg-white border border-[#E2E8F0] editorial-shadow space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
                Sentiment Polarity Breakdown
              </span>
              <div className="w-full h-5 rounded-full overflow-hidden flex bg-[#EBF3F8]">
                <div
                  className="bg-[#10B981] h-full transition-all"
                  style={{ width: "60.9%" }}
                  title="Positive: 60.9%"
                />
                <div
                  className="bg-[#FBBF24] h-full transition-all"
                  style={{ width: "19.9%" }}
                  title="Neutral: 19.9%"
                />
                <div
                  className="bg-[#F87171] h-full transition-all"
                  style={{ width: "19.2%" }}
                  title="Negative: 19.2%"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between text-xs text-[#64748B] pt-1">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="font-semibold text-[#0F172A]">60.9% Positive</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                  <span className="font-semibold text-[#0F172A]">19.9% Neutral</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
                  <span className="font-semibold text-[#0F172A]">19.2% Negative</span>
                </span>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 6. WORK DONE (Bullet points) */}
      {project.workDone && project.workDone.length > 0 && (
        <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
          <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
            Work Done &amp; Achievements
          </h2>
          <div className={`bg-white ${isModal ? "rounded-xl p-4 sm:p-5" : "rounded-2xl p-5 sm:p-6"} border border-[#EBE8E1] shadow-2xs`}>
            <ul className="space-y-2.5">
              {project.workDone.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-2.5 text-xs sm:text-[13px] text-[#27272A] leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 7. KEY LEARNINGS (Paragraph) */}
      {project.keyLearnings && (
        <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
          <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
            Key Learnings &amp; Engineering Reflection
          </h2>
          <div className={`bg-white ${isModal ? "rounded-xl p-4 sm:p-5" : "rounded-2xl p-5 sm:p-6"} border border-[#EBE8E1] shadow-2xs`}>
            <p className="text-xs sm:text-[13px] text-[#52525B] leading-relaxed whitespace-pre-line">
              {project.keyLearnings}
            </p>
          </div>
        </section>
      )}

      {/* 8. SQL TOPICS EXPLORED (Only for Database Projects) */}
      {project.sqlTopics && project.sqlTopics.length > 0 && (
        <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2E6FA0]">
            <Database className="w-3.5 h-3.5" />
            <span>SQL Topics Explored</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.sqlTopics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] shadow-2xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* KEY FINDINGS & COMMERCIAL RECOMMENDATIONS */}
      {project.keyFindings && (
        <section className="space-y-4 pt-5 border-t border-[#E2E8F0]">
          <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
            Key Findings &amp; Business Recommendations
          </h2>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
              Quantitative Findings:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFindings.quantitative.map((f, fIdx) => (
                <div
                  key={fIdx}
                  className={`bg-white ${isModal ? "rounded-xl p-3.5 space-y-1" : "rounded-2xl p-5 space-y-1.5"} border border-[#E2E8F0] editorial-shadow`}
                >
                  <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">{f.title}</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-white ${isModal ? "rounded-2xl p-5 space-y-2.5" : "rounded-3xl p-6 sm:p-8 space-y-3"} border border-[#E2E8F0] editorial-shadow`}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E6FA0] block">
              Strategic &amp; Commercial Recommendations:
            </span>
            <ul className="space-y-2">
              {project.keyFindings.recommendations.map((rec, rIdx) => (
                <li
                  key={rIdx}
                  className="flex items-start space-x-2 text-xs sm:text-sm text-[#0F172A]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CHALLENGES & ENGINEERING LEARNINGS */}
      {project.challengesLearnings && (
        <section className="space-y-3 pt-5 border-t border-[#E2E8F0]">
          <h2 className={`${isModal ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-[#18181B]`}>
            Challenges &amp; Engineering Learnings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.challengesLearnings.map((cl, clIdx) => (
              <div
                key={clIdx}
                className={`bg-white ${isModal ? "rounded-xl p-3.5 space-y-1" : "rounded-2xl p-5 space-y-1.5"} border border-[#E2E8F0] editorial-shadow`}
              >
                <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">{cl.title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">{cl.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}




      {/* 10. PREV / NEXT PROJECT NAVIGATION */}
      <div className={`${isModal ? "pt-6" : "pt-10"} border-t border-[#EBE8E1] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6`}>
        {isModal && onSelectProject ? (
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE8E1] hover:border-[#D4D0C8] hover:shadow-lg transition-all flex flex-col justify-between text-left cursor-pointer"
          >
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#71717A]">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors mt-1.5">
              #{prevProject.id} · {prevProject.title}
            </span>
          </button>
        ) : (
          <Link
            href={`/projects/${prevProject.slug}`}
            target="_self"
            className="group p-6 rounded-3xl bg-white border border-[#EBE8E1] hover:border-[#D4D0C8] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#71717A]">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <span className="text-base sm:text-lg font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors mt-2">
              #{prevProject.id} · {prevProject.title}
            </span>
          </Link>
        )}

        {isModal && onSelectProject ? (
          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE8E1] hover:border-[#D4D0C8] hover:shadow-lg transition-all flex flex-col justify-between sm:items-end text-left sm:text-right cursor-pointer"
          >
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#71717A]">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="text-sm sm:text-base font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors mt-1.5">
              #{nextProject.id} · {nextProject.title}
            </span>
          </button>
        ) : (
          <Link
            href={`/projects/${nextProject.slug}`}
            target="_self"
            className="group p-6 rounded-3xl bg-white border border-[#EBE8E1] hover:border-[#D4D0C8] hover:shadow-lg transition-all flex flex-col justify-between sm:items-end text-left sm:text-right"
          >
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#71717A]">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="text-base sm:text-lg font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors mt-2">
              #{nextProject.id} · {nextProject.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

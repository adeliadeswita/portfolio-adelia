"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Download,
  User,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { useCvModal } from "@/context/CvModalContext";

export type AboutModalTab = "bio" | "academic";

interface AboutProfileModalProps {
  isOpen: boolean;
  activeTab: AboutModalTab;
  onClose: () => void;
  onTabChange: (tab: AboutModalTab) => void;
}

export function AboutProfileModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: AboutProfileModalProps) {
  const { openCvModal } = useCvModal();
  const academic = profileData.academicBackground[0];

  // Close on Escape key & Lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E2E8F0] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Header Bar with Tabs & Close Button */}
        <div className="p-4 sm:p-5 pb-3 border-b border-[#E2E8F0] flex items-center justify-between gap-3 bg-[#F8FAFC]/90 backdrop-blur-xs">
          {/* Tabs */}
          <div className="flex items-center space-x-1.5 p-1 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs">
            <button
              type="button"
              onClick={() => onTabChange("bio")}
              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "bio"
                  ? "bg-[#2E6FA0] text-white shadow-xs"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>About Me &amp; Bio</span>
            </button>

            <button
              type="button"
              onClick={() => onTabChange("academic")}
              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "academic"
                  ? "bg-[#2E6FA0] text-white shadow-xs"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic &amp; Thesis</span>
            </button>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF3F8] border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* ========================================================= */}
          {/* TAB 1: ABOUT ME & FULL NARRATIVE                          */}
          {/* ========================================================= */}
          {activeTab === "bio" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Profile Header Summary */}
              <div className="flex items-center space-x-4 pb-4 border-b border-[#E2E8F0]">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-[#E2E8F0] shadow-xs">
                  <Image
                    src="/images/profile/adelia-portrait.jpg?v=2"
                    alt={profileData.name}
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {profileData.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#2E6FA0]">
                    Fresh Graduate in Information Systems (Cum Laude) · Data Analyst &amp; Business Intelligence
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                {profileData.bioFull.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#64748B]">
                  Based in Jakarta, Indonesia · Open for work
                </span>
                <button
                  type="button"
                  onClick={openCvModal}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E6FA0] text-white hover:bg-[#23567D] transition-all shadow-xs cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View CV (PDF)</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: ACADEMIC FOUNDATION & UNDERGRADUATE THESIS         */}
          {/* ========================================================= */}
          {activeTab === "academic" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Degree & Honors Header */}
              <div className="space-y-2 pb-4 border-b border-[#E2E8F0]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
                    Aug 2022 – Sep 2026
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
                      GPA: 3.91 / 4.00
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]">
                      <Award className="w-3 h-3 text-[#2E6FA0]" />
                      <span>Cum Laude</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">
                    {academic.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    {academic.institution}
                  </p>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
                  Relevant Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {academic.relevantCourses?.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F8FAFC] text-[#1E293B] border border-[#E2E8F0]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
                  Academic Highlights:
                </span>
                <ul className="space-y-1.5">
                  {academic.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start space-x-2 text-xs text-[#475569] leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Undergraduate Thesis */}
              <div className="p-4 rounded-2xl bg-[#F2F2ED] border border-[#EBE8E1] space-y-2.5 pt-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E6FA0] flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#2E6FA0]" />
                    <span>Undergraduate Thesis</span>
                  </span>
                  <Link
                    href="/projects/web-based-geospatial-visualization-pt-xyz"
                    target="_self"
                    onClick={onClose}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#2E6FA0] hover:text-[#23567D] transition-colors"
                  >
                    <span>View in Projects</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug">
                  Undergraduate Thesis: Design and Development of a Web-Based Geospatial Visualization for Customer Distribution and Segmentation (Case Study: PT XYZ)
                </h4>

                <p className="text-xs text-[#475569] leading-relaxed">
                  Translates tabular transaction data into interactive spatial distributions, catchment zones, and customer segmentation layers to support strategic territorial expansion for PT XYZ.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

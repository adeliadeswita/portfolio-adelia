"use client";

import React, { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Download,
  Copy,
  Check,
  FileText,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { PinkCatLogo } from "@/components/ui/PinkCatLogo";
import { profileData } from "@/data/profile";
import { useCvModal } from "@/context/CvModalContext";

interface HomeContactSectionProps {
  sectionNumber?: string;
  tagLabel?: string;
}

export function HomeContactSection({
  sectionNumber = "05 /",
  tagLabel = "Get In Touch",
}: HomeContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const { openCvModal } = useCvModal();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-3xl bg-white border border-[#EBE8E1] p-6 sm:p-8 lg:p-10 shadow-xs"
    >
      {/* Subtle background ambient warmth */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Narrative & Availability (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div className="space-y-3.5">
            {/* Section Tag & Live Availability Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#71717A]">
                {sectionNumber && <span className="text-[#2E6FA0] font-bold">{sectionNumber}</span>}
                <span>{tagLabel}</span>
              </div>
              <span className="text-[#D4D0C8]">·</span>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>Open to Work · Jakarta</span>
              </div>
            </div>

            {/* Editorial Headline: Let's chat! moved to new line below */}
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] tracking-tight leading-tight">
              Have an opportunity in mind?
              <br />
              <span className="italic font-normal text-[#2E6FA0]">Let&apos;s chat!</span>
            </h3>

            {/* Narrative Body */}
            <div className="space-y-2.5 text-xs sm:text-[13px] text-[#52525B] leading-relaxed max-w-xl">
              <p>
                Always happy to connect, exchange ideas, and explore new opportunities in Business Intelligence and Data Analytics. Whether it&apos;s a job opportunity, a potential collaboration, or simply a good conversation, my inbox is always open.
              </p>
              <p className="text-[#71717A]">
                Feel free to say hi via email, find me on LinkedIn, or take a look at what I&apos;ve been working on GitHub!
              </p>
            </div>
          </div>

          {/* Mascot Note & Sign-off */}
          <div className="pt-3 border-t border-[#F4F2EC] flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200/80 flex items-center justify-center shrink-0 shadow-2xs">
              <PinkCatLogo className="w-5 h-5" />
            </div>
            <p className="text-[11px] text-[#71717A] font-mono">
              Looking forward to connecting
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Action Hub (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          {/* 1. Primary Highlight Card: Direct Email */}
          <div className="relative bg-[#18181B] text-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA] flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Primary Channel</span>
                </span>
                <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/90">
                  Direct Inbox
                </span>
              </div>

              <div>
                <span className="text-white/60 block font-mono text-[9.5px]">Direct Email</span>
                <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-[#60A5FA] transition-colors break-all">
                  {profileData.email}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-[#2E6FA0] hover:bg-[#23567D] text-white text-[10.5px] font-bold uppercase tracking-wider transition-colors shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Write Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center space-x-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[10.5px] font-mono font-semibold transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/80" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 2. Secondary Social Action Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 rounded-xl bg-[#F2F2ED] hover:bg-white border border-[#EBE8E1] hover:border-[#D4D0C8] hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-[#71717A] group-hover:text-[#2E6FA0]">
                <LinkedinIcon className="w-4 h-4" />
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors block">
                  LinkedIn
                </span>
                <span className="text-[10px] text-[#71717A] font-mono">
                  Connect &amp; network
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 rounded-xl bg-[#F2F2ED] hover:bg-white border border-[#EBE8E1] hover:border-[#D4D0C8] hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-[#71717A] group-hover:text-[#18181B]">
                <GithubIcon className="w-4 h-4" />
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors block">
                  GitHub
                </span>
                <span className="text-[10px] text-[#71717A] font-mono">
                  Explore code repos
                </span>
              </div>
            </a>
          </div>

          {/* 3. View / Download CV Bar */}
          <button
            type="button"
            onClick={openCvModal}
            className="w-full text-left p-3 sm:p-3.5 rounded-xl bg-[#F2F2ED] hover:bg-white border border-[#EBE8E1] hover:border-[#D4D0C8] hover:shadow-xs transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#EBE8E1] flex items-center justify-center text-[#2E6FA0] group-hover:bg-[#F2F2ED] group-hover:border-[#D4D0C8] transition-colors shrink-0">
                <FileText className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#18181B] group-hover:text-[#2E6FA0] transition-colors block leading-tight">
                  Curriculum Vitae
                </span>
                <span className="text-[9.5px] text-[#71717A] font-mono">
                  Interactive PDF preview &amp; download options
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#2E6FA0] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
              View CV →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

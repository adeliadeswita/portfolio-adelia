import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Layers,
  Mail,
  Award,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { HomeHeroEditorial } from "@/components/home/HomeHeroEditorial";
import { HomeJourneyTimeline } from "@/components/home/HomeJourneyTimeline";
import { HomeCompactProjects } from "@/components/home/HomeCompactProjects";
import { HomeSkillsOverview } from "@/components/home/HomeSkillsOverview";
import { HomeCertificationsCarousel } from "@/components/home/HomeCertificationsCarousel";
import { certificationsData } from "@/data/certifications";
import { HomeContactSection } from "@/components/home/HomeContactSection";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { FadeIn } from "@/components/ui/MotionWrapper";

export default function HomePage() {
  return (
    <div className="space-y-14 sm:space-y-20 py-6 md:py-10 overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. TOP BLOCK: HERO & CAREER JOURNEY                       */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 space-y-14 md:space-y-20">
        {/* HERO SECTION */}
        <HomeHeroEditorial />

        {/* EXPERIENCE PREVIEW */}
        <FadeIn direction="up" delay={0.1}>
          <HomeJourneyTimeline />
        </FadeIn>
      </div>

      {/* ========================================================= */}
      {/* 2. FEATURED PROJECTS SECTION                              */}
      {/* ========================================================= */}
      <section
        id="selected-projects"
        className="w-full bg-white border-y border-[#EBE8E1] py-12 sm:py-16"
      >
        <FadeIn direction="up" delay={0.15}>
          <HomeCompactProjects />
        </FadeIn>
      </section>

      {/* ========================================================= */}
      {/* 3. BOTTOM BLOCK: SKILLS, CERTIFICATIONS & CONTACT         */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 space-y-14 md:space-y-20">
        {/* SKILLS OVERVIEW */}
        <FadeIn direction="up" delay={0.1}>
          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-[#EBE8E1]">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#71717A] mb-1">
                  <span className="text-[#2E6FA0] font-bold">03 /</span>
                  <span>Technology Stack &amp; Tools</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#18181B] tracking-tight">
                  Tools &amp; Technical Competencies
                </h2>
              </div>
              <span className="text-[11px] text-[#71717A] font-medium">
                Hover or tap any tool to inspect production scope
              </span>
            </div>

            <HomeSkillsOverview />
          </section>
        </FadeIn>

        {/* COURSES & CERTIFICATIONS */}
        <FadeIn direction="up" delay={0.1}>
          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-[#EBE8E1]">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#71717A] mb-1">
                  <span className="text-[#2E6FA0] font-bold">04 /</span>
                  <span>Certifications &amp; Credentials</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#18181B] tracking-tight">
                  Certifications &amp; Credentials
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1] self-start sm:self-auto">
                {certificationsData.length} Credentials Verified
              </span>
            </div>

            <HomeCertificationsCarousel />
          </section>
        </FadeIn>

        {/* 05 / GET IN TOUCH (Interactive & Balanced Hub) */}
        <FadeIn direction="up" delay={0.1}>
          <HomeContactSection />
        </FadeIn>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { experiencesData } from "@/data/experience";
import { organizationsData } from "@/data/organizations";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { OrganizationExperienceSection } from "@/components/experience/OrganizationExperienceSection";
import { SectionJumpBar } from "@/components/ui/SectionJumpBar";
import { Briefcase, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience — Adelia Deswita | Professional Track Record",
  description:
    "Explore Adelia Deswita's professional timeline across Blibli, Amartha Financial, Adira Finance, Ivosights, and Home Credit Indonesia, along with organizational leadership at KSM VeteranTech UPNVJ.",
};

export default function ExperiencePage() {
  const jumpItems = [
    {
      id: "work-experience",
      label: "Work Experience",
      count: experiencesData.length,
      icon: <Briefcase className="w-3.5 h-3.5" />,
    },
    {
      id: "organization-experience",
      label: "Organizational Experience",
      count: organizationsData.length,
      icon: <Users className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 py-6 md:py-10 space-y-8">
      {/* Sticky Section Jump Bar */}
      <SectionJumpBar items={jumpItems} />

      {/* 1. Main Industry Roles Section (Exact match to media_1794551103790_1f608512.jpg) */}
      <section id="work-experience" className="space-y-4 pt-1 scroll-mt-24">
        <div className="space-y-1 pb-2.5 border-b border-[#EBE8E1]">
          <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2E6FA0]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY ROLES</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#18181B] tracking-tight">
            Work Experience
          </h1>
          <p className="text-xs text-[#71717A]">
            5 industry internships across Business Intelligence, Payment Analytics, Data Cleansing, and Risk Modeling.
          </p>
        </div>

        <ExperienceTimeline experiences={experiencesData} />
      </section>

      {/* 2. Organizational & Leadership Experience Section */}
      <section id="organization-experience" className="space-y-5 pt-8 border-t border-[#EBE8E1] scroll-mt-24">
        <div className="space-y-1 pb-2.5 border-b border-[#EBE8E1]">
          <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2E6FA0]">
            <Users className="w-3.5 h-3.5" />
            <span>COMMUNITY &amp; ACADEMIC LEADERSHIP</span>
          </div>
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#18181B] tracking-tight">
            Organizational Experience
          </h2>
          <p className="text-xs text-[#71717A]">
            8 roles spanning graphic design leadership, Data Science syllabus development, tech mentorship, and seminar event coordination at KSM VeteranTech UPNVJ and RISTEK Fasilkom UI.
          </p>
        </div>

        <OrganizationExperienceSection />
      </section>
    </div>
  );
}

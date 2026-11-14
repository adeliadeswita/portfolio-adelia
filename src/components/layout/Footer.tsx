import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { PinkCatLogo } from "@/components/ui/PinkCatLogo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#F2F2ED] border-t border-[#EBE8E1] mt-auto">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Personal Branding & Positioning */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 shrink-0 drop-shadow-xs">
                <PinkCatLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#18181B] font-serif">
                  {profileData.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#71717A] font-semibold mt-0.5">
                  {profileData.title}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#71717A] leading-relaxed max-w-xs">
              Turning complex transaction datasets and behavioral telemetry into actionable,
              decision-grade commercial insights and scalable data marts.
            </p>
            <div className="pt-1">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF3F8] border border-[#B5D2E7] text-[11px] font-semibold text-[#23567D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>{profileData.availability}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Sitemap */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#18181B]">
              Explore
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  href="/"
                  target="_self"
                  className="text-[#71717A] hover:text-[#18181B] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  target="_self"
                  className="text-[#71717A] hover:text-[#18181B] transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  target="_self"
                  className="text-[#71717A] hover:text-[#18181B] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  target="_self"
                  className="text-[#71717A] hover:text-[#18181B] transition-colors"
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Professional Connect */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
              Connect &amp; Collaborate
            </h4>
            <p className="text-sm text-[#71717A]">
              Open to conversations regarding Business Intelligence Analyst, Data Analyst, and
              Analytics Engineer opportunities.
            </p>
            <div className="flex flex-col space-y-2.5 pt-1">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center space-x-2.5 text-sm text-[#18181B] hover:text-[#2E6FA0] font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-[#71717A]" />
                <span>{profileData.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-sm text-[#18181B] hover:text-[#2E6FA0] font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#71717A]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-sm text-[#18181B] hover:text-[#2E6FA0] font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#71717A]" />
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-[#EBE8E1] flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] space-y-4 sm:space-y-0">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Designed with modern editorial aesthetics &amp; built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

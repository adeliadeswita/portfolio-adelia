"use client";

import React, { useRef, useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { certificationsData } from "@/data/certifications";

export function HomeCertificationsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer: Only auto-scroll when user has actually scrolled to this section
  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -300 : 300;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Automatic scrolling loop: stays stationary until user scrolls to it, resumes smoothly, pauses on hover
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!isInView || isPaused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 15) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  return (
    <div
      ref={containerRef}
      className="space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Scroll Navigation Header Controls */}
      <div className="flex items-center justify-between pb-1">
        <span className="text-xs text-[#71717A]">
          Showing {certificationsData.length} verified credentials
        </span>

        <div className="flex items-center space-x-1.5">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous credentials"
            className="w-8 h-8 rounded-full bg-white text-[#18181B] border border-[#EBE8E1] shadow-2xs hover:bg-[#F4F2EC] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next credentials"
            className="w-8 h-8 rounded-full bg-white text-[#18181B] border border-[#EBE8E1] shadow-2xs hover:bg-[#F4F2EC] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Touch & Scroll Track */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {certificationsData.map((cert) => {
          const hasLink = cert.credentialUrl && cert.credentialUrl.trim() !== "";

          return (
            <div
              key={cert.id}
              className="w-[84vw] sm:w-[325px] lg:w-[345px] shrink-0 snap-start relative group select-none transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Modern Acrylic Plaque Body (Crystal Beveled Acrylic Glass) */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_14px_34px_-10px_rgba(24,24,27,0.12),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1.5px_2px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.05] overflow-hidden flex flex-col justify-between min-h-[225px] sm:min-h-[235px] transition-all duration-300 hover:shadow-[0_20px_42px_-10px_rgba(24,24,27,0.2)] hover:border-white">
                
                {/* 1. Diagonal Glass Light Glare / Sheen Reflection on Hover */}
                <span className="absolute -top-32 -left-32 w-48 h-96 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-45 pointer-events-none transition-transform duration-1000 ease-out group-hover:translate-x-[480px] group-hover:translate-y-48" />

                {/* 2. Laser-Engraved Watermark Rosette in Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.035] -rotate-12">
                  <Award className="w-32 h-32 text-[#2E6FA0]" />
                </div>

                {/* 3. The 4 Steel Blue Metallic Stand-Off Rivets (Baut Metalik Biru di 4 Sudut) */}
                {/* Top-Left Rivet */}
                <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 rounded-full p-[1px] bg-gradient-to-br from-[#93C5FD] via-[#2E6FA0] to-[#1E3A8A] shadow-xs flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2E6FA0] to-[#174668] flex items-center justify-center">
                    <span className="w-1.5 h-[1px] bg-[#0E2C44]/80 -rotate-45" />
                  </div>
                </div>

                {/* Top-Right Rivet */}
                <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full p-[1px] bg-gradient-to-br from-[#93C5FD] via-[#2E6FA0] to-[#1E3A8A] shadow-xs flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2E6FA0] to-[#174668] flex items-center justify-center">
                    <span className="w-1.5 h-[1px] bg-[#0E2C44]/80 rotate-45" />
                  </div>
                </div>

                {/* Bottom-Left Rivet */}
                <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 rounded-full p-[1px] bg-gradient-to-br from-[#93C5FD] via-[#2E6FA0] to-[#1E3A8A] shadow-xs flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2E6FA0] to-[#174668] flex items-center justify-center">
                    <span className="w-1.5 h-[1px] bg-[#0E2C44]/80 rotate-45" />
                  </div>
                </div>

                {/* Bottom-Right Rivet */}
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 rounded-full p-[1px] bg-gradient-to-br from-[#93C5FD] via-[#2E6FA0] to-[#1E3A8A] shadow-xs flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2E6FA0] to-[#174668] flex items-center justify-center">
                    <span className="w-1.5 h-[1px] bg-[#0E2C44]/80 -rotate-45" />
                  </div>
                </div>

                {/* 4. Plaque Header */}
                <div className="relative z-1 space-y-1.5 text-center pt-1 px-4">
                  <div className="flex items-center justify-between text-[8.5px] font-mono uppercase tracking-[0.16em] text-[#71717A] border-b border-[#EBE8E1]/80 pb-1.5 gap-2">
                    <span className="font-bold text-[#2E6FA0] truncate text-left" title={cert.issuer}>{cert.issuer}</span>
                    <span className="text-[#A1A1AA] shrink-0">{cert.year}</span>
                  </div>

                  {/* Certificate Title in Prestigious Serif */}
                  <h4 className="font-serif font-bold text-xs sm:text-[13.5px] text-[#18181B] leading-snug line-clamp-2 px-1 group-hover:text-[#2E6FA0] transition-colors pt-0.5">
                    {cert.title}
                  </h4>
                </div>

                {/* 5. Skills & Topics Badges */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="relative z-1 flex flex-wrap justify-center gap-1 py-1 px-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[8px] sm:text-[8.5px] font-medium bg-[#F2F2ED]/80 text-[#3F3F46] border border-[#EBE8E1]"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[8px] font-mono text-[#71717A]">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* 6. Plaque Footer: Verify Link & Engraved Acrylic Seal */}
                <div className="relative z-1 pt-2.5 border-t border-[#EBE8E1]/80 flex items-center justify-between text-[9.5px] px-2">
                  {/* Verification Link */}
                  {hasLink ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 font-semibold text-[#2E6FA0] hover:text-[#18181B] transition-colors group/link"
                    >
                      <span className="underline decoration-[#2E6FA0]/40 group-hover/link:decoration-[#18181B]">
                        Verify Credential
                      </span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                    </a>
                  ) : (
                    <span className="text-[#A1A1AA] font-mono text-[8px] italic">
                      Verified on CV
                    </span>
                  )}

                  {/* Engraved Plaque Medallion */}
                  <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-[#2E6FA0]/10 border border-[#2E6FA0]/20 text-[#2E6FA0] shadow-2xs">
                    <Award className="w-3 h-3 text-[#2E6FA0]" />
                    <span className="text-[7.5px] font-mono font-bold tracking-wider uppercase">
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

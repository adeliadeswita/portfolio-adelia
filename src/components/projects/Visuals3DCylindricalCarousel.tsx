"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { ProjectGalleryItem } from "@/types";

interface Visuals3DCylindricalCarouselProps {
  items: ProjectGalleryItem[];
}

export function Visuals3DCylindricalCarousel({ items }: Visuals3DCylindricalCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [lightboxItem, setLightboxItem] = useState<ProjectGalleryItem | null>(null);
  const startXRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);

  const total = items.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
      if (total > 1) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, total]);

  // Touch & Mouse Drag handlers for spinning the ring
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    dragDistanceRef.current = e.clientX - startXRef.current;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDistanceRef.current > 35) {
      handlePrev();
    } else if (dragDistanceRef.current < -35) {
      handleNext();
    }
  };

  if (!items || items.length === 0) return null;

  // Single diagram display (e.g. ETL pipeline diagrams): no carousel, no slider, no next/prev buttons
  if (total === 1) {
    const singleItem = items[0];
    return (
      <section className="space-y-3 pt-1 select-none">
        <div
          className="group relative w-full rounded-2xl bg-white border border-[#EBE8E1] p-3 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
          onClick={() => setLightboxItem(singleItem)}
        >
          {/* Top Info Bar */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F2F2ED]">
            <div className="flex items-center space-x-2">
              {singleItem.badge && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2E6FA0] text-white">
                  {singleItem.badge}
                </span>
              )}
              <h3 className="text-xs sm:text-sm font-bold text-[#18181B] tracking-tight group-hover:text-[#2E6FA0] transition-colors">
                {singleItem.title}
              </h3>
            </div>
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10.5px] font-semibold bg-[#F2F2ED] text-[#2E6FA0] group-hover:bg-[#2E6FA0] group-hover:text-white transition-colors">
              <ZoomIn className="w-3 h-3" />
              <span>Perbesar Diagram</span>
            </span>
          </div>

          {/* Diagram Canvas */}
          <div className="relative w-full aspect-[16/7] sm:aspect-[16/8] md:aspect-[21/9] bg-[#FAF9F5] rounded-xl overflow-hidden flex items-center justify-center border border-[#F2F2ED]">
            {singleItem.image && (
              <Image
                src={singleItem.image}
                alt={singleItem.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-[1.01]"
                unoptimized={singleItem.image?.endsWith(".svg")}
              />
            )}
          </div>

          {/* Caption if present */}
          {singleItem.caption && (
            <p className="text-[11px] sm:text-xs text-[#71717A] leading-relaxed pt-3 text-left">
              {singleItem.caption}
            </p>
          )}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxItem && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-2xl sm:rounded-3xl border border-[#EBE8E1] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EBE8E1] bg-[#FAF9F5]">
                <div className="flex items-center space-x-2">
                  {lightboxItem.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2E6FA0] text-white">
                      {lightboxItem.badge}
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] truncate">
                    {lightboxItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="p-1.5 rounded-full hover:bg-[#E2E8F0] transition-colors text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image container */}
              <div className="relative w-full aspect-[16/10] bg-[#F8FAFC] flex items-center justify-center overflow-hidden">
                {lightboxItem.image && (
                  <Image
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain p-2 sm:p-4"
                    unoptimized={lightboxItem.image?.endsWith(".svg")}
                  />
                )}
              </div>

              {/* Caption bar */}
              {lightboxItem.caption && (
                <div className="px-5 py-3 bg-white border-t border-[#EBE8E1]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {lightboxItem.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    );
  }

  const currentItem = items[activeIndex];

  return (
    <section className="space-y-3 pt-1 select-none overflow-hidden">
      {/* 3D Cylindrical Ring Stage - Compact height matching card height (No giant empty gaps) */}
      <div
        className="relative w-full h-[230px] sm:h-[310px] md:h-[370px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: "1200px" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Soft Ambient Floor Shadow under active card */}
        <div className="absolute bottom-2 w-2/3 max-w-lg h-8 bg-black/8 blur-xl rounded-full pointer-events-none" />

        {/* 3D Ribbon Container */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, idx) => {
            // Shortest cyclic difference
            let diff = idx - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;

            // Only render visible arc (3 cards on each side)
            const isVisible = Math.abs(diff) <= 3;
            if (!isVisible) return null;

            // Continuous tightly wrapped ribbon formula (matching Föhn.Studio reference)
            // Each adjacent card shifts by ~52% of width so edges neatly kiss and overlap
            const sign = diff > 0 ? 1 : diff < 0 ? -1 : 0;
            const absDiff = Math.abs(diff);

            // Progressive non-linear spacing for natural curvature
            let translateX = 0;
            if (absDiff === 1) translateX = sign * 285;
            else if (absDiff === 2) translateX = sign * 515;
            else if (absDiff === 3) translateX = sign * 690;

            let translateZ = 0;
            if (absDiff === 1) translateZ = -55;
            else if (absDiff === 2) translateZ = -135;
            else if (absDiff === 3) translateZ = -220;

            const rotateY = -sign * (absDiff * 25);
            const scale = isCenter ? 1 : Math.max(0.72, 1 - absDiff * 0.1);
            const opacity = isCenter ? 1 : Math.max(0.4, 0.94 - absDiff * 0.2);
            const blur = isCenter ? "blur(0px)" : `blur(${Math.min(2.5, absDiff * 1)}px)`;
            const zIndex = 50 - absDiff * 10;

            return (
              <div
                key={idx}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(idx);
                  } else {
                    setLightboxItem(item);
                  }
                }}
                className={`group absolute w-[270px] sm:w-[410px] md:w-[510px] aspect-[16/8.8] rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#EBE8E1] transition-all duration-500 ease-out ${
                  isCenter
                    ? "shadow-xl border-[#2E6FA0]/60 ring-2 ring-[#2E6FA0]/15 cursor-zoom-in"
                    : "shadow-md hover:border-[#CBD5E1] cursor-pointer"
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  filter: blur,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image Container with full-fit padding */}
                <div className="relative w-full h-full bg-[#FAF9F5] p-1.5 sm:p-2 flex items-center justify-center">
                  {item.image ? (
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 410px, 510px"
                        className="object-contain"
                        priority={idx === 0}
                        unoptimized={item.image?.endsWith('.svg')}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-[#71717A]">
                      {item.title}
                    </div>
                  )}

                  {/* Depth overlay on flanking cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-white/15 transition-colors" />
                  )}

                  {/* Hover expand hint on center card */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-[#0F172A] shadow-md border border-white/80">
                        <ZoomIn className="w-3.5 h-3.5 text-[#2E6FA0]" />
                        <span>Click to Expand</span>
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                      <span className="px-2 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-wider bg-white/95 text-[#0F172A] shadow-xs backdrop-blur-md border border-white/60">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Left & Right Arrow Navigation Controls */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-1 sm:left-3 z-40 p-2 sm:p-2.5 rounded-full bg-white/90 text-[#0F172A] border border-[#E2E8F0] shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Previous visualization"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-1 sm:right-3 z-40 p-2 sm:p-2.5 rounded-full bg-white/90 text-[#0F172A] border border-[#E2E8F0] shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Next visualization"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Editorial Caption Area Below (Föhn.Studio minimalist style) */}
      <div className="text-center space-y-1 max-w-lg mx-auto pt-1">
        <h3 className="text-sm sm:text-base font-bold text-[#18181B] tracking-tight">
          {currentItem.title}
        </h3>

        {currentItem.caption && (
          <p className="text-[11px] sm:text-xs text-[#71717A] leading-relaxed line-clamp-2">
            {currentItem.caption}
          </p>
        )}

        {/* Indicator Dots */}
        <div className="flex items-center justify-center space-x-1.5 pt-1.5">
          {items.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setActiveIndex(dotIdx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                dotIdx === activeIndex
                  ? "w-5 bg-[#2E6FA0]"
                  : "w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
              }`}
              aria-label={`Jump to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl sm:rounded-3xl border border-[#EBE8E1] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EBE8E1] bg-[#FAF9F5]">
              <div className="flex items-center space-x-2">
                {lightboxItem.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2E6FA0] text-white">
                    {lightboxItem.badge}
                  </span>
                )}
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] truncate">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="p-1.5 rounded-full hover:bg-[#E2E8F0] transition-colors text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image container */}
            <div className="relative w-full aspect-[16/10] bg-[#F8FAFC] flex items-center justify-center overflow-hidden">
              {lightboxItem.image && (
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain p-2 sm:p-4"
                  unoptimized={lightboxItem.image?.endsWith('.svg')}
                />
              )}
            </div>

            {/* Caption bar */}
            {lightboxItem.caption && (
              <div className="px-5 py-3 bg-white border-t border-[#EBE8E1]">
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {lightboxItem.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

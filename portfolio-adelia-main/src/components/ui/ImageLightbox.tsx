"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Image as ImageIcon, Sparkles } from "lucide-react";
import { ProjectGalleryItem } from "@/types";

export function ImageGallery({ items }: { items: ProjectGalleryItem[] }) {
  const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(null);

  if (!items || items.length === 0) return null;

  const isSingle = items.length === 1;

  return (
    <div className="w-full">
      {isSingle ? (
        (() => {
          const item = items[0];
          const hasRealImage = !!item.image && item.image.trim() !== "";

          return (
            <div
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer bg-white rounded-2xl sm:rounded-3xl border border-[#EBE8E1] overflow-hidden editorial-shadow hover:shadow-xl hover:border-[#D4D0C8] transition-all duration-300 flex flex-col w-full"
            >
              {/* Full-Width Large Showcase Image Area */}
              <div className="relative w-full bg-[#F2F2ED] overflow-hidden flex items-center justify-center border-b border-[#EBE8E1]">
                {hasRealImage ? (
                  <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/9]">
                    <Image
                      src={item.image!}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-contain p-2 sm:p-3 transition-transform duration-500 group-hover:scale-[1.01]"
                      priority
                      unoptimized={item.image?.endsWith('.svg')}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/95 text-xs font-bold text-[#18181B] backdrop-blur-md shadow-md">
                        <ZoomIn className="w-4 h-4 text-[#2E6FA0]" />
                        <span>Klik untuk Memperbesar Resolusi Penuh</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center space-y-2.5 w-full h-full flex flex-col items-center justify-center bg-[#F2F2ED]">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBE8E1] flex items-center justify-center text-[#71717A] shadow-2xs">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E6FA0]">
                      Visual Asset Slot
                    </span>
                    <p className="text-xs font-mono text-[#64748B] bg-white/80 px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                      [PLACEHOLDER: {item.placeholder || item.title}]
                    </p>
                  </div>
                )}

                {item.badge && (
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/95 text-[#0F172A] shadow-xs backdrop-blur-md border border-[#E2E8F0]">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Title & Caption */}
              <div className="p-4 sm:p-6 bg-white space-y-1 sm:space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-[#71717A] flex items-center space-x-1 font-medium">
                    <ZoomIn className="w-3.5 h-3.5 text-[#2E6FA0]" />
                    <span className="hidden sm:inline">Perbesar Layar Penuh</span>
                  </span>
                </div>
                {item.caption && (
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          );
        })()
      ) : (
        <div className={`grid grid-cols-1 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-6`}>
          {items.map((item, index) => {
            const hasRealImage = !!item.image && item.image.trim() !== "";

            return (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer bg-white rounded-3xl border border-[#EBE8E1] overflow-hidden editorial-shadow hover:shadow-xl hover:border-[#D4D0C8] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container or Visual Placeholder */}
                <div className="relative aspect-[16/10] bg-[#F2F2ED] overflow-hidden flex items-center justify-center border-b border-[#EBE8E1]">
                  {hasRealImage ? (
                    <>
                      <Image
                        src={item.image!}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized={item.image?.endsWith('.svg')}
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-white/95 text-xs font-semibold text-[#18181B] backdrop-blur-xs shadow-xs">
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>Click to Expand</span>
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 text-center space-y-2.5 w-full h-full flex flex-col items-center justify-center bg-[#F2F2ED]">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBE8E1] flex items-center justify-center text-[#71717A] group-hover:text-[#18181B] group-hover:border-[#D4D0C8] transition-colors shadow-2xs">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1 max-w-[240px]">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E6FA0] block">
                          Visual Asset Slot
                        </span>
                        <p className="text-xs font-mono text-[#64748B] bg-white/80 px-2.5 py-1 rounded-md border border-[#E2E8F0] truncate">
                          [PLACEHOLDER: {item.placeholder || item.title}]
                        </p>
                      </div>
                      <span className="text-[10px] text-[#A3A299] font-medium">
                        Click to preview asset details
                      </span>
                    </div>
                  )}

                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#0F172A] shadow-xs backdrop-blur-md">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title & Caption */}
                <div className="p-5 bg-white space-y-1">
                  <h4 className="text-sm font-extrabold text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors">
                    {item.title}
                  </h4>
                  {item.caption && (
                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-7xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                  {selectedImage.title}
                </h3>
                {selectedImage.badge && (
                  <span className="text-[11px] font-semibold text-[#2E6FA0] uppercase tracking-wider">
                    {selectedImage.badge}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#EBF3F8] transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 w-full min-h-[320px] sm:min-h-[500px] bg-[#EBF3F8]/40 flex items-center justify-center p-4">
              {selectedImage.image && selectedImage.image.trim() !== "" ? (
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain p-2"
                  priority
                  unoptimized={selectedImage.image?.endsWith('.svg')}
                />
              ) : (
                <div className="p-8 text-center space-y-4 max-w-md bg-white rounded-3xl border border-[#E2E8F0] shadow-sm">
                  <div className="w-16 h-16 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#64748B]">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2E6FA0] block">
                      Asset Placeholder
                    </span>
                    <h4 className="text-base font-bold text-[#0F172A]">
                      {selectedImage.title}
                    </h4>
                    <p className="text-xs font-mono text-[#64748B] bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                      [PLACEHOLDER: {selectedImage.placeholder || selectedImage.title}]
                    </p>
                    <p className="text-xs text-[#64748B]">
                      Image asset will be provided by Adelia and linked directly to this slot.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Caption */}
            {selectedImage.caption && (
              <div className="p-4 sm:p-5 bg-white border-t border-[#E2E8F0] text-xs sm:text-sm text-[#64748B]">
                {selectedImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";

export interface SectionJumpItem {
  id: string;
  label: string;
  count?: number | string;
  icon?: React.ReactNode;
}

export function SectionJumpBar({ items }: { items: SectionJumpItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Update active pill on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className="sticky top-16 z-30 py-2 bg-[#F2F2ED]/95 backdrop-blur-md border-b border-[#EBE8E1] -mx-6 sm:-mx-10 px-6 sm:px-10 transition-all shadow-2xs">
      <div className="max-w-4xl mx-auto flex items-center space-x-2 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] font-semibold mr-1 hidden sm:inline-block shrink-0">
          Jump to:
        </span>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all duration-200 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#18181B] text-white shadow-xs"
                  : "bg-white text-[#71717A] border border-[#EBE8E1] hover:text-[#18181B] hover:bg-[#F4F2EC]"
              }`}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
              {item.count !== undefined && (
                <span
                  className={`text-[9.5px] px-1.5 py-0.2 rounded font-mono font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-[#F2F2ED] text-[#18181B] border border-[#EBE8E1]"
                  }`}
                >
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

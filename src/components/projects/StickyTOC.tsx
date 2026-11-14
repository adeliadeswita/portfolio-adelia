"use client";

import { useEffect, useState } from "react";
import { ListOrdered } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
}

const defaultSections: TOCItem[] = [
  { id: "overview", label: "01. Commercial Context" },
  { id: "problem", label: "02. Problem & Objectives" },
  { id: "methodology", label: "03. Dataset & Methodology" },
  { id: "workflow", label: "04. Pipeline Workflow" },
  { id: "implementation", label: "05. Technical Code" },
  { id: "dashboards", label: "06. Dashboard Gallery" },
  { id: "findings", label: "07. Findings & Impact" },
  { id: "learnings", label: "08. Learnings & Compliance" },
];

export function StickyTOC({ sections = defaultSections }: { sections?: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-28 bg-white rounded-3xl border border-[#E2E8F0] p-6 editorial-shadow space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] pb-3 border-b border-[#E2E8F0]">
          <ListOrdered className="w-4 h-4 text-[#2E6FA0]" />
          <span>Case Study Contents</span>
        </div>

        <nav className="space-y-1">
          {sections.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 block truncate ${
                  isActive
                    ? "bg-[#0F172A] text-white font-bold shadow-xs translate-x-1"
                    : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

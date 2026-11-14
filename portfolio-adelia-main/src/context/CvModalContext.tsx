"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

interface CvModalContextType {
  isCvModalOpen: boolean;
  openCvModal: () => void;
  closeCvModal: () => void;
}

const CvModalContext = createContext<CvModalContextType | undefined>(undefined);

export function CvModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCvModal = () => setIsOpen(true);
  const closeCvModal = () => setIsOpen(false);

  // Close on ESC key and lock body scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <CvModalContext.Provider value={{ isCvModalOpen: isOpen, openCvModal, closeCvModal }}>
      {children}

      {/* CV Preview Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeCvModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <div
            className="bg-[#18181B] text-white w-full max-w-5xl h-[94vh] sm:h-[90vh] rounded-2xl shadow-2xl border border-[#27272A] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#18181B] border-b border-[#27272A] shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E6FA0]/20 border border-[#2E6FA0]/40 flex items-center justify-center text-[#93C5FD]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 id="cv-modal-title" className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Curriculum Vitae
                    </h2>
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#27272A] text-[#A1A1AA] border border-[#3F3F46]">
                      PDF
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#A1A1AA]">
                    Adelia Deswita · Business Intelligence & Data Analyst
                  </p>
                </div>
              </div>

              {/* Quick Actions & Close */}
              <div className="flex items-center space-x-2">
                <a
                  href={profileData.cvUrl}
                  download="Adelia-Deswita-CV.pdf"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2E6FA0] hover:bg-[#255C86] text-white transition-all shadow-sm"
                  title="Download CV Now"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download CV</span>
                  <span className="sm:hidden">Download</span>
                </a>

                <a
                  href={profileData.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-white hover:bg-[#27272A] transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>New Tab</span>
                </a>

                <button
                  type="button"
                  onClick={closeCvModal}
                  className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#27272A] transition-colors cursor-pointer"
                  aria-label="Close CV preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Direct PDF Viewer */}
            <div className="flex-1 w-full bg-[#27272A] relative overflow-hidden flex flex-col">
              <iframe
                src={`${profileData.cvUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0 bg-[#525659]"
                title="Curriculum Vitae Adelia Deswita"
              />
            </div>

            {/* Modal Footer: Action Bar / Download Choice */}
            <div className="px-4 sm:px-6 py-3 bg-[#18181B] border-t border-[#27272A] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center space-x-2 text-xs text-[#A1A1AA]">
                <span>Would you like to save a copy of this CV to your device?</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <button
                  type="button"
                  onClick={closeCvModal}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-white hover:bg-[#27272A] transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={profileData.cvUrl}
                  download="Adelia-Deswita-CV.pdf"
                  className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#2E6FA0] hover:bg-[#255C86] text-white transition-all shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </CvModalContext.Provider>
  );
}

export function useCvModal() {
  const context = useContext(CvModalContext);
  if (!context) {
    throw new Error("useCvModal must be used within a CvModalProvider");
  }
  return context;
}

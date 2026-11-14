"use client";

import { useState } from "react";
import { Copy, Check, Code2, Terminal } from "lucide-react";

interface CodeSnippet {
  language: string;
  title: string;
  description: string;
  code: string;
}

export function CodeSnippetViewer({ snippets }: { snippets: CodeSnippet[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!snippets || snippets.length === 0) return null;

  const currentSnippet = snippets[activeTab] || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1E201B] rounded-3xl overflow-hidden border border-[#0F172A] shadow-2xl">
      {/* Header Bar */}
      <div className="p-4 sm:p-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#181A16]">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-[#A8C4B0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {currentSnippet.title}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 self-end sm:self-auto">
          {snippets.length > 1 && (
            <div className="flex bg-white/5 p-1 rounded-xl">
              {snippets.map((s, idx) => (
                <button
                  key={s.title}
                  onClick={() => setActiveTab(idx)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === idx
                      ? "bg-white/20 text-white font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {s.language.toUpperCase()}
                </button>
              ))}
            </div>
          )}

          <button
            onClick={handleCopy}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors focus:outline-none"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#10B981]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Description Sub-bar */}
      {currentSnippet.description && (
        <div className="px-5 py-3 bg-white/5 border-b border-white/5 text-xs text-[#94A3B8]">
          {currentSnippet.description}
        </div>
      )}

      {/* Code Area */}
      <div className="p-5 overflow-x-auto max-h-[460px]">
        <pre className="text-xs sm:text-sm font-mono text-[#D6E6F2] leading-relaxed selection:bg-[#2E6FA0]">
          <code>{currentSnippet.code}</code>
        </pre>
      </div>
    </div>
  );
}

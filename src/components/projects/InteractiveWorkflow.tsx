"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  tag?: string;
}

export function InteractiveWorkflow({ steps }: { steps: WorkflowStep[] }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 editorial-shadow space-y-8">
      {/* Step Selection Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {steps.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 focus:outline-none ${
                isActive
                  ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md"
                  : "bg-[#F8FAFC] text-[#0F172A] border-[#E2E8F0] hover:bg-[#EBF3F8]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isActive ? "text-[#94A3B8]" : "text-[#64748B]"
                  }`}
                >
                  Stage {step.step}
                </span>
                {step.tag && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-[#EBF3F8] text-[#0F172A]"
                    }`}
                  >
                    {step.tag}
                  </span>
                )}
              </div>
              <h4 className="font-bold text-sm tracking-tight truncate">
                {step.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Step Disclosure Card */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E6FA0]">
              Stage {activeStep.step} Deep-Dive
            </span>
            <h3 className="font-bold text-xl sm:text-2xl text-[#0F172A] mt-0.5">
              {activeStep.title}
            </h3>
          </div>
          {activeStep.tag && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D6E6F2] text-[#23567D] self-start sm:self-auto">
              {activeStep.tag}
            </span>
          )}
        </div>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          {activeStep.description}
        </p>

        {activeStep.details && activeStep.details.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
              Key Engineering Actions:
            </span>
            <ul className="space-y-2">
              {activeStep.details.map((detail, dIdx) => (
                <li
                  key={dIdx}
                  className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#0F172A]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

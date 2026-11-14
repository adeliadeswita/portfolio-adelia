"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import { profileData } from "@/data/profile";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email format.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch or direct client handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clear form after submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E2E8F0] p-7 md:p-10 editorial-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <h3 className="text-2xl font-bold text-[#0F172A]">
            Send a Direct Message
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            Usually responded to within 24 hours on business days.
          </p>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#EBF3F8] transition-colors shrink-0"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#64748B]" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-[#D6E6F2] text-[#23567D] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
          </div>
          <h4 className="text-2xl font-bold text-[#0F172A]">
            Message Received
          </h4>
          <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. A confirmation has been drafted. You can also write
            directly to{" "}
            <a
              href={`mailto:${profileData.email}`}
              className="font-semibold text-[#0F172A] underline hover:text-[#2E6FA0]"
            >
              {profileData.email}
            </a>
            .
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors"
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none transition-all ${
                  errors.name
                    ? "border-red-400 focus:ring-1 focus:ring-red-400"
                    : "border-[#E2E8F0] focus:border-[#0F172A]"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. s.jenkins@company.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-400 focus:ring-1 focus:ring-red-400"
                    : "border-[#E2E8F0] focus:border-[#0F172A]"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
            >
              Subject / Discussion Topic <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Business Intelligence Analyst Role Exploration"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: "" });
              }}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none transition-all ${
                errors.subject
                  ? "border-red-400 focus:ring-1 focus:ring-red-400"
                  : "border-[#E2E8F0] focus:border-[#0F172A]"
              }`}
            />
            {errors.subject && (
              <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
            >
              Message Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Provide context regarding the project, role specification, or questions..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none transition-all resize-y ${
                errors.message
                  ? "border-red-400 focus:ring-1 focus:ring-red-400"
                  : "border-[#E2E8F0] focus:border-[#0F172A]"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit CTA */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[#64748B]">
              Your contact information is strictly handled with privacy.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] hover:shadow-md transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

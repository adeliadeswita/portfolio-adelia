import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-28 text-center space-y-6">
      <span className="text-xs font-bold uppercase tracking-widest text-[#2E6FA0] bg-[#D6E6F2]/60 px-3 py-1 rounded-full">
        404 — Page Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A]">
        The analytical pathway you seek does not exist.
      </h1>
      <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto leading-relaxed">
        The requested case study or page route has moved, been archived, or was never cataloged.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF3F8] text-[#0F172A] hover:bg-[#D6E6F2] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Projects</span>
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { profileData } from "@/data/profile";
import { PinkCatLogo } from "@/components/ui/PinkCatLogo";
import { useCvModal } from "@/context/CvModalContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCvModal } = useCvModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // Only intercept normal left clicks without modifier keys
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      if (href.includes("#")) {
        setMobileMenuOpen(false);
        return;
      }
      e.preventDefault();
      setMobileMenuOpen(false);
      router.push(href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F2F2ED]/90 backdrop-blur-md shadow-xs border-b border-[#EBE8E1]"
          : "bg-[#F2F2ED] border-b border-[#EBE8E1]/60"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 h-16 flex items-center justify-between">
        {/* Personal Wordmark with Pink Cat Logo */}
        <Link
          href="/"
          target="_self"
          onClick={(e) => handleNavClick("/", e)}
          className="group flex items-center space-x-2.5 cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3 drop-shadow-xs">
            <PinkCatLogo className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-[#18181B] group-hover:text-[#2E6FA0] transition-colors leading-tight">
              Adelia Deswita
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#71717A] font-medium mt-0.5">
              Data Analytics &amp; BI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("#")
                ? false
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                target="_self"
                onClick={(e) => handleNavClick(link.href, e)}
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-[#18181B]"
                    : "text-[#71717A] hover:text-[#18181B]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#2E6FA0] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Let's Talk & CV */}
        <div className="hidden md:flex items-center space-x-2.5">
          <button
            type="button"
            onClick={openCvModal}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#52525B] hover:text-[#18181B] border border-[#EBE8E1] hover:border-[#D4D0C8] hover:bg-white transition-all duration-200 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
            title="View CV Preview"
          >
            <FileText className="w-3 h-3 text-[#2E6FA0]" />
            <span>CV</span>
          </button>

          <a
            href="/#contact"
            className="relative inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide bg-[#18181B] text-white hover:bg-[#2E6FA0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group overflow-hidden border border-[#18181B] hover:border-[#2E6FA0]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#93C5FD] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href="/#contact"
            className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#18181B] text-white shadow-2xs hover:bg-[#2E6FA0] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Talk</span>
            <ArrowUpRight className="w-3 h-3 text-[#93C5FD]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#18181B] hover:bg-[#F4F2EC] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EBE8E1] bg-[#F2F2ED] px-6 py-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="mb-3 pb-3 border-b border-[#EBE8E1] flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-[#71717A] font-semibold">
              Navigation
            </span>
            <span className="inline-flex items-center space-x-1.5 text-xs text-[#059669] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Available for hire</span>
            </span>
          </div>
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("#")
                ? false
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                target="_self"
                onClick={(e) => handleNavClick(link.href, e)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#EBF3F8] text-[#18181B] font-semibold"
                    : "text-[#71717A] hover:bg-[#F4F2EC] hover:text-[#18181B]"
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-[#EBE8E1] space-y-2">
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-[#18181B] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#2E6FA0] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Let&apos;s Talk</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openCvModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 rounded-xl bg-white border border-[#EBE8E1] text-[#18181B] text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#2E6FA0]" />
              <span>View CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

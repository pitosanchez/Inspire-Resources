/**
 * Header Component - Medical-Grade Navigation Bar
 * Clean, trustworthy, accessible navigation inspired by Inspire logo colors
 * 
 * Design Principles:
 * - Medical-grade professionalism
 * - Inspire brand colors (brand blue #3871c1, accent green #80cc28)
 * - Strong visual hierarchy
 * - 8px baseline grid spacing
 * - ADA-compliant contrast ratios
 * - Smooth, subtle animations
 */

import { useState, useEffect } from "react";
import { useLanguage } from "../../utils/LanguageContext";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import Button from "../ui/Button";

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["#home", "#about", "#transplant-guide", "#ckd-education", "#resources", "#spanish-resources"];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.guide"), href: "#transplant-guide" },
    { label: t("nav.ckd"), href: "#ckd-education" },
    { label: t("nav.resources"), href: "#resources" },
    { label: t("nav.spanish"), href: "#spanish-resources" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-neutral-100"
          : "bg-white border-b border-neutral-100"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-6 md:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Main Nav Container */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-lg px-2 py-1 -ml-2 transition-all duration-200"
            aria-label="Inspire - Home"
            onClick={() => {
              setActiveSection("#home");
              setIsMobileMenuOpen(false);
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/inspire.svg`}
              alt="Inspire Logo"
              className="h-12 md:h-14 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? "text-brand-600 bg-brand-50"
                      : "text-neutral-700 hover:text-brand-600 hover:bg-brand-50/50"
                  }`}
                  onClick={() => {
                    setActiveSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute inset-0 bg-brand-50 rounded-lg"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
            
            {/* Language Switcher */}
            <div className="ml-2 xl:ml-4 pl-2 xl:pl-4 border-l border-neutral-200">
              <LanguageSwitcher />
            </div>
            
            {/* CTA Button */}
            <Button
              href="#contact"
              size="sm"
              variant="accent"
              className="ml-2 xl:ml-4 shadow-sm hover:shadow-md"
            >
              {t("nav.help")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden p-2.5 text-neutral-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 touch-target"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Smooth Slide Animation */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-6 border-t border-neutral-200 mt-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3.5 text-base font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 touch-target ${
                      isActive
                        ? "text-brand-600 bg-brand-50 border-l-4 border-brand-500"
                        : "text-neutral-700 hover:text-brand-600 hover:bg-brand-50/50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              
              {/* Mobile Language Switcher */}
              <div className="px-4 py-3 border-t border-neutral-200 mt-2">
                <LanguageSwitcher />
              </div>
              
              {/* Mobile CTA Button */}
              <div className="px-4 pt-2">
                <Button
                  href="#contact"
                  size="md"
                  variant="accent"
                  className="w-full justify-center shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.help")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

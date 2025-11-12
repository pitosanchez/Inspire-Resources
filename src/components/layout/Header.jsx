/**
 * Header Component - Clean, Minimal, Purposeful
 * The quiet beginning of every story
 */

import { useState, useEffect } from "react";
import { useLanguage } from "../../utils/LanguageContext";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import Button from "../ui/Button";

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.ckd"), href: "#ckd-education" },
    { label: t("nav.guide"), href: "#transplant-guide" },
    { label: t("nav.resources"), href: "#resources" },
    { label: t("nav.spanish"), href: "#spanish-resources" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/images/inspire.svg"
              alt="Inspire Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-700 hover:text-brand-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <LanguageSwitcher />
            <Button href="#contact" size="sm">
              {t("nav.help")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-700 hover:text-brand-600 font-medium py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-200">
                <LanguageSwitcher />
              </div>
              <Button href="#contact" size="sm" className="w-full">
                {t("nav.help")}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

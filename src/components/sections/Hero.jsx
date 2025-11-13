/**
 * Hero Section - Medical Web Design Excellence
 * Glassmorphism + Floating Cards + Full Viewport Experience
 */

import { useLanguage } from "../../utils/LanguageContext";
import Button from "../ui/Button";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-brand-500 overflow-hidden"
    >
      {/* Soft overlay for warmth and depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-accent-500/20" />

      {/* Animated Background Shapes - Medical + Modern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circular shapes for depth */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-400 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-800 rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-white rounded-full opacity-10 blur-3xl" />

        {/* Subtle grid overlay for medical precision */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container relative z-10 px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Hero Logo - Smaller with White Background */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block bg-white rounded-2xl p-6 shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}/images/inspire.svg`}
                alt="INSPIRE - Kidney Transplant Resources"
                className="w-auto mx-auto"
                style={{
                  height: "min(20vh, 180px)",
                }}
              />
            </div>
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-white mb-4 font-medium tracking-wide animate-fade-in animation-delay-100"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
          >
            {t("hero.tagline")}
          </p>

          {/* Main Headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in animation-delay-200"
            style={{
              textShadow: "0 3px 12px rgba(0, 0, 0, 0.4)",
            }}
          >
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-white mb-10 max-w-3xl leading-relaxed animate-fade-in animation-delay-300"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button
              href="#resources"
              variant="accent"
              size="lg"
              className="shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold"
            >
              {t("hero.cta.primary")}
            </Button>
            <Button
              href="#about"
              variant="orange"
              size="lg"
              className="shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

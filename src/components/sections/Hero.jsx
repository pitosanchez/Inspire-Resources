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
      className="relative h-screen flex items-center justify-center bg-white overflow-hidden"
    >

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Hero Logo - Large with White Background */}
          <div className="mb-12 md:mb-16 animate-fade-in w-full flex justify-center">
            <div className="relative inline-block bg-transparent p-8 md:p-12 lg:p-16">
              <img
                src={`${import.meta.env.BASE_URL}images/inspire.svg`}
                alt="INSPIRE - Kidney Transplant Resources"
                className="w-auto mx-auto block"
                style={{
                  height: "min(40vh, 400px)",
                }}
              />
            </div>
          </div>

          {/* CTA Buttons - Centered underneath logo */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in w-full">
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

      {/* Separator Bar */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-neutral-200"></div>
    </section>
  );
}

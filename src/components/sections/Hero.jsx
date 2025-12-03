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

      <div className="container relative z-10 px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Hero Logo - Large with White Background */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block bg-white rounded-3xl p-12 shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}images/inspire.svg`}
                alt="INSPIRE - Kidney Transplant Resources"
                className="w-auto mx-auto"
                style={{
                  height: "min(40vh, 400px)",
                }}
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
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

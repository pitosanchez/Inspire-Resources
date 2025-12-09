/**
 * About Section - Inspired by AI Medical Service Structure
 * Clean, minimal, professional medical design
 */

import { useLanguage } from "../../utils/LanguageContext";
import Card, { CardContent, CardTitle } from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";

export default function About() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const servicesRef = useStaggerAnimation({ stagger: 0.1 });

  // Services
  const services = [
    {
      title: t("service.screening.title"),
      desc: t("service.screening.desc.full") || t("service.screening.desc"),
      badge: t("service.screening.badge"),
      variant: "brand",
    },
    {
      title: t("service.resources.title"),
      desc: t("service.resources.desc.full") || t("service.resources.desc"),
      badge: t("service.resources.badge"),
      variant: "accent",
    },
    {
      title: t("service.navigation.title"),
      desc: t("service.navigation.desc.full") || t("service.navigation.desc"),
      badge: t("service.navigation.badge"),
      variant: "warm",
    },
    {
      title: t("service.advocacy.title"),
      desc: t("service.advocacy.desc.full") || t("service.advocacy.desc"),
      badge: t("service.advocacy.badge"),
      variant: "brand",
    },
    {
      title: t("service.transportation.title"),
      desc: t("service.transportation.desc.full") || t("service.transportation.desc"),
      badge: t("service.transportation.badge"),
      variant: "accent",
    },
    {
      title: t("service.workers.title"),
      desc: t("service.workers.desc.full") || t("service.workers.desc"),
      badge: t("service.workers.badge"),
      variant: "warm",
    },
  ];

  return (
    <section id="about" className="bg-white">
      {/* About Section - Combined Hero & Content */}
      <div className="pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-white to-brand-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div ref={aboutRef} className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-10 md:mb-12 text-center">
              {t("about.label")}
            </h1>
            
            {/* Glassmorphism Card */}
            <div className="max-w-6xl mx-auto mt-8 md:mt-10">
              <div className="backdrop-blur-lg bg-white/95 border border-white/30 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl" style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}>
                <div className="flex flex-col gap-8 md:gap-10">
                  <p className="text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed text-justify font-sans mb-0">
                    {t("about.combined.text")}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed text-justify font-sans mb-0">
                    {t("about.combined.text2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-16 md:py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-10 md:mb-12 text-center">
              {t("solutions.services.title")}
            </h2>
            <div
              ref={servicesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-5">
                      <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 leading-tight">
                        {service.title}
                      </h3>
                      <Badge variant={service.variant} size="sm">
                        {service.badge}
                      </Badge>
                    </div>
                    <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
                      {service.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Card on Matching Background */}
      <div className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-brand-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Card variant="elevated" className="p-8 md:p-10 lg:p-12 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 md:mb-10 text-neutral-900">
                {t("cta.title")}
              </h2>
              <p className="text-xl md:text-2xl mb-10 md:mb-12 text-neutral-700 leading-relaxed">
                {t("cta.text")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Button
                  href="#resources"
                  variant="orange"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl hover:scale-105 font-semibold"
                >
                  {t("cta.primary")}
                </Button>
                <Button
                  href="#contact"
                  variant="accent"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl hover:scale-105 font-semibold"
                >
                  {t("cta.secondary")}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

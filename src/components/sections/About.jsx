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
  const missionRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const partnersRef = useStaggerAnimation({ stagger: 0.1 });
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

  // Partners
  const partners = [
    t("partners.unos"),
    t("partners.nkf"),
    t("partners.ast"),
    t("partners.community"),
  ];

  return (
    <section id="about" className="bg-white">
      {/* Hero Section - Large Statement */}
      <div className="py-20 md:py-32 bg-white">
        <div className="container">
          <div ref={heroRef} className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              {t("about.hero.title") || t("about.title")}
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-600 font-light mb-4">
              {t("about.hero.subtitle") || t("about.subtitle")}
            </p>
            <p className="text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto">
              {t("about.hero.supporting")}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section - Prominent Display */}
      <div className="py-16 md:py-24 bg-brand-50">
        <div className="container">
          <div ref={missionRef} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-8">
              {t("about.mission.title")}
            </h2>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-6">
              {t("about.mission.text")}
            </p>
            <div className="mt-12 pt-12 border-t border-neutral-200">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-900 mb-6">
                {t("about.vision.title")}
              </h3>
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
                {t("about.vision.text")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us - Detailed Narrative */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div ref={aboutRef} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-8">
              {t("about.label")}
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
              <p className="text-lg md:text-xl">
                {t("barriers.intro")}
              </p>
              
              <p className="text-lg md:text-xl">
                {t("solutions.intro")}
              </p>
              
              <p className="text-lg md:text-xl">
                {t("impact.intro")}
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-600 mb-2">
                  {t("impact.stat1.number")}
                </div>
                <p className="text-neutral-600 font-medium">
                  {t("impact.stat1.label")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-600 mb-2">
                  {t("impact.stat2.number")}
                </div>
                <p className="text-neutral-600 font-medium">
                  {t("impact.stat2.label")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-600 mb-2">
                  {t("impact.stat3.number")}
                </div>
                <p className="text-neutral-600 font-medium">
                  {t("impact.stat3.label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-12 text-center">
              {t("solutions.services.title")}
            </h2>
            <div
              ref={servicesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {service.title}
                      </h3>
                      <Badge variant={service.variant} size="sm">
                        {service.badge}
                      </Badge>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners / Joint Research Institutions */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-4 text-center">
              {t("partners.title")}
            </h2>
            <p className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
              {t("partners.intro")}
            </p>
            
            <div
              ref={partnersRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 border border-neutral-200 rounded-lg hover:border-brand-300 hover:shadow-md transition-all duration-300 bg-white"
                >
                  <span className="text-neutral-600 font-semibold text-center hover:text-brand-600 transition-colors">
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-600 mb-6">
                {t("partners.contact") || "Feel free to contact us regarding partnerships, collaborations, or related opportunities."}
              </p>
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="font-semibold"
              >
                {t("cta.secondary")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Recruit Style */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-brand-300/60 to-brand-400/60 backdrop-blur-md">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
              {t("cta.title")}
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed drop-shadow-md">
              {t("cta.text")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                size="lg"
                className="bg-accent-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 font-semibold hover:bg-accent-700"
              >
                {t("cta.secondary")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

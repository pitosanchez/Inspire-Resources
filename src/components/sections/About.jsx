/**
 * About Section - Handcrafted with Empathy
 * Every card, every space tells the story of care
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
  const headerRef = useScrollAnimation();
  const barriersRef = useStaggerAnimation({ stagger: 0.15 });
  const servicesRef = useStaggerAnimation({ stagger: 0.1 });

  const barriers = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"
          />
        </svg>
      ),
      title: t("barriers.healthcare.title"),
      description: t("barriers.healthcare.desc"),
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
          />
        </svg>
      ),
      title: t("barriers.financial.title"),
      description: t("barriers.financial.desc"),
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17a2 2 0 01-2-2V5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2M9 17l-5 5m0 0h5m-5 0v-5m11 5l5-5m0 0v5m0-5h-5"
          />
        </svg>
      ),
      title: t("barriers.transportation.title"),
      description: t("barriers.transportation.desc"),
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
          <polyline
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            points="9,22 9,12 15,12 15,22"
          />
        </svg>
      ),
      title: t("barriers.basic.title"),
      description: t("barriers.basic.desc"),
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: t("barriers.info.title"),
      description: t("barriers.info.desc"),
    },
  ];

  const services = [
    {
      title: t("service.screening.title"),
      desc: t("service.screening.desc"),
      badge: t("service.screening.badge"),
      variant: "brand",
    },
    {
      title: t("service.resources.title"),
      desc: t("service.resources.desc"),
      badge: t("service.resources.badge"),
      variant: "accent",
    },
    {
      title: t("service.navigation.title"),
      desc: t("service.navigation.desc"),
      badge: t("service.navigation.badge"),
      variant: "warm",
    },
    {
      title: t("service.advocacy.title"),
      desc: t("service.advocacy.desc"),
      badge: t("service.advocacy.badge"),
      variant: "brand",
    },
    {
      title: t("service.transportation.title"),
      desc: t("service.transportation.desc"),
      badge: t("service.transportation.badge"),
      variant: "accent",
    },
    {
      title: t("service.workers.title"),
      desc: t("service.workers.desc"),
      badge: t("service.workers.badge"),
      variant: "warm",
    },
  ];

  return (
    <section id="about" className="section-vh bg-neutral-50 flex items-center">
      <div className="container">
        {/* Header - Intentional hierarchy */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            {t("about.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Mission Statement - Glass Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="card-float bg-gradient-to-br from-brand-500 to-brand-600 text-white p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center">
              {t("about.mission.title")}
            </h3>
            <p className="text-lg leading-relaxed text-center opacity-95">
              {t("about.mission.text")}
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
              {t("barriers.title")}
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t("barriers.intro")}
            </p>
          </div>

          {/* Barriers Grid - Asymmetric, hand-tuned */}
          <div
            ref={barriersRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {barriers.map((barrier, index) => (
              <div key={index} className="card-float group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-lg">
                    {barrier.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                      {barrier.title}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {barrier.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
              {t("solutions.title")}
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t("solutions.intro")}
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h4 className="text-xl md:text-2xl font-serif text-neutral-900 mb-8 text-center">
              {t("solutions.services.title")}
            </h4>

            {/* Services Grid - Handcrafted proportions */}
            <div
              ref={servicesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`card-float ${
                    service.variant === "brand"
                      ? "bg-gradient-to-br from-brand-50 to-brand-100"
                      : service.variant === "accent"
                      ? "bg-gradient-to-br from-accent-50 to-accent-100"
                      : "bg-gradient-to-br from-warm-50 to-warm-100"
                  }`}
                >
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-neutral-700 mb-4">{service.desc}</p>
                  <Badge variant={service.variant} size="lg">
                    {service.badge}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Glass Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-float bg-gradient-to-br from-accent-500 to-accent-600 text-white p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              {t("cta.title")}
            </h3>
            <p className="text-lg leading-relaxed mb-8 opacity-95">
              {t("cta.text")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#resources"
                size="lg"
                className="bg-white text-accent-600 hover:bg-neutral-50 shadow-xl hover:shadow-2xl hover:scale-105 font-semibold"
              >
                {t("cta.primary")}
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                size="lg"
                className="bg-transparent backdrop-blur-md text-white border-2 border-white hover:bg-white/20 hover:scale-105 font-semibold"
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

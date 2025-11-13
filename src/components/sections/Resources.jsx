/**
 * Resources Section - Curated with Care
 * Every resource chosen with intention
 */

import { useLanguage } from "../../utils/LanguageContext";
import Card, { CardTitle, CardContent } from "../ui/Card";

export default function Resources() {
  const { t } = useLanguage();

  const resources = [
    {
      image: `${import.meta.env.BASE_URL}images/exploretrans.webp`,
      title: t("resource.exploretransplant"),
      description: t("resource.exploretransplant.desc"),
      link: "https://exploretransplant.org/for-family-friends/become-a-living-donor/",
    },
    {
      image: `${import.meta.env.BASE_URL}images/ldtk.webp`,
      title: t("resource.toolkit"),
      description: t("resource.toolkit.desc"),
      link: "https://www.livingdonortoolkit.com/",
    },
    {
      image: `${import.meta.env.BASE_URL}images/unos.webp`,
      title: t("resource.transplantliving"),
      description: t("resource.transplantliving.desc"),
      link: "https://transplantliving.org/kidney/about-living-donor-transplant/",
    },
    {
      image: `${import.meta.env.BASE_URL}images/ldrandinfo.webp`,
      title: t("resource.ldar"),
      description: t("resource.ldar.desc"),
      link: "https://www.livingdonorassistance.org/Resources/Additional-Resources",
    },
    {
      image: `${import.meta.env.BASE_URL}images/findhelp.webp`,
      title: t("resource.findhelp"),
      description: t("resource.findhelp.desc"),
      link: "https://www.findhelp.org/",
    },
  ];

  return (
    <section id="resources" className="section-vh bg-white flex items-center">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-warm-100 text-warm-700 text-sm font-medium rounded-full mb-4">
            {t("resources.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-6">
            {t("resources.title")}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            {t("resources.intro")}
          </p>
        </div>

        {/* Resources Grid - Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-float h-full overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-100 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-neutral-700 mb-4">{resource.description}</p>
                <div className="inline-flex items-center gap-2 text-brand-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  {t("resources.cta")}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Video Section - Glassmorphism Cards */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-8 text-center">
            {t("resource.videos.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "-f5yuW9bmtY",
                title: t("resource.video1"),
              },
              {
                id: "BJZ-kleYz40",
                title: t("resource.video2"),
              },
              {
                id: "YiHd7YCTnr0",
                title: t("resource.video3"),
              },
              {
                id: "akqYQ3Tc8j8",
                title: t("resource.video4"),
              },
            ].map((video) => (
              <div key={video.id} className="card-float">
                <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 shadow-inner">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    frameBorder="0"
                    allowFullScreen
                    title={video.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-base font-semibold text-neutral-900">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

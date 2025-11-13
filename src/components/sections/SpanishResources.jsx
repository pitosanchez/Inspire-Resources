/**
 * Spanish Resources Section - Cultural Sensitivity
 * Recursos creados con cuidado y respeto
 */

import { useLanguage } from "../../utils/LanguageContext";
import Card, { CardTitle, CardContent } from "../ui/Card";

export default function SpanishResources() {
  const { t } = useLanguage();
  
  return (
    <section id="spanish-resources" className="py-16 md:py-20 bg-accent-500">
      <div className="container mx-auto px-6">
        {/* Header - Glass Card */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="text-4xl mb-3">📚</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4 drop-shadow-lg">
              {t("spanish.title")}
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              {t("spanish.intro")}
            </p>
          </div>
        </div>

        {/* Videos Grid - Floating Cards */}
        <div className="max-w-5xl mx-auto mb-10">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-6 flex items-center justify-center gap-2 drop-shadow-lg">
            <span>🎥</span>
            <span>{t("spanish.videos")}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "K1SXgQYSphI",
                title: t("spanish.video1"),
              },
              {
                id: "YjPb2qaaRE4",
                title: t("spanish.video2"),
              },
              {
                id: "KoRY9eDo8eY",
                title: t("spanish.video3"),
              },
              {
                id: "TxFCu1C-Ub8",
                title: t("spanish.video4"),
              },
            ].map((video) => (
              <div
                key={video.id}
                className="backdrop-blur-lg bg-white/95 border border-white/30 rounded-2xl p-3 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="aspect-square mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200 shadow-inner">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    frameBorder="0"
                    allowFullScreen
                    title={video.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* PDFs Section - Floating Cards */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-6 flex items-center justify-center gap-2 drop-shadow-lg">
            <span>📄</span>
            <span>{t("spanish.pdfs")}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="backdrop-blur-lg bg-white/95 border border-white/30 rounded-2xl p-3 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-square mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center p-3 shadow-inner">
                <img
                  src="/images/vivirbien.webp"
                  alt="Vivir Bien con Insuficiencia Renal"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                {t("spanish.pdf1")}
              </h4>
              <p className="text-xs text-neutral-600">
                {t("spanish.pdf1.desc")}
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/95 border border-white/30 rounded-2xl p-3 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-square mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center p-4 shadow-inner">
                <img
                  src="/images/donorshild.svg"
                  alt="Donor Shield"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                {t("spanish.pdf2")}
              </h4>
              <p className="text-xs text-neutral-600">
                {t("spanish.pdf2.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

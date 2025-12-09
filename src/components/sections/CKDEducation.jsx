/**
 * CKD Education Section - Knowledge with Hope
 * Making complex information accessible and empowering
 */

import { useLanguage } from "../../utils/LanguageContext";
import Card, { CardTitle, CardContent } from "../ui/Card";

export default function CKDEducation() {
  const { t } = useLanguage();

  const stages = [
    {
      number: 1,
      egfr: "90+",
      title: t("stage.1.title"),
      desc: t("stage.1.desc"),
      action: t("stage.1.action"),
      color: "brand",
    },
    {
      number: 2,
      egfr: "60-89",
      title: t("stage.2.title"),
      desc: t("stage.2.desc"),
      action: t("stage.2.action"),
      color: "accent",
    },
    {
      number: 3,
      egfr: "30-59",
      title: t("stage.3.title"),
      desc: t("stage.3.desc"),
      action: t("stage.3.action"),
      color: "warm",
    },
    {
      number: 4,
      egfr: "15-29",
      title: t("stage.4.title"),
      desc: t("stage.4.desc"),
      action: t("stage.4.action"),
      color: "brand",
    },
    {
      number: 5,
      egfr: "<15",
      title: t("stage.5.title"),
      desc: t("stage.5.desc"),
      action: t("stage.5.action"),
      color: "accent",
    },
  ];

  return (
    <section
      id="ckd-education"
      className="bg-gradient-to-br from-neutral-50 to-accent-50"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 text-sm md:text-base font-medium rounded-full mb-5 md:mb-6">
            {t("ckd.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-6 md:mb-8">
            {t("ckd.title")}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            {t("ckd.intro")}
          </p>
        </div>

{/* What Are Kidneys */}
        <Card variant="elevated" className="max-w-4xl mx-auto mb-20 p-8">
          <div className="flex items-start gap-6">
            <div className="text-5xl">🫘</div>
            <div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-3">
                {t("ckd.kidneys.title")}
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {t("ckd.kidneys.text")}
              </p>
            </div>
          </div>
        </Card>

        {/* 5 Stages */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
              {t("stages.title")}
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t("stages.subtitle")}
            </p>
          </div>

          {/* Stages Grid - 3D Floating Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            style={{ perspective: "1000px" }}
          >
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="group relative"
                style={{
                  transform: `translateY(${index * 2}px)`,
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <Card
                  variant={stage.color}
                  className="relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-4"
                  style={{
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.15),
                      0 8px 20px rgba(0, 0, 0, 0.1),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset
                    `,
                    transform: "translateZ(20px)",
                  }}
                >
                  {/* 3D depth effect - top highlight */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />

                  {/* Large background number with 3D effect */}
                  <div
                    className="absolute top-4 right-4 text-7xl font-bold opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {stage.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
                          style={{
                            boxShadow:
                              "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          {stage.number}
                        </div>
                        <CardTitle className="mb-0">{stage.title}</CardTitle>
                      </div>
                    </div>
                    <div className="mb-3 text-sm font-semibold opacity-80 bg-white/30 inline-block px-3 py-1 rounded-full">
                      eGFR: {stage.egfr}
                    </div>
                    <CardContent className="mb-4 text-base">
                      {stage.desc}
                    </CardContent>
                    <div className="text-sm font-medium pt-3 border-t border-white/30">
                      {stage.action}
                    </div>
                  </div>

                  {/* Bottom shadow for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

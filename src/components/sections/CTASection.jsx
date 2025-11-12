/**
 * Final CTA Section - Invitation, Not Pressure
 * A gentle call to action
 */

import { useLanguage } from "../../utils/LanguageContext";
import Button from "../ui/Button";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-brand-500 to-accent-500 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
          {t("final.cta.title")}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {t("final.cta.text")}
        </p>
        <Button
          href="#resources"
          size="lg"
          className="bg-white text-brand-600 hover:bg-neutral-50 shadow-xl hover:shadow-2xl font-semibold"
        >
          {t("final.cta.button")}
        </Button>
      </div>
    </section>
  );
}

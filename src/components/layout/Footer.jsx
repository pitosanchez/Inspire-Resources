/**
 * Footer Component - Grounded, Quiet Closure
 * The visual "period" of the page
 */

import { useLanguage } from '../../utils/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <img
            src="/images/inspire.svg"
            alt="Inspire Logo"
            className="h-12 w-auto opacity-80"
          />

          {/* Copyright */}
          <p className="text-sm text-center">
            {t('footer.copyright')}
          </p>

          {/* Optional: Social Links or Contact Info */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#about"
              className="hover:text-brand-400 transition-colors"
            >
              {t('nav.about')}
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="#resources"
              className="hover:text-brand-400 transition-colors"
            >
              {t('nav.resources')}
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="#contact"
              className="hover:text-brand-400 transition-colors"
            >
              {t('nav.help')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

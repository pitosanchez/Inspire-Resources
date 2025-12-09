/**
 * Footer Component - Professional Medical Website Design
 * Comprehensive navigation and information hub
 */

import { useLanguage } from '../../utils/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  // Navigation sections organized by category
  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
  ]

  const resources = [
    { label: t('nav.guide'), href: '#transplant-guide' },
    { label: t('nav.ckd'), href: '#ckd-education' },
    { label: t('nav.resources'), href: '#resources' },
    { label: t('nav.spanish'), href: '#spanish-resources' },
  ]

  const getHelp = [
    { label: t('nav.help'), href: '#contact' },
  ]

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Brand Section */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-4 group">
              <img
                src={`${import.meta.env.BASE_URL}images/inspire.svg`}
                alt="Inspire Logo"
                className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wide">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full mr-3 group-hover:bg-brand-400 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wide">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full mr-3 group-hover:bg-brand-400 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wide">
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              {getHelp.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full mr-3 group-hover:bg-brand-400 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500 text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a
                href="#about"
                className="hover:text-brand-400 transition-colors"
              >
                Privacy
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href="#resources"
                className="hover:text-brand-400 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

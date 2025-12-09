/**
 * Language Switcher - Cultural Empathy
 * Speaking to people in their heart language
 */

import { useLanguage } from '../../utils/LanguageContext'

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap" role="group" aria-label="Language selector">
      <button
        onClick={() => switchLanguage('en')}
        className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
          language === 'en'
            ? 'bg-brand-500 text-white'
            : 'text-neutral-600 hover:bg-neutral-100'
        }`}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        ENG
      </button>
      <span className="inline-flex items-center text-neutral-400 flex-shrink-0">|</span>
      <button
        onClick={() => switchLanguage('es')}
        className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
          language === 'es'
            ? 'bg-brand-500 text-white'
            : 'text-neutral-600 hover:bg-neutral-100'
        }`}
        aria-label="Cambiar a Español"
        aria-pressed={language === 'es'}
      >
        ESP
      </button>
    </div>
  )
}

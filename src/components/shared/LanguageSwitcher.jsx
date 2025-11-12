/**
 * Language Switcher - Cultural Empathy
 * Speaking to people in their heart language
 */

import { useLanguage } from '../../utils/LanguageContext'

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language selector">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-brand-500 text-white'
            : 'text-neutral-600 hover:bg-neutral-100'
        }`}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        ENG
      </button>
      <span className="text-neutral-400">|</span>
      <button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
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

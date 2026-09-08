import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations } from '../i18n/types';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('upworx_language');
      if (saved === 'ENG' || saved === 'RU' || saved === 'LV') {
        return saved;
      }
    }
    return 'LV';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('upworx_language', lang);
      // Sync document html lang
      const htmlLangMap: Record<Language, string> = {
        LV: 'lv',
        ENG: 'en',
        RU: 'ru'
      };
      document.documentElement.lang = htmlLangMap[lang] || 'lv';
    }
  };

  useEffect(() => {
    const htmlLangMap: Record<Language, string> = {
      LV: 'lv',
      ENG: 'en',
      RU: 'ru'
    };
    document.documentElement.lang = htmlLangMap[language] || 'lv';
  }, [language]);

  const t = translations[language] || translations.LV;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

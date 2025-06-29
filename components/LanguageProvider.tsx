'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  const [messages, setMessages] = useState<Record<string, any>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'fr'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);
    
    // Load messages for current language
    import(`../messages/${language}.json`)
      .then(module => {
        // Small delay to show transition effect
        setTimeout(() => {
          setMessages(module.default);
          setIsTransitioning(false);
        }, 150);
      })
      .catch(console.error);
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return (typeof value === 'string' ? value : key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      <div className={`transition-opacity duration-300 ease-out ${
        isTransitioning ? 'opacity-50' : 'opacity-100'
      }`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
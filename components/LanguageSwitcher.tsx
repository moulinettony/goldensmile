'use client';

import { useLanguage } from './LanguageProvider';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const switchLocale = (newLocale: 'en' | 'fr') => {
    setLanguage(newLocale);
  };

  return (
    <div className="relative inline-flex items-center">
      <input
        type="checkbox"
        checked={language === 'en'}
        onChange={(e) => switchLocale(e.target.checked ? 'en' : 'fr')}
        className="sr-only"
        id="language-toggle"
      />
      <label
        htmlFor="language-toggle"
        className="relative flex items-center cursor-pointer bg-gray-200 rounded-full p-1 w-16 h-7 lg:h-8 transition-colors duration-200 ease-in-out hover:bg-gray-300"
      >
        <span
          className={`absolute left-0 top-0 w-8 h-7 lg:h-8 bg-amber-500 rounded-full shadow-md transform transition-all duration-300 ease-out ${language === 'en' ? 'translate-x-8 rounded-tl-none rounded-bl-none' : 'translate-x-0 rounded-tr-none rounded-br-none'
            }`}
        />
        <span className={`absolute left-1 text-xs font-medium text-gray-700 ${
          language === 'en' ? 'filter grayscale hover:filter-none' : ''
        }`}>
          <Image
            src="/fr.svg"
            alt="Dr. Abdelhamid"
            width={24}
            height={24}
            className="max-lg:h-[22px]"
          />
        </span>
        <span className={`absolute right-1 text-xs font-medium text-gray-700 ${
          language === 'fr' ? 'filter grayscale hover:filter-none' : ''
        }`}>
          <Image
            src="/uk.svg"
            alt="Dr. Abdelhamid"
            width={24}
            height={24}
            className="max-lg:h-[22px]"
          />
        </span>
      </label>
    </div>
  );
}
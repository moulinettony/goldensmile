'use client';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { getDictionary } from '@/lib/getDictionary';
import { useState } from 'react';

type HeaderProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export default function Header({ dictionary }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Golden <span className="text-amber-500">Smile</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.services}</a>
            <a href="#about" className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.about}</a>
            <a href="#testimonials" className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.testimonials}</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.contact}</a>
          </nav>

          {/* Language Switcher and CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="bg-amber-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              {dictionary.header.bookNow}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.services}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.about}</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.testimonials}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-amber-500 transition-colors">{dictionary.header.contact}</a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-1/2 text-center bg-amber-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              {dictionary.header.bookNow}
            </a>
            <div className="pt-4 border-t border-gray-200 w-full flex justify-center">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
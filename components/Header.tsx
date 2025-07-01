"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white fixed w-full backdrop-blur-md shadow-sm top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image
              src="/Goldensmile.svg"
              alt="Golden Smile logo"
              width={142}
              height={35}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              {t("navigation.services")}
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              {t("navigation.about")}
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              {t("navigation.testimonials")}
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              {t("navigation.contact")}
            </a>
          </nav>
          <div className="flex gap-6">
            <a
              href="#contact"
              className="hidden md:block bg-amber-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              {t("navigation.book")}
            </a>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none p-2 transition-transform duration-200 hover:scale-110"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-end">
                <span className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-x-[0.5px] translate-y-[4px]' : '-translate-y-1'
                }`}></span>
                <span className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block h-0.5 w-3 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 translate-x-[0.5px] translate-y-[0px] w-5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-3/5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col p-6 space-y-4">
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            {t("navigation.services")}
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            {t("navigation.about")}
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            {t("navigation.testimonials")}
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            {t("navigation.contact")}
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-center bg-amber-500 text-white font-semibold px-2 py-2 rounded-full hover:bg-amber-600 transition-colors"
          >
            {t("navigation.book")}
          </a>
        </nav>
      </div>
      {isMenuOpen && (
        <div 
          className="md:hidden fixed left-0 top-[72px] backdrop-blur-sm h-[calc(100vh-72px)] w-screen bg-black/30 backdrop-blur-sm z-[9] transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

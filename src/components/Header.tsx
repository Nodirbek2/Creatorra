import React, { useState, useEffect } from 'react';
import { Send, Menu, X, ArrowRight } from 'lucide-react';
import { LogoFull } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onJoinClick: () => void;
}

export default function Header({ onJoinClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with modern SaaS style */}
          <div 
            className="cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <LogoFull tagline={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100 border border-slate-200/80 rounded-full px-2 py-1 backdrop-blur-sm">
            {[
              { label: t.nav.pain, target: 'problem' },
              { label: t.nav.solution, target: 'solution' },
              { label: t.nav.howItWorks, target: 'how-it-works' },
              { label: t.nav.market, target: 'market' },
              { label: t.nav.vision, target: 'vision' },
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="px-3.5 py-1.5 text-xs text-slate-600 hover:text-[#5D36FF] rounded-full transition-all duration-200 font-sans hover:bg-white hover:shadow-xs"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons & Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Beautiful Pill Language Toggle */}
            <div className="flex bg-slate-100 border border-slate-200/50 p-0.5 rounded-xl text-[10.5px]">
              {(['uz', 'ru', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded-lg uppercase font-mono font-bold transition-all cursor-pointer ${
                    language === lang
                      ? 'bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Telegram Support Button - Required target=_blank */}
            <a
              id="tg-header-button"
              href="https://t.me/Nodirbek_B"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-202 rounded-xl transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5 text-[#7A19FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>{t.cta.telegramBtn}</span>
            </a>

            <button
              id="early-access-header-btn"
              onClick={onJoinClick}
              className="relative px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white hover:brightness-110 hover:shadow-lg hover:shadow-indigo-600/15 transition-all duration-200 flex items-center space-x-1 cursor-pointer"
            >
              <span>{t.hero.ctaJoin}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Inline Toggle for Mobile View */}
            <div className="flex bg-slate-100 border border-slate-200/50 p-0.5 rounded-lg text-[9.5px] mr-1">
              {(['uz', 'ru', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-1.5 py-0.5 rounded uppercase font-mono font-bold leading-none cursor-pointer ${
                    language === lang
                      ? 'bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white'
                      : 'text-slate-500'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a
              href="https://t.me/Nodirbek_B"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-555 hover:text-indigo-650 bg-white border border-slate-200 rounded-lg shadow-xs"
              title="Contact Telegram"
            >
              <Send className="w-4 h-4 text-[#7A19FF]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-550 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shadow-xs transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-slate-200 py-6 px-4 space-y-4 shadow-xl animate-fade-in-up">
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: t.nav.pain, target: 'problem' },
              { label: t.nav.solution, target: 'solution' },
              { label: t.nav.howItWorks, target: 'how-it-works' },
              { label: t.nav.market, target: 'market' },
              { label: t.nav.vision, target: 'vision' },
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/Nodirbek_B"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-all font-sans"
            >
              <Send className="w-4 h-4 text-[#7A19FF]" />
              <span>{t.cta.telegramBtn}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white font-semibold text-sm rounded-xl hover:brightness-110 transition-all shadow-md shadow-indigo-650/10 cursor-pointer"
            >
              <span>{t.hero.ctaJoin}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


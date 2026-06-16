import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import MarketInsight from './components/MarketInsight';
import Vision from './components/Vision';
import CTA from './components/CTA';
import { LogoFull } from './components/Logo';
import { useLanguage } from './context/LanguageContext';
import { EarlyAccessSubmission } from './types';
import { Send, Heart, ShieldCheck } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { t, language } = useLanguage();

  // Smooth scroll handler
  const handleJoinClick = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // When submitting from hero, we scroll to CTA & display a helpful toast
  const handleHeroEmailSubmit = (email: string) => {
    // Scroll to CTA form to complete registration
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Attempt to locate input in CTA and focus it
    setTimeout(() => {
      const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
      if (emailInput) {
        emailInput.value = email;
        // Trigger generic change event to update state in CTA component
        const event = new Event('input', { bubbles: true });
        emailInput.dispatchEvent(event);
        emailInput.focus();
      }
    }, 600);

    const checkMsg = language === 'uz'
      ? '✉️ Elektron pochta to\'ldirildi! Ro\'yxatdan o\'tishni yakunlash uchun quyida olingan rolingizni tanlang.'
      : language === 'ru'
      ? '✉️ Email заполнен! Пожалуйста, выберите вашу роль ниже, чтобы завершить регистрацию.'
      : '✉️ Email pre-filled! Please select your role below to complete registration.';
    showToast(checkMsg);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleCTASuccess = (sub: EarlyAccessSubmission) => {
    const successMsg = language === 'uz'
      ? `🎉 Ro'yxatdan muvaffaqiyatli o'tdingiz! Erta kirish kodi ${sub.email} uchun ajratildi.`
      : language === 'ru'
      ? `🎉 Успешная регистрация! Код раннего доступа присвоен для ${sub.email}`
      : `🎉 Registration successful! Early access code assigned to ${sub.email}`;
    showToast(successMsg);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#7A19FF] selection:text-white antialiased overflow-x-hidden">
      
      {/* Floating Glassmorphism Header */}
      <Header onJoinClick={handleJoinClick} />

      {/* Hero Section containing Creatorra Simulated Creator Screen */}
      <Hero 
        onJoinClick={handleJoinClick} 
        onSubmitEmail={handleHeroEmailSubmit} 
      />

      {/* Problem Section (manual Uzcard/Humo verified vs. Automated store) */}
      <Problem />

      {/* Solution Section (Bento spotlight cards) */}
      <Solution />

      {/* Step by Step Simulator Workflow */}
      <HowItWorks />

      {/* Market Growth Potentials & Interactive Calculator */}
      <MarketInsight />

      {/* Timeline Expansion Roadmaps */}
      <Vision />

      {/* Call To Action Form & Telegram Direct Support Buttons */}
      <CTA onSuccess={handleCTASuccess} />

      {/* Global Interactive Toast Notification Bar */}
      {toastMessage && (
        <div id="toast-notify" className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <div className="bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-xl shadow-indigo-100/40 text-xs text-slate-800 flex items-center space-x-3.5 max-w-sm">
            <div className="w-2 h-2 rounded-full bg-[#7A19FF] shrink-0 animate-ping"></div>
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Presentation Footer */}
      <footer id="app-footer" className="bg-white border-t border-slate-200 py-12 text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logotyping & legal */}
            <div className="space-y-4 col-span-1 md:col-span-2 text-left">
              <LogoFull className="hover:scale-[1.01] transition-transform duration-300" tagline={true} />
              <p className="text-xs text-slate-600 leading-relaxed font-light max-w-sm">
                {t.footer.desc}
              </p>
              <div className="text-[10px] font-mono text-slate-400">
                {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
              </div>
            </div>

            {/* Quick sections */}
            <div className="space-y-3.5 text-left">
              <h4 className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                {t.footer.mechanics}
              </h4>
              <ul className="space-y-2 text-xs font-light">
                <li><a href="#problem" className="text-slate-600 hover:text-[#5D36FF] transition-colors">{t.nav.pain}</a></li>
                <li><a href="#solution" className="text-slate-600 hover:text-[#5D36FF] transition-colors">{t.nav.solution}</a></li>
                <li><a href="#how-it-works" className="text-slate-600 hover:text-[#5D36FF] transition-colors">{t.nav.howItWorks}</a></li>
                <li><a href="#market" className="text-slate-600 hover:text-[#5D36FF] transition-colors">{t.nav.market}</a></li>
              </ul>
            </div>

            {/* Contact Support */}
            <div className="space-y-3.5 text-left">
              <h4 className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider font-semibold">
                {t.footer.support}
              </h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li>
                  <a
                    id="tg-footer-link"
                    href="https://t.me/Nodirbek_B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-white bg-gradient-to-r from-[#7A19FF] to-[#387BFF] hover:brightness-110 px-4 py-2 rounded-xl font-medium shadow-md shadow-indigo-500/10 transition-all font-sans"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.cta.telegramBtn}</span>
                  </a>
                </li>
                <li>
                  <span className="block text-[10.5px] text-slate-400">{t.footer.tgAddress}</span>
                </li>
                <li className="pt-2">
                  <span className="inline-flex items-center space-x-1 text-[10px] max-w-[200px] bg-slate-50 border border-slate-200 p-1.5 rounded-lg text-slate-550 font-mono">
                    <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>{t.footer.mvpState}</span>
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
            <div className="flex items-center space-x-1">
              <span>{t.footer.madeWith}</span>
              <Heart className="w-3 h-3 text-[#7A19FF] fill-[#7A19FF] inline animate-pulse" />
            </div>
            <div className="flex space-x-4">
              <span>{t.footer.technologies}</span>
              <span>•</span>
              <span className="text-[#5D36FF] font-semibold">{t.footer.themeDesc}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}


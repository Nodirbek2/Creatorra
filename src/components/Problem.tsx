import React, { useState } from 'react';
import { 
  XOctagon, 
  Send, 
  CreditCard,
  TrendingDown,
  ShieldAlert,
  Users,
  Lock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Problem() {
  const [activeContrast, setActiveContrast] = useState<'telegram' | 'creatorra'>('telegram');
  const { t, language } = useLanguage();

  return (
    <section 
      id="problem" 
      className="py-24 bg-white border-t border-slate-200 text-slate-800 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/40 via-white/0 to-white/0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-rose-50 text-rose-650 text-xs font-mono font-medium rounded-full border border-rose-100/60 mx-auto">
            <XOctagon className="w-3.5 h-3.5" />
            <span>{t.problem.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 mx-auto">
            {t.problem.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed font-light mx-auto">
            {t.problem.desc}
          </p>
        </div>

        {/* 5 Specific Problems Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 text-left">
          
          {/* Problem 1 */}
          <div className="bg-slate-50 border border-slate-150 hover:border-rose-300 hover:bg-white p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900">
                {t.problem.items.card1Title}
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {t.problem.items.card1Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-150 text-[10px] font-mono text-slate-450 italic">
              {t.problem.items.card1Quote}
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-slate-50 border border-slate-150 hover:border-rose-300 hover:bg-white p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900">
                {t.problem.items.card2Title}
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {t.problem.items.card2Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-150 text-[10px] font-mono text-slate-450 italic">
              {t.problem.items.card2Quote}
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-slate-50 border border-slate-150 hover:border-rose-300 hover:bg-white p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900">
                {t.problem.items.card3Title}
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {t.problem.items.card3Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-150 text-[10px] font-mono text-slate-450 italic">
              {t.problem.items.card3Quote}
            </div>
          </div>

          {/* Problem 4 */}
          <div className="bg-slate-50 border border-slate-150 hover:border-rose-300 hover:bg-white p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <TrendingDown className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900">
                {t.problem.items.card4Title}
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {t.problem.items.card4Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-150 text-[10px] font-mono text-slate-450 italic">
              {t.problem.items.card4Quote}
            </div>
          </div>

          {/* Problem 5 */}
          <div className="bg-slate-50 border border-slate-150 hover:border-rose-300 hover:bg-white p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900">
                {t.problem.items.card5Title}
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {t.problem.items.card5Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-150 text-[10px] font-mono text-slate-450 italic">
              {t.problem.items.card5Quote}
            </div>
          </div>

        </div>

        {/* Interactive Comparison: The "Aha!" moment for Investors */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 text-left">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                {t.problem.contrast.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-light">
                {t.problem.contrast.desc}
              </p>
            </div>

            {/* Selector buttons */}
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-xs shrink-0 select-none">
              <button
                onClick={() => setActiveContrast('telegram')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeContrast === 'telegram'
                    ? 'bg-rose-50 text-rose-600 border border-rose-100'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {t.problem.contrast.oldTab}
              </button>
              <button
                onClick={() => setActiveContrast('creatorra')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeContrast === 'creatorra'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {t.problem.contrast.newTab}
              </button>
            </div>
          </div>

          {/* Contrast Display Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {activeContrast === 'telegram' ? (
              <>
                <div className="md:col-span-5 text-left space-y-4">
                  <div className="inline-flex items-center px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] font-mono font-bold rounded border border-rose-100">
                    {t.problem.contrast.manualLabel}
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900">
                    {t.problem.contrast.manualTitle}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {t.problem.contrast.manualDesc}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-650">
                    <li className="flex items-center space-x-2 text-rose-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                      <span>{t.problem.contrast.manualBul1}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-rose-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                      <span>{t.problem.contrast.manualBul2}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-rose-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                      <span>{t.problem.contrast.manualBul3}</span>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-7 bg-white rounded-xl p-4 border border-rose-100 font-mono text-xs text-left max-w-md mx-auto w-full shadow-md shadow-rose-500/5">
                  <div className="pb-3 border-b border-slate-100 text-slate-400 text-[10px] flex items-center justify-between">
                    <span>{t.problem.contrast.mockTgHeader}</span>
                    <span>15:42 PM</span>
                  </div>
                  <div className="space-y-4 pt-3 text-left">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-150 max-w-[85%] text-slate-705">
                      <span className="block text-[10px] text-slate-450 font-bold">{t.problem.contrast.student}</span>
                      <p className="text-slate-800 mt-0.5 font-sans leading-normal">{t.problem.contrast.studentMsg}</p>
                    </div>
                    <div className="bg-indigo-50/20 p-2.5 rounded-xl border border-indigo-100 max-w-[85%] ml-auto text-right text-slate-750">
                      <span className="block text-[10px] text-[#7A19FF] font-bold">{t.problem.contrast.you}</span>
                      <p className="text-slate-800 mt-0.5 font-sans leading-normal">
                        {t.problem.contrast.youMsg}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-150 max-w-[85%] text-slate-705">
                      <span className="block text-[10px] text-slate-450 font-bold">{t.problem.contrast.student}</span>
                      <p className="text-slate-800 mt-0.5 font-sans leading-normal">{t.problem.contrast.studentReceipt}</p>
                      <div className="mt-2 text-[10px] text-amber-900 border border-amber-200 bg-amber-50 px-2.5 py-1.5 rounded font-sans leading-relaxed">
                        {t.problem.contrast.verificationBox}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="md:col-span-5 text-left space-y-4">
                  <div className="inline-flex items-center px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold rounded border border-emerald-100">
                    {t.problem.contrast.autoLabel}
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900">
                    {t.problem.contrast.autoTitle}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {t.problem.contrast.autoDesc}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-650">
                    <li className="flex items-center space-x-2 text-emerald-650 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{t.problem.contrast.autoBul1}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-emerald-650 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{t.problem.contrast.autoBul2}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-emerald-650 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{t.problem.contrast.autoBul3}</span>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-7 bg-white rounded-xl p-4 border border-slate-200 font-sans text-xs text-left max-w-md mx-auto w-full shadow-lg shadow-indigo-600/5">
                  <div className="pb-3 border-b border-slate-100 text-slate-400 text-[10px] font-mono flex items-center justify-between">
                    <span>{t.problem.contrast.mockCrHeader}</span>
                    <span className="text-emerald-600 font-bold">{t.problem.contrast.secureBadge}</span>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg flex items-center justify-between text-left">
                      <div>
                        <span className="text-[11px] text-slate-450 font-mono">{t.problem.contrast.productLabel}</span>
                        <p className="font-semibold text-slate-900 mt-0.5">{language === 'uz' ? 'Kurs: Telegram Monetizatsiya Sirlari' : 'Course: Telegram Monetization Secrets'}</p>
                      </div>
                      <span className="text-slate-900 font-bold font-mono">150,000 UZS</span>
                    </div>

                    <div className="py-2.5 px-3 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700 flex items-center space-x-2.5 font-sans justify-start text-left">
                      <span className="flex h-2.5 w-2.5 relative shrink-0">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <p className="text-[11px] leading-snug select-none">
                        {t.problem.contrast.paymentVerified}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="h-9 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 rounded-lg text-white text-[10px] font-bold flex items-center justify-center space-x-1 select-none cursor-default">
                        <span>{t.problem.contrast.paidButton}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

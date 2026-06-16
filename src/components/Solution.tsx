import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  CreditCard, 
  ShieldCheck, 
  BarChart3, 
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Solution() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const { t, language } = useLanguage();

  const pillars = [
    {
      icon: Compass,
      title: t.solution.pillars.marketplace.title,
      tag: t.solution.pillars.marketplace.tag,
      desc: t.solution.pillars.marketplace.desc,
      benefits: t.solution.pillars.marketplace.benefits
    },
    {
      icon: CreditCard,
      title: t.solution.pillars.payments.title,
      tag: t.solution.pillars.payments.tag,
      desc: t.solution.pillars.payments.desc,
      benefits: t.solution.pillars.payments.benefits
    },
    {
      icon: ShieldCheck,
      title: t.solution.pillars.security.title,
      tag: t.solution.pillars.security.tag,
      desc: t.solution.pillars.security.desc,
      benefits: t.solution.pillars.security.benefits
    },
    {
      icon: BarChart3,
      title: t.solution.pillars.analytics.title,
      tag: t.solution.pillars.analytics.tag,
      desc: t.solution.pillars.analytics.desc,
      benefits: t.solution.pillars.analytics.benefits
    }
  ];

  return (
    <section 
      id="solution" 
      className="py-24 bg-slate-50 text-slate-800 relative border-t border-slate-200"
    >
      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-indigo-100/30 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-mono font-medium rounded-full border border-emerald-100 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.solution.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 mx-auto">
            {t.solution.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed font-light mx-auto">
            {t.solution.desc}
          </p>
        </div>

        {/* Dynamic Bento & Feature Highlights Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 text-left">
          
          {/* Column A: Interactive Selectors - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const active = activeCard === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActiveCard(idx)}
                  className={`cursor-pointer text-left p-5 rounded-2xl border transition-all duration-300 ${
                    active 
                      ? 'bg-white border-indigo-600/30 shadow-lg shadow-indigo-650/5' 
                      : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg border transition-colors ${
                        active 
                          ? 'bg-indigo-50 border-indigo-150 text-indigo-600' 
                          : 'bg-slate-50 border border-slate-200 text-slate-400'
                      }`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h3 className={`font-display font-bold text-sm transition-colors ${
                        active ? 'text-slate-900' : 'text-slate-605 hover:text-slate-900'
                      }`}>
                        {pillar.title}
                      </h3>
                    </div>
                    <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${
                      active 
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-100' 
                        : 'bg-slate-100 text-slate-405 border-slate-200'
                    }`}>
                      {pillar.tag}
                    </span>
                  </div>
                  {active && (
                    <p className="text-xs text-slate-500 mt-3.5 font-sans leading-relaxed font-light animate-fade-in-up">
                      {pillar.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column B: Visualizing the Selected Core Feature - 7 Columns */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-50/20 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Pillar Content Details */}
            <div className="space-y-6 text-left relative z-10">
              <div className="flex items-center space-x-2 text-slate-500 font-mono text-xs pb-4 border-b border-slate-150">
                <Layers className="w-4 h-4 text-[#7A19FF]" />
                <span>{t.solution.spotlightLabel}: {pillars[activeCard].title}</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  {t.solution.spotlightTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  {t.solution.spotlightDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {pillars[activeCard].benefits.map((benefit) => (
                  <div 
                    key={benefit} 
                    className="flex items-start space-x-2.5 bg-slate-50 p-3 rounded-xl border border-slate-150"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-slate-700 font-light leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Visual Interactive Demonstration Mock depending on which activeCard is selected */}
            <div className="mt-8 border border-slate-150 bg-slate-50 rounded-xl p-4 text-left font-mono text-[11px] text-slate-500">
              {activeCard === 0 && (
                <div className="space-y-2">
                  <span className="text-slate-400 block font-semibold text-[10px]">{t.solution.preview.storefront}</span>
                  <div className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    <span className="text-slate-800 font-sans text-xs font-bold">creatorra.uz/dilshod_psy</span>
                    <span className="text-slate-400 font-mono text-[9px]">{t.solution.preview.connected}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 font-sans text-center">
                    <div className="bg-white p-2 rounded border border-slate-200 text-center shadow-2xs">
                      <span className="block text-[10px] text-slate-800 font-semibold">{language === 'uz' ? 'Stress Sirlari' : language === 'ru' ? 'Секреты Стресса' : 'Stress Secrets'}</span>
                      <span className="block text-[8px] text-emerald-600 font-bold mt-1">200K UZS</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200 text-center shadow-2xs">
                      <span className="block text-[10px] text-slate-800 font-semibold">{language === 'uz' ? 'Ruhshunoslik' : language === 'ru' ? 'Психология' : 'Self-Care 101'}</span>
                      <span className="block text-[8px] text-emerald-600 font-bold mt-1">150K UZS</span>
                    </div>
                    <div className="bg-indigo-50/50 p-2 rounded border border-[#7A19FF]/20 text-center shadow-2xs">
                      <span className="block text-[10px] text-[#7A19FF] font-bold">{language === 'uz' ? 'Jonli efir' : language === 'ru' ? 'Вебинар' : 'Live webinar'}</span>
                      <span className="block text-[8px] text-[#7A19FF] font-bold mt-1">{language === 'uz' ? 'Qo\'shilish' : language === 'ru' ? 'Вступить' : 'Join Live'}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeCard === 1 && (
                <div className="space-y-2">
                  <span className="text-slate-400 block font-semibold text-[10px]">{t.solution.preview.gateways}</span>
                  <div className="grid grid-cols-3 gap-2 font-mono text-center">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-center shadow-2xs">
                      <span className="block text-[10.5px] font-bold text-slate-800">PAYME API</span>
                      <span className="block text-[8px] text-slate-400 mt-0.5">{language === 'uz' ? 'Avtomatik ulanish' : language === 'ru' ? 'Авто-запрос' : 'Automated Callback'}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-center shadow-2xs">
                      <span className="block text-[10.5px] font-bold text-slate-800">CLICK APP</span>
                      <span className="block text-[8px] text-slate-400 mt-0.5">{language === 'uz' ? 'Tezkor Webhook' : language === 'ru' ? 'Реалтайм вебхук' : 'Realtime Webhook'}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-center shadow-2xs">
                      <span className="block text-[10.5px] font-bold text-slate-800">HUMO / UZCARD</span>
                      <span className="block text-[8px] text-slate-400 mt-0.5 font-sans">{language === 'uz' ? 'P2P ulanish' : language === 'ru' ? 'P2P-нода' : 'Instant P2P Node'}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeCard === 2 && (
                <div className="space-y-2">
                  <span className="text-slate-400 block font-semibold text-[10px]">{t.solution.preview.security}</span>
                  <div className="relative border border-indigo-150 rounded-xl p-4 text-center bg-indigo-50/10">
                    <span className="absolute top-2 left-6 text-indigo-700/20 font-bold text-[8px] select-none uppercase tracking-widest">
                      USER [BARATOV_NODIR_TASHKENT]
                    </span>
                    <span className="absolute bottom-2 right-6 text-indigo-700/20 font-bold text-[8px] select-none uppercase tracking-widest">
                      IP: 178.218.201.*** • 15/06/2026
                    </span>
                    <span className="text-xs text-[#7A19FF] uppercase block font-sans tracking-wider font-bold">
                      {t.solution.preview.securityPlayer}
                    </span>
                    <span className="block text-[9px] text-slate-500 mt-1 font-sans">
                      {t.solution.preview.securityDesc}
                    </span>
                  </div>
                </div>
              )}

              {activeCard === 3 && (
                <div className="space-y-2">
                  <span className="text-slate-400 block font-semibold text-[10px]">{t.solution.preview.metrics}</span>
                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="block text-[8.5px] text-slate-400 font-mono">{language === 'uz' ? 'Asosiy viloyat' : language === 'ru' ? 'Регион-лидер' : 'Top Region'}</span>
                      <span className="block text-[11px] font-bold text-slate-800 mt-1 font-sans">{language === 'uz' ? 'Toshkent (58%)' : language === 'ru' ? 'Ташкент (58%)' : 'Tashkent City (58%)'}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="block text-[8.5px] text-slate-400 font-mono">{language === 'uz' ? 'Tugallash darajasi' : language === 'ru' ? 'Прогресс учеников' : 'Retention Metric'}</span>
                      <span className="block text-[11px] font-bold text-slate-800 mt-1 font-sans">82% (Engaged)</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="block text-[8.5px] text-slate-400 font-mono">LTV Ratio</span>
                      <span className="block text-[11px] font-bold text-slate-800 mt-1 font-sans">1.8 Courses / Stud</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

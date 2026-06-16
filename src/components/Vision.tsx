import React from 'react';
import { 
  Globe, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Vision() {
  const { t, language } = useLanguage();

  const steps = [
    {
      phase: t.vision.steps.step1Phase,
      title: t.vision.steps.step1Title,
      timeline: t.vision.steps.step1Timeline,
      desc: t.vision.steps.step1Desc,
      badge: t.vision.steps.step1Badge,
      active: true
    },
    {
      phase: t.vision.steps.step2Phase,
      title: t.vision.steps.step2Title,
      timeline: t.vision.steps.step2Timeline,
      desc: t.vision.steps.step2Desc,
      badge: t.vision.steps.step2Badge,
      active: false
    },
    {
      phase: t.vision.steps.step3Phase,
      title: t.vision.steps.step3Title,
      timeline: t.vision.steps.step3Timeline,
      desc: t.vision.steps.step3Desc,
      badge: t.vision.steps.step3Badge,
      active: false
    },
    {
      phase: t.vision.steps.step4Phase,
      title: t.vision.steps.step4Title,
      timeline: t.vision.steps.step4Timeline,
      desc: t.vision.steps.step4Desc,
      badge: t.vision.steps.step4Badge,
      active: false
    }
  ];

  return (
    <section 
      id="vision" 
      className="py-24 bg-white text-slate-800 relative border-t border-slate-200 text-center"
    >
      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-indigo-50/20 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 font-sans text-center"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-mono font-medium rounded-full border border-indigo-100 mx-auto">
            <Globe className="w-3.5 h-3.5 text-indigo-650" />
            <span>{t.vision.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 mx-auto">
            {t.vision.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed font-light mx-auto">
            {t.vision.desc}
          </p>
        </div>

        {/* Timeline Horizon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={step.title}
              className={`border p-6 rounded-2xl flex flex-col justify-between h-[290px] transition-all duration-300 relative ${
                step.active 
                  ? 'border-[#7A19FF]/40 bg-white shadow-md shadow-indigo-105/10' 
                  : 'bg-slate-50/50 border-slate-205 opacity-70 hover:opacity-100 hover:border-slate-300'
              }`}
            >
              {/* Timeline Connector Line */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-[60%] -right-3.5 w-7 h-[1px] bg-slate-200 z-0 pointer-events-none"></div>
              )}

              <div className="space-y-4 relative z-10 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#7A19FF]">
                    {step.phase}
                  </span>
                  <span className={`font-mono text-[9px] px-2 py-0.5 rounded border leading-none font-semibold ${
                    step.active 
                      ? 'bg-indigo-50 border-indigo-150 text-indigo-700 shadow-3xs' 
                      : 'bg-white border-slate-200 text-slate-400'
                  }`}>
                    {step.badge}
                  </span>
                </div>

                <div className="space-y-1.5 text-left">
                  <span className="block font-mono text-[9px] text-slate-400 tracking-wider font-semibold">
                    {step.timeline}
                  </span>
                  <h3 className="font-display font-bold text-sm text-slate-900 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light mt-1.5 font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-150 font-mono text-[9.5px] text-slate-400 flex items-center justify-between font-medium">
                <span>{language === 'uz' ? "Markaziy Osiyo istiqboli" : language === 'ru' ? "Фокус: Средняя Азия" : "Central Asia Focus"}</span>
                <Globe className="w-3.5 h-3.5 opacity-30 text-[#7A19FF]" />
              </div>
            </div>
          ))}
        </div>

        {/* Regional Integration Highlights Card */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-4xl mx-auto shadow-3xs text-left">
          <h4 className="font-display font-bold text-sm text-slate-900 mb-2 font-sans">
            {t.vision.bottomTitle}
          </h4>
          <p className="text-xs text-slate-505 leading-relaxed font-light font-sans">
            {t.vision.bottomDesc}
          </p>
        </div>

      </div>
    </section>
  );
}

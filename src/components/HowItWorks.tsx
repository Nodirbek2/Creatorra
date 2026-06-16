import React, { useState } from 'react';
import { 
  UserPlus, 
  UploadCloud, 
  CreditCard, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { t, language } = useLanguage();

  const steps = [
    {
      num: 1,
      icon: UserPlus,
      title: t.howItWorks.steps.step1Title,
      actor: t.howItWorks.steps.step1Actor,
      desc: t.howItWorks.steps.step1Desc,
      highlight: t.howItWorks.steps.step1Highlight
    },
    {
      num: 2,
      icon: UploadCloud,
      title: t.howItWorks.steps.step2Title,
      actor: t.howItWorks.steps.step2Actor,
      desc: t.howItWorks.steps.step2Desc,
      highlight: t.howItWorks.steps.step2Highlight
    },
    {
      num: 3,
      icon: CreditCard,
      title: t.howItWorks.steps.step3Title,
      actor: t.howItWorks.steps.step3Actor,
      desc: t.howItWorks.steps.step3Desc,
      highlight: t.howItWorks.steps.step3Highlight
    },
    {
      num: 4,
      icon: Cpu,
      title: t.howItWorks.steps.step4Title,
      actor: t.howItWorks.steps.step4Actor,
      desc: t.howItWorks.steps.step4Desc,
      highlight: t.howItWorks.steps.step4Highlight
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-24 bg-slate-50 border-t border-slate-200 text-slate-800 relative text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-55/20 via-slate-50/0 to-slate-50/0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-cyan-50 text-cyan-705 text-xs font-mono font-medium rounded-full border border-cyan-100 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.howItWorks.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 mx-auto">
            {t.howItWorks.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed font-light mx-auto">
            {t.howItWorks.desc}
          </p>
        </div>

        {/* Step-by-Step Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Side: Step Selector (6 Columns) */}
          <div className="lg:col-span-6 space-y-3.5 text-left">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.num;
              return (
                <div
                  key={step.num}
                  onClick={() => setCurrentStep(step.num)}
                  className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-start space-x-4 ${
                    isActive 
                      ? 'bg-white border-indigo-600/30 shadow-md shadow-indigo-650/5' 
                      : 'bg-white/40 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    {step.num}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-display font-bold text-xs text-slate-905">
                        {step.title}
                      </span>
                      <span className="font-mono text-[8px] uppercase px-1.5 py-0.2 bg-slate-50 border border-slate-150 rounded text-slate-400">
                        {step.actor}
                      </span>
                    </div>
                    <p className={`text-[11px] leading-relaxed font-light ${
                      isActive ? 'text-slate-600 font-sans' : 'text-slate-400 group-hover:text-slate-605 transition-colors'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Virtual Step Visualizer Mock (6 Columns) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden h-[340px] flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7A19FF] via-[#5D36FF] to-[#387BFF]"></div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-3 border-b border-slate-150">
                <span>{t.howItWorks.simulator.title}</span>
                <span className="text-[#7A19FF] font-bold">
                  {t.howItWorks.simulator.tag.replace('{step}', currentStep.toString())}
                </span>
              </div>

              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in-up text-left">
                  <div className="bg-slate-50 p-4 border border-slate-150 rounded-xl space-y-3 font-sans">
                    <h4 className="text-xs font-bold text-slate-900">{t.howItWorks.simulator.step1Title}</h4>
                    <div className="space-y-2">
                      <label className="block text-[9px] text-slate-400 uppercase font-mono font-semibold">{t.howItWorks.simulator.step1Label}</label>
                      <div className="flex items-center bg-white border border-slate-200 rounded px-2.5 py-2 text-xs text-slate-700 shadow-2xs">
                        <span className="text-slate-400">creatorra.uz/</span>
                        <input 
                          type="text" 
                          readOnly 
                          value="nodirbek" 
                          className="bg-transparent font-bold text-[#7A19FF] focus:outline-none ml-0.5 pointer-events-none"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-slate-600 bg-white p-2 border border-slate-150 rounded shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{t.howItWorks.simulator.step1Success}</span>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in-up text-left">
                  <div className="bg-slate-50 p-4 border border-slate-150 rounded-xl space-y-3 font-sans text-xs">
                    <div className="border border-dashed border-slate-350 bg-white p-4 rounded-lg text-center cursor-default">
                      <UploadCloud className="w-7 h-7 text-[#7A19FF] mx-auto mb-1.5" />
                      <span className="block font-bold text-[10.5px] text-slate-855">{t.howItWorks.simulator.step2Dropzone}</span>
                      <span className="block text-[8px] text-slate-400 mt-0.5">{t.howItWorks.simulator.step2Notice}</span>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 bg-white p-2 rounded border border-slate-200 shadow-2xs">
                      <span>{t.howItWorks.simulator.step2SecureLink}</span>
                      <span className="text-emerald-600 font-bold">{t.howItWorks.simulator.step2Status}</span>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in-up text-left">
                  <div className="bg-slate-50 p-3.5 border border-slate-150 rounded-xl space-y-2.5 font-mono text-[11px] text-slate-500 shadow-2xs">
                    <div className="flex items-center justify-between border-b border-slate-150 pb-2">
                      <span className="text-slate-900 font-bold font-sans">{t.howItWorks.simulator.step3Header}</span>
                      <span className="text-[#7A19FF] text-[10px] font-bold">{t.howItWorks.simulator.step3Gateway}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-705">
                      <span>{t.howItWorks.simulator.step3Mobile}</span>
                      <span className="text-slate-900 font-bold font-sans">+998 (90) 321-**-84</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-705">
                      <span>{t.howItWorks.simulator.step3Amount}</span>
                      <span className="text-emerald-700 font-bold">{Number(150000).toLocaleString()} UZS</span>
                    </div>
                    <div className="p-2 bg-emerald-50 border border-emerald-150 rounded text-[9.5px] text-emerald-700 font-sans leading-tight shadow-3xs text-left">
                      {t.howItWorks.simulator.step3Status}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4 animate-fade-in-up text-left">
                  <div className="bg-slate-50 p-4 border border-slate-150 rounded-xl space-y-3 text-xs">
                    <div className="flex items-center space-x-3 bg-white p-2.5 rounded-lg border border-slate-150 shadow-2xs">
                      <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0 animate-pulse" />
                      <div className="text-left font-sans">
                        <span className="block font-bold text-[11px] text-slate-900">{t.howItWorks.simulator.step4Payout}</span>
                        <span className="block text-[9px] text-slate-400 font-mono font-medium">{t.howItWorks.simulator.step4Card}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-[10.5px] bg-indigo-50/20 border border-indigo-100 p-2.5 rounded text-[#7A19FF] font-sans shadow-3xs">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-[#7A19FF]" />
                      <span>{t.howItWorks.simulator.step4AntiPiracy}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Insight Footer */}
            <div className="bg-slate-50 border border-slate-150 p-3 rounded-xl text-left font-sans text-xs shadow-3xs">
              <span className="block font-semibold text-slate-900 mb-0.5">{t.howItWorks.simulator.insightHeader}</span>
              <p className="text-[11px] text-slate-500 leading-relaxed font-light font-sans">
                {steps[currentStep - 1].highlight}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

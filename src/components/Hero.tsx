import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Lock, 
  Play, 
  Tv, 
  TrendingUp,
  Fingerprint
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onJoinClick: () => void;
  onSubmitEmail: (email: string) => void;
  onDemoClick: () => void;
}

export default function Hero({ onJoinClick, onSubmitEmail, onDemoClick }: HeroProps) {
  const [emailInput, setEmailInput] = useState('');
  const [activeTab, setActiveTab] = useState<'manager' | 'analytics' | 'security'>('manager');
  const [earningsCycle, setEarningsCycle] = useState(38450120);
  const { t, language } = useLanguage();

  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      onSubmitEmail(emailInput.trim());
      setEmailInput('');
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-slate-55"
    >
      {/* Visual Background Elements - High fidelity tech accent */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-sky-100/20 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* Tiny network background grid pattern in pure CSS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-5 text-left space-y-8 animate-fade-in-up">
            
            {/* Super premium badging */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wide text-slate-600">
                {t.hero.banner}
              </span>
              <div className="flex items-center space-x-0.5 ml-1 pl-1.5 border-l border-slate-200 text-[10px] text-[#7A19FF] font-bold">
                <Sparkles className="w-3 h-3 text-[#7A19FF]" />
                <span>Investor MVP</span>
              </div>
            </div>

            {/* Giant display typography */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950">
                  Creatorra
                </span>
              </h1>
              <p className="font-display font-medium text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#7A19FF] to-[#387BFF] tracking-normal">
                {t.hero.subtitle}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-550 leading-relaxed max-w-lg font-light">
                {t.hero.desc}
              </p>
            </div>

            {/* Micro Early Access Submit form */}
            <form onSubmit={handleLocalSubmit} className="space-y-3 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 focus-within:border-[#7A19FF] focus-within:ring-2 focus-within:ring-indigo-100 transition-all shadow-sm">
                <input
                  type="email"
                  required
                  placeholder={t.hero.inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-transparent px-4 py-3 text-sm text-slate-800 focus:outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white text-xs font-bold font-sans rounded-xl px-6 py-3 hover:brightness-110 transition-all shadow-md flex items-center justify-center space-x-1 whitespace-nowrap cursor-pointer"
                >
                  <span>{t.hero.ctaButton}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[11px] text-slate-500 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline shrink-0" />
                <span>{t.hero.bottomText}</span>
              </p>
            </form>

            {/* Quick Link to launch Interactive Demo right inside Hero text column */}
            <div className="pt-1 text-left">
              <button
                type="button"
                onClick={onDemoClick}
                className="group inline-flex items-center space-x-2 text-[#7A19FF] hover:text-[#5D36FF] text-xs font-semibold font-sans cursor-pointer transition-colors bg-indigo-50/60 hover:bg-indigo-100/60 px-3.5 py-2 rounded-xl border border-indigo-100/40"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>
                  {language === 'uz' ? 'Yoki platformamiz interaktiv demoni sinab ko\'ring' : language === 'ru' ? 'Или протестируйте интерактивную демо-платформу' : 'Or try our interactive platform demo'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quick stats grid for social proof/investor validation */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 max-w-md text-left">
              <div>
                <span className="block font-display font-bold text-lg text-slate-900">45M+ UZS</span>
                <span className="block text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.avgCap}
                </span>
              </div>
              <div>
                <span className="block font-display font-bold text-lg text-slate-900">0%</span>
                <span className="block text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.piracyState}
                </span>
              </div>
              <div>
                <span className="block font-display font-bold text-lg text-slate-900">{language === 'uz' ? 'Klassik' : 'Pristine'}</span>
                <span className="block text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.payoutState}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Mockup Dashboard of Creatorra */}
          <div className="lg:col-span-7 animate-fade-in-up [animation-delay:200ms]">
            <div className="relative mx-auto max-w-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-250 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <span className="ml-2 font-mono text-[10px] text-slate-450 tracking-wide select-none">
                    creatorra.uz/dashboard/academy
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7A19FF]"></div>
                  <span className="font-mono text-[9px] text-[#7A19FF] font-bold uppercase">
                    {t.hero.gatewayBadge}
                  </span>
                </div>
              </div>

              {/* Creator Academy Header Info */}
              <div className="p-4 sm:p-5 border-b border-slate-150 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7A19FF] to-[#387BFF] flex items-center justify-center font-bold text-white text-md shadow-md shadow-indigo-600/15 select-none font-sans">
                    C
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 flex items-center">
                      {t.hero.academyName}
                      <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 bg-indigo-50 text-[#7A19FF] text-[9px] font-semibold border border-indigo-100 rounded">
                        {t.hero.proTag}
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-500 font-sans">
                      {t.hero.academySub}
                    </p>
                  </div>
                </div>
                <div className="text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                  <span className="text-[10px] font-mono text-slate-400">{t.hero.balance}</span>
                  <span className="font-display font-bold text-base text-emerald-600 tracking-tight">
                    {earningsCycle.toLocaleString()} UZS
                  </span>
                </div>
              </div>

              {/* Mockup Tabs Control */}
              <div className="bg-slate-50 border-b border-slate-150 px-2 pt-1 flex items-center space-x-1 overflow-x-auto scrollbar-none">
                {[
                  { id: 'manager', label: t.hero.tabProducts, icon: Play },
                  { id: 'analytics', label: t.hero.tabAnalytics, icon: TrendingUp },
                  { id: 'security', label: t.hero.tabSecurity, icon: ShieldCheck },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center space-x-1.5 px-3.5 py-2.5 text-[11px] font-semibold transition-all border-b-2 rounded-t-lg shrink-0 cursor-pointer ${
                        active 
                          ? 'border-[#7A19FF] text-[#7A19FF] bg-white' 
                          : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#7A19FF]' : 'text-slate-400'}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Inside Dashboard Content Screen */}
              <div className="p-4 sm:p-5 min-h-[220px] bg-white text-slate-800">
                {activeTab === 'manager' && (
                  <div className="space-y-3.5 animate-fade-in-up text-left">
                    <div className="flex items-center justify-between text-[11px] text-slate-450 font-mono">
                      <span>{t.hero.portfolioTitle}</span>
                      <button 
                        onClick={() => setEarningsCycle(prev => prev + 150000)}
                        className="text-[#7A19FF] hover:text-[#5D36FF] font-semibold font-sans flex items-center space-x-1 bg-indigo-50/50 hover:bg-indigo-50 px-2.5 py-1 rounded border border-indigo-150 transition-colors text-[10px] cursor-pointer"
                      >
                        <span>{t.hero.simulatedBuy}</span>
                      </button>
                    </div>

                    {/* Course Item 1 */}
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 hover:border-slate-300 hover:bg-white transition-all shadow-xs">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-[#7A19FF]/20 flex items-center justify-center text-[#7A19FF] mt-0.5 shrink-0">
                            <Tv className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-slate-900">
                              {t.hero.course1}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1 font-mono text-[9px] text-slate-400">
                              <span className="text-[#7A19FF] font-medium">{language === 'uz' ? '12 dars' : language === 'ru' ? '12 видео-уроков' : '12 video lessons'}</span>
                              <span>•</span>
                              <span>{t.hero.course1Sub}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="block text-xs font-bold text-slate-900">450,000 UZS</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 text-[8px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded mt-0.5">
                            {language === 'uz' ? 'Faol' : language === 'ru' ? 'Активен' : 'Active'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Course Item 2 */}
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 hover:border-slate-300 hover:bg-white transition-all shadow-xs">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mt-0.5 shrink-0">
                            <Play className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-slate-900">
                              {t.hero.course2}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1 font-mono text-[9px] text-slate-400">
                              <span className="text-teal-600 font-medium">{t.hero.course2Sub}</span>
                              <span>•</span>
                              <span>{language === 'uz' ? '24-iyun, 19:00 Toshkent' : language === 'ru' ? '24 июня, 19:00 Ташкент' : 'June 24, 19:00 Tashkent'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="block text-xs font-bold text-slate-900">150,000 UZS</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 text-[8px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded mt-0.5">
                            {language === 'uz' ? 'Faol' : language === 'ru' ? 'Активен' : 'Active'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Course Item 3 */}
                    <div className="bg-slate-55 border border-slate-150 rounded-xl p-3 opacity-60 hover:opacity-100 transition-all shadow-xs">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mt-0.5 shrink-0">
                            <Lock className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-slate-900">
                              {t.hero.course3}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1 font-mono text-[9px] text-slate-400">
                              <span className="text-slate-500 font-medium">{t.hero.course3Sub}</span>
                              <span>•</span>
                              <span>{language === 'uz' ? 'Himoyalangan PDF xizmati' : language === 'ru' ? 'Защищенный доступ PDF' : 'Watermarked PDF Access'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="block text-xs font-bold text-slate-900">350,050 UZS</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 text-[8px] font-bold text-slate-500 bg-slate-100 border border-slate-200 rounded mt-0.5">
                            {language === 'uz' ? 'Qoralama' : language === 'ru' ? 'Черновик' : 'Draft'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-4 animate-fade-in-up text-left">
                    <div className="flex items-center justify-between text-[11px] text-slate-450 font-mono">
                      <span>{t.hero.analyticsTitle}</span>
                      <span className="text-[#7A19FF] flex items-center space-x-1 font-medium">
                        <TrendingUp className="w-3.5 h-3.5 inline animate-ping" />
                        <span>{t.hero.analyticsSub}</span>
                      </span>
                    </div>

                    {/* Funnel chart simulation */}
                    <div className="grid grid-cols-4 gap-2.5">
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 shadow-xs">
                        <span className="block text-[10px] text-slate-400 font-mono">{language === 'uz' ? 'Toshkent' : 'Tashkent'}</span>
                        <span className="block text-sm font-bold mt-1 text-slate-900">21,450K</span>
                        <div className="h-1.5 w-full bg-slate-100 rounded mt-2 overflow-hidden">
                          <div className="h-full bg-indigo-650 rounded" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 shadow-xs">
                        <span className="block text-[10px] text-slate-400 font-mono">{language === 'uz' ? 'Samarqand' : 'Samarkand'}</span>
                        <span className="block text-sm font-bold mt-1 text-slate-900">8,100K</span>
                        <div className="h-1.5 w-full bg-slate-100 rounded mt-2 overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 shadow-xs">
                        <span className="block text-[10px] text-slate-400 font-mono">{language === 'uz' ? "Farg'ona" : 'Fergana'}</span>
                        <span className="block text-sm font-bold mt-1 text-slate-900">5,320K</span>
                        <div className="h-1.5 w-full bg-slate-100 rounded mt-2 overflow-hidden">
                          <div className="h-full bg-[#7A19FF] rounded" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 shadow-xs">
                        <span className="block text-[10px] text-slate-400 font-mono">{language === 'uz' ? 'Buxoro' : 'Bukhara'}</span>
                        <span className="block text-sm font-bold mt-1 text-slate-900">3,580K</span>
                        <div className="h-1.5 w-full bg-slate-100 rounded mt-2 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50/20 border border-indigo-100 p-3.5 rounded-xl text-left">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-sans flex items-center space-x-1.5">
                          <Users className="w-3.5 h-3.5 text-[#7A19FF]" />
                          <span className="font-semibold text-slate-800">{t.hero.conversionLabel}</span>
                        </span>
                        <span className="font-mono text-[#7A19FF] font-bold">12.8%</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-mono mt-1 leading-relaxed">
                        {t.hero.conversionDesc}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-3.5 animate-fade-in-up text-left">
                    <div className="flex items-center justify-between text-[11px] text-slate-450 font-mono">
                      <span>{t.hero.shieldTitle}</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] rounded font-bold border border-emerald-100">
                        100% SECURE
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-3">
                        <div className="flex items-center space-x-2 text-rose-600 text-xs font-semibold">
                          <Lock className="w-3.5 h-3.5" />
                          <span>{language === 'uz' ? 'Skrinshot to\'sildi' : language === 'ru' ? 'Скриншот заблокирован' : 'Capture Blocked'}</span>
                        </div>
                        <p className="text-[10px] text-slate-600 mt-1 leading-normal">
                          {t.hero.shieldAlert1}
                        </p>
                      </div>

                      <div className="bg-indigo-50/20 border border-indigo-100 rounded-xl p-3">
                        <div className="flex items-center space-x-2 text-[#7A19FF] text-xs font-semibold">
                          <Fingerprint className="w-3.5 h-3.5" />
                          <span>{language === 'uz' ? 'ID Tamg\'alandi' : language === 'ru' ? 'ID внедрен' : 'Watermark Active'}</span>
                        </div>
                        <p className="text-[10px] text-slate-600 mt-1 leading-normal">
                          {t.hero.shieldAlert2}
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-150 p-3 rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="block text-xs font-semibold text-slate-900">{language === 'uz' ? "Assetlarni Shifrlash Dvigateli" : language === 'ru' ? "Шифрование медиа-ассетов" : 'Dynamic Asset Cryptography'}</span>
                        <span className="block text-[9px] text-slate-500 font-mono">{t.hero.shieldAlert3}</span>
                      </div>
                      <ShieldCheck className="w-7 h-7 text-emerald-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="bg-slate-50 px-4 py-2 border-t border-slate-150 flex items-center justify-between font-mono text-[9px] text-slate-400 select-none">
                <span>{t.hero.uptime}</span>
                <span>Powered by Creatorra Protection Engine</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Calculator
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MarketInsight() {
  const [audienceSize, setAudienceSize] = useState<number>(10000);
  const [coursePrice, setCoursePrice] = useState<number>(200000);
  const [conversionRate, setConversionRate] = useState<number>(2); // percentage
  const { t, language } = useLanguage();

  // Calculate results
  const monthlyBuyers = Math.round(audienceSize * (conversionRate / 100));
  const grossMonthlyEarnings = monthlyBuyers * coursePrice;
  const platformFeeRate = 0.05; // 5% fee
  const platformFee = Math.round(grossMonthlyEarnings * platformFeeRate);
  const netEarnings = grossMonthlyEarnings - platformFee;

  // Average Uzbekistan salary approximation for comparison: 4,800,000 UZS
  const avgUzbSalary = 4800000;
  const timesBetterThanSalary = parseFloat((netEarnings / avgUzbSalary).toFixed(1));

  return (
    <section 
      id="market" 
      className="py-24 bg-white border-t border-slate-200 text-slate-800 relative text-center"
    >
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-emerald-50/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-850 text-xs font-mono font-medium rounded-full border border-emerald-100 mx-auto">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.market.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 mx-auto">
            {t.market.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed font-light mx-auto">
            {t.market.desc}
          </p>
        </div>

        {/* Info Grid: Market Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 text-left">
          
          <div className="bg-slate-55 border border-slate-150 p-6 rounded-2xl text-left relative overflow-hidden hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-2xs">
            <span className="text-[10px] font-mono text-cyan-502 block tracking-wider font-bold">{t.market.trends.trend1Label}</span>
            <h3 className="font-display font-bold text-base text-slate-900 mt-2">
              {t.market.trends.trend1Title}
            </h3>
            <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed font-sans">
              {t.market.trends.trend1Desc}
            </p>
            <div className="mt-6 font-mono text-2xl font-bold text-slate-800 flex items-baseline gap-1">
              {t.market.trends.trend1Metric}
              <span className="text-xs text-slate-400 font-normal font-sans ml-1">{t.market.trends.trend1MetricDesc}</span>
            </div>
          </div>

          <div className="bg-slate-55 border border-slate-150 p-6 rounded-2xl text-left relative overflow-hidden hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-2xs">
            <span className="text-[10px] font-mono text-emerald-604 block tracking-wider font-bold">{t.market.trends.trend2Label}</span>
            <h3 className="font-display font-bold text-base text-slate-900 mt-2">
              {t.market.trends.trend2Title}
            </h3>
            <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed font-sans">
              {t.market.trends.trend2Desc}
            </p>
            <div className="mt-6 font-mono text-2xl font-bold text-slate-800 flex items-baseline gap-1">
              {t.market.trends.trend2Metric}
              <span className="text-xs text-slate-400 font-normal font-sans ml-1">{t.market.trends.trend2MetricDesc}</span>
            </div>
          </div>

          <div className="bg-slate-55 border border-slate-150 p-6 rounded-2xl text-left relative overflow-hidden hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-2xs">
            <span className="text-[10px] font-mono text-indigo-600 block tracking-wider font-bold">{t.market.trends.trend3Label}</span>
            <h3 className="font-display font-bold text-base text-slate-900 mt-2">
              {t.market.trends.trend3Title}
            </h3>
            <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed font-sans">
              {t.market.trends.trend3Desc}
            </p>
            <div className="mt-6 font-mono text-2xl font-bold text-slate-800 flex items-baseline gap-1">
              {t.market.trends.trend3Metric}
              <span className="text-xs text-slate-400 font-normal font-sans ml-1 font-sans">{t.market.trends.trend3MetricDesc}</span>
            </div>
          </div>

        </div>

        {/* THE CREATOR POTENTIAL CALCULATOR */}
        <div className="bg-white border border-slate-205 rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto shadow-xs overflow-hidden relative text-left">
          <div className="absolute top-0 right-0 w-[4px] h-full bg-[#7A19FF]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator controls (7 columns) */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="flex items-center space-x-2.5">
                <Calculator className="w-5 h-5 text-[#7A19FF]" />
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 font-sans">
                  {t.market.calc.title}
                </h3>
              </div>
              <p className="text-xs text-slate-505 font-light leading-relaxed max-w-xl font-sans">
                {t.market.calc.desc}
              </p>

              {/* Sliders container */}
              <div className="space-y-5 pt-4">
                
                {/* Slider 1: Audience Size */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium font-sans">{t.market.calc.labelAudience}</span>
                    <span className="text-slate-800 font-mono font-bold bg-slate-50 px-2.5 py-0.5 rounded border border-slate-205 shadow-2xs">
                      {audienceSize.toLocaleString()} {t.market.calc.descAudience}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={audienceSize}
                    onChange={(e) => setAudienceSize(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#7A19FF]"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono uppercase">
                    <span>1,000</span>
                    <span>50k</span>
                    <span>100,000</span>
                  </div>
                </div>

                {/* Slider 2: Course Price */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-505 font-medium font-sans">{t.market.calc.labelPrice}</span>
                    <span className="text-emerald-700 font-mono font-bold bg-slate-50 px-2.5 py-0.5 rounded border border-slate-205 shadow-2xs">
                      {coursePrice.toLocaleString()} UZS
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1500000"
                    step="25000"
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono uppercase">
                    <span>50K UZS</span>
                    <span>750K</span>
                    <span>1.5M UZS</span>
                  </div>
                </div>

                {/* Slider 3: Conversion Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-505 font-medium font-sans">{t.market.calc.labelConversion}</span>
                    <span className="text-[#7A19FF] font-mono font-bold bg-slate-50 px-2.5 py-0.5 rounded border border-slate-205 shadow-2xs">
                      {conversionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="8"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#7A19FF]"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono uppercase">
                    <span>0.5% ({language === 'uz' ? 'Ehtiyotkorlik' : language === 'ru' ? 'Консервативно' : 'Conservative'})</span>
                    <span>4%</span>
                    <span>8% ({language === 'uz' ? 'Jonli faollik' : language === 'ru' ? 'Высокая страсть' : 'High passion'})</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Results Output Showcase (5 columns) */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-150 rounded-2xl p-6 text-left space-y-5 relative">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-50/10 rounded-full blur-[40px] pointer-events-none"></div>

              <div className="space-y-0.5 border-b border-slate-200 pb-3 text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider font-semibold">{t.market.calc.approxMonthly}</span>
                <span className="text-xs text-slate-500 font-sans">{language === 'uz' ? 'Mijozlar faolligiga asosan' : language === 'ru' ? 'Оценка на основе активности' : 'Estimation based on activity'}</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-left">
                  <span className="text-slate-500 font-sans">{t.market.calc.monthlyBuyers}</span>
                  <span className="font-bold font-mono text-slate-800">{monthlyBuyers} {language === 'uz' ? 'talaba/oy' : language === 'ru' ? 'учеников/мес' : 'students/mo'}</span>
                </div>

                <div className="flex justify-between items-center text-xs text-left">
                  <span className="text-slate-500 font-sans">{t.market.calc.fee}</span>
                  <span className="font-mono font-bold text-rose-600">-{platformFee.toLocaleString()} UZS</span>
                </div>

                <div className="bg-white p-4 border border-slate-200 rounded-xl space-y-1 shadow-3xs text-left">
                  <span className="text-[9px] font-mono text-[#7A19FF] uppercase tracking-widest block font-bold">{language === 'uz' ? 'Sizning oylik daromadingiz' : language === 'ru' ? 'Ваш чистый месячный доход' : 'Your Monthly Income'}</span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-none">
                    {netEarnings.toLocaleString()} UZS
                  </div>
                  <span className="font-mono text-[9.5px] text-slate-400 block pt-1.5 font-medium leading-normal font-sans">
                    {language === 'uz' ? "Sizning Humo/Uzcard kartangizga o'tkaziladi." : language === 'ru' ? "Выводится напрямую на Humo/Uzcard." : 'Settled instantly to your Humo/Uzcard on pay-out.'}
                  </span>
                </div>
              </div>

              {/* Uzbekistan average comparative metrics (Investor eye-candy) */}
              <div className="bg-emerald-50/50 border border-emerald-100 p-3.5 rounded-xl text-left">
                <p className="text-[11.5px] leading-relaxed font-sans text-emerald-850 font-light">
                  {t.market.calc.comparativeText
                    .replace('{income}', netEarnings.toLocaleString())
                    .replace('{metric}', timesBetterThanSalary.toString())}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

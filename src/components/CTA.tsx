import React, { useState } from 'react';
import { Send, CheckCircle2, Heart, ShieldCheck, Sparkles, ArrowRight, UserPlus, FileSpreadsheet } from 'lucide-react';
import { EarlyAccessSubmission } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CTAProps {
  onSuccess: (sub: EarlyAccessSubmission) => void;
}

export default function CTA({ onSuccess }: CTAProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'creator' | 'investor' | 'supporter'>('creator');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Create random local referral code for engagement
    const code = 'CR-' + Math.floor(100000 + Math.random() * 900000);
    setReferralCode(code);
    
    onSuccess({
      email,
      name,
      role,
      message
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setEmail('');
    setName('');
    setMessage('');
    setRole('creator');
    setSubmitted(false);
  };

  return (
    <section 
      id="cta" 
      className="py-24 bg-slate-50 border-t border-slate-200 text-slate-805 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-50/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-50/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Background visual box */}
        <div className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-md">

          {!submitted ? (
            <div className="space-y-8 animate-fade-in-up">
              
              {/* Text Header */}
              <div className="space-y-3.5">
                <span className="font-mono text-[10px] text-indigo-705 tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 inline-block font-semibold">
                  {t.cta.badge}
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-normal text-slate-900 font-sans">
                  {t.cta.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-550 leading-normal max-w-xl mx-auto font-light font-sans">
                  {t.cta.desc}
                </p>
              </div>

              {/* Comprehensive Form */}
              <form onSubmit={handleRegister} className="max-w-xl mx-auto space-y-4 text-left font-sans">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-slate-450 uppercase font-bold">{t.cta.nameLabel}</label>
                    <input
                      type="text"
                      placeholder={t.cta.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-205 focus:border-indigo-500/80 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-colors placeholder:text-slate-400 font-medium shadow-3xs"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-slate-450 uppercase font-bold">{t.cta.emailLabel}</label>
                    <input
                      type="email"
                      required
                      placeholder={t.cta.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-205 focus:border-indigo-500/80 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-colors placeholder:text-slate-400 font-medium shadow-3xs"
                    />
                  </div>
                </div>

                {/* Role Switcher */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono text-slate-450 uppercase font-bold">{t.cta.roleLabel}</label>
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200">
                    {[
                      { id: 'creator', label: t.cta.roles.creator },
                      { id: 'investor', label: t.cta.roles.investor },
                      { id: 'supporter', label: t.cta.roles.supporter }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRole(item.id as any)}
                        className={`py-2 text-[10.5px] rounded-lg transition-all ${
                          role === item.id 
                            ? 'bg-white text-slate-900 border border-slate-200/80 shadow-2xs font-bold'
                            : 'text-slate-450 hover:text-slate-700 font-medium'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-slate-450 uppercase font-bold">{t.cta.messageLabel}</label>
                  <textarea
                    rows={3}
                    placeholder={t.cta.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-205 focus:border-indigo-505/80 focus:bg-white rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none transition-colors resize-none placeholder:text-slate-400 font-medium shadow-3xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold py-3.5 rounded-xl text-xs transition-all shadow-md flex items-center justify-center space-x-2 animate-pulse-subtle"
                >
                  <UserPlus className="w-4 h-4 text-white" />
                  <span>{t.cta.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>

              {/* Support Button (REQUIRED BY PROMPT) */}
              <div className="pt-6 border-t border-slate-150 max-w-lg mx-auto space-y-3.5 font-sans">
                <span className="block text-[11px] text-slate-400 font-mono uppercase font-bold">
                  {t.cta.telegramBannerTitle}
                </span>
                
                <a
                  id="tg-cta-button"
                  href="https://t.me/Nodirbek_B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-7 py-3 rounded-2xl text-xs font-bold transition-all shadow-2xs border border-indigo-150"
                >
                  <Send className="w-4 h-4 text-indigo-600" />
                  <span>{t.cta.telegramBtn}</span>
                </a>
                
                <p className="text-[10px] text-slate-400 font-light">
                  {t.cta.telegramCaption}
                </p>
              </div>

            </div>
          ) : (
            /* Submission Success State */
            <div className="py-8 space-y-6 text-center animate-fade-in-up font-sans">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-150 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2.5 max-w-md mx-auto">
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  {t.cta.successTitle.replace('{name}', name || 'scholar')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  {t.cta.successDesc}
                </p>
                <code className="inline-block bg-slate-50 border border-slate-150 text-slate-805 font-mono font-bold text-sm px-4 py-2 rounded-xl mt-2 select-all">
                  {referralCode}
                </code>
              </div>

              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl max-w-lg mx-auto text-xs text-indigo-700 font-sans leading-relaxed">
                {role === 'investor' 
                  ? t.cta.successRoleNote.investor 
                  : t.cta.successRoleNote.other}
              </div>

              {message && (
                <div className="p-3.5 bg-slate-50 border border-slate-150 rounded-xl max-w-md mx-auto text-left">
                  <span className="block text-[8px] font-mono text-slate-400 uppercase font-bold">{t.cta.successMemo}</span>
                  <p className="text-xs text-slate-505 mt-1 italic font-light">"{message}"</p>
                </div>
              )}

              <div className="pt-4 border-t border-slate-150 space-y-3.5">
                <p className="text-xs text-slate-405">{t.cta.adjustMsg}</p>
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 hover:text-slate-800 transition-all font-sans font-semibold shadow-3xs cursor-pointer"
                  >
                    {t.cta.anotherEmail}
                  </button>
                  <a
                    href="https://t.me/Nodirbek_B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold font-sans transition-all shadow-3xs"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>{t.cta.chatTg}</span>
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

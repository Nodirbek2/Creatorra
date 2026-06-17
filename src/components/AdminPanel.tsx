import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Key, 
  X, 
  Database, 
  FileSpreadsheet, 
  Search, 
  FileDown, 
  Settings, 
  CheckCircle, 
  Copy, 
  HelpCircle, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Sparkles,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { EarlyAccessSubmission } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MOCK_SUBMISSIONS: EarlyAccessSubmission[] = [
  {
    name: "Sardor Ahmedov",
    email: "sardor_creators@gmail.com",
    role: "creator",
    message: "Oliygoh loyihamiz uchun darslarni yuklamoqchimiz, anti-piracy va telegram ko'chirishlardan charchadik. StreamSafe demo-ni kutyapman!",
    code: "CR-920511",
    date: "16.06.2026, 12:44:00"
  },
  {
    name: "Kamilov Nodirbek",
    email: "nodirbek.ventures@gmail.com",
    role: "investor",
    message: "Interested in the $100M+ Central Asian transactions target. Let's schedule a call on Telegram to discuss pre-seed terms.",
    code: "CR-710439",
    date: "16.06.2026, 11:15:30"
  },
  {
    name: "Mohira Rayhonova",
    email: "mohira_design@yandex.ru",
    role: "creator",
    message: "Mening Figma darsliklarimni dars platformasiga joylash niyatidaman. Click integratsiyasi juda qulay imkoniyat.",
    code: "CR-410521",
    date: "15.06.2026, 18:22:15"
  },
  {
    name: "Alexey Volkov",
    email: "volkov.invest@mail.ru",
    role: "investor",
    message: "Готовы рассмотреть соинвестирование с венчурными фондами Узбекистана.",
    code: "CR-801244",
    date: "15.06.2026, 09:12:05"
  },
  {
    name: "Azizbek Sheraliyev",
    email: "sher_aziz@mail.ru",
    role: "supporter",
    message: "Mualliflarni qo'llab quvvatlaymiz, ajoyib dizayn!",
    code: "CR-330105",
    date: "14.06.2026, 21:05:40"
  }
];

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const { language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const [submissions, setSubmissions] = useState<EarlyAccessSubmission[]>([]);
  const [useMock, setUseMock] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<'all' | 'creator' | 'investor' | 'supporter'>('all');
  
  const [webhookUrl, setWebhookUrl] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [activeTab, setActiveTab ] = useState<'submissions' | 'sheets'>('submissions');

  // Load real submissions & webhook from localStorage
  useEffect(() => {
    if (isOpen) {
      loadSubmissions();
      const savedWebhook = localStorage.getItem('creatorra_webhook_url') || '';
      setWebhookUrl(savedWebhook);
    }
  }, [isOpen]);

  const loadSubmissions = () => {
    try {
      const stored = localStorage.getItem('creatorra_submissions');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      } else {
        setSubmissions([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'Nodze0711') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg(
        language === 'uz' 
          ? "Noto'g'ri parol!" 
          : language === 'ru' 
          ? "Неверный пароль!" 
          : "Invalid password!"
      );
    }
  };

  const handleSaveWebhook = () => {
    localStorage.setItem('creatorra_webhook_url', webhookUrl.trim());
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 2500);
  };

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm(
      language === 'uz'
        ? "Haqiqatan ham barcha mahalliy ro'yxatdan o'tganlarni o'chirib tashlamoqchimisiz? (Bu barcha testlarni tozalaydi)"
        : "Are you sure you want to delete all local submissions? (This resets the local test data)"
    );
    if (confirmDelete) {
      localStorage.removeItem('creatorra_submissions');
      setSubmissions([]);
    }
  };

  const activeSubmissions = useMock ? MOCK_SUBMISSIONS : submissions;

  const filteredSubmissions = activeSubmissions.filter(item => {
    const matchesSearch = 
      (item.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.message || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.code || '').toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesRole = selectedRole === 'all' || item.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleCopyScript = () => {
    const scriptCode = `// Google Sheets Apps Script code for Creatorra Integration
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var json = JSON.parse(e.postData.contents);
    
    // Add header row if sheet is completely fresh
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Sana (Date)", "Ism/Tashkilot (Name)", "Email", "Roli (Role)", "Taklif/Xabar (Message)", "Kupon/Referral Code"]);
    }
    
    // Append data row
    sheet.appendRow([
      json.date || new Date().toLocaleString(),
      json.name || "Noma'lum & Anonymous",
      json.email || "",
      json.role || "Muallif",
      json.message || "",
      json.code || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
    navigator.clipboard.writeText(scriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 3000);
  };

  const handleExportCSV = () => {
    if (filteredSubmissions.length === 0) return;
    
    const headers = ["Sana (Date)", "Ism (Name)", "Email", "Roli (Role)", "Xabar (Message)", "Kod (Code)"];
    const rows = filteredSubmissions.map(item => [
      item.date || '',
      item.name || '',
      item.email || '',
      item.role || '',
      (item.message || '').replace(/"/g, '""'),
      item.code || ''
    ]);

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // Include BOM for Uzb characters in Excel
    csvContent += [headers.join(","), ...rows.map(e => e.map(val => `"${val}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `creatorra_submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        id="admin-portal-modal"
        className="relative w-full max-w-5xl bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden flex flex-col my-8 max-h-[90vh]"
      >
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
              <ShieldCheck className="w-5 h-5 text-indigo-400 animate-pulse" />
            </span>
            <div>
              <h2 className="text-sm font-semibold font-sans tracking-wide">
                {language === 'uz' ? "Creatorra Administrator Boshqaruv Portali" : "Creatorra Administration Control Portal"}
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* AUTHENTICATION VIEW */}
        {!isAuthenticated ? (
          <div className="p-10 flex flex-col items-center justify-center text-center space-y-6 bg-slate-50">
            <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center">
              <Key className="w-6 h-6 text-indigo-600 animate-bounce" />
            </div>
            
            <div className="max-w-md space-y-1">
              <h3 className="font-display font-medium text-lg text-slate-800">
                {language === 'uz' ? "Admin paroli" : "Admin password"}
              </h3>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
              <div className="space-y-1 text-left">
                <input 
                  type="password"
                  placeholder={language === 'uz' ? "Parol..." : "Password..."}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-indigo-600 focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-center text-slate-800"
                  autoFocus
                />
              </div>

              {errorMsg && <p className="text-[10px] text-red-500 font-medium">{errorMsg}</p>}

              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors shadow-sm cursor-pointer"
              >
                {language === 'uz' ? "Kirish" : "Enter"}
              </button>
            </form>
          </div>
        ) : (
          /* DASHBOARD VIEW */
          <div className="flex-1 flex flex-col md:flex-row h-full min-h-[450px] overflow-hidden">
            
            {/* Sidebar Controls */}
            <div className="w-full md:w-64 bg-slate-50 border-r border-slate-150 p-5 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-slate-400 block">
                  {language === 'uz' ? "MENYULAR" : "NAVIGATION"}
                </span>

                <div className="space-y-1.5">
                  <button 
                    onClick={() => setActiveTab('submissions')}
                    className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'submissions' 
                        ? 'bg-indigo-55/60 text-indigo-700 border border-indigo-100' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    <Database className="w-4 h-4 shrink-0" />
                    <span>{language === 'uz' ? "Ro'yxatdagilar" : "Registrations"}</span>
                    <span className="ml-auto bg-slate-200 text-slate-700 text-[10px] px-2 py-0.5 rounded-full font-mono">
                      {activeSubmissions.length}
                    </span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('sheets')}
                    className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'sheets' 
                        ? 'bg-indigo-55/60 text-indigo-700 border border-indigo-100' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    <FileSpreadsheet className="w-4 h-4 shrink-0" />
                    <span>Google Sheets Sync</span>
                    {webhookUrl ? (
                      <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    ) : null}
                  </button>
                </div>

                {/* Submissions Switcher */}
                <div className="border-t border-slate-200 pt-5 space-y-3 text-xs">
                  <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-slate-400 block">
                    {language === 'uz' ? "MA'LUMOT TURI" : "DATA SOURCE"}
                  </span>
                  <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-3xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[11px] text-slate-700">
                        {language === 'uz' ? "Namuna Rejimi" : "Use Mock Data"}
                      </span>
                      <button 
                        onClick={() => setUseMock(!useMock)}
                        className="text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                      >
                        {useMock ? <ToggleRight className="w-8 h-8 text-indigo-600" /> : <ToggleLeft className="w-8 h-8 text-slate-405" />}
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-normal font-light">
                      {language === 'uz' 
                        ? "Haqiqiy ro'yxatdan o'tganlar bo'sh bo'lganda, vizual ko'rinish va jadvallarni test qilish uchun namunani yoqing!"
                        : "Turn on mock data to evaluate full rows, search filters, and analytics when no one has registered yet."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reset Submissions */}
              {!useMock && submissions.length > 0 && (
                <button
                  onClick={handleDeleteAll}
                  className="w-full text-left py-2 px-3 text-red-650 hover:bg-red-50 hover:text-red-700 rounded-lg text-[10.5px] font-mono border border-dashed border-red-200 transition-colors cursor-pointer"
                >
                  ⚠️ {language === 'uz' ? "Barcha ma'lumotlarni o'chirish" : "Delete all test storage"}
                </button>
              )}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto max-h-none md:max-h-[600px]">
              
              {activeTab === 'submissions' ? (
                /* SUBMISSIONS TAB */
                <div className="space-y-4 flex flex-col h-full">
                  
                  {/* Tab Header Stats */}
                  <div className="grid grid-cols-3 gap-3.5">
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl flex items-center space-x-3">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono text-slate-400 uppercase font-bold">{language === 'uz' ? "Jami a'zolar" : "Total Slotted"}</span>
                        <span className="text-base font-extrabold text-slate-800 mt-0.5">{activeSubmissions.length}</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl flex items-center space-x-3">
                      <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono text-slate-400 uppercase font-bold">{language === 'uz' ? "Mualliflar" : "Creators"}</span>
                        <span className="text-base font-extrabold text-slate-800 mt-0.5">
                          {activeSubmissions.filter(item => item.role === 'creator').length}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl flex items-center space-x-3">
                      <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono text-slate-400 uppercase font-bold">Investors</span>
                        <span className="text-base font-extrabold text-slate-800 mt-0.5">
                          {activeSubmissions.filter(item => item.role === 'investor').length}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Search and Filters */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2">
                    <div className="relative w-full sm:w-64">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="text"
                        placeholder={language === 'uz' ? "Foydalanuvchi qidirish..." : "Search user details..."}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                      {[
                        { id: 'all', label: language === 'uz' ? 'Barchasi' : 'All' },
                        { id: 'creator', label: '💻 Creator' },
                        { id: 'investor', label: '📊 Investor' },
                        { id: 'supporter', label: '✨ Support' }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedRole(tab.id as any)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            selectedRole === tab.id 
                              ? 'bg-slate-900 text-white' 
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submissions Data Table */}
                  <div className="flex-1 border border-slate-150 rounded-2xl overflow-hidden bg-white max-h-[300px] overflow-y-auto shadow-2xs">
                    {filteredSubmissions.length === 0 ? (
                      <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center space-y-2">
                        <Database className="w-8 h-8 text-slate-300" />
                        <p className="text-xs font-semibold">{language === 'uz' ? "Hozircha hech qanday foydalanuvchi yo'q" : "No submissions found matching criteria"}</p>
                        <p className="text-[10px] text-slate-400 font-light max-w-sm">
                          {language === 'uz' 
                            ? "Mualliflar ro'yxatdan o'tishgach ushbu jadvalda ma'lumotlar chiqadi, yoki namunani yoqib ko'ring."
                            : "Provide mock data from the left menu to preview how users populate in the list."}
                        </p>
                      </div>
                    ) : (
                      <div className="inline-block min-w-full align-middle">
                        <table className="min-w-full divide-y divide-slate-150">
                          <thead className="bg-slate-50 font-sans font-semibold text-[10px] text-slate-400 uppercase tracking-wider text-left">
                            <tr>
                              <th scope="col" className="px-4 py-3 font-mono">{language === 'uz' ? "Sana" : "Date"}</th>
                              <th scope="col" className="px-4 py-3">{language === 'uz' ? "Ism (Name)" : "Name"}</th>
                              <th scope="col" className="px-4 py-3">Email</th>
                              <th scope="col" className="px-4 py-3">{language === 'uz' ? "To'liq Ta'rif" : "Role"}</th>
                              <th scope="col" className="px-4 py-3">{language === 'uz' ? "Taklif / Xabar" : "Suggestion / Message"}</th>
                              <th scope="col" className="px-4 py-3 font-mono">CODE</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white text-xs text-slate-750 font-normal">
                            {filteredSubmissions.map((item, idx) => (
                              <tr key={idx} className="hover:bg-indigo-50/20 transition-colors">
                                <td className="px-4 py-3 font-mono text-[9px] text-slate-400 whitespace-nowrap">
                                  {item.date || 'Auto Registered'}
                                </td>
                                <td className="px-4 py-3 font-bold text-slate-800 whitespace-nowrap">
                                  {item.name || "Noma'lum"}
                                </td>
                                <td className="px-4 py-3 font-medium text-[#7A19FF] select-all">
                                  {item.email}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                                    item.role === 'creator' 
                                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                                      : item.role === 'investor' 
                                      ? 'bg-[#EEF2FF] text-indigo-700 border border-indigo-100' 
                                      : 'bg-slate-100 text-slate-600'
                                  }`}>
                                    {item.role === 'creator' ? '💻 Muallif' : item.role === 'investor' ? '📊 Investor' : '✨ Supporter'}
                                  </span>
                                </td>
                                <td className="px-4 py-3 max-w-[220px] truncate-3-lines italic font-light text-slate-500">
                                  {item.message || <span className="text-slate-300 font-mono text-[10px]">yozilmagan</span>}
                                </td>
                                <td className="px-4 py-3 font-mono text-[10px] font-bold text-slate-700">
                                  {item.code || `CR-${104000 + idx}`}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar Footer */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-3 border-t border-slate-150">
                    <p className="text-[10px] font-light text-slate-405 leading-relaxed">
                      💡 {language === 'uz' 
                        ? "Haqiqiy ro'yxatdan o'tganlar sizning ushbu browser xotirangizda (localStorage) xavfsiz saqlanadi. Veb-saytingizni hamma joydan kelishini kuzatish uchun o'ngdagi Google Sheets-ni ulab qo'ying."
                        : "Real registrations store locally. To stream registrations automatically into a live online workbook, configure Google Sheets."}
                    </p>
                    {filteredSubmissions.length > 0 && (
                      <button 
                        onClick={handleExportCSV}
                        className="shrink-0 flex items-center space-x-1.5 px-4 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl text-xs font-bold shadow-3xs cursor-pointer"
                      >
                        <FileDown className="w-4 h-4" />
                        <span>{language === 'uz' ? "Google Sheets / Excel (CSV) yuklab olish" : "Download Excel (CSV)"}</span>
                      </button>
                    )}
                  </div>

                </div>
              ) : (
                /* GOOGLE SHEETS live sync tab */
                <div className="space-y-4 flex flex-col h-full font-sans">
                  
                  <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex items-start space-x-3 text-emerald-800">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <div className="text-xs space-y-1">
                      <strong className="font-semibold block">{language === 'uz' ? "Google Sheets Real-time Integratsiya" : "Live Streaming Google Sheet Connector"}</strong>
                      <p className="font-light leading-relaxed">
                        {language === 'uz' 
                          ? "Hech qanday murakkab pul to'laydigan Zapier yoki API kalitlarsiz saytdagi barcha ro'yxatdan o'tuvchilarni real-vaqtda Google Sheets-ga bepul oqib tushadigan qiling!" 
                          : "Automatically pipe all registered users into your personal Google Sheet in real-time, completely free with zero subscription costs!"}
                      </p>
                    </div>
                  </div>

                  {/* Setup Inputs */}
                  <div className="bg-slate-50 border border-slate-205 p-5 rounded-2xl space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold uppercase text-slate-450 tracking-wider">
                        {language === 'uz' ? "GOOGLE SHEETS APPS SCRIPT WEBHOOK URL MANZILI" : "GOOGLE APPS SCRIPT WEBHOOK URL"}
                      </label>
                      <div className="flex gap-2">
                        <input 
                          type="url"
                          placeholder="https://script.google.com/macros/s/.../exec"
                          value={webhookUrl}
                          onChange={(e) => setWebhookUrl(e.target.value)}
                          className="flex-1 bg-white border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
                        />
                        <button 
                          onClick={handleSaveWebhook}
                          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
                        >
                          {language === 'uz' ? "Saqlash" : "Save Webhook"}
                        </button>
                      </div>
                      
                      {saveSuccess && (
                        <span className="inline-flex items-center space-x-1 text-xs text-emerald-600 font-semibold animate-pulse mt-1">
                          <CheckCircle className="w-4.5 h-4.5" />
                          <span>{language === 'uz' ? "Webhook muvaffaqiyatli saqlandi! Integratsiya faol." : "Webhook saved! Automated connection is now active."}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Setup Instruction */}
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-3xs overflow-y-auto max-h-[220px]">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block tracking-wider">
                      🛠️ {language === 'uz' ? "30 SONIYALIK BEPUL SOZLASh QO'LLANMASI" : "30-SECOND FREE INTEGRATION STEPS"}
                    </span>
                    
                    <ol className="text-xs space-y-2.5 text-slate-700 leading-relaxed font-light list-decimal pl-4">
                      <li>
                        {language === 'uz' 
                          ? <>O'zingizning Google Sheets (<strong>docs.google.com/spreadsheets</strong>) sahifangizni oching.</> 
                          : <>Open your Google Sheets spreadsheet.</>}
                      </li>
                      <li>
                        {language === 'uz'
                          ? <>Yuqoridagi menyudan <strong>Extensions &gt; Apps Script</strong> ni bosing.</>
                          : <>Click on <strong>Extensions &gt; Apps Script</strong> from the top navbar.</>}
                      </li>
                      <li>
                        {language === 'uz'
                          ? <>Hosil bo'lgan kod muharriridagi hamma narsani o'chirib, quyidagi kodni nusxalab joylashtiring (Paste):</>
                          : <>Delete any existing template code and paste the custom script below:</>}
                        
                        <div className="mt-2 flex items-center space-x-2">
                          <button
                            onClick={handleCopyScript}
                            className={`flex items-center space-x-1 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10.5px] font-mono font-bold transition-all cursor-pointer ${
                              copiedScript ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'border border-slate-200'
                            }`}
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>{copiedScript ? (language === 'uz' ? "Nusxalandi! ✅" : "Copied! ✅") : (language === 'uz' ? "Kodni nusxalash (Copy)" : "Copy Google Spreadsheet Script")}</span>
                          </button>
                        </div>
                      </li>
                      <li>
                        {language === 'uz'
                          ? <>O'ng yuqoridagi <strong>Deploy &gt; New deployment</strong> tugmasini bosing.</>
                          : <>Click on the blue <strong>Deploy &gt; New deployment</strong> button on the top right.</>}
                      </li>
                      <li>
                        {language === 'uz'
                          ? <>Tishli g'ildirakcha (Settings) belgisidan <strong>Web app</strong> ni tanlang.</>
                          : <>Click the gear icon next to 'Select type', and choose <strong>Web app</strong>.</>}
                      </li>
                      <li>
                        {language === 'uz'
                          ? <><strong>Execute as:</strong> "Me" (Siztingiz), hamda <strong>Who has access:</strong> "Anyone" (Har kim) qilib sozlang (Bu juda shart, aks holda visitorlar yoza olishmaydi!).</>
                          : <>Set <strong>Execute as</strong> to "Me", and set <strong>Who has access</strong> to <strong>"Anyone"</strong> (Crucial, otherwise registration posts will fail with auth blocks).</>}
                      </li>
                      <li>
                        {language === 'uz'
                          ? <><strong>Deploy</strong> tugmasini bosing va kirish ruxsatlarini bering (Authorize permissions). Hosil bo'lgan <strong>Web app URL</strong> manzilini nusxalab, yuqoridagi maydonga joylashtiring!</>
                          : <>Click <strong>Deploy</strong>, grant required permissions to your own sheet account, copy the generated <strong>Web app URL</strong>, and paste it into the search input above!</>}
                      </li>
                    </ol>

                    <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center space-x-2 text-[11px] text-indigo-700 font-mono">
                      <Sparkles className="w-4.5 h-4.5 text-indigo-500 shrink-0 animate-pulse" />
                      <span>{language === 'uz' ? "Bajarildi! Endi saytdan ro'yxatdan o'tganlar jadvalingizga tushadi!" : "Done! Submissions will stream immediately into your spreadsheet columns."}</span>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Shield, Lock, CreditCard, ChevronRight, User, Laptop, Users, 
  DollarSign, Plus, Eye, Check, AlertCircle, RefreshCw, Smartphone, 
  Key, HardDrive, HelpCircle, Activity, LayoutDashboard, Copy, 
  ExternalLink, Sparkles, Send, EyeOff, ShieldAlert, CheckCircle2,
  FileSpreadsheet, ArrowLeft, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Define Interface for Mock Student Log
interface StudentLog {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: string;
  method: string;
  time: string;
  status: 'active' | 'blocked';
}

const TRANSLATIONS = {
  uz: {
    backHome: "Asosiy sahifaga",
    demoMode: "SIMULYATSIYA REJIMI",
    studentTab: "Talaba Interfeysi",
    creatorTab: "Muallif Kabineti",
    authTab: "Kirish Roli",
    activeLabel: "Siz:",
    guest: "Mehmon",
    studentSimTitle: "TALABA PLATFORMASI",
    courseTitle: "Shaxsiy rivojlanish va pul psixologiyasi",
    studentSimDesc: "Talaba darslarni qanday ko'rishini, Uzcard/Humo orqali xarid qilish va ekran yozib olinishidan himoyalangan pleyerni sinab ko'ring.",
    courseUnlocked: "Kurs To'liq Faollashtirilgan",
    buyCourse: "KURSGA KIRISH (199K UZS)",
    resetPurchase: "Xaridni asliga tiklash",
    screenRecordingDetected: "EKRAN YOZISH TO'Sildi",
    playerBlockedWarning: "Creatorra DRM pleeri ruxsatsiz yozuvni aniqlab, videoni ko‘rsatishni to‘xtatdi.",
    identifiersLogged: "Sizning soxta ma'lumotlaringiz tizimda qayd etildi:",
    studentName: "Talaba F.I.SH:",
    phone: "Telefon:",
    systemIp: "IP Manzili:",
    securityLog: "Himoya Bayonnomasi:",
    securityDeviceNote: "Maxsus shaxsiylashtirilgan dynamic suv belgisi dars kadrlariga shifrlangan.",
    restartPlayer: "Pleerni qayta yoqish",
    lessonLocked: "Dars Qulflangan",
    videoLockedDesc: "Ushbu premium darsni ko'rish va tizimni test qilish uchun Uzcard/Humo orqali sinov to'lovini amalga oshiring.",
    proceedPayment: "Sinov To'lovini Qilish (Uzcard / Humo)",
    protectionTitle: "Dual-Shield Himoya Simulyatori",
    protectionDesc: "Ekran qayd etilishini simulyatsiya qibly pleyer qorayishini va spektral suv belgilarini amalda sinab ko'ring.",
    triggerScreenRecord: "Ekran yozuviga harakatni sinab ko'rish",
    screenRecordControlDesc: "OBS yoki boshqa dasturning ta'sirini tekshirish",
    strobeToggle: "Stroboskopik xalaqit nuri",
    strobeActive: "FAOL — Kamera miltillatadi",
    strobeInactive: "Kamerali yozuvni xira qilish",
    watermarkNoteTitle: "Dinamik spektral suv belgilari:",
    watermarkNoteDesc: "Suv belgisi matni kadr bo'yilab koordinatasini va rangini uzluksiz o'zgartiradi. Bu darsni tashqi kamerada tasvirga olganda ham talaba shaxsini fosh qiladi.",
    lessonsListTitle: "PLATFORMADAGI premium DARSLAR",
    freeLesson: "Bepul dars",
    lockedLesson: "Qulflangan",
    unlockedLesson: "Ochiq",
    purchaseTestOffer: "Barcha 4 ta darsga kirish huquqiga ega bo'lish uchun to'lovni test qilib ko'ring:",
    testPurchaseBtn: "To'lov Tizimini Sinash",
    creatorDashboardSim: "MUALLIF KABINETI",
    creatorDashboardTitle: "Google Sheets va Savdo Integratsiyasi",
    creatorDashboardDesc: "Dars sotishdan keladigan daromad, o'quvchilar sonining real vaqtda Google Sheets-ga yozilishi ko'rsatiladi.",
    resetMetrics: "Statistikani tozalash",
    realtimeRevenue: "REAL VAQTDAGI SOF DAROMAD",
    conversionNote: "har bir yangi talabadan +199k",
    simulatePurchaseActivity: "Yangi xaridni simulyatsiya qilish",
    enrolledStudents: "AKADEMIYA O'QUVCHILARI",
    studentsSuffix: "o'quvchi",
    sheetsSyncLabel: "GOOGLE SHEETS PIPELINE",
    sheetsSyncActive: "Real-vaqtda ulangan",
    sheetsSyncDesc: "Har bir to'lov yozuvi hech qanday backend-siz mijozning Google Sheets jadvaliga avtomatik yuboriladi.",
    preventedPiracy: "TO'SILGAN O'G'RILIKLAR",
    preventedCountLabel: "marta",
    protectionRating: "98.6% Himoya darajasi",
    drmEncrypterTitle: "DRM Shifrlash va Segmentlash",
    drmEncrypterDesc: "Yangi dars videosini yuklab pleyer uchun shifrlangan segmentlarga ajratishni sinab ko'ring.",
    lessonTitleFormLabel: "Dars Sarlavhasi (Mavzu)",
    simulatedVideoSelect: "video_footage_creatorra.mp4 (Simulyatsiya, 194 MB)",
    uploadEncryptBtn: "CREATORRA DRM SHIFRLASh (YUKLASH)",
    livePaymentsTitle: "So'nggi O'quvchilar va To'lovlar Oqimi",
    livePaymentsDesc: "Bu haqiqiy to'lovlar ham sizning Google Sheets sahifangizga avtomatik tushadi.",
    paymentsSyncOk: "Sinxronlandi",
    sheetsApiOk: "Google Sheets API ulangan",
    latency: "Kechikish",
    identityTitle: "SIMULYATSIYA AKKUNTI",
    identityHeader: "Simulyatsiya Rolini Tanlang",
    identityDesc: "Talaba sifatida kirib xarid qilishni, yoki Muallif sifatida tizimni boshqarish va yuklashni test qлинg.",
    currentSimRole: "Hozirgi Simulyatsiya Roli:",
    logout: "Roldan Chiqish",
    loginStudent: "Talaba sifatida sinash",
    loginStudentDesc: "Kartadan to'lovlar simulyatsiyasini o'tish va darslarni ochish.",
    loginCreator: "Muallif sifatida sinash",
    loginCreatorDesc: "Kursor va DRM yangiliklarini kuzatish, yuklashni test qilish.",
    manualSignupTitle: "Shaxsiy akkauntdan kirish (Simulyatsiya)",
    fullnameLabel: "Foydalanuvchi F.I.SH",
    phoneLabel: "Telefon raqami",
    signupBtn: "Tizimga Kirish",
    securePaymentHeader: "Creatorra Xavfsiz To'lovi",
    close: "Yopish",
    payingForCourse: "Xarid qilinayotgan kurs",
    pricingCommission: "199,000 UZS + 0% platforma komissiyasi",
    amountToPay: "Jami to'lov:",
    testCardsTitle: "Test to'lov kartalari (Bosganda to'ldiriladi):",
    cardNumberLabel: "Karta Raqami",
    expiryLabel: "Muddati",
    cvvLabel: "Kodi",
    enterSmsCode: "SMS-kodni kiriting",
    enterSmsDesc: "Sizning telefoningizga 4 xonali tasdiqlash kodi yuborildi. Kiriting: [8888]",
    autoFillSms: "Avtomatik kiritish (8888)",
    confirmSmsBtn: "SMS-KODNI TASDIQLASH",
    paymentCompletedTitle: "Muvaffaqiyatli xarid qilindi!",
    paymentCompletedDesc: "199,000 UZS qabul qilindi. Premium darslar to'liq ochildi! Pleerni yoqib tomosha qilishingiz mumkin.",
    startLearning: "O'qishni boshlash"
  },
  ru: {
    backHome: "На главную",
    demoMode: "РЕЖИМ СИМУЛЯЦИИ",
    studentTab: "Кабинет Ученика",
    creatorTab: "Кабинет Автора",
    authTab: "Выбор Роли",
    activeLabel: "Вы:",
    guest: "Гость",
    studentSimTitle: "ПЛАТФОРМА УЧЕНИКА",
    courseTitle: "Личностное развитие и психология денег",
    studentSimDesc: "Протестируйте, как ученик просматривает уроки, оплачивает курс через Uzcard/Humo и как работает плеер с защитой от записи.",
    courseUnlocked: "Курс Полностью Доступен",
    buyCourse: "КУПИТЬ КУРС (199K UZS)",
    resetPurchase: "Сбросить покупку",
    screenRecordingDetected: "ЗАПИСЬ ЭКРАНА ЗАБЛОКИРОВАНА",
    playerBlockedWarning: "DRM-плеер Creatorra обнаружил попытку записи экрана и приостановил воспроизведение видео.",
    identifiersLogged: "Ваши демонстрационные идентификаторы записаны в лог безопасности:",
    studentName: "Ф.И.О Ученика:",
    phone: "Телефон:",
    systemIp: "IP Адрес:",
    securityLog: "Протокол Защиты:",
    securityDeviceNote: "Индивидуальный динамический водяной знак встроен в видеокадры.",
    restartPlayer: "Перезапустить плеер",
    lessonLocked: "Урок Заблокирован",
    videoLockedDesc: "Для просмотра этого премиум урока и тестирования системы проведите демонстрационный платеж через Uzcard/Humo.",
    proceedPayment: "Перейти к Оплате (Uzcard / Humo)",
    protectionTitle: "Симулятор Защиты Dual-Shield",
    protectionDesc: "Симулируйте захват экрана и наблюдайте за мгновенным потемнением плеера и появлением спектральных водяных знаков.",
    triggerScreenRecord: "Проверить действие при записи экрана",
    screenRecordControlDesc: "Проверить реакцию защиты на захват экрана",
    strobeToggle: "Стробоскопические помехи",
    strobeActive: "✓ ВКЛ — Камера замерцает",
    strobeInactive: "Защита от записи на камеру телефона",
    watermarkNoteTitle: "Цветовой водяной знак (Colour Science):",
    watermarkNoteDesc: "Текст водяного знака постоянно меняет свои координаты и спектр. Даже при съемке экрана на камеру смартфона личность ученика раскрывается.",
    lessonsListTitle: "ПРЕМИУМ УРОКИ НА ПЛАТФОРМЕ",
    freeLesson: "Бесплатный урок",
    lockedLesson: "Заблокирован",
    unlockedLesson: "Доступен",
    purchaseTestOffer: "Чтобы открыть доступ ко всем 4 урокам, пройдите тестовую оплату:",
    testPurchaseBtn: "Опробовать Покупку",
    creatorDashboardSim: "КАБИНЕТ АВТОРА",
    creatorDashboardTitle: "Google Таблицы и Аналитика Продаж",
    creatorDashboardDesc: "Отслеживайте доходы, количество учеников и автоматическую моментальную синхронизацию с вашей Google Таблицей.",
    resetMetrics: "Сбросить статистику",
    realtimeRevenue: "ОБЩИЙ ДОХОД В РЕАЛЬНОМ ВРЕМЕНИ",
    conversionNote: "от каждого нового ученика +199k",
    simulatePurchaseActivity: "Симулировать покупку учеником",
    enrolledStudents: "ЗАРЕГИСТРИРОВАННЫЕ УЧЕНИКИ",
    studentsSuffix: "учеников",
    sheetsSyncLabel: "ИНТЕГРАЦИЯ GOOGLE SHEETS",
    sheetsSyncActive: "Синхронизировано",
    sheetsSyncDesc: "Каждая оплата отправляется в Google Таблицу напрямую из браузера без серверов за 11мс.",
    preventedPiracy: "ПРЕДОТВРАЩЕННЫЙ УЩЕРБ",
    preventedCountLabel: "попыток",
    protectionRating: "98.6% Эффективность защиты",
    drmEncrypterTitle: "Кодировщик DRM-Видео",
    drmEncrypterDesc: "Загрузите тестовый урок, чтобы увидеть процесс сегментации и шифрования видеофайла для защиты.",
    lessonTitleFormLabel: "Название урока (Тема)",
    simulatedVideoSelect: "video_footage_creatorra.mp4 (Симуляция, 194 МБ)",
    uploadEncryptBtn: "ЗАГРУЗИТЬ И ЗАЩИТИТЬ УРОК",
    livePaymentsTitle: "Живой Лог Оплат и Регистраций",
    livePaymentsDesc: "Эти транзакции отображаются в логах и мгновенно отправляются в таблицу.",
    paymentsSyncOk: "Синхронизировано",
    sheetsApiOk: "Подключение к Sheets API активно",
    latency: "Задержка",
    identityTitle: "СИМУЛЯЦИЯ ЛИЧНОСТИ",
    identityHeader: "Выберите Аккаунт для Симуляции",
    identityDesc: "Переключайтесь между учеником для тестирования покупки или автором для загрузки уроков.",
    currentSimRole: "Текущая Роль симуляции:",
    logout: "Выйти из Роли",
    loginStudent: "Войти как Ученик",
    loginStudentDesc: "Совершайте тестовые платежи, разблокируйте видео и тестируйте водяные знаки.",
    loginCreator: "Войти как Автор",
    loginCreatorDesc: "Загружайте защищенный DRM контент, управляйте покупками и логами.",
    manualSignupTitle: "Ручная демонстрационная регистрация",
    fullnameLabel: "Полное Имя (Ф.И.О)",
    phoneLabel: "Номер телефона",
    signupBtn: "Зарегистрироваться и войти",
    securePaymentHeader: "Безопасная оплата Creatorra",
    close: "Закрыть",
    payingForCourse: "Курс на оплату",
    pricingCommission: "199,000 UZS + 0% комиссия платформы",
    amountToPay: "Итого к оплате:",
    testCardsTitle: "Демонстрационные карты за 1 клик:",
    cardNumberLabel: "Номер Карты",
    expiryLabel: "Срок Действия",
    cvvLabel: "Код CVV",
    enterSmsCode: "Введите SMS подтверждение",
    enterSmsDesc: "На демонстрационный номер телефона отправлен код подтверждения. Введите: [8888]",
    autoFillSms: "Вставить код 8888",
    confirmSmsBtn: "ПОДТВЕРДИТЬ КОД И ОТКРЫТЬ КУРС",
    paymentCompletedTitle: "Оплата прошла успешно!",
    paymentCompletedDesc: "Транзакция на 199,000 UZS завершена через шлюз Uzcard/Humo. Полный доступ к курсу открыт!",
    startLearning: "Начать обучение"
  },
  en: {
    backHome: "Back to Home",
    demoMode: "SIMULATION MODE",
    studentTab: "Student View",
    creatorTab: "Creator Panel",
    authTab: "Role Selection",
    activeLabel: "Active:",
    guest: "Guest",
    studentSimTitle: "STUDENT CONSOLE",
    courseTitle: "Personal Development and Money Psychology",
    studentSimDesc: "Test how a student views video lectures, purchases with Uzcard/Humo code, and experiences screen-recording hardware block.",
    courseUnlocked: "Course Fully Unlocked",
    buyCourse: "UNLOCK COURSE (199K UZS)",
    resetPurchase: "Reset purchase",
    screenRecordingDetected: "SCREEN RECORDING BLOCKED",
    playerBlockedWarning: "Creatorra DRM Player detected unauthorized screen recording software and suspended rendering.",
    identifiersLogged: "Your demo credentials have been securely logged:",
    studentName: "Student Name:",
    phone: "Phone:",
    systemIp: "IP Address:",
    securityLog: "Security Log:",
    securityDeviceNote: "Watermark coordinate changes actively to track and flag physical camera recordings.",
    restartPlayer: "Restart Video Player",
    lessonLocked: "Lesson Locked",
    videoLockedDesc: "Buy the premium course to view this protected chapter and fully evaluate the billing system.",
    proceedPayment: "Proceed to Payment (Uzcard / Humo)",
    protectionTitle: "Dual-Shield Anti-Piracy Console",
    protectionDesc: "Test how the secure player instantly darkens when capturing software starts, alongside high-contrast spectral watermarks.",
    triggerScreenRecord: "Inspect action on screen capture attempt",
    screenRecordControlDesc: "Simulate a live capture action by OBS or smartphone",
    strobeToggle: "Strobe Camera Interference",
    strobeActive: "✓ ENABLED — Strobe light enabled",
    strobeInactive: "Inhibit phone camera recording",
    watermarkNoteTitle: "Colour Science Watermarks:",
    watermarkNoteDesc: "Watermarks seamlessly shift position and color spectrum dynamically. Even physical camera leaks immediately expose student identity.",
    lessonsListTitle: "COURSE CURRICULUM PLAYLIST",
    freeLesson: "Free lesson",
    lockedLesson: "Locked",
    unlockedLesson: "Unlocked",
    purchaseTestOffer: "To test all 4 premium nodes, execute a simulated transaction:",
    testPurchaseBtn: "Test billing system",
    creatorDashboardSim: "CREATOR DASHBOARD",
    creatorDashboardTitle: "Google Sheets Live Integrations & Sales",
    creatorDashboardDesc: "Monitor your course sales revenues, enrolled student registrations, and automated client Google Sheet logs in real-time.",
    resetMetrics: "Reset statistics",
    realtimeRevenue: "REAL-TIME ACCRUAL REVENUES",
    conversionNote: "from each student registration +199k",
    simulatePurchaseActivity: "Simulate test sale trigger",
    enrolledStudents: "ENROLLED STUDENTS",
    studentsSuffix: "students",
    sheetsSyncLabel: "GOOGLE SPREADSHEETS LINK",
    sheetsSyncActive: "Real-time sync enabled",
    sheetsSyncDesc: "Records are automatically appended to your client spreadsheet directly via the browser engine.",
    preventedPiracy: "PREVENTED PIRACY EFFORTS",
    preventedCountLabel: "attempts",
    protectionRating: "98.6% Protection rating",
    drmEncrypterTitle: "DRM Encryption Pipeline",
    drmEncrypterDesc: "Upload a draft lesson video to test automated serverless stream segment splitting and safety encryption.",
    lessonTitleFormLabel: "Lesson Title (Topic)",
    simulatedVideoSelect: "video_footage_creatorra.mp4 (Simulated, 194 MB)",
    uploadEncryptBtn: "ENCRYPT & LOAD DRM VIDEO",
    livePaymentsTitle: "Latest Submissions & Live payments",
    livePaymentsDesc: "Simulated checkout records instantly populate here and sync directly to Google Sheets.",
    paymentsSyncOk: "Synced",
    sheetsApiOk: "Sheets API Connection active",
    latency: "Latency",
    identityTitle: "SIMULATED PERSONA",
    identityHeader: "Toggle Demo Platform Account",
    identityDesc: "Switch roles immediately to check both the automated student payment view and the creator setup.",
    currentSimRole: "Current Sim Role:",
    logout: "Logout",
    loginStudent: "Sign in as Student",
    loginStudentDesc: "Carry out transactions, explore secure video watermarking and checkout experiences.",
    loginCreator: "Sign in as Creator",
    loginCreatorDesc: "Check live DRM pipeline encoders, payment logs, and Google Sheets updates.",
    manualSignupTitle: "Manual Custom Demo Sign Up",
    fullnameLabel: "Full Name",
    phoneLabel: "Phone Number",
    signupBtn: "Register & Log in",
    securePaymentHeader: "Creatorra Secure Checkout",
    close: "Close",
    payingForCourse: "Course to purchase",
    pricingCommission: "199,000 UZS + 0% platform commission",
    amountToPay: "Total amount:",
    testCardsTitle: "Demonstration credit cards (1-click fill):",
    cardNumberLabel: "Card Number",
    expiryLabel: "Expiry",
    cvvLabel: "Security Code CVV",
    enterSmsCode: "Enter OTP Verification Code",
    enterSmsDesc: "We have dispatched a simulated four digit OTP code. Enter: [8888]",
    autoFillSms: "Insert 8888",
    confirmSmsBtn: "VERIFY OTP CODE",
    paymentCompletedTitle: "Payment Successful!",
    paymentCompletedDesc: "Simulated payment of 199,000 UZS completed via Uzcard/Humo interface. Course lessons are fully unlocked!",
    startLearning: "Start learning"
  }
};

export default function DemoPlatform({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage();
  const d = TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  // Active sandbox section: 'student' | 'creator' | 'auth'
  const [activeTab, setActiveTab] = useState<'student' | 'creator' | 'auth'>('student');

  // Simulated logged-in user state
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    phone: string;
    role: 'student' | 'creator';
  } | null>(() => {
    const saved = localStorage.getItem('creator_demo_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return null; }
    }
    return {
      name: 'Jasur Shermatov',
      email: 'jasur@student.uz',
      phone: '+998 90 321 45 67',
      role: 'student'
    };
  });

  // Purchased status
  const [isCourseUnlocked, setIsCourseUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('creatorra_demo_unlocked') === 'true';
  });

  // Metrics state that increments dynamically on student purchases
  const [metrics, setMetrics] = useState({
    revenue: 24850000,
    studentsCount: 124,
    preventedCount: 12
  });

  // Simulated live event logger (clean, readable)
  const [studentLogs, setStudentLogs] = useState<StudentLog[]>([
    { id: '1', name: 'Dilshod Tojiyev', email: 'dilshod@reklama.uz', phone: '+998 93 514 11 22', amount: '199,000 UZS', method: 'Uzcard (8600)', time: '2 mins ago', status: 'active' },
    { id: '2', name: 'Madina Umarova', email: 'madina@english.uz', phone: '+998 90 223 99 88', amount: '199,000 UZS', method: 'Humo (9860)', time: '14 mins ago', status: 'active' },
    { id: '3', name: 'Akobir Rustamov', email: 'akobir@agency.com', phone: '+998 97 412 55 01', amount: '199,000 UZS', method: 'Uzcard (8600)', time: '1 hour ago', status: 'active' },
    { id: '4', name: 'Zilola Karimova', email: 'zilola@coaching.uz', phone: '+998 94 901 02 03', amount: '199,000 UZS', method: 'Click Pay', time: '3 hours ago', status: 'active' }
  ]);

  // Player controls
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [strobeEnabled, setStrobeEnabled] = useState(false);
  const [screenCaptureDetected, setScreenCaptureDetected] = useState(false);
  const [watermarkPos, setWatermarkPos] = useState({ x: 30, y: 35 });
  const [watermarkColor, setWatermarkColor] = useState('#7A19FF'); 

  // Payment popup checkout states
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedPaymentProvider, setSelectedPaymentProvider] = useState<'uzcard' | 'humo' | 'click' | 'payme'>('uzcard');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [checkoutSmsCode, setCheckoutSmsCode] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'sms' | 'success'>('form');
  const [isProcessingPay, setIsProcessingPay] = useState(false);
  const [cardError, setCardError] = useState('');

  // Course Upload Simulator
  const [newLessonTitle, setNewLessonTitle] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatusMsg, setUploadStatusMsg] = useState('');

  // Course Curriculum mock list
  const [lessons, setLessons] = useState([
    { id: '1', title: language === 'uz' ? 'Shaxsiy rivojlanish 1-dars' : language === 'ru' ? 'Личностное развитие 1-урок' : 'Personal Development Lesson 1', duration: '14:20', isFree: true, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    { id: '2', title: language === 'uz' ? 'Shaxsiy rivojlanish 2-dars' : language === 'ru' ? 'Личностное развитие 2-урок' : 'Personal Development Lesson 2', duration: '22:15', isFree: false, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { id: '3', title: language === 'uz' ? 'Shaxsiy rivojlanish 3-dars' : language === 'ru' ? 'Личностное развитие 3-урок' : 'Personal Development Lesson 3', duration: '18:40', isFree: false, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    { id: '4', title: language === 'uz' ? 'Shaxsiy rivojlanish 4-dars' : language === 'ru' ? 'Личностное развитие 4-урок' : 'Personal Development Lesson 4', duration: '25:05', isFree: false, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
  ]);

  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  // Keep lesson titles in sync when language changes dynamically
  useEffect(() => {
    setLessons([
      { id: '1', title: language === 'uz' ? 'Shaxsiy rivojlanish 1-dars' : language === 'ru' ? 'Личностное развитие 1-урок' : 'Personal Development Lesson 1', duration: '14:20', isFree: true, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
      { id: '2', title: language === 'uz' ? 'Shaxsiy rivojlanish 2-dars' : language === 'ru' ? 'Личностное развитие 2-урок' : 'Personal Development Lesson 2', duration: '22:15', isFree: false, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: '3', title: language === 'uz' ? 'Shaxsiy rivojlanish 3-dars' : language === 'ru' ? 'Личностное развитие 3-урок' : 'Personal Development Lesson 3', duration: '18:40', isFree: false, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { id: '4', title: language === 'uz' ? 'Shaxsiy rivojlanish 4-dars' : language === 'ru' ? 'Личностное развитие 4-урок' : 'Personal Development Lesson 4', duration: '25:05', isFree: false, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
    ]);
  }, [language]);

  // Auto moving coordinate for anti-recording color-science watermark
  useEffect(() => {
    const watermarkInterval = setInterval(() => {
      const nextX = Math.floor(Math.random() * 50) + 10;
      const nextY = Math.floor(Math.random() * 50) + 15;
      setWatermarkPos({ x: nextX, y: nextY });

      // Cycling beautiful high-contrast specters matching Creatorra colors
      const colors = ['#7A19FF', '#387BFF', '#FF007F', '#00DF89', '#FF9F00', '#5D36FF'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setWatermarkColor(randomColor);
    }, 3000);

    return () => clearInterval(watermarkInterval);
  }, []);

  // Save changes to localStorage helper
  const updateCurrentUser = (user: typeof currentUser) => {
    setCurrentUser(user);
    if (user) {
      localStorage.setItem('creator_demo_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('creator_demo_user');
    }
  };

  // Perform Simulated Payment Action
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardNumber.replace(/\s+/g, '').length < 16) {
      setCardError(language === 'uz' ? 'Karta raqami 16 ta raqamdan iborat bo\'lishi shart' : language === 'ru' ? 'Номер карты должен состоять из 16 цифр' : 'Card number must be 16 digits');
      return;
    }
    setCardError('');
    setIsProcessingPay(true);
    
    setTimeout(() => {
      setIsProcessingPay(false);
      setCheckoutStep('sms');
    }, 1200);
  };

  const handleVerifySms = () => {
    setIsProcessingPay(true);
    setTimeout(() => {
      setIsProcessingPay(false);
      setCheckoutStep('success');
      setIsCourseUnlocked(true);
      localStorage.setItem('creatorra_demo_unlocked', 'true');

      // Update Creator Metrics live
      setMetrics(prev => ({
        ...prev,
        revenue: prev.revenue + 199000,
        studentsCount: prev.studentsCount + 1
      }));

      // Add student to the logs feed
      const newSub: StudentLog = {
        id: Date.now().toString(),
        name: currentUser?.name || 'Yangi Talaba',
        email: currentUser?.email || 'talaba@gmail.com',
        phone: currentUser?.phone || '+998 90 999 11 22',
        amount: '199,000 UZS',
        method: selectedPaymentProvider.toUpperCase() + ' (Kartadan)',
        time: 'Hozirgina',
        status: 'active'
      };
      setStudentLogs(prev => [newSub, ...prev]);
    }, 1000);
  };

  // Preset fills
  const loginAsStudentPreset = () => {
    updateCurrentUser({
      name: 'Sherzod Alimov',
      email: 'sherzod@student.uz',
      phone: '+998 91 777 55 44',
      role: 'student'
    });
    setActiveTab('student');
  };

  const loginAsCreatorPreset = () => {
    updateCurrentUser({
      name: 'Nodirbek Baratov',
      email: 'baratovnodirbekforwork@gmail.com',
      phone: '+998 90 111 22 33',
      role: 'creator'
    });
    setActiveTab('creator');
  };

  const logoutUser = () => {
    updateCurrentUser(null);
    setIsCourseUnlocked(false);
    localStorage.removeItem('creatorra_demo_unlocked');
  };

  // Video Upload Simulation Logic
  const startVideoUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLessonTitle) return;

    setIsUploading(true);
    setUploadProgress(10);
    setUploadStatusMsg(language === 'uz' ? 'Video formatini MPEG-DASH ga o\'tkazish...' : language === 'ru' ? 'Конвертация видео в формат MPEG-DASH...' : 'Converting video to MPEG-DASH format...');

    const statuses = [
      { prg: 35, msg: language === 'uz' ? 'AES-128 DRM shifrlash kalitlarini generasiya qilish...' : language === 'ru' ? 'Генерация ключей шифрования AES-128 DRM...' : 'Generating AES-128 DRM protective keys...' },
      { prg: 70, msg: language === 'uz' ? 'Dinamik video suv belgisini joylashtirish...' : language === 'ru' ? 'Внедрение динамических водяных знаков в кадры...' : 'Injecting dynamic structural watermarks into frames...' },
      { prg: 100, msg: language === 'uz' ? 'Muvaffaqiyatli! Video to\'liq himoyalandi va qo\'shildi.' : language === 'ru' ? 'Успешно! Видео полностью защищено и опубликовано.' : 'Success! Video streams protected and published.' }
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < statuses.length) {
        setUploadProgress(statuses[step].prg);
        setUploadStatusMsg(statuses[step].msg);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          const newLesson = {
            id: (lessons.length + 1).toString(),
            title: `${lessons.length + 1}-Dars: ${newLessonTitle}`,
            duration: '15:40',
            isFree: false,
            url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          };
          setLessons(prev => [...prev, newLesson]);
          setIsUploading(false);
          setNewLessonTitle('');
          setUploadProgress(0);
        }, 600);
      }
    }, 1000);
  };

  // Simulates Screen Recording Trigger
  const simulateScreenRecording = () => {
    setScreenCaptureDetected(true);
    setMetrics(prev => ({
      ...prev,
      preventedCount: prev.preventedCount + 1
    }));
  };

  const handleManualSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const nameEl = document.getElementById('custom-auth-name') as HTMLInputElement | null;
    const phoneEl = document.getElementById('custom-auth-phone') as HTMLInputElement | null;
    if (nameEl && phoneEl && nameEl.value && phoneEl.value) {
      updateCurrentUser({
        name: nameEl.value,
        email: 'testuser@creatorra.com',
        phone: phoneEl.value,
        role: 'student'
      });
      setActiveTab('student');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F8FAFC] text-slate-800 overflow-y-auto font-sans flex flex-col antialiased">
      
      {/* Dynamic and clean White Brand Navigation Header */}
      <div className="bg-white border-b border-slate-200/80 px-6 py-4 sticky top-0 z-40 backdrop-blur-md shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Back btn + brand label */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onClose}
              className="group flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>{d.backHome}</span>
            </button>
            <div className="border-l border-slate-200 pl-4 py-1.5">
              <span className="text-sm font-black tracking-wide text-slate-900 uppercase">
                Creatorra <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A19FF] to-[#387BFF]">Sandbox</span>
              </span>
              <span className="text-[9px] font-mono font-bold text-[#7A19FF] bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full ml-3 uppercase">
                {d.demoMode}
              </span>
            </div>
          </div>

          {/* Simple and elegant Pill controller for switching tabs */}
          <div className="flex bg-slate-100 border border-slate-200/60 p-1 rounded-xl space-x-1 w-full md:w-auto self-center">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 md:flex-initial flex items-center justify-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'student'
                  ? 'bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>{d.studentTab}</span>
            </button>
            
            <button
              onClick={() => setActiveTab('creator')}
              className={`flex-1 md:flex-initial flex items-center justify-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'creator'
                  ? 'bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{d.creatorTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('auth')}
              className={`flex-1 md:flex-initial flex items-center justify-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'auth'
                  ? 'bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>{d.authTab}</span>
            </button>
          </div>

          {/* Current login display badge */}
          <div className="hidden lg:flex items-center space-x-2 bg-slate-50 px-3.5 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-600">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>{d.activeLabel}</span>
            <span className="font-bold text-slate-800">
              {currentUser ? currentUser.name : d.guest}
            </span>
            {currentUser && (
              <span className="text-[9px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600 font-mono font-medium">
                {currentUser.role.toUpperCase()}
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full flex flex-col justify-start">
        
        {/* ======================= TAB: STUDENT PANEL ======================= */}
        {activeTab === 'student' && (
          <div className="space-y-8 animate-fade-in w-full">
            
            {/* Header intro card */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
              <div className="space-y-1 text-left">
                <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-[#7A19FF] bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full">
                  {d.studentSimTitle}
                </span>
                <h1 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-slate-900 flex items-center gap-2">
                  <span>{d.courseTitle}</span>
                  <Sparkles className="w-5 h-5 text-[#7A19FF] shrink-0" />
                </h1>
                <p className="text-xs text-slate-500 font-normal max-w-3xl">
                  {d.studentSimDesc}
                </p>
              </div>

              {/* Unlock badge status */}
              <div className="flex items-center gap-3 self-start lg:self-center">
                {isCourseUnlocked ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-2xl text-xs text-emerald-700 font-bold shadow-xs">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{d.courseUnlocked}</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setCheckoutStep('form');
                      setShowCheckoutModal(true);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white font-extrabold rounded-2xl text-xs hover:brightness-110 shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>{d.buyCourse}</span>
                  </button>
                )}
                
                {isCourseUnlocked && (
                  <button 
                    onClick={() => {
                      setIsCourseUnlocked(false);
                      localStorage.setItem('creatorra_demo_unlocked', 'false');
                    }}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-700 transition-all text-xs"
                    title={d.resetPurchase}
                  >
                    <RefreshCw className="w-3.5 h-3.5 cursor-pointer" />
                  </button>
                )}
              </div>
            </div>

            {/* Video Player + Playlist grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (8/12): DRM Secure Player Block */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Embedded Video box */}
                <div className="relative rounded-3xl border border-slate-200 bg-black shadow-md overflow-hidden aspect-video">
                  
                  {/* Strobe overlay logic */}
                  {strobeEnabled && (
                    <div className="absolute inset-0 z-10 bg-white pointer-events-none mix-blend-overlay animate-pulse opacity-15"></div>
                  )}

                  {/* Anti-rec dynamic color watermark */}
                  {!screenCaptureDetected && (
                    <div 
                      className="absolute z-10 select-none pointer-events-none transition-all duration-1000 ease-in-out font-mono text-[9px] sm:text-xs font-bold leading-tight drop-shadow-md text-center bg-black/30 py-1.5 px-3 rounded-xl border border-white/10"
                      style={{ 
                        left: `${watermarkPos.x}%`, 
                        top: `${watermarkPos.y}%`,
                        color: watermarkColor,
                        textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                      }}
                    >
                      <span className="block">🔐 Creatorra Secure Watermark</span>
                      <span className="block font-black">{currentUser ? currentUser.name : 'Jasur Shermatov'} ({currentUser ? currentUser.phone : '+998 90 321 45 67'})</span>
                      <span className="block opacity-80">IP: 178.218.201.21 • UTC {new Date().toLocaleTimeString()}</span>
                    </div>
                  )}

                  {/* Recording software block screen overlay */}
                  {screenCaptureDetected ? (
                    <div className="absolute inset-0 bg-slate-950 z-20 flex flex-col items-center justify-center p-6 text-center animate-fade-in text-white">
                      <div className="w-14 h-14 bg-red-950/80 border border-red-805 rounded-full flex items-center justify-center p-3 text-red-400 mb-4 animate-bounce">
                        <ShieldAlert className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-red-500 tracking-tight">
                        {d.screenRecordingDetected}
                      </h4>
                      <p className="text-xs text-slate-350 mt-1 max-w-md">
                        {d.playerBlockedWarning}
                      </p>
                      
                      {/* Collapsed security warning logs */}
                      <div className="mt-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-md text-left text-[11px] font-mono text-slate-350 space-y-1.5">
                        <p className="text-[#7A19FF] font-bold">
                          {d.identifiersLogged}
                        </p>
                        <hr className="border-slate-800" />
                        <p>👤 <span className="text-slate-500">{d.studentName}</span> {currentUser ? currentUser.name : 'Jasur Shermatov'}</p>
                        <p>📞 <span className="text-slate-500">{d.phone}</span> {currentUser ? currentUser.phone : '+998 90 321 45 67'}</p>
                        <p>🖥️ <span className="text-slate-500">{d.systemIp}</span> 178.218.201.21</p>
                        <p>🛡️ <span className="text-slate-500">{d.securityLog}</span> {d.securityDeviceNote}</p>
                      </div>

                      <button 
                        onClick={() => setScreenCaptureDetected(false)}
                        className="mt-5 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                      >
                        {d.restartPlayer}
                      </button>
                    </div>
                  ) : null}

                  {/* Embedded video elements */}
                  {(lessons[selectedLessonIndex].isFree || isCourseUnlocked) ? (
                    <video
                      id="demo-drm-video"
                      ref={videoPlayerRef}
                      src={lessons[selectedLessonIndex].url}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      playsInline
                    />
                  ) : (
                    // Locked overlay if blocked
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                      <Lock className="w-10 h-10 text-[#7A19FF] animate-pulse mb-3" />
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {d.lessonLocked}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-xs">
                        {d.videoLockedDesc}
                      </p>
                      <button
                        onClick={() => {
                          setCheckoutStep('form');
                          setShowCheckoutModal(true);
                        }}
                        className="mt-4 px-4.5 py-2 bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white text-xs font-bold rounded-xl cursor-pointer shadow-md transition-all hover:brightness-115"
                      >
                        <span>{d.proceedPayment}</span>
                      </button>
                    </div>
                  )}

                  {/* Dynamic active lesson index top sign */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md pointer-events-none px-3 py-1 rounded-lg border border-white/10 text-[10.5px] font-medium text-white z-10">
                    🔴 {lessons[selectedLessonIndex].title}
                  </div>
                </div>

                {/* Simplified Controls and Anti-Piracy settings (White card) */}
                <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4 text-left">
                  <div className="flex items-center space-x-2.5">
                    <Shield className="w-5 h-5 text-[#7A19FF]" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{d.protectionTitle}</h3>
                      <p className="text-[10.5px] text-slate-500">{d.protectionDesc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    
                    {/* Trigger simulated recording block */}
                    <button
                      onClick={simulateScreenRecording}
                      className="flex items-center space-x-3.5 p-4 bg-red-50 hover:bg-red-100/80 border border-red-200 rounded-2xl text-left cursor-pointer transition-all active:scale-98 w-full"
                    >
                      <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-sm font-black text-red-700">{d.triggerScreenRecord}</span>
                        <span className="block text-[10.5px] text-slate-500 mt-0.5">{d.screenRecordControlDesc}</span>
                      </div>
                    </button>

                  </div>

                </div>

              </div>

              {/* Right Column (4/12): Lesson program playlist (White card) */}
              <div className="lg:col-span-4 space-y-6 text-left">
                
                <div className="p-5.5 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
                  <h4 className="text-[10.5px] font-mono font-black text-[#7A19FF] tracking-wider uppercase">
                    🏠 {d.lessonsListTitle}
                  </h4>
                  
                  {/* List container */}
                  <div className="space-y-2.5">
                    {lessons.map((lesson, idx) => {
                      const isLocked = !lesson.isFree && !isCourseUnlocked;
                      const isSelected = selectedLessonIndex === idx;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setSelectedLessonIndex(idx);
                            setScreenCaptureDetected(false);
                          }}
                          className={`w-full p-3.5 rounded-2xl border text-left flex items-start justify-between gap-3 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-purple-50/70 border-purple-200 shadow-3xs'
                              : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/50'
                          }`}
                        >
                          <div className="space-y-1 truncate">
                            <span className={`block text-xs font-bold truncate ${isSelected ? 'text-[#7A19FF]' : 'text-slate-800'}`}>
                              {lesson.title}
                            </span>
                            <div className="flex items-center space-x-2">
                              <span className="text-[9.5px] text-slate-450 font-mono font-medium">{lesson.duration}</span>
                              {lesson.isFree ? (
                                <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-black uppercase">
                                  {d.freeLesson}
                                </span>
                              ) : isLocked ? (
                                <span className="text-[8px] bg-red-100 text-red-800 px-1.5 py-0.2 rounded font-bold uppercase">
                                  {d.lockedLesson}
                                </span>
                              ) : (
                                <span className="text-[8px] bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded font-bold uppercase">
                                  {d.unlockedLesson}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className={`p-1.5 rounded-lg border ${isSelected ? 'bg-[#7A19FF] border-[#7A19FF] text-white' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                            {isLocked ? <Lock className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {!isCourseUnlocked && (
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-2">
                       <span className="block text-[11px] text-slate-600 font-medium leading-normal">
                         {d.purchaseTestOffer}
                       </span>
                       <button
                         onClick={() => {
                           setCheckoutStep('form');
                           setShowCheckoutModal(true);
                         }}
                         className="w-full py-2.5 bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white text-xs font-black rounded-xl transition-all hover:brightness-110 shadow-xs cursor-pointer"
                       >
                         {d.testPurchaseBtn}
                       </button>
                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* Recommendations Shelf (Aynan shu mavzudagi boshqa creatorlar boshqa darslari eng pastda recommendation kabi chiqib tursin) */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 text-left shadow-xs mt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#387BFF] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {language === 'uz' ? 'TAVSIYA ETILGANLAR' : language === 'ru' ? 'РЕКОМЕНДОВАННОЕ' : 'RECOMMENDATIONS'}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-2 font-sans">
                    {language === 'uz' ? 'Mavzuga oid tavsiya etilgan darslar' : language === 'ru' ? 'Рекомендованные уроки других авторов' : 'Recommended Lessons from other creators'}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    {language === 'uz' ? 'Shaxsiy rivojlanish va moliya psixologiyasi bo\'yicha eng yaxshi darslar' : language === 'ru' ? 'Лучшие уроки по личностному развитию и психологии финансов' : 'Premium lessons and resources in personal development & financial psychology'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: language === 'uz' ? 'Moliya erkinligi va pul psixologiyasi sirlari' : language === 'ru' ? 'Секреты финансовой свободы и психологии денег' : 'Secrets of Financial Freedom & Money Psychology',
                    creator: 'Sardor Qodirov',
                    duration: '45:12',
                    rating: '4.9',
                    views: language === 'uz' ? '12.4k ko\'rildi' : language === 'ru' ? '12.4k просмотров' : '12.4k views',
                    bgGradient: 'from-amber-500/5 to-orange-500/5 border-amber-200'
                  },
                  {
                    title: language === 'uz' ? 'Muvaffaqiyatli insonlarning vaqtni boshqarish odatlari' : language === 'ru' ? 'Привычки успешных людей по тайм-менеджменту' : 'Time Management Habits of Successful Leaders',
                    creator: 'Nilufar Usmonova',
                    duration: '38:20',
                    rating: '4.8',
                    views: language === 'uz' ? '8.9k ko\'rildi' : language === 'ru' ? '8.9k просмотров' : '8.9k views',
                    bgGradient: 'from-blue-500/5 to-indigo-500/5 border-blue-200'
                  },
                  {
                    title: language === 'uz' ? 'O\'z-o\'zini rivojlantirish va stressni yengish' : language === 'ru' ? 'Саморазвитие и преодоление ментальных барьеров' : 'Self-Development & Overcoming Mental Barriers',
                    creator: 'Farrux Aliyev',
                    duration: '52:15',
                    rating: '4.7',
                    views: language === 'uz' ? '15.1k ko\'rildi' : language === 'ru' ? '15.1k просмотров' : '15.1k views',
                    bgGradient: 'from-emerald-500/5 to-teal-500/5 border-emerald-200'
                  }
                ].map((rec, rIdx) => (
                  <div key={rIdx} className={`p-5 rounded-2xl border bg-gradient-to-br ${rec.bgGradient} flex flex-col justify-between space-y-4 hover:shadow-xs transition-all`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                        <span className="font-bold flex items-center gap-1">👤 {rec.creator}</span>
                        <span>⏱️ {rec.duration}</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-800 leading-snug font-sans">
                        {rec.title}
                      </h4>
                    </div>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
                      <span className="text-[10px] text-slate-500">{rec.views}</span>
                      <span className="text-[10px] bg-white border border-slate-150 px-2 py-0.5 rounded-lg text-amber-600 font-bold flex items-center gap-1">
                        ★ {rec.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ======================= TAB: CREATOR DASHBOARD ======================= */}
        {activeTab === 'creator' && (
          <div className="space-y-8 animate-fade-in w-full">
            
            {/* Header intro card */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
              <div className="space-y-1 text-left">
                <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-[#7A19FF] bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full">
                  {d.creatorDashboardSim}
                </span>
                <h1 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-slate-900 flex items-center gap-2">
                  <span>{d.creatorDashboardTitle}</span>
                  <Activity className="w-5 h-5 text-[#387BFF] shrink-0" />
                </h1>
                <p className="text-xs text-slate-500 font-normal max-w-3xl">
                  {d.creatorDashboardDesc}
                </p>
              </div>

              {/* Reset metrics */}
              <button 
                onClick={() => {
                  setMetrics({ revenue: 24850000, studentsCount: 124, preventedCount: 12 });
                  setStudentLogs([
                    { id: '1', name: 'Dilshod Tojiyev', email: 'dilshod@reklama.uz', phone: '+998 93 514 11 22', amount: '199,000 UZS', method: 'Uzcard (8600)', time: '2 mins ago', status: 'active' },
                    { id: '2', name: 'Madina Umarova', email: 'madina@english.uz', phone: '+998 90 223 99 88', amount: '199,000 UZS', method: 'Humo (9860)', time: '14 mins ago', status: 'active' }
                  ]);
                }}
                className="flex items-center space-x-1.5 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 cursor-pointer self-start lg:self-center transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-450" />
                <span>{d.resetMetrics}</span>
              </button>
            </div>

            {/* Bento Grid Metrics in elegant pure white shadows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Revenue */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl relative overflow-hidden shadow-xs text-left">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-400">
                  <DollarSign className="w-24 h-24" />
                </div>
                <span className="text-[10px] font-mono text-[#7A19FF] font-black tracking-widest block uppercase">
                  💰 {d.realtimeRevenue}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950 mt-2.5">
                  {metrics.revenue.toLocaleString()} <span className="text-sm font-sans font-normal text-slate-405">UZS</span>
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-emerald-600">
                  <span className="font-bold">✦ {d.conversionNote}</span>
                </div>
                
                <button
                  onClick={() => {
                    const names = ['Sarvar', 'Kamola', 'Dildora', 'Mansur', 'Lobar', 'Jasur', 'Diyora'];
                    const chosen = names[Math.floor(Math.random() * names.length)];
                    const customPhs = `+998 90 ${Math.floor(Math.random()*900+100)} ${Math.floor(Math.random()*90+10)} ${Math.floor(Math.random()*90+10)}`;
                    
                    setMetrics(prev => ({
                      ...prev,
                      revenue: prev.revenue + 199000,
                      studentsCount: prev.studentsCount + 1
                    }));

                    const newSub: StudentLog = {
                      id: Date.now().toString(),
                      name: chosen + ' Aliyev',
                      email: chosen.toLowerCase() + '@infostore.uz',
                      phone: customPhs,
                      amount: '199,000 UZS',
                      method: Math.random() > 0.5 ? 'Uzcard (8605)' : 'Humo (9860)',
                      time: 'Hozirgina',
                      status: 'active'
                    };
                    setStudentLogs(prev => [newSub, ...prev]);
                  }}
                  className="mt-4 w-full py-2 bg-[#7A19FF]/10 hover:bg-[#7A19FF]/15 text-[#7A19FF] border border-[#7A19FF]/20 hover:border-[#7A19FF]/30 rounded-xl text-[10px] font-bold uppercase transition-all tracking-wider cursor-pointer text-center"
                >
                  ⚡ {d.simulatePurchaseActivity}
                </button>
              </div>

              {/* Card 2: Enrolled Students */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl relative overflow-hidden shadow-xs text-left">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-400">
                  <Users className="w-24 h-24" />
                </div>
                <span className="text-[10px] font-mono text-[#387BFF] font-black tracking-widest block uppercase">
                  🎓 {d.enrolledStudents}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950 mt-2.5">
                  {metrics.studentsCount} <span className="text-sm font-sans font-normal text-slate-405">{d.studentsSuffix}</span>
                </div>
                <div className="mt-2.5 text-[11px] text-[#387BFF] font-bold flex items-center justify-between">
                  <span>🔗 {d.sheetsSyncLabel}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <div className="mt-3.5 p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[9.5px] text-slate-500">
                  {d.sheetsSyncDesc}
                </div>
              </div>

              {/* Card 3: Prevented Pirates */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl relative overflow-hidden shadow-xs text-left">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-400">
                  <ShieldAlert className="w-24 h-24" />
                </div>
                <span className="text-[10px] font-mono text-pink-500 font-black tracking-widest block uppercase">
                  🛡️ {d.preventedPiracy}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-pink-600 mt-2.5">
                  {metrics.preventedCount} <span className="text-sm font-sans font-normal text-slate-405">{d.preventedCountLabel}</span>
                </div>
                <p className="mt-2.5 text-[10px] text-slate-500 leading-normal">
                  {language === 'uz' ? 'Ekran yozib olinganda pleyerni qoraytirish orqali to\'sib qolingan o\'g\'rilik urinishlar soni.' : language === 'ru' ? 'Количество попыток записи видео, заблокированных DRM-плеером.' : 'Number of recording theft events detected & blacked out dynamically.'}
                </p>
                <div className="mt-3 inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-pink-50 text-pink-700 border border-pink-100 rounded text-[9px] font-mono font-bold">
                  {d.protectionRating}
                </div>
              </div>

            </div>

            {/* Bottom unequal Split: DRM pipeline tool & logs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side (7/12): DRM tool */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 space-y-6 text-left shadow-xs">
                <div>
                  <h3 className="text-sm font-extrabold font-sans text-slate-900">
                    {d.drmEncrypterTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {d.drmEncrypterDesc}
                  </p>
                </div>

                <form onSubmit={startVideoUpload} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase">
                      {d.lessonTitleFormLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={newLessonTitle}
                      onChange={(e) => setNewLessonTitle(e.target.value)}
                      placeholder={language === 'uz' ? "Masalan: 5-Dars: Integratsiya va SMS trigger" : language === 'ru' ? "Пример: Урок 5: Интеграция и SMS триггеры" : "e.g., Lesson 5: API Connect and SMS trigger"}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 rounded-xl focus:outline-hidden focus:border-[#7A19FF]"
                    />
                  </div>

                  {/* Drag-and-drop placeholder */}
                  <div className="p-5.5 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center bg-slate-50/50">
                    <HardDrive className="w-8 h-8 text-slate-400 mb-2" />
                    <span className="text-[11.5px] font-bold text-slate-700">{d.simulatedVideoSelect}</span>
                  </div>

                  {isUploading ? (
                    <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl space-y-2 animate-pulse">
                      <div className="flex justify-between text-[11px] font-mono text-[#7A19FF] font-bold">
                        <span className="truncate">{uploadStatusMsg}</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#7A19FF] to-[#387BFF] h-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-[#7A19FF] via-[#5D36FF] to-[#387BFF] text-white text-xs font-bold rounded-xl transition-all hover:brightness-105 flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                    >
                      <HardDrive className="w-4 h-4" />
                      <span>{d.uploadEncryptBtn}</span>
                    </button>
                  )}
                </form>
              </div>

              {/* Right Side (5/12): Student logs stream */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 space-y-4 text-left shadow-xs">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-extrabold font-sans text-slate-900">
                      {d.livePaymentsTitle}
                    </h3>
                    <p className="text-[10.5px] text-slate-550 mt-0.5">
                      {d.livePaymentsDesc}
                    </p>
                  </div>
                  <div className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-full flex items-center gap-1 shrink-0">
                    <span className="text-[8.5px] font-mono font-bold text-emerald-700 uppercase">
                      Sheets API OK
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 max-h-[290px] overflow-y-auto pr-1">
                  {studentLogs.map((log) => (
                    <div 
                      key={log.id}
                      className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1 hover:bg-slate-100/30 transition-all text-xs"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          {log.name}
                        </span>
                        <span className="text-[9px] font-mono text-slate-450">{log.time}</span>
                      </div>
                      <p className="text-[10.5px] text-slate-500 font-mono italic">{log.email} • {log.phone}</p>
                      <p className="text-[10px] text-slate-550 font-sans">
                        Paid: <span className="text-emerald-600 font-extrabold">{log.amount}</span> via <span className="text-indigo-600 font-medium">{log.method}</span>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center text-[10.5px] font-mono text-slate-450 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>{d.sheetsApiOk}</span>
                  </span>
                  <span>{d.latency}: 11ms</span>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ======================= TAB: AUTH SELECTION ======================= */}
        {activeTab === 'auth' && (
          <div className="max-w-xl mx-auto space-y-8 animate-fade-in text-center my-6">
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-black text-[#7A19FF] tracking-widest block uppercase">
                🔐 {d.identityTitle}
              </span>
              <h1 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-slate-900">{d.identityHeader}</h1>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-normal">
                {d.identityDesc}
              </p>
            </div>

            {/* Predefined toggle buttons (White themed) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Preset 1: Student */}
              <button
                onClick={loginAsStudentPreset}
                className="p-5 bg-white hover:bg-slate-50/50 border border-slate-200 rounded-3xl transition-all text-left flex items-start space-x-3 cursor-pointer group shadow-2xs hover:shadow-sm"
              >
                <div className="p-3 bg-purple-50 text-[#7A19FF] rounded-2xl group-hover:scale-105 transition-transform">
                  <User className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-800 leading-none">{d.loginStudent}</span>
                  <span className="block text-[10px] text-slate-500 mt-1.5">{d.loginStudentDesc}</span>
                  <span className="inline-block mt-2.5 bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[8px] font-mono font-bold">
                    Preset: Sherzod (Student)
                  </span>
                </div>
              </button>

              {/* Preset 2: Creator */}
              <button
                onClick={loginAsCreatorPreset}
                className="p-5 bg-white hover:bg-slate-50/50 border border-slate-200 rounded-3xl transition-all text-left flex items-start space-x-3 cursor-pointer group shadow-2xs hover:shadow-sm"
              >
                <div className="p-3 bg-blue-50 text-[#387BFF] rounded-2xl group-hover:scale-105 transition-transform">
                  <Laptop className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-800 leading-none">{d.loginCreator}</span>
                  <span className="block text-[10px] text-slate-500 mt-1.5">{d.loginCreatorDesc}</span>
                  <span className="inline-block mt-2.5 bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[8px] font-mono font-bold">
                    Preset: Nodirbek (Creator)
                  </span>
                </div>
              </button>

            </div>

            {currentUser && (
              <div className="p-5 bg-white border border-slate-200 rounded-3xl max-w-sm mx-auto space-y-3 shadow-2xs">
                <div>
                  <p className="text-xs font-extrabold text-slate-850">{currentUser.name}</p>
                  <p className="text-[10.5px] font-mono text-slate-450 mt-0.5">{currentUser.email} • {currentUser.phone}</p>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-150 rounded-xl text-[11px] flex justify-between">
                  <span className="text-slate-500">{d.currentSimRole}</span>
                  <span className="font-bold text-emerald-600 font-mono uppercase">{currentUser.role}</span>
                </div>
                <button
                  onClick={logoutUser}
                  className="w-full py-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  {d.logout}
                </button>
              </div>
            )}

            {/* Manual custom simulated sign-up */}
            {!currentUser && (
              <form onSubmit={handleManualSignup} className="p-6 bg-white border border-slate-200 rounded-3xl max-w-sm mx-auto text-left space-y-4 shadow-sm">
                <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                  ✍️ {d.manualSignupTitle}
                </h4>
                
                <hr className="border-slate-100" />

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono font-bold text-slate-500">{d.fullnameLabel}</label>
                    <input 
                      id="custom-auth-name"
                      type="text" 
                      required
                      placeholder="Masalan: Aziz Rahimov"
                      className="w-full bg-slate-50 border border-slate-250 px-3 py-2 text-xs rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#7A19FF]"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono font-bold text-slate-500">{d.phoneLabel}</label>
                    <input 
                      id="custom-auth-phone"
                      type="text" 
                      required
                      placeholder="+998 90 123 45 67"
                      className="w-full bg-slate-50 border border-slate-250 px-3 py-2 text-xs rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#7A19FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer text-center"
                  >
                    {d.signupBtn}
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>

      {/* ======================= INTERACTIVE SECURE PAYMENT POPUP MODAL ======================= */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-fade-in text-slate-800">
            
            {/* Modal Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#7A19FF] shrink-0" />
                <span className="text-xs font-extrabold font-sans tracking-wide text-slate-900 uppercase">
                  {d.securePaymentHeader}
                </span>
              </div>
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="text-slate-450 hover:text-slate-700 transition-all text-xs font-bold p-1 bg-slate-100 rounded-lg cursor-pointer"
              >
                {d.close}
              </button>
            </div>

            <div className="p-6">
              
              {/* Product Info Bill block */}
              <div className="p-4 bg-slate-100/50 rounded-2xl mb-5 text-left border border-slate-200/60">
                <span className="text-[9px] font-mono text-indigo-600 font-bold block uppercase">{d.payingForCourse}</span>
                <span className="block text-xs font-extrabold text-[#7A19FF] mt-1 truncate">{d.courseTitle}</span>
                <div className="flex justify-between items-end mt-2">
                  <span className="text-[10px] text-slate-500 font-mono">
                    {d.pricingCommission}
                  </span>
                  <span className="text-base font-extrabold font-mono text-slate-900">199,000 UZS</span>
                </div>
              </div>

              {/* STEP 1: Card configuration details */}
              {checkoutStep === 'form' && (
                <form onSubmit={handlePaymentSubmit} className="space-y-4 text-left">
                  
                  {/* Operator chips */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'uzcard', label: 'Uzcard' },
                      { id: 'humo', label: 'Humo' },
                      { id: 'click', label: 'Click' },
                      { id: 'payme', label: 'Payme' },
                    ].map((op) => (
                      <button
                        key={op.id}
                        type="button"
                        onClick={() => setSelectedPaymentProvider(op.id as any)}
                        className={`py-2 rounded-xl text-[10.5px] font-bold border transition-all cursor-pointer ${
                          selectedPaymentProvider === op.id
                            ? 'bg-[#7A19FF]/10 border-[#7A19FF] text-[#7A19FF]'
                            : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        {op.label}
                      </button>
                    ))}
                  </div>

                  {/* Input card number */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">{d.cardNumberLabel}</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 16);
                          const formatted = digitsOnly.match(/.{1,4}/g)?.join(' ') || digitsOnly;
                          setCardNumber(formatted);
                          
                          if (digitsOnly.startsWith('8600')) {
                            setSelectedPaymentProvider('uzcard');
                          } else if (digitsOnly.startsWith('9860')) {
                            setSelectedPaymentProvider('humo');
                          }
                        }}
                        placeholder="8600 0000 0000 0000"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 rounded-xl focus:outline-hidden focus:border-[#7A19FF] tracking-widest font-mono"
                      />
                      <div className="absolute right-3 top-3 text-[9.5px] font-bold uppercase bg-white border border-slate-200 px-2 py-0.5 rounded text-[#7A19FF] font-mono">
                        {selectedPaymentProvider.toUpperCase()}
                      </div>
                    </div>
                    {cardError && <p className="text-[10px] text-red-500 mt-1 font-bold">{cardError}</p>}
                  </div>

                  {/* Expiry / CVV Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">{d.expiryLabel}</label>
                      <input
                        type="text"
                        required
                        value={cardExpiry}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, '').slice(0, 4);
                          const formatted = raw.length > 2 ? `${raw.slice(0,2)}/${raw.slice(2,4)}` : raw;
                          setCardExpiry(formatted);
                        }}
                        placeholder="MM/YY"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 rounded-xl focus:outline-hidden focus:border-[#7A19FF] font-mono text-center"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">{d.cvvLabel}</label>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        placeholder="***"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 rounded-xl focus:outline-hidden focus:border-[#7A19FF] font-mono text-center tracking-widest"
                      />
                    </div>
                  </div>

                  {/* Autofill test preset triggers */}
                  <div className="bg-slate-50 rounded-2xl p-2.5 border border-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <span className="text-[9.5px] text-slate-450 font-sans font-bold uppercase">{d.testCardsTitle}</span>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setCardNumber('8600 1200 4567 9801');
                          setCardExpiry('12/28');
                          setCardCvv('112');
                          setSelectedPaymentProvider('uzcard');
                        }}
                        className="text-[9.5px] bg-white hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-800 font-mono font-bold cursor-pointer transition-all active:scale-95"
                      >
                        Uzcard
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCardNumber('9860 3300 1199 4488');
                          setCardExpiry('10/29');
                          setCardCvv('981');
                          setSelectedPaymentProvider('humo');
                        }}
                        className="text-[9.5px] bg-white hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-800 font-mono font-bold cursor-pointer transition-all active:scale-95"
                      >
                        Humo
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessingPay}
                    className="w-full py-3.5 bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white text-xs font-black rounded-xl shadow-xs transition-all hover:brightness-105 flex items-center justify-center space-x-1 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessingPay ? (
                      <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>{d.amountToPay} 199,000 UZS</span>
                      </>
                    )}
                  </button>

                </form>
              )}

              {/* STEP 2: Simulated SMS authentication */}
              {checkoutStep === 'sms' && (
                <div className="space-y-6 text-center py-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#7A19FF] border border-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Smartphone className="w-5 h-5 animate-bounce" />
                  </div>
                  
                  <div className="space-y-1.5 max-w-xs mx-auto">
                    <h4 className="text-sm font-extrabold text-slate-900">{d.enterSmsCode}</h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      {d.enterSmsDesc}
                    </p>
                  </div>

                  <div className="space-y-4 max-w-xs mx-auto">
                    <div className="relative">
                      <input 
                        type="text"
                        maxLength={4}
                        placeholder="----"
                        value={checkoutSmsCode}
                        onChange={(e) => setCheckoutSmsCode(e.target.value.replace(/\D/g, ''))}
                        className="w-full bg-slate-50 border border-slate-205 py-2.5 px-4 text-center tracking-widest font-mono text-base rounded-xl text-slate-900 font-bold focus:outline-hidden focus:border-[#7A19FF]"
                      />
                      <button
                        type="button"
                        onClick={() => setCheckoutSmsCode('8888')}
                        className="absolute right-2 top-2 text-[9px] bg-white hover:bg-slate-100 text-[#7A19FF] border border-purple-100 font-mono px-2.5 py-1 rounded cursor-pointer transition-all active:scale-95 font-bold"
                      >
                        {d.autoFillSms}
                      </button>
                    </div>

                    <button
                      onClick={handleVerifySms}
                      disabled={isProcessingPay || checkoutSmsCode !== '8888'}
                      className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-black rounded-xl shadow-xs transition-all hover:brightness-105 flex items-center justify-center space-x-1 cursor-pointer disabled:opacity-40"
                    >
                      {isProcessingPay ? (
                        <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                      ) : (
                        <>
                          <Check className="w-4.5 h-4.5" />
                          <span>{d.confirmSmsBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Successful transaction notification */}
              {checkoutStep === 'success' && (
                <div className="space-y-6 text-center py-4">
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>

                  <div className="space-y-1.5 max-w-xs mx-auto">
                    <h4 className="text-base font-extrabold text-slate-900">{d.paymentCompletedTitle}</h4>
                    <p className="text-[11.5px] text-slate-500 leading-normal">
                      {d.paymentCompletedDesc}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setShowCheckoutModal(false);
                      setCheckoutStep('form');
                      setCardNumber('');
                      setCardExpiry('');
                      setCardCvv('');
                      setCheckoutSmsCode('');
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#7A19FF] to-[#387BFF] text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer inline-flex items-center space-x-1.5"
                  >
                    <span>{d.startLearning}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

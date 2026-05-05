/**
 * Evoo - Internationalization (i18n) Configuration
 * Supports: Indonesian (id) - Default, English US (en-us)
 */

const i18n = {
  // Default language
  defaultLang: 'id',
  
  // Supported languages
  supportedLangs: ['id', 'en-us'],
  
  // Translations
  translations: {
    id: {
      // Navigation
      'nav.home': 'Beranda',
      'nav.solutions': 'Solusi',
      'nav.packages': 'Paket',
      'nav.about': 'Tentang',
      'nav.contact': 'Kontak',

      // Hero Section
      'hero.headline': 'Build Reliable Digital Systems',
      'hero.subtext': 'Kami membantu bisnis mengubah ide menjadi software yang scalable dan siap produksi.',
      'hero.cta': 'Mulai Proyek',

      // Trust Strip
      'trust.custom': 'Solusi custom-built',
      'trust.scalable': 'Arsitektur scalable',
      'trust.support': 'Dukungan reliable',

      // Solutions Section
      'solutions.title': 'Solusi yang Kami Tawarkan',
      'solutions.subtitle': 'Solusi software praktis untuk kebutuhan bisnis nyata',
      'solutions.website.title': 'Business Website System',
      'solutions.website.desc': 'Company profile modern, landing pages, CMS-ready.',
      'solutions.dashboard.title': 'Internal Dashboard System',
      'solutions.dashboard.desc': 'Admin panels, reporting systems, role management.',
      'solutions.automation.title': 'Custom Automation Tools',
      'solutions.automation.desc': 'Kurangi pekerjaan manual dengan workflows yang disesuaikan.',
      'solutions.api.title': 'API & Integration',
      'solutions.api.desc': 'Hubungkan sistem Anda dengan layanan pihak ketiga.',

      // Demo Section
      'demo.title': 'Lihat Apa yang Bisa Kami Bangun',
      'demo.subtitle': 'Contoh sistem yang telah kami deliver',
      'demo.dashboard.title': 'Dashboard System',
      'demo.dashboard.desc': 'Analytics and management interface',
      'demo.pos.title': 'POS System',
      'demo.pos.desc': 'Point of sale untuk operasi retail',
      'demo.booking.title': 'Booking System',
      'demo.booking.desc': 'Platform appointment dan reservation',

      // Case Study Section
      'casestudy.title': 'Pekerjaan Terpilih',
      'casestudy.subtitle': 'Proyek nyata dengan hasil nyata',
      'casestudy.project.name': 'Inventory Management System',
      'casestudy.problem': 'Problem:',
      'casestudy.problem.desc': 'Klien kesulitan dengan tracking stok manual di multiple lokasi, menyebabkan stockout dan overordering.',
      'casestudy.solution': 'Solution:',
      'casestudy.solution.desc': 'Membangun inventory dashboard terpusat dengan real-time tracking, alert otomatis, dan multi-location support.',
      'casestudy.result': 'Result:',
      'casestudy.result.desc': 'Mengurangi stock discrepancies sebesar 85% dan menghemat 10+ jam per minggu untuk pengecekan inventory manual.',

      // Packages Section
      'packages.title': 'Paket Starter',
      'packages.subtitle': 'Harga jelas untuk kebutuhan umum',
      'packages.website.title': 'Website Starter',
      'packages.website.desc': 'Untuk bisnis yang membutuhkan presence online profesional',
      'packages.website.price': 'Mulai dari',
      'packages.website.feature1': 'Website 3–5 halaman',
      'packages.website.feature2': 'Mobile responsive',
      'packages.website.feature3': 'CMS dasar',
      'packages.website.feature4': 'Integrasi kontak',
      'packages.website.cta': 'Mulai Proyek',

      'packages.system.title': 'Business System Starter',
      'packages.system.desc': 'Untuk tools internal dan dashboards',
      'packages.system.feature1': 'Admin dashboard',
      'packages.system.feature2': 'Role & permission',
      'packages.system.feature3': 'Reporting dasar',
      'packages.system.feature4': 'API ready',

      'packages.custom.title': 'Custom Solution',
      'packages.custom.desc': 'Untuk sistem yang kompleks dan scalable',
      'packages.custom.price': 'Harga',
      'packages.custom.price.custom': 'Custom',
      'packages.custom.note': 'berdasarkan scope',
      'packages.custom.feature1': 'Full custom development',
      'packages.custom.feature2': 'Architecture planning',
      'packages.custom.feature3': 'Integration & deployment',
      'packages.custom.feature4': 'Ongoing support',
      'packages.custom.cta': 'Diskusikan Proyek Anda',
      'packages.note': 'Harga akhir tergantung pada kompleksitas proyek dan kebutuhan spesifik.',

      // Why Evoo Section
      'why.title': 'Mengapa Bekerja dengan Evoo',
      'why.subtitle': 'Apa yang membuat kami berbeda',
      'why.reliability.title': 'Fokus pada reliability, bukan hanya visual',
      'why.reliability.desc': 'Kami membangun sistem yang bekerja secara konsisten, bukan hanya terlihat bagus.',
      'why.code.title': 'Clean dan scalable code',
      'why.code.desc': 'Sistem Anda dapat berkembang tanpa technical debt yang menghambat.',
      'why.practical.title': 'Solusi praktis, tidak over-engineered',
      'why.practical.desc': 'Kami menyelesaikan masalah Anda yang sebenarnya tanpa kompleksitas yang tidak perlu.',
      'why.communication.title': 'Komunikasi langsung',
      'why.communication.desc': 'Bicara langsung dengan developer yang membangun proyek Anda.',

      // About Section
      'about.title': 'Tentang Evoo',
      'about.subtitle': 'Software agency yang membangun sistem yang berfungsi',
      'about.lead': 'Evoo adalah software agency yang fokus membangun sistem yang benar-benar berfungsi.',
      'about.p1': 'Kami membantu bisnis beralih dari proses manual ke sistem digital yang efisien. Baik Anda membutuhkan company website, internal dashboard, atau custom business tool, kami deliver solusi yang reliable dan siap produksi.',
      'about.p2': 'Dipimpin oleh developer berpengalaman dengan eksekusi proyek hands-on, kami bangga menulis clean code dan menyelesaikan masalah bisnis nyata.',

      // CTA Section
      'cta.title': 'Mari Bangun Sesuatu yang Berfungsi',
      'cta.subtitle': 'Ceritakan proyek Anda dan kami akan menghubungi Anda dalam 24 jam',
      'cta.button': 'Mulai Proyek',

      // Contact Section
      'contact.title': 'Kontak',
      'contact.subtitle': 'Siap memulai? Hubungi kami',
      'contact.location': 'Lokasi',
      'contact.location.address': 'Jl. Bratang Gede 1C / 29<br>Wonokromo, Surabaya 60245',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',

      // Footer
      'footer.tagline': 'Software development agency yang fokus membangun sistem scalable dan reliable untuk bisnis.',
      'footer.links': 'Link',
      'footer.solutions': 'Solusi',
      'footer.solution1': 'Business Website',
      'footer.solution2': 'Internal Dashboard',
      'footer.solution3': 'Automation Tools',
      'footer.solution4': 'API & Integration',
      'footer.copyright': 'Hak Cipta Dilindungi.',

      // Language Switcher
      'lang.id': 'ID',
      'lang.en-us': 'EN'
    },
    'en-us': {
      // Navigation
      'nav.home': 'Home',
      'nav.solutions': 'Solutions',
      'nav.packages': 'Packages',
      'nav.about': 'About',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.headline': 'Build Reliable Digital Systems',
      'hero.subtext': 'We help businesses transform ideas into scalable, production-ready software.',
      'hero.cta': 'Start Project',

      // Trust Strip
      'trust.custom': 'Custom-built solutions',
      'trust.scalable': 'Scalable architecture',
      'trust.support': 'Reliable support',

      // Solutions Section
      'solutions.title': 'Solutions We Offer',
      'solutions.subtitle': 'Practical software solutions for real business needs',
      'solutions.website.title': 'Business Website System',
      'solutions.website.desc': 'Modern company profile, landing pages, CMS-ready.',
      'solutions.dashboard.title': 'Internal Dashboard System',
      'solutions.dashboard.desc': 'Admin panels, reporting systems, role management.',
      'solutions.automation.title': 'Custom Automation Tools',
      'solutions.automation.desc': 'Reduce manual work with customized workflows.',
      'solutions.api.title': 'API & Integration',
      'solutions.api.desc': 'Connect your systems with third-party services.',

      // Demo Section
      'demo.title': 'See What We Can Build',
      'demo.subtitle': 'Examples of systems we have delivered',
      'demo.dashboard.title': 'Dashboard System',
      'demo.dashboard.desc': 'Analytics and management interface',
      'demo.pos.title': 'POS System',
      'demo.pos.desc': 'Point of sale for retail operations',
      'demo.booking.title': 'Booking System',
      'demo.booking.desc': 'Appointment and reservation platform',

      // Case Study Section
      'casestudy.title': 'Selected Work',
      'casestudy.subtitle': 'Real projects with real results',
      'casestudy.project.name': 'Inventory Management System',
      'casestudy.problem': 'Problem:',
      'casestudy.problem.desc': 'The client struggled with manual stock tracking across multiple locations, causing stockouts and overordering.',
      'casestudy.solution': 'Solution:',
      'casestudy.solution.desc': 'Built a centralized inventory dashboard with real-time tracking, automatic alerts, and multi-location support.',
      'casestudy.result': 'Result:',
      'casestudy.result.desc': 'Reduced stock discrepancies by 85% and saved 10+ hours per week on manual inventory checks.',

      // Packages Section
      'packages.title': 'Starter Packages',
      'packages.subtitle': 'Clear pricing for common needs',
      'packages.website.title': 'Website Starter',
      'packages.website.desc': 'For businesses needing a professional online presence',
      'packages.website.price': 'Starting from',
      'packages.website.feature1': '3-5 page website',
      'packages.website.feature2': 'Mobile responsive',
      'packages.website.feature3': 'Basic CMS',
      'packages.website.feature4': 'Contact integration',
      'packages.website.cta': 'Start Project',

      'packages.system.title': 'Business System Starter',
      'packages.system.desc': 'For internal tools and dashboards',
      'packages.system.feature1': 'Admin dashboard',
      'packages.system.feature2': 'Role & permission',
      'packages.system.feature3': 'Basic reporting',
      'packages.system.feature4': 'API ready',

      'packages.custom.title': 'Custom Solution',
      'packages.custom.desc': 'For complex and scalable systems',
      'packages.custom.price': 'Price',
      'packages.custom.price.custom': 'Custom',
      'packages.custom.note': 'based on scope',
      'packages.custom.feature1': 'Full custom development',
      'packages.custom.feature2': 'Architecture planning',
      'packages.custom.feature3': 'Integration & deployment',
      'packages.custom.feature4': 'Ongoing support',
      'packages.custom.cta': 'Discuss Your Project',
      'packages.note': 'Final price depends on project complexity and specific requirements.',

      // Why Evoo Section
      'why.title': 'Why Work with Evoo',
      'why.subtitle': 'What makes us different',
      'why.reliability.title': 'Focus on reliability, not just visuals',
      'why.reliability.desc': 'We build systems that work consistently, not just look good.',
      'why.code.title': 'Clean and scalable code',
      'why.code.desc': 'Your system can grow without technical debt holding it back.',
      'why.practical.title': 'Practical solutions, not over-engineered',
      'why.practical.desc': 'We solve your actual problems without unnecessary complexity.',
      'why.communication.title': 'Direct communication',
      'why.communication.desc': 'Talk directly with the developers building your project.',

      // About Section
      'about.title': 'About Evoo',
      'about.subtitle': 'A software agency that builds systems that work',
      'about.lead': 'Evoo is a software agency focused on building systems that actually work.',
      'about.p1': 'We help businesses transition from manual processes to efficient digital systems. Whether you need a company website, internal dashboard, or custom business tool, we deliver reliable, production-ready solutions.',
      'about.p2': 'Led by experienced developers with hands-on project execution, we pride ourselves on writing clean code and solving real business problems.',

      // CTA Section
      'cta.title': "Let's Build Something That Works",
      'cta.subtitle': 'Tell us about your project and we will get back to you within 24 hours',
      'cta.button': 'Start Project',

      // Contact Section
      'contact.title': 'Contact',
      'contact.subtitle': 'Ready to start? Contact us',
      'contact.location': 'Location',
      'contact.location.address': 'Jl. Bratang Gede 1C / 29<br>Wonokromo, Surabaya 60245',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',

      // Footer
      'footer.tagline': 'Software development agency focused on building scalable and reliable systems for businesses.',
      'footer.links': 'Links',
      'footer.solutions': 'Solutions',
      'footer.solution1': 'Business Website',
      'footer.solution2': 'Internal Dashboard',
      'footer.solution3': 'Automation Tools',
      'footer.solution4': 'API & Integration',
      'footer.copyright': 'All Rights Reserved.',

      // Language Switcher
      'lang.id': 'ID',
      'lang.en-us': 'EN'
    }
  },
  
  /**
   * Get current language from localStorage or default
   */
  getCurrentLang() {
    const savedLang = localStorage.getItem('evoo-lang');
    return savedLang && this.supportedLangs.includes(savedLang) 
      ? savedLang 
      : this.defaultLang;
  },
  
  /**
   * Set language and save to localStorage
   */
  setLang(lang) {
    if (!this.supportedLangs.includes(lang)) {
      console.warn(`Language "${lang}" is not supported. Using default.`);
      lang = this.defaultLang;
    }
    
    localStorage.setItem('evoo-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    this.updateContent();
    this.updateActiveLangButton();
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  },
  
  /**
   * Get translation for a key
   */
  t(key) {
    const currentLang = this.getCurrentLang();
    const langTranslations = this.translations[currentLang];
    
    // Fallback if language translations don't exist
    if (!langTranslations) {
      console.warn(`Translations for language "${currentLang}" not found`);
      return key;
    }
    
    const translation = langTranslations[key];
    
    if (translation === undefined) {
      console.warn(`Translation key "${key}" not found for language "${currentLang}"`);
      return key;
    }
    
    return translation;
  },
  
  /**
   * Update all elements with data-i18n attribute
   */
  updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      
      // Check if element has HTML content (for <br> tags etc.)
      if (translation.includes('<')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    });
  },
  
  /**
   * Update active state on language buttons
   */
  updateActiveLangButton() {
    const currentLang = this.getCurrentLang();
    const buttons = document.querySelectorAll('.lang-btn');
    
    buttons.forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },
  
  /**
   * Toggle between languages
   */
  toggle() {
    const currentLang = this.getCurrentLang();
    const newLang = currentLang === 'id' ? 'en-us' : 'id';
    this.setLang(newLang);
  },
  
  /**
   * Initialize i18n
   */
  init() {
    const currentLang = this.getCurrentLang();
    document.documentElement.setAttribute('lang', currentLang);
    this.updateContent();
    this.updateActiveLangButton();
    
    // Add click handlers to language buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-btn') || e.target.closest('.lang-btn')) {
        const btn = e.target.classList.contains('lang-btn') ? e.target : e.target.closest('.lang-btn');
        const lang = btn.getAttribute('data-lang');
        if (lang) {
          this.setLang(lang);
        }
      }
    });
  }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}

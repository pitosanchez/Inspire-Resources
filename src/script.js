/**
 * INSPIRE - Kidney Transplant Resources
 * Artist Engineer: Where code meets empathy
 * Design is empathy made visible
 */

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  if (scrollProgress) {
    scrollProgress.style.transform = `scaleX(${scrollPercentage / 100})`;
  }
});

// ========================================
// LANGUAGE SWITCHER - Multilingual Empathy
// ========================================
const translations = {
  en: {
    // Navigation
    'Home': 'Home',
    'About': 'About',
    'CKD Info': 'CKD Info',
    'Kidney Diseases': 'Kidney Diseases',
    'Resources': 'Resources',
    'Recursos en Español': 'Spanish Resources',
    'Get Help': 'Get Help',
    
    // Hero Section
    'INSPIRE': 'INSPIRE',
    'Empowering Communities': 'Empowering Communities',
    'Everyone Deserves a Fair Chance at a': 'Everyone Deserves a Fair Chance at a',
    'Life-Saving': 'Life-Saving',
    'Kidney Transplant': 'Kidney Transplant',
    'Breaking down barriers for underserved communities through education, support, and advocacy.': 'Breaking down barriers for underserved communities through education, support, and advocacy.',
    'Explore Resources': 'Explore Resources',
    'Learn More': 'Learn More',
    
    // CKD Education
    'Knowledge is Power': 'Knowledge is Power',
    'What is Chronic Kidney Disease?': 'What is Chronic Kidney Disease?',
    'The 5 Stages of CKD': 'The 5 Stages of CKD',
    
    // Other
    'Ready to Get Started?': 'Ready to Get Started?',
    'Access Resources': 'Access Resources'
  },
  es: {
    // Navigation
    'Home': 'Inicio',
    'About': 'Acerca de',
    'CKD Info': 'Info de ERC',
    'Kidney Diseases': 'Enfermedades Renales',
    'Resources': 'Recursos',
    'Recursos en Español': 'Recursos en Español',
    'Get Help': 'Obtener Ayuda',
    
    // Hero Section
    'INSPIRE': 'INSPIRE',
    'Empowering Communities': 'Empoderando Comunidades',
    'Everyone Deserves a Fair Chance at a': 'Todos Merecen una Oportunidad Justa de un',
    'Life-Saving': 'Que Salva Vidas',
    'Kidney Transplant': 'Trasplante de Riñón',
    'Breaking down barriers for underserved communities through education, support, and advocacy.': 'Derribando barreras para comunidades desatendidas a través de educación, apoyo y defensa.',
    'Explore Resources': 'Explorar Recursos',
    'Learn More': 'Aprender Más',
    
    // CKD Education
    'Knowledge is Power': 'El Conocimiento es Poder',
    'What is Chronic Kidney Disease?': '¿Qué es la Enfermedad Renal Crónica?',
    'The 5 Stages of CKD': 'Las 5 Etapas de la ERC',
    
    // Other
    'Ready to Get Started?': '¿Listo para Comenzar?',
    'Access Resources': 'Acceder a Recursos'
  }
};

let currentLang = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// ========================================
// INITIALIZE ON DOM READY
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher setup
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
  
  // Initialize with saved language
  switchLanguage(currentLang);
  
  // External links open in new tab
  const anchors = document.querySelectorAll('a');
  anchors.forEach(anchor => {
    const href = anchor.getAttribute('href');
    
    if (href && !href.startsWith('#')) {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    }
    
    // Smooth scroll for internal links
    if (href && href.startsWith('#')) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  
  // Fade in sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
  
  // Observe stage cards
  document.querySelectorAll('.stage-card, .disease-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
  });
});

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

console.log('%c🎨 Designed with empathy. Built with intention.', 'color: #0066cc; font-size: 14px; font-weight: bold;');
console.log('%c💙 INSPIRE - Every pixel tells a story', 'color: #06d6a0; font-size: 12px;');

/**
 * INSPIRE - Kidney Transplant Resources
 * Artist Engineer: Where code meets empathy
 * Design is empathy made visible
 */

// ========================================
// GSAP SETUP & SMOOTH SCROLL
// ========================================
// Safely register GSAP plugins
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Scroll Progress Indicator
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
    'Stage 1': 'Stage 1',
    'Stage 2': 'Stage 2',
    'Stage 3': 'Stage 3',
    'Stage 4': 'Stage 4',
    'Stage 5': 'Stage 5',
    
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
    'Stage 1': 'Etapa 1',
    'Stage 2': 'Etapa 2',
    'Stage 3': 'Etapa 3',
    'Stage 4': 'Etapa 4',
    'Stage 5': 'Etapa 5',
    
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

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
  // Set up language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
      
      // GSAP animation for button click
      if (typeof gsap !== 'undefined') {
        gsap.to(btn, {
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1
        });
      }
    });
  });
  
  // Initialize with saved language
  switchLanguage(currentLang);
});

// ========================================
// GSAP ANIMATIONS - Intentional Motion
// ========================================
if (typeof gsap !== 'undefined') {
  // Hero Section - Fade in on load
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.2
  });

  // Section Reveal Animations
  const sections = gsap.utils.toArray('section');
  sections.forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power2.out',
      delay: index * 0.1
    });
  });

  // CKD Stage Cards - Stagger Animation
  gsap.from('.stage-card', {
    scrollTrigger: {
      trigger: '.stages-grid',
      start: 'top 75%'
    },
    opacity: 0,
    y: 40,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.2)'
  });

  // Disease Cards - Grid Reveal
  gsap.from('.disease-card', {
    scrollTrigger: {
      trigger: '.disease-grid',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: {
      amount: 0.8,
      grid: 'auto',
      from: 'start'
    },
    ease: 'power2.out'
  });

  // Spanish Video Cards - Elegant Entrance
  gsap.from('.spanish-video-card', {
    scrollTrigger: {
      trigger: '.spanish-video-grid',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out'
  });

  // Section Labels - Subtle Float
  gsap.from('.section-label', {
    scrollTrigger: {
      trigger: '.section-label',
      start: 'top 85%'
    },
    opacity: 0,
    x: -20,
    duration: 0.6,
    ease: 'power2.out'
  });
}

// ========================================
// SMOOTH SCROLL FOR NAVIGATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
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
});

// ========================================
// HOVER INTERACTIONS - Micro-Moments
// ========================================
if (typeof gsap !== 'undefined') {
  // Service Cards Tilt Effect
  document.querySelectorAll('.service-card, .resource-card, .disease-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.03,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Button Ripple Effect
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

// ========================================
// ACCESSIBILITY - Reduced Motion
// ========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches && typeof gsap !== 'undefined') {
  // Disable all GSAP animations
  gsap.globalTimeline.clear();
  gsap.set('*', { clearProps: 'all' });
}

// ========================================
// PERFORMANCE - Lazy Load Images
// ========================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

console.log('%c🎨 Designed with empathy. Built with intention.', 'color: #0066cc; font-size: 14px; font-weight: bold;');
console.log('%c💙 INSPIRE - Every pixel tells a story', 'color: #06d6a0; font-size: 12px;');

# INSPIRE — Kidney Transplant Resources

**A handcrafted, accessible resource platform for kidney transplant education**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.4.17-38B2AC)]()
[![WCAG](https://img.shields.io/badge/WCAG-AA+-green)]()
[![License](https://img.shields.io/badge/license-MIT-blue)]()

---

## 🎯 Project Overview

INSPIRE is a nonprofit resource platform providing curated information about kidney transplants, living donor resources, and chronic kidney disease education. Built with empathy, designed with accessibility-first principles, and crafted for real people facing real challenges.

### Key Features

- ✅ Bilingual support (English & Spanish)
- ✅ Curated resource library with verified links
- ✅ CKD education materials
- ✅ Living donor information
- ✅ WCAG AA+ accessibility compliance
- ✅ Mobile-first responsive design
- ✅ Production-ready design system

---

## 🚀 Quick Start

### Prerequisites

- Node.js v18+ (recommended: v20)
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Inspire-Resources.git
cd Inspire-Resources

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
npm run dev     # Start dev server on http://localhost:5173
npm run build   # Build for production (outputs to dist/)
npm run preview # Preview production build
```

---

## 🎨 Design System

### Built With

- **Framework**: React 19.2.0
- **Styling**: Tailwind CSS v3.4.17
- **Build Tool**: Vite 6.0.11
- **Typography**: Inter (sans), DM Serif Text (serif)

### Design Principles

1. **Empathy First** — Every design decision considers the user's emotional state
2. **Accessibility Always** — WCAG AA+ compliance is non-negotiable
3. **Intentional Spacing** — 8pt grid system for consistent rhythm
4. **Purposeful Motion** — Subtle animations that serve meaning
5. **Human-Crafted** — No AI-generated bloat, every word earns its place

### Component Library

- **Button** — 7 variants, 4 sizes, full accessibility
- **Card** — 6 variants with composable subcomponents
- **Badge** — 7 variants, 3 sizes, semantic colors
- **Input** — Error states, labels, helper text
- **Alert** — 6 variants with icon support

**View the full design system**: See [STYLEGUIDE_ACCESS.md](./STYLEGUIDE_ACCESS.md)

---

## ♿ Accessibility

### WCAG 2.1 Compliance

- ✅ **AA+ Level** (most text achieves AAA)
- ✅ **Color Contrast**: All text meets 4.5:1 (normal) or 3:1 (large)
- ✅ **Keyboard Navigation**: Full keyboard accessibility
- ✅ **Screen Readers**: ARIA labels and semantic HTML
- ✅ **Focus States**: Highly visible focus indicators

### Tested With

- macOS VoiceOver
- NVDA (Windows)
- Axe DevTools
- WAVE Accessibility Checker

**Full accessibility audit**: See [CHECKLIST.md](./CHECKLIST.md) (Section 4)

---

## 📦 Recent Updates

### Tailwind CSS Migration (Oct 2025)

- ✅ Migrated from v4.x (experimental) → v3.4.17 (stable)
- ✅ Fixed PostCSS configuration
- ✅ Added official plugins (typography, forms, aspect-ratio)
- ✅ Established complete design token system
- ✅ Created component library with StyleGuide

**Full migration details**: See [REFACTOR_SUMMARY.md](./REFACTOR_SUMMARY.md)

---

## 📚 Documentation

### For Developers

- [CHECKLIST.md](./CHECKLIST.md) — Comprehensive technical breakdown (17 sections)
- [REFACTOR_SUMMARY.md](./REFACTOR_SUMMARY.md) — Executive summary
- [STYLEGUIDE_ACCESS.md](./STYLEGUIDE_ACCESS.md) — How to view design system
- [DEPLOYMENT_READY.md](./DEPLOYMENT_READY.md) — Production deployment guide

### For Designers

- **StyleGuide**: `src/components/StyleGuide.jsx` — Living documentation
- **Tokens**: `tailwind.config.js` — All design tokens (colors, typography, spacing)
- **Base Styles**: `src/index.css` — Typography, animations, utilities

---

## 🏗️ Project Structure

```
Inspire-Resources/
├── public/
│   ├── images/          # Logos, resource images
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Hero, About, Resources, etc.
│   │   ├── shared/      # ScrollProgress, SEO, LanguageSwitcher
│   │   ├── ui/          # Button, Card, Badge, Input, Alert
│   │   └── StyleGuide.jsx
│   ├── hooks/           # Custom React hooks
│   ├── utils/
│   │   ├── LanguageContext.jsx
│   │   ├── translations.js
│   │   └── cn.js        # Class name utility
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind entry point
├── tailwind.config.js   # Design system tokens
├── vite.config.js
└── package.json
```

---

## 🎯 Performance

### Build Output

```
CSS:  36.52 KB →  6.66 KB (gzipped) ⭐
JS:  371.65 KB → 126.21 KB (gzipped)
HTML:   2.47 KB →  0.87 KB (gzipped)

Build time: ~2.6 seconds
```

### Lighthouse Scores (Target)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🌐 Deployment

### Production Build

```bash
npm run build
```

Output will be in `dist/` directory.

### Deployment Platforms

- **GitHub Pages**: Configured in `vite.config.js`
- **Netlify**: Build command `npm run build`, publish directory `dist`
- **Vercel**: Import from GitHub, framework preset Vite

**Full deployment guide**: See [DEPLOYMENT_READY.md](./DEPLOYMENT_READY.md)

---

## 🤝 Contributing

This is a nonprofit project. Contributions are welcome!

### Guidelines

1. Follow the established design system (see StyleGuide)
2. Maintain WCAG AA+ accessibility standards
3. Write semantic HTML with proper ARIA labels
4. Test keyboard navigation and screen readers
5. Use the component library (don't create one-offs)

### Code Style

- ESLint configured with Tailwind plugin
- Consistent component API (variant, size, className)
- TypeScript-ready (displayName, forwardRef)

---

## 📄 License

MIT License — See LICENSE file for details.

---

## 🙏 Acknowledgments

Built with love for the kidney disease community. Special thanks to:

- Living donors and recipients who inspire this work
- Healthcare professionals providing guidance
- Designers and developers contributing expertise

---

## 📞 Contact

**Project**: INSPIRE - Kidney Transplant Resources  
**Website**: [Coming Soon]  
**Repository**: [GitHub](https://github.com/yourusername/Inspire-Resources)

---

## 🎓 Tech Stack

| Technology         | Version | Purpose                 |
| ------------------ | ------- | ----------------------- |
| React              | 19.2.0  | UI framework            |
| Tailwind CSS       | 3.4.17  | Utility-first CSS       |
| Vite               | 6.0.11  | Build tool & dev server |
| React Helmet Async | 2.0.5   | SEO meta tags           |
| GSAP               | 3.13.0  | Advanced animations     |
| clsx               | 2.1.1   | Class name utility      |

### Tailwind Plugins

- `@tailwindcss/typography` — Prose styles
- `@tailwindcss/forms` — Form element styling
- `@tailwindcss/aspect-ratio` — Aspect ratio utilities

---

## 📊 Status

✅ **Production Ready**  
✅ **WCAG AA+ Compliant**  
✅ **Design System Complete**  
✅ **Build Verified** (2.6s)  
✅ **Zero Lint Errors**

**Ready for deployment.** 🚀

---

_Crafted with intention • Designed with empathy • Built for everyone_

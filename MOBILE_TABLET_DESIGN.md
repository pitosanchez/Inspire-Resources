# 📱 Mobile & Tablet Responsive Design Strategy
## INSPIRE Kidney Transplant Resources

---

## 🎯 Design Philosophy

**Mobile-First Approach**: Every design decision prioritizes the mobile experience (320px-768px), then enhances for tablets (768px-1024px), and finally optimizes for desktop.

**Core Principles**:
- **Touch-First**: All interactive elements minimum 44×44px touch targets
- **Readability**: Minimum 16px base font size, 1.6 line-height
- **Progressive Disclosure**: Show essential content first, reveal details on interaction
- **Thumb Zone Optimization**: Primary actions within easy thumb reach
- **Performance**: Lazy-load images, minimize animations on mobile

---

## 📐 Breakpoint Strategy

```
Mobile:      320px - 767px   (Primary focus)
Tablet:      768px - 1023px  (Enhanced layout)
Desktop:     1024px+         (Full experience)
```

**Key Breakpoints**:
- `sm`: 640px (small tablets, large phones)
- `md`: 768px (tablets)
- `lg`: 1024px (desktop)

---

## 🏗️ Component-by-Component Mobile/Tablet Design

### 1. HEADER / NAVIGATION

#### Mobile Wireframe (320px-767px)
```
┌─────────────────────────────┐
│ [Logo]           [☰ Menu]   │ ← Fixed, 64px height
├─────────────────────────────┤
│ (Menu Overlay - Full Screen)│
│                             │
│  • Home                     │
│  • About                    │
│  • Transplant Guide          │
│  • CKD Education            │
│  • Resources                │
│  • Spanish Resources        │
│                             │
│  ───────────────────         │
│  [EN] [ES]                  │
│  [Get Help Button]          │
└─────────────────────────────┘
```

**Mobile Specifications**:
- **Height**: 64px fixed header (was 72px on desktop)
- **Logo**: 32px height (reduced from 40px)
- **Hamburger**: 44×44px touch target, right-aligned
- **Menu Overlay**: Full-screen slide-in from right, dark backdrop (rgba(0,0,0,0.5))
- **Menu Items**: 56px height each, 16px font, full-width touch targets
- **Language Switcher**: Horizontal buttons, 44px height
- **Animation**: Slide-in 300ms ease-out, backdrop fade 200ms

**Tablet Wireframe (768px-1023px)**
```
┌─────────────────────────────────────────────┐
│ [Logo]  Home About Guide CKD Resources ES  │
│                    [Get Help]               │
└─────────────────────────────────────────────┘
```

**Tablet Specifications**:
- **Height**: 72px (same as desktop)
- **Logo**: 40px height
- **Navigation**: Horizontal inline, 14px font, 8px gap between items
- **Language Switcher**: Inline with nav items
- **Get Help Button**: Right-aligned, size "sm"
- **No hamburger menu** (all items visible)

**Design Rationale**:
- Mobile users need one-thumb navigation → full-screen overlay prevents mis-taps
- Tablet has enough space for horizontal nav → faster access, no menu delay
- Fixed header maintains context during scroll (critical for medical content)

---

### 2. HERO SECTION

#### Mobile Wireframe (320px-767px)
```
┌─────────────────────────────┐
│                             │
│      [Logo Card]            │
│   (White rounded card)      │
│   Height: 200px max         │
│                             │
│   [Explore Resources]       │ ← Full-width button
│   [Learn More]              │ ← Full-width button
│                             │
│   (Scroll indicator)        │
└─────────────────────────────┘
```

**Mobile Specifications**:
- **Section Height**: 100vh (full viewport)
- **Logo Container**: 
  - Padding: 24px (reduced from 48px)
  - Logo height: `min(30vh, 200px)` (reduced from 40vh)
  - Border radius: 16px (reduced from 24px)
- **CTA Buttons**: 
  - Stacked vertically, full-width
  - Height: 56px (touch-friendly)
  - Gap: 16px between buttons
  - Font size: 16px, weight: 600
- **Spacing**: 32px gap between logo and buttons

**Tablet Wireframe (768px-1023px)**
```
┌─────────────────────────────────────────────┐
│                                             │
│         [Logo Card]                         │
│      (Larger, more padding)                 │
│      Height: 300px max                      │
│                                             │
│   [Explore Resources]  [Learn More]         │ ← Side-by-side
│                                             │
└─────────────────────────────────────────────┘
```

**Tablet Specifications**:
- **Logo Container**: 
  - Padding: 32px
  - Logo height: `min(35vh, 300px)`
  - Border radius: 20px
- **CTA Buttons**: 
  - Side-by-side, equal width
  - Height: 56px
  - Gap: 16px
- **Spacing**: 48px gap between logo and buttons

**Design Rationale**:
- Mobile: Vertical stacking prevents button overlap, full-width ensures easy tapping
- Tablet: Horizontal buttons utilize wider screen, maintain visual balance
- Logo size scales appropriately to prevent overwhelming small screens

---

### 3. ABOUT SECTION

#### Mobile Wireframe (320px-767px)
```
┌─────────────────────────────┐
│  Our Mission                │
│  (Large heading)            │
│                             │
│  Supporting text...         │
│                             │
├─────────────────────────────┤
│  [Mission Statement Card]   │ ← Full-width
│  (Brand-50 background)      │
│                             │
├─────────────────────────────┤
│  About Us                   │
│  (Text content)             │
│                             │
├─────────────────────────────┤
│  Our Services               │
│  ┌─────┐ ┌─────┐           │
│  │Card1│ │Card2│           │ ← 2 columns
│  └─────┘ └─────┘           │
│  ┌─────┐ ┌─────┐           │
│  │Card3│ │Card4│           │
│  └─────┘ └─────┘           │
│                             │
├─────────────────────────────┤
│  Partners                   │
│  ┌───┐ ┌───┐               │
│  │P1 │ │P2 │               │ ← 2 columns
│  └───┘ └───┘               │
│  ┌───┐ ┌───┐               │
│  │P3 │ │P4 │               │
│  └───┘ └───┘               │
└─────────────────────────────┘
```

**Mobile Specifications**:
- **Hero Title**: 
  - Font: 32px (reduced from 48px)
  - Line height: 1.2
  - Margin bottom: 24px
- **Subtitle**: 
  - Font: 18px (reduced from 24px)
  - Margin bottom: 16px
- **Section Padding**: 
  - Vertical: 48px (reduced from 80px)
  - Horizontal: 20px (reduced from 24px)
- **Service Cards Grid**: 
  - 2 columns (not 3)
  - Gap: 16px
  - Card padding: 20px (reduced from 24px)
  - Font sizes: Title 18px, Body 14px
- **Partner Grid**: 
  - 2 columns
  - Gap: 12px
  - Card padding: 16px
  - Font: 14px

**Tablet Wireframe (768px-1023px)**
```
┌─────────────────────────────────────────────┐
│  Our Mission                                │
│  (Larger heading, more spacing)             │
│                                             │
├─────────────────────────────────────────────┤
│  [Mission Statement Card]                  │
│  (Full-width, more padding)                │
│                                             │
├─────────────────────────────────────────────┤
│  Our Services                               │
│  ┌─────┐ ┌─────┐ ┌─────┐                  │
│  │Card1│ │Card2│ │Card3│                  │ ← 3 columns
│  └─────┘ └─────┘ └─────┘                  │
│  ┌─────┐ ┌─────┐ ┌─────┐                  │
│  │Card4│ │Card5│ │Card6│                  │
│  └─────┘ └─────┘ └─────┘                  │
│                                             │
├─────────────────────────────────────────────┤
│  Partners                                   │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐                 │
│  │P1 │ │P2 │ │P3 │ │P4 │                 │ ← 4 columns
│  └───┘ └───┘ └───┘ └───┘                 │
└─────────────────────────────────────────────┘
```

**Tablet Specifications**:
- **Hero Title**: 40px font
- **Section Padding**: 64px vertical, 32px horizontal
- **Service Cards Grid**: 3 columns (matches desktop)
- **Partner Grid**: 4 columns (matches desktop)
- **Card Padding**: 24px (matches desktop)

**Design Rationale**:
- Mobile: 2-column grid prevents cards from being too narrow, maintains readability
- Tablet: 3-column services grid utilizes space efficiently without feeling cramped
- Progressive disclosure: Essential info first, details expand on interaction

---

### 4. KIDNEY TRANSPLANT GUIDE

#### Mobile Wireframe (320px-767px)
```
┌─────────────────────────────┐
│  Transplant Guide           │
│  (Large heading)             │
│                             │
│  [Overview Card]            │ ← Full-width
│  (Expandable sections)      │
│                             │
│  [Roadmap Steps]             │
│  ┌─────────────────┐        │
│  │ Step 1: ...     │        │ ← Vertical stack
│  └─────────────────┘        │
│  ┌─────────────────┐        │
│  │ Step 2: ...     │        │
│  └─────────────────┘        │
│                             │
│  [Eligibility Factors]      │
│  (Accordion style)          │
└─────────────────────────────┘
```

**Mobile Specifications**:
- **Section Padding**: 48px vertical, 20px horizontal
- **Heading**: 28px font (reduced from 36px)
- **Roadmap Steps**: 
  - Vertical stack (not horizontal timeline)
  - Card width: 100%
  - Card padding: 20px
  - Step number: 48px circle, 20px font
  - Gap between steps: 16px
- **Accordion Sections**: 
  - Full-width
  - Header: 56px height (touch target)
  - Content padding: 20px
  - Icon: 24px, right-aligned

**Tablet Wireframe (768px-1023px)**
```
┌─────────────────────────────────────────────┐
│  Transplant Guide                           │
│                                             │
│  [Overview]  [Roadmap]  [Eligibility]     │ ← Tabs or sections
│                                             │
│  Roadmap Timeline (Horizontal)              │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐                 │
│  │ 1 │ │ 2 │ │ 3 │ │ 4 │                 │
│  └───┘ └───┘ └───┘ └───┘                 │
│                                             │
│  [Eligibility Grid]                         │
│  ┌─────┐ ┌─────┐                           │
│  │Med  │ │Psych│                           │ ← 2 columns
│  └─────┘ └─────┘                           │
└─────────────────────────────────────────────┘
```

**Tablet Specifications**:
- **Section Padding**: 64px vertical, 32px horizontal
- **Heading**: 36px font
- **Roadmap Steps**: 
  - Horizontal timeline (if space allows)
  - Or 2-column grid
  - Card padding: 24px
- **Eligibility Grid**: 2 columns

**Design Rationale**:
- Mobile: Vertical stacking prevents horizontal scrolling, easier to read step-by-step
- Tablet: Can show timeline horizontally for better visual flow
- Accordion pattern reduces cognitive load on mobile

---

### 5. RESOURCES SECTION

#### Mobile Wireframe (320px-767px)
```
┌─────────────────────────────┐
│  Resources                  │
│  (Heading)                  │
│                             │
│  ┌─────────────────────┐   │
│  │ [Resource Card 1]   │   │ ← Full-width
│  │ [Image]             │   │
│  │ Title               │   │
│  │ Description...      │   │
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │ [Resource Card 2]   │   │
│  └─────────────────────┘   │
│                             │
│  Videos                     │
│  ┌─────┐ ┌─────┐           │
│  │Vid1 │ │Vid2 │           │ ← 2 columns
│  └─────┘ └─────┘           │
│  ┌─────┐ ┌─────┐           │
│  │Vid3 │ │Vid4 │           │
│  └─────┘ └─────┘           │
└─────────────────────────────┘
```

**Mobile Specifications**:
- **Resource Cards**: 
  - Full-width, stacked vertically
  - Image aspect ratio: 16:9
  - Card padding: 20px
  - Title: 18px font
  - Description: 14px font, max 3 lines (truncate with ellipsis)
- **Video Grid**: 
  - 2 columns
  - Aspect ratio: 1:1 (square)
  - Gap: 12px
  - Title below video: 14px font

**Tablet Wireframe (768px-1023px)**
```
┌─────────────────────────────────────────────┐
│  Resources                                  │
│                                             │
│  ┌─────┐ ┌─────┐ ┌─────┐                  │
│  │Card1│ │Card2│ │Card3│                  │ ← 3 columns
│  └─────┘ └─────┘ └─────┘                  │
│                                             │
│  Videos                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐         │
│  │Vid1 │ │Vid2 │ │Vid3 │ │Vid4 │         │ ← 4 columns
│  └─────┘ └─────┘ └─────┘ └─────┘         │
└─────────────────────────────────────────────┘
```

**Tablet Specifications**:
- **Resource Cards**: 3 columns (matches desktop)
- **Video Grid**: 4 columns (matches desktop)
- **Card Padding**: 24px

**Design Rationale**:
- Mobile: Full-width cards maximize image visibility, easier to tap
- Tablet: 3-column grid balances information density with readability
- Videos in 2 columns on mobile prevent them from being too small

---

### 6. CTA SECTION

#### Mobile Wireframe (320px-767px)
```
┌─────────────────────────────┐
│  (Gradient background)       │
│                             │
│  Ready to Get Started?      │
│  (Large heading)            │
│                             │
│  Supporting text...         │
│                             │
│  [Primary CTA Button]        │ ← Full-width
│                             │
│  (Optional secondary)       │
└─────────────────────────────┘
```

**Mobile Specifications**:
- **Section Padding**: 64px vertical, 20px horizontal
- **Heading**: 32px font (reduced from 48px)
- **Text**: 16px font
- **CTA Button**: 
  - Full-width
  - Height: 56px
  - Font: 16px, weight: 600
- **Secondary Button**: Stacked below if present

**Tablet Wireframe (768px-1023px)**
```
┌─────────────────────────────────────────────┐
│  Ready to Get Started?                      │
│  (Larger heading, more spacing)             │
│                                             │
│  [Primary CTA]  [Secondary CTA]            │ ← Side-by-side
└─────────────────────────────────────────────┘
```

**Tablet Specifications**:
- **Section Padding**: 80px vertical, 32px horizontal
- **Heading**: 40px font
- **CTA Buttons**: Side-by-side, equal width

**Design Rationale**:
- Mobile: Single prominent CTA reduces decision fatigue
- Tablet: Two CTAs side-by-side provide options without overwhelming

---

### 7. FOOTER

#### Mobile Wireframe (320px-767px)
```
┌─────────────────────────────┐
│  [Logo]                     │
│  (Centered, smaller)       │
│                             │
│  Copyright text...          │
│                             │
│  About • Resources • Help   │ ← Stacked or
│                             │   horizontal wrap
└─────────────────────────────┘
```

**Mobile Specifications**:
- **Padding**: 48px vertical, 20px horizontal
- **Logo**: 32px height
- **Links**: 
  - Stacked vertically OR
  - Horizontal with line breaks if needed
  - Font: 14px
  - Touch target: 44px height
- **Copyright**: 12px font, centered

**Tablet Wireframe (768px-1023px)**
```
┌─────────────────────────────────────────────┐
│  [Logo]                                     │
│                                             │
│  About • Resources • Help                   │ ← Horizontal
│                                             │
│  Copyright text...                          │
└─────────────────────────────────────────────┘
```

**Tablet Specifications**:
- **Padding**: 64px vertical, 32px horizontal
- **Logo**: 48px height
- **Links**: Horizontal, 16px font

---

## 🎨 Visual Hierarchy & Spacing Strategy

### Typography Scale (Mobile)
```
H1: 32px (Hero titles)
H2: 28px (Section headings)
H3: 22px (Subsection headings)
H4: 18px (Card titles)
Body: 16px (Base)
Small: 14px (Supporting text)
Tiny: 12px (Captions, copyright)
```

### Typography Scale (Tablet)
```
H1: 40px
H2: 36px
H3: 28px
H4: 20px
Body: 18px
Small: 16px
Tiny: 14px
```

### Spacing System (8px Baseline)
```
Mobile:
- Section padding: 48px vertical, 20px horizontal
- Card gap: 16px
- Element gap: 24px
- Touch target: 44-56px

Tablet:
- Section padding: 64px vertical, 32px horizontal
- Card gap: 24px
- Element gap: 32px
```

### Color Contrast (WCAG AA Compliance)
- **Text on white**: #1F2937 (neutral-800) - 16.6:1 contrast
- **Text on brand**: White - 4.5:1+ contrast
- **Interactive elements**: Brand-600 (#2563EB) - 4.5:1+ contrast
- **Focus states**: 2px solid outline, brand-500 color

---

## 🎭 Navigation Behavior

### Mobile Navigation
1. **Hamburger Menu**:
   - Fixed top-right, always visible
   - 44×44px touch target
   - Icon animates to X when open
   - Menu slides in from right (300ms ease-out)
   - Backdrop: dark overlay (rgba(0,0,0,0.5))
   - Menu closes on:
     - Tap outside menu
     - Tap menu item (smooth scroll to section)
     - Tap close button

2. **Smooth Scrolling**:
   - 500ms duration
   - Ease-in-out timing
   - Offset: -64px (account for fixed header)

3. **Active Section Indicator**:
   - Highlight current section in menu
   - Subtle background color change

### Tablet Navigation
1. **Horizontal Menu**:
   - All items visible
   - Hover states for desktop-like feel
   - Active section underlined

2. **Sticky Header**:
   - Becomes semi-transparent on scroll
   - Shadow appears for depth

---

## ✨ Animation & Micro-interactions

### Mobile Optimizations
1. **Reduce Motion** (Respect prefers-reduced-motion):
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation-duration: 0.01ms !important; }
   }
   ```

2. **Touch Feedback**:
   - Buttons: Scale 0.98 on press (not hover)
   - Cards: Subtle lift on tap (translateY -2px)
   - Links: Color change + underline

3. **Loading States**:
   - Skeleton screens for images
   - Progressive image loading
   - Lazy-load below fold

4. **Scroll Animations**:
   - Fade-in on scroll (reduced on mobile for performance)
   - Stagger animations: 50ms delay (reduced from 100ms)

### Tablet Enhancements
1. **Hover States**:
   - Card lift: translateY(-4px)
   - Shadow increase
   - Color transitions: 200ms

2. **Smooth Transitions**:
   - All interactions: 200-300ms
   - Ease-out timing functions

---

## ♿ Accessibility Features

### Touch Targets
- **Minimum**: 44×44px (WCAG 2.1 Level AAA)
- **Recommended**: 48×48px for primary actions
- **Spacing**: 8px minimum between touch targets

### Focus States
- **Visible outline**: 2px solid, brand-500 color
- **Focus-visible**: Only on keyboard navigation
- **Skip links**: Visible on focus (keyboard users)

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- **ARIA labels**: Menu button, close button, language switcher
- **Alt text**: All images descriptive
- **Landmarks**: `<main>`, `<nav>`, `<footer>` properly used

### Color Contrast
- **Text**: Minimum 4.5:1 (WCAG AA)
- **Large text**: Minimum 3:1
- **Interactive elements**: High contrast for visibility

---

## 📊 Performance Considerations

### Mobile Optimizations
1. **Image Loading**:
   - Lazy-load all below-fold images
   - Use `loading="lazy"` attribute
   - WebP format with fallbacks
   - Responsive images: `srcset` for different sizes

2. **JavaScript**:
   - Code splitting per route/section
   - Lazy-load non-critical components
   - Debounce scroll handlers

3. **CSS**:
   - Critical CSS inlined
   - Non-critical CSS loaded asynchronously
   - Use `will-change` sparingly

4. **Fonts**:
   - Preload critical fonts
   - Use `font-display: swap`
   - Subset fonts if possible

---

## 🧪 Testing Checklist

### Mobile (320px-767px)
- [ ] All touch targets ≥44px
- [ ] Text readable without zooming
- [ ] No horizontal scrolling
- [ ] Menu opens/closes smoothly
- [ ] Forms are usable (keyboard doesn't cover inputs)
- [ ] Images load progressively
- [ ] Buttons have adequate spacing
- [ ] Cards don't feel cramped

### Tablet (768px-1023px)
- [ ] Grid layouts utilize space efficiently
- [ ] Text sizes are comfortable
- [ ] Hover states work (stylus/mouse)
- [ ] Navigation is accessible
- [ ] Images scale appropriately
- [ ] Forms are easy to fill

### Cross-Device
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Test on iPad Safari
- [ ] Test on tablet Chrome
- [ ] Test landscape orientations
- [ ] Test with slow 3G connection
- [ ] Test with reduced motion preference

---

## 🎯 Implementation Priority

### Phase 1: Critical (Mobile)
1. Header mobile menu
2. Hero section responsive layout
3. About section grid adjustments
4. Resources section card layout
5. Footer mobile layout

### Phase 2: Enhanced (Tablet)
1. Tablet navigation (horizontal)
2. Grid optimizations (3-4 columns)
3. Typography scaling
4. Spacing adjustments

### Phase 3: Polish
1. Animation optimizations
2. Touch feedback
3. Performance tuning
4. Accessibility audit

---

## 📝 Component-Specific Recommendations

### Buttons
- **Mobile**: Full-width or min 120px width, 56px height
- **Tablet**: Auto-width, 48-56px height
- **Spacing**: 16px gap between buttons

### Cards
- **Mobile**: Full-width or 2-column max
- **Tablet**: 2-3 columns depending on content
- **Padding**: 20px mobile, 24px tablet
- **Border radius**: 12px mobile, 16px tablet

### Forms (if applicable)
- **Input height**: 56px (touch-friendly)
- **Label placement**: Above input (not inline)
- **Error messages**: Below input, red text
- **Submit button**: Full-width on mobile

### Modals/Overlays
- **Mobile**: Full-screen or 90% viewport
- **Tablet**: Centered, max 600px width
- **Close button**: Top-right, 44×44px
- **Backdrop**: Dark overlay, closes on tap

---

## 🚀 Next Steps

1. **Review this document** with stakeholders
2. **Create Tailwind classes** for mobile/tablet breakpoints
3. **Implement Phase 1** (critical mobile fixes)
4. **Test on real devices** (not just browser dev tools)
5. **Iterate based on user feedback**

---

**Design Rationale Summary**:
Every design decision prioritizes:
1. **Usability**: Can users easily complete tasks?
2. **Accessibility**: Can all users access content?
3. **Performance**: Does it load quickly on slow connections?
4. **Clarity**: Is the information hierarchy clear?
5. **Trust**: Does it feel professional and medical-grade?

This mobile-first approach ensures the most critical user experience (mobile) is excellent, then enhances for larger screens without compromising the core experience.


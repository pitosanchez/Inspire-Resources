# Medical-Grade Design System
## INSPIRE Kidney Transplant Resources

---

## 🎯 Design Philosophy

**Medical Professional Standards**: Clean, trustworthy, accessible, and patient-centered design inspired by leading medical institutions (Mayo Clinic, Cleveland Clinic, Johns Hopkins).

**Core Principles**:
- **Clarity First**: Information hierarchy that guides users naturally
- **Trust Through Consistency**: Every element follows the same rules
- **Accessibility**: WCAG AA compliance minimum
- **Calm & Professional**: Low visual noise, high readability
- **Patient-Centered**: Design decisions prioritize patient needs

---

## 📐 Layout & Grid System

### Container Standards

**Maximum Content Width**: `1280px` (optimal reading width for medical content)

**Container Padding**:
- **Mobile** (320px-767px): `24px` horizontal (`px-6`)
- **Tablet** (768px-1023px): `32px` horizontal (`px-8`)
- **Desktop** (1024px+): `48px` horizontal (`px-12`)

**Implementation**:
```jsx
<div className="container mx-auto px-6 md:px-8 lg:px-12">
  {/* Content */}
</div>
```

### Content Width Hierarchy

| Purpose | Max Width | Usage |
|---------|-----------|-------|
| Hero Headlines | `max-w-5xl` (896px) | Large statements, hero titles |
| Body Content | `max-w-4xl` (768px) | Paragraphs, mission text |
| Narrow Content | `max-w-3xl` (672px) | Intro text, descriptions |
| Wide Grids | `max-w-6xl` (1152px) | Service cards, resource grids |
| Full Container | `max-w-7xl` (1280px) | Full-width sections |

### Grid System

**Standard Grid**: 12-column system with consistent gutters
- **Gutter Size**: `24px` (`gap-6`) for desktop, `16px` (`gap-4`) for mobile
- **Column Alignment**: All content aligns to grid lines
- **Responsive Breakpoints**: 
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3-4 columns (depending on content)

---

## 📏 Spacing System (8px Baseline Grid)

### Vertical Spacing (Section Padding)

| Size | Value | Usage |
|------|-------|-------|
| `py-12` | 48px | Footer, compact sections |
| `py-16` | 64px | Standard sections |
| `py-20` | 80px | Hero sections |
| `py-24` | 96px | Important sections (tablet+) |
| `py-32` | 128px | Hero sections (desktop) |

**Responsive Pattern**:
```jsx
className="py-16 md:py-24 lg:py-32"
```

### Horizontal Spacing (Element Gaps)

| Size | Value | Usage |
|------|-------|-------|
| `gap-2` | 8px | Tight spacing (badges, icons) |
| `gap-4` | 16px | Standard spacing (mobile grids) |
| `gap-6` | 24px | Standard spacing (desktop grids) |
| `gap-8` | 32px | Wide spacing (card grids) |
| `gap-12` | 48px | Section spacing |

### Margin System

| Element | Top Margin | Bottom Margin |
|---------|-----------|---------------|
| H1 | `mt-0` | `mb-6` (24px) |
| H2 | `mt-0` | `mb-8` (32px) |
| H3 | `mt-0` | `mb-4` (16px) |
| Paragraphs | `mt-0` | `mb-6` (24px) |
| Cards | `mt-0` | `mb-0` (grid handles spacing) |

---

## 🔤 Typography System

### Font Stack

**Primary Sans-Serif** (Body & UI):
```
'Inter', 'Source Sans Pro', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'
```

**Serif** (Headings & Emphasis):
```
'DM Serif Text', 'Source Serif Pro', 'Georgia', 'ui-serif', 'serif'
```

### Type Scale (Medical Readability)

| Element | Mobile | Tablet | Desktop | Weight | Line Height |
|---------|--------|--------|---------|--------|-------------|
| **H1** | `text-4xl` (36px) | `text-5xl` (48px) | `text-6xl` (60px) | `font-bold` (700) | `leading-tight` (1.2) |
| **H2** | `text-3xl` (30px) | `text-4xl` (36px) | `text-5xl` (48px) | `font-semibold` (600) | `leading-tight` (1.2) |
| **H3** | `text-2xl` (24px) | `text-3xl` (30px) | `text-4xl` (36px) | `font-semibold` (600) | `leading-snug` (1.3) |
| **H4** | `text-xl` (20px) | `text-2xl` (24px) | `text-3xl` (30px) | `font-semibold` (600) | `leading-snug` (1.3) |
| **Body** | `text-base` (16px) | `text-lg` (18px) | `text-lg` (18px) | `font-normal` (400) | `leading-relaxed` (1.6) |
| **Small** | `text-sm` (14px) | `text-base` (16px) | `text-base` (16px) | `font-normal` (400) | `leading-relaxed` (1.6) |

### Typography Implementation

**Headings**:
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
  Title
</h1>
```

**Body Text**:
```jsx
<p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
  Content
</p>
```

### Letter Spacing

- **Large Headings** (H1, H2): `-0.02em` (tighter for visual balance)
- **Body Text**: `0` (default, optimal readability)
- **Small Text**: `0.01em` (slightly looser for clarity)

### Text Alignment

- **Headings**: Center for hero sections, left for content sections
- **Body Text**: Left-aligned (justified only when explicitly requested)
- **CTAs**: Center-aligned

---

## 🎨 Color System

### Primary Brand Colors

| Color | Hex | Usage | Contrast Ratio |
|-------|-----|-------|----------------|
| `brand-50` | `#f0f9ff` | Backgrounds, subtle highlights | - |
| `brand-100` | `#e0f2fe` | Light backgrounds | - |
| `brand-500` | `#0ea5e9` | Primary actions, links | 4.73:1 ✅ |
| `brand-600` | `#0284c7` | Hover states | 5.24:1 ✅ |
| `brand-700` | `#0369a1` | Active states | 6.89:1 ✅ |

### Accent Colors

| Color | Hex | Usage | Contrast Ratio |
|-------|-----|-------|----------------|
| `accent-500` | `#10b981` | Success, positive actions | 2.91:1 (AA Large) ✅ |
| `accent-600` | `#059669` | Success hover | 3.45:1 (AA Large) ✅ |
| `warm-500` | `#ff6f3d` | CTAs, attention | 3.14:1 (AA Large) ✅ |

### Neutral Palette

| Color | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#fafbfc` | Page backgrounds |
| `neutral-100` | `#f3f4f6` | Section backgrounds |
| `neutral-200` | `#e5e7eb` | Borders, dividers |
| `neutral-600` | `#4b5563` | Secondary text |
| `neutral-700` | `#374151` | Body text |
| `neutral-900` | `#1f2937` | Headings |

### Text Colors

- **Headings**: `text-neutral-900`
- **Body Text**: `text-neutral-700`
- **Secondary Text**: `text-neutral-600`
- **Muted Text**: `text-neutral-500`

---

## 🧩 Component Standards

### Buttons

**Sizes**:
- **Small** (`size="sm"`): `h-9` (36px), `px-4`, `text-sm`
- **Medium** (`size="md"`): `h-11` (44px), `px-6`, `text-base`
- **Large** (`size="lg"`): `h-14` (56px), `px-8`, `text-lg`

**Touch Targets**: Minimum 44×44px (WCAG AAA)

**Spacing**: `gap-4` (16px) between buttons

### Cards

**Padding**: `p-6` (24px) standard, `p-8` (32px) for featured cards

**Border Radius**: `rounded-xl` (12px) standard, `rounded-2xl` (16px) for elevated cards

**Shadow**: `shadow-lg` standard, `shadow-xl` on hover

**Gap**: `gap-6` (24px) between cards in grids

### Forms

**Input Height**: `h-14` (56px) - touch-friendly

**Label Placement**: Above input (not inline)

**Spacing**: `mb-4` (16px) between form elements

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets, large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

### Responsive Patterns

**Typography**:
```jsx
className="text-3xl md:text-4xl lg:text-5xl"
```

**Spacing**:
```jsx
className="py-16 md:py-24 lg:py-32"
```

**Grids**:
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

---

## ✅ Alignment Rules

### Container Alignment

**All sections must use**:
```jsx
<div className="container mx-auto px-6 md:px-8 lg:px-12">
```

**Content alignment**:
- **Centered Content**: `mx-auto` with `max-w-*` class
- **Left-Aligned Content**: No `mx-auto`, content flows left
- **Grids**: Always use `mx-auto` with `max-w-*` for consistent alignment

### Vertical Alignment

- **Sections**: All sections start at same vertical rhythm
- **Cards**: All cards in a grid have equal height (`h-full`)
- **Buttons**: Vertically centered with text (`items-center`)

### Horizontal Alignment

- **Text**: Left-aligned (except hero sections)
- **Buttons**: Center-aligned in CTAs, right-aligned in headers
- **Images**: Center-aligned with `mx-auto`

---

## 🎯 Section Structure Template

```jsx
<section id="section-name" className="bg-white">
  {/* Standard Section Padding */}
  <div className="py-16 md:py-24 lg:py-32">
    {/* Container with Consistent Padding */}
    <div className="container mx-auto px-6 md:px-8 lg:px-12">
      {/* Content Container with Max Width */}
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-8 text-center">
          Section Title
        </h2>
        
        {/* Body Content */}
        <div className="space-y-6">
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Content
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🔍 Quality Checklist

### Alignment
- [ ] All containers use `container mx-auto px-6 md:px-8 lg:px-12`
- [ ] Content widths are consistent (`max-w-4xl` for body, `max-w-5xl` for hero)
- [ ] Grids align to container edges
- [ ] No floating or misaligned elements

### Spacing
- [ ] All sections use consistent padding (`py-16 md:py-24 lg:py-32`)
- [ ] Element gaps follow 8px grid (`gap-4`, `gap-6`, `gap-8`)
- [ ] Margins are consistent (H2: `mb-8`, paragraphs: `mb-6`)
- [ ] No excessive white space or overcrowding

### Typography
- [ ] Headings follow type scale
- [ ] Body text is 16px minimum
- [ ] Line heights are consistent (`leading-relaxed` for body, `leading-tight` for headings)
- [ ] Font weights follow hierarchy (700 for H1, 600 for H2-H4, 400 for body)

### Colors
- [ ] Text colors meet WCAG AA contrast (4.5:1 minimum)
- [ ] Brand colors used consistently
- [ ] Neutral palette for backgrounds and borders

### Components
- [ ] Buttons meet 44×44px touch target minimum
- [ ] Cards have consistent padding (`p-6`)
- [ ] Forms are accessible (labels above inputs)

---

## 🚀 Implementation Priority

1. **Fix Container Consistency** - All sections use same container pattern
2. **Standardize Spacing** - Apply consistent padding and gaps
3. **Typography Hierarchy** - Ensure all headings follow type scale
4. **Grid Alignment** - Fix all grids to align properly
5. **Component Standards** - Update buttons, cards, forms to match system

---

**Last Updated**: 2024
**Version**: 1.0
**Status**: Active Design System


# Quick Customization Guide

## 🎨 How to Customize Your New Medical Website

This guide shows you how to update the new sections with your own content.

## 📋 Quick Access Cards

**File:** `src/components/sections/QuickAccess.jsx`

**What to change:**

```javascript
// Lines 10-45: Update the quickActions array
const quickActions = [
  {
    icon: <svg>...</svg>, // Keep or replace with your icon
    title: "Your Tool Name", // Change this
    description: "Your description", // Change this
    color: "brand", // "brand", "accent", or "warm"
    badge: "Your Badge", // Short label like "Essential"
  },
  // Add more actions...
];
```

**Example:**

```javascript
{
  title: "Financial Assistance",
  description: "Apply for transplant cost support programs",
  color: "accent",
  badge: "Available",
}
```

---

## 👥 Care Team Section

**File:** `src/components/sections/CareTeam.jsx`

**What to change:**

```javascript
// Lines 12-33: Update teamMembers array
const teamMembers = [
  {
    name: "Dr. Your Doctor Name",
    role: "Their Role",
    specialty: "Their Specialty",
    credentials: "MD, FACS, etc.",
    quote: "Their personal quote about patient care",
    contact: "Direct Line: (555) 123-4567",
  },
  // Add more team members...
];
```

**Adding real photos:**

```jsx
// Replace lines 50-61 (placeholder section) with:
<div className="aspect-[4/5] bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl mb-4 overflow-hidden">
  <img
    src="/images/team/doctor-name.jpg"
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>
```

**Update statistics (lines 90-110):**

```jsx
<div className="text-3xl font-bold text-brand-600 mb-1">750+</div>
<p className="text-sm text-neutral-600">Successful Transplants</p>
```

---

## 💬 Patient Testimonials

**File:** `src/components/sections/Testimonials.jsx`

**What to change:**

```javascript
// Lines 11-39: Update testimonials array
const testimonials = [
  {
    name: "Patient Initials", // e.g., "Maria G."
    age: "52, Phoenix AZ", // Age and location
    role: "Transplant Recipient - 3 years",
    story: "Their full story in their own words...",
    highlight: "Key outcome", // e.g., "Back to work full-time"
    hasVideo: true, // true if video available
  },
  // Add more testimonials...
];
```

**Adding video testimonials:**

```jsx
// Line 104-116: Replace placeholder with real video
<div className="aspect-video rounded-xl overflow-hidden bg-neutral-100">
  <iframe
    src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID"
    frameBorder="0"
    allowFullScreen
    title={testimonial.name + " Story"}
    className="w-full h-full"
  />
</div>
```

---

## 🏆 Trust Indicators

**File:** `src/components/sections/TrustIndicators.jsx`

**What to change:**

```javascript
// Lines 10-31: Update accreditations
const accreditations = [
  {
    name: "Your Accreditation",
    description: "Full name or description",
    icon: "🏥", // Emoji or replace with <img>
  },
  // Add more certifications...
];
```

**Adding real logos:**

```jsx
// Replace icon with:
<img
  src="/images/certifications/unos-logo.svg"
  alt={item.name}
  className="h-12 w-auto object-contain"
/>
```

**Update statistics (lines 90-110 in CareTeam.jsx):**
Change the numbers to match your program's actual metrics.

---

## ❓ FAQ Section

**File:** `src/components/sections/FAQ.jsx`

**What to change:**

```javascript
// Lines 37-92: Update faqs array
const faqs = [
  {
    question: "Your question here?",
    answer:
      "Your detailed answer here. Use clear, 8th-grade reading level language.",
  },
  // Add more Q&A pairs...
];
```

**Update contact info (lines 104-142):**

```jsx
<a href="tel:+1YOURNUMBER">Call Us: (YOUR) NUMBER</a>
<a href="mailto:your@email.com">Email Us</a>
```

---

## 🚨 Announcement Banner

**File:** `src/components/shared/AnnouncementBanner.jsx`

**What to change:**

**Turn on/off the banner:**

```javascript
// Line 12: Show or hide the banner
const hasAnnouncement = true; // Set to false to hide

// Line 13: Emergency mode (red background)
const isEmergency = false; // Set to true for urgent alerts
```

**Update the message:**

```jsx
// Lines 35-46: Change the announcement content
<span>
  Your custom announcement here: <a href="tel:+1YOURNUMBER">(YOUR) NUMBER</a>
</span>
```

**Example emergency announcement:**

```javascript
const isEmergency = true; // Red background

// Then update message:
<span>
  Transplant Center temporarily closed due to weather. Emergency patients call:{" "}
  <a href="tel:+15555551234">(555) 555-1234</a>
</span>;
```

---

## 🎨 Design System Tokens

### Colors

**File:** `tailwind.config.js`

**Brand Blue (Primary):**

```javascript
brand: {
  500: '#2563eb',  // Main brand color
  600: '#1d4ed8',  // Hover state
  // ... other shades
}
```

**Accent Green (Success):**

```javascript
accent: {
  500: '#10b981',  // Main accent
  600: '#059669',  // Hover state
}
```

**If you want to change the primary colors:**

1. Open `tailwind.config.js`
2. Find the `colors` section (line 26+)
3. Update the hex values in `brand` and `accent` objects
4. Keep the structure (50-900 scale) for consistency

### Typography

**File:** `tailwind.config.js` (lines 21-25)

```javascript
fontFamily: {
  sans: ['Inter', 'Source Sans Pro', 'ui-sans-serif', ...],
  serif: ['Source Serif Pro', 'Georgia', 'ui-serif', ...],
}
```

To use different fonts:

1. Load them in `index.html` (via Google Fonts or local)
2. Update the font family arrays
3. Run `npm run dev` to see changes

---

## 📞 Contact Information

Update all contact info across the site:

### Files to update:

1. **AnnouncementBanner.jsx** - Emergency hotline
2. **FAQ.jsx** - Support phone and email
3. **CareTeam.jsx** - Individual team member contacts
4. **Footer.jsx** - Main office contact (existing)
5. **CTASection.jsx** - CTA contact info (existing)

### Find and replace:

Search for `(555) 123-4567` and `tel:+15551234567` across all files and replace with your real numbers.

Search for `transplant@inspire.org` and replace with your real email.

---

## 🖼️ Images and Media

### Adding real photos:

**1. Team member photos:**

- Place in `/public/images/team/`
- Recommended: 800x1000px (4:5 aspect ratio)
- Format: WebP or JPG, optimized (<200KB each)

**2. Patient testimonial photos:**

- Place in `/public/images/testimonials/`
- Recommended: 400x400px (square)
- Get written consent before using

**3. Certification logos:**

- Place in `/public/images/certifications/`
- Format: SVG preferred (scalable), or PNG with transparency
- Keep consistent heights (around 100-150px)

### Video thumbnails:

If using YouTube embeds (recommended), thumbnails are automatic. For custom videos, add poster images.

---

## 🧪 Testing Your Changes

After making customizations:

```bash
# 1. Check for errors
npm run build

# 2. View in browser
npm run dev
# Opens http://localhost:5174

# 3. Test on mobile
# Use browser dev tools (F12) → Toggle device toolbar
```

**Checklist:**

- [ ] All text is your organization's content
- [ ] Contact info is real and working
- [ ] Photos are your actual team/patients (with consent)
- [ ] Colors match your brand (optional)
- [ ] Links work (click every button/link)
- [ ] Mobile layout looks good
- [ ] Keyboard navigation works (Tab through the page)

---

## 🎓 Common Customizations

### Change Hero background color:

**File:** `src/components/sections/Hero.jsx` (line 15)

```jsx
className = "... bg-brand-500 ...";
// Change to:
className = "... bg-[#YOUR_HEX_COLOR] ...";
```

### Adjust section spacing:

**File:** `src/index.css` (lines 269-274)

```css
.spacing-32 {
  padding: 32px;
}
// Change to:
.spacing-32 {
  padding: 40px;
}
```

### Remove a section:

**File:** `src/App.jsx`

Just comment out or delete the import and component:

```jsx
// import CareTeam from './components/sections/CareTeam'

// In the <main> section:
// <CareTeam />
```

### Reorder sections:

**File:** `src/App.jsx` (lines 57-67)

Just drag and drop the component lines:

```jsx
<Hero />
<Testimonials />  {/* Moved up */}
<QuickAccess />
<About />
// ...
```

---

## 🆘 Need Help?

**Common issues:**

**"Component not showing"**

- Check if it's imported in `App.jsx`
- Check if it's inside the `<main>` tag
- Run `npm run dev` and check browser console for errors

**"Styles not applying"**

- Make sure Tailwind classes are correct (no typos)
- Check `tailwind.config.js` for custom color names
- Try rebuilding: `npm run build`

**"Images not loading"**

- Check file path (must start with `/images/`)
- Verify file exists in `/public/images/`
- Check file extension matches (`.jpg` vs `.webp`)

**"Content overflowing on mobile"**

- Use responsive classes: `text-sm md:text-base lg:text-lg`
- Add `max-w-7xl mx-auto` to container divs
- Test with browser dev tools (F12 → device toolbar)

---

## 📚 Resources

**Tailwind CSS docs:** https://tailwindcss.com/docs
**React docs:** https://react.dev
**Accessibility checker:** https://wave.webaim.org (paste your URL)
**Color contrast checker:** https://webaim.org/resources/contrastchecker/

---

**Happy customizing! 🎉**

Your medical website is now ready for patient-centered content. Take your time, use real stories (with consent), and maintain the professional tone throughout.

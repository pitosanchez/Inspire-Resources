# How to View the StyleGuide

The StyleGuide is a living documentation page that showcases all design system components, tokens, and utilities.

## Quick Access (Temporary Route)

### Option 1: Replace App Content Temporarily

Edit `src/App.jsx`:

```jsx
import StyleGuide from "./components/StyleGuide";

function App() {
  return <StyleGuide />;
}

export default App;
```

Then run:

```bash
npm run dev
```

Visit: http://localhost:5173/

**Remember to restore `App.jsx` after verification!**

---

### Option 2: Add as a Route (If using React Router)

If you have React Router installed:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyleGuide from "./components/StyleGuide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YourMainApp />} />
        <Route path="/styleguide" element={<StyleGuide />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Visit: http://localhost:5173/styleguide

---

### Option 3: Create Dedicated Entry Point

Create `src/styleguide.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import StyleGuide from "./components/StyleGuide";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleGuide />
  </React.StrictMode>
);
```

Create `styleguide.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>INSPIRE Design System</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/styleguide.jsx"></script>
  </body>
</html>
```

Update `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        styleguide: "styleguide.html",
      },
    },
  },
});
```

Visit: http://localhost:5173/styleguide.html

---

## What You'll See

### Sections in the StyleGuide:

1. **Typography**

   - H1-H4 examples with responsive scaling
   - Body text, small text
   - Font families and weights

2. **Color Palette**

   - Brand colors (50-900 scale)
   - Accent colors (50-900 scale)
   - Neutral colors (50-900 scale)
   - Visual swatches for each shade

3. **Buttons**

   - 7 variants (primary, secondary, accent, outline, ghost, subtle, destructive)
   - 4 sizes (sm, md, lg, icon)
   - States (default, hover, disabled, link)

4. **Cards**

   - 6 variants (default, brand, accent, elevated, ghost)
   - Subcomponents (Header, Title, Description, Content, Footer)
   - Interactive card example

5. **Badges**

   - 7 variants (default, brand, accent, warm, success, destructive, outline)
   - 3 sizes (sm, md, lg)

6. **Form Elements**

   - Input fields with labels
   - Helper text (normal and error states)
   - Required field indicators
   - Disabled state

7. **Alerts**

   - 6 variants (default, success, warning, destructive, brand, accent)
   - With icons and titles
   - Flexible content

8. **Spacing Scale**

   - Visual representation of the 8pt grid
   - xs, sm, md, lg, xl, 2xl, 3xl

9. **Accessibility**
   - Focus state examples
   - Color contrast notes
   - Semantic HTML examples

---

## Smoke Test Checklist

Use this to verify Tailwind is compiling correctly:

- [ ] All colors render correctly (no pink/missing color boxes)
- [ ] Buttons have proper hover states
- [ ] Focus rings appear on Tab navigation
- [ ] Cards have borders and shadows
- [ ] Typography scales on browser resize
- [ ] Animations play on page load
- [ ] No console errors
- [ ] Classes apply (inspect element → see Tailwind classes)

---

## Troubleshooting

### Colors not showing?

```bash
# Clear cache and rebuild
rm -rf node_modules/.vite
npm run dev
```

### Classes not applying?

Check `tailwind.config.js` content paths:

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"];
```

### Build errors?

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## After Verification

Once you've verified the StyleGuide works:

1. Restore `App.jsx` to original state
2. Keep `StyleGuide.jsx` for reference (don't delete!)
3. Use components in your actual pages
4. Refer to CHECKLIST.md for detailed docs

---

**The StyleGuide is your source of truth for the design system.**  
**Keep it updated as you add new components or variants.**


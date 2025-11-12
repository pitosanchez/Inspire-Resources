/**
 * INSPIRE - Main Application
 * Handcrafted with intention, designed with empathy
 */

import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CKDEducation from "./components/sections/CKDEducation";
import KidneyTransplantGuide from "./components/sections/KidneyTransplantGuide";
import Resources from "./components/sections/Resources";
import SpanishResources from "./components/sections/SpanishResources";
import CTASection from "./components/sections/CTASection";
import ScrollProgress from "./components/shared/ScrollProgress";
import SEO from "./components/shared/SEO";
import { LanguageProvider } from "./utils/LanguageContext";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Enable smooth scrolling
  useSmoothScroll();

  useEffect(() => {
    // Gentle entrance - respect the user's arrival
    setIsLoaded(true);
  }, []);

  return (
    <LanguageProvider>
      <SEO />
      <div className={`min-h-screen ${isLoaded ? "fade-in" : "opacity-0"}`}>
        {/* Skip to main content - accessibility first */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        {/* Scroll progress indicator - subtle visual feedback */}
        <ScrollProgress />

        {/* Header - clean, minimal, purposeful */}
        <Header />

        {/* Main content - where stories unfold */}
        <main id="main-content">
          <Hero />
          <About />
          <CKDEducation />
          <KidneyTransplantGuide />
          <Resources />
          <SpanishResources />
          <CTASection />
        </main>

        {/* Footer - grounded, quiet closure */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

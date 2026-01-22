import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ImageUnlockProvider } from "./context/ImageUnlockContext";
import RomanticHero from "./components/RomanticHero";
import WhyYoureSpecial from "./components/WhyYoureSpecial";
import MemoryTimeline from "./components/MemoryTimeline";
import HiddenLoveLetter from "./components/HiddenLoveLetter";
import SurpriseFinal from "./components/SurpriseFinal";
import RomanticFooter from "./components/RomanticFooter";
import FloatingHearts from "./components/FloatingHearts";
import MusicToggle from "./components/MusicToggle";
import CodeUnlockModal from "./components/CodeUnlockModal";
import "./App.css";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ImageUnlockProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Code Unlock Modal */}
        <CodeUnlockModal />

        {/* Floating Hearts Background */}
        <FloatingHearts />

        {/* Main Content Sections */}
        <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="relative">
          <RomanticHero />
        </section>

        {/* Why You're Special Section */}
        <section id="special" className="relative">
          <WhyYoureSpecial />
        </section>

        {/* Memory Timeline Section */}
        <section id="memories" className="relative">
          <MemoryTimeline />
        </section>

        {/* Hidden Love Letter Section */}
        <section id="letter" className="relative">
          <HiddenLoveLetter />
        </section>

        {/* Surprise Final Section */}
        <section id="surprise" className="relative">
          <SurpriseFinal />
        </section>

        {/* Footer */}
        <section id="footer" className="relative">
          <RomanticFooter />
        </section>
      </div>

        {/* Music Toggle */}
        <MusicToggle />

        {/* Smooth Scroll Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col gap-3">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'special', label: 'Why You\'re Special' },
            { id: 'memories', label: 'Our Memories' },
            { id: 'letter', label: 'Love Letter' },
            { id: 'surprise', label: 'Surprise' }
          ].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-3 h-3 rounded-full bg-soft-pink/50 hover:bg-soft-pink transition-all duration-300 hover:scale-150 group relative"
              title={section.label}
            >
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
      </div>
    </ImageUnlockProvider>
  );
}

export default App;

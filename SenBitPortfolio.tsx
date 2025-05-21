'use client';

import React, { useState, useRef, useEffect } from 'react';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Partners from './sections/Partners';
import Testimonials from './sections/Testimonials';
import Vision from './sections/Vision';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Newsletter from './sections/Newsletter';

const SenBitPortfolio: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('accueil');
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Déterminer la section active
      const sections = Object.entries(sectionsRef.current);
      for (const [id, element] of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const registerSection = (id: string, element: HTMLDivElement | null) => {
    sectionsRef.current[id] = element;
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar 
        scrollPosition={scrollPosition} 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      <main>
        <div ref={(el) => registerSection('accueil', el)}>
          <Hero />
        </div>
        
        <div ref={(el) => registerSection('mission', el)}>
          <Mission />
        </div>
        
        <div ref={(el) => registerSection('projets', el)}>
          <Projects />
        </div>
        
        <div ref={(el) => registerSection('partenaires', el)}>
          <Partners />
        </div>
        
        <div ref={(el) => registerSection('temoignages', el)}>
          <Testimonials />
        </div>
        
        <div ref={(el) => registerSection('vision', el)}>
          <Vision />
        </div>
        
        <div ref={(el) => registerSection('contact', el)}>
          <Contact />
        </div>
        
        <Newsletter />
      </main>

      <Footer onSectionClick={scrollToSection} />
    </div>
  );
};

export default SenBitPortfolio; 
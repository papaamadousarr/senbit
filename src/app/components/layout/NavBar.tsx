'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import Link from 'next/link';

export interface NavBarProps {
  scrollPosition: number;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollPosition, activeSection, onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navClasses = scrollPosition > 50 
    ? "fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-md text-gray-800 transition-all duration-300 z-50" 
    : "fixed top-0 left-0 right-0 bg-transparent text-white transition-all duration-300 z-50";

  const sections = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'mission', label: 'Mission' },
    { id: 'projets', label: 'Projets' },
    { id: 'partenaires', label: 'Partenaires' },
    { id: 'temoignages', label: 'Témoignages' },
    { id: 'vision', label: 'Vision' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          SenBit
        </Link>
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <FadeIn direction="down" className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionClick(section.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 hover:text-blue-500 transition-colors"
              >
                {section.label}
              </button>
            ))}
          </div>
        </FadeIn>
      )}
    </nav>
  );
};

export default NavBar; 
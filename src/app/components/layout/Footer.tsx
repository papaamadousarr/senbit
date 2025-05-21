'use client';

import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface FooterProps {
  onSectionClick?: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn direction="up" delay={0.2}>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                contact@senbit.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                +221 33 123 4567
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" size={20} />
                Dakar, Sénégal
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><button type="button" onClick={() => onSectionClick && onSectionClick('accueil')} className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 m-0">Accueil</button></li>
              <li><button type="button" onClick={() => onSectionClick && onSectionClick('mission')} className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 m-0">Mission</button></li>
              <li><button type="button" onClick={() => onSectionClick && onSectionClick('partenaires')} className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 m-0">Partenaires</button></li>
              <li><button type="button" onClick={() => onSectionClick && onSectionClick('temoignages')} className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 m-0">Témoignages</button></li>
              <li><button type="button" onClick={() => onSectionClick && onSectionClick('vision')} className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 m-0">Vision</button></li>
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </FadeIn>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} SenBit. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
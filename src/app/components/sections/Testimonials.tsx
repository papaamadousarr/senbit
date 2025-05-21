'use client';

import React from 'react';
import FadeIn from '../animations/FadeIn';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "La technologie LandChain a transformé notre gestion foncière. La transparence et la sécurité qu'elle offre ont considérablement réduit les conflits dans notre commune.",
    author: "Amadou Diop",
    position: "Maire de Guédiawaye"
  },
  {
    quote: "En tant que notaire, LandChain a simplifié mon travail tout en augmentant la fiabilité des documents fonciers. C'est une révolution pour notre profession.",
    author: "Fatou Sow",
    position: "Notaire à Dakar"
  },
  {
    quote: "J'ai pu sécuriser le titre de ma propriété en quelques jours seulement, alors que j'attendais depuis des mois. SenBit offre un service qui change vraiment la vie des citoyens.",
    author: "Ibrahim Ndiaye",
    position: "Propriétaire à Saint-Louis"
  },
  {
    quote: "La formation reçue par SenBit m'a permis de comprendre les enjeux de la blockchain pour notre économie. Leur approche pédagogique est excellente.",
    author: "Mariama Sarr",
    position: "Étudiante en informatique"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients et partenaires disent de nous.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} direction="up" delay={0.2 + index * 0.1} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
'use client';

import React from 'react';
import FadeIn from '../animations/FadeIn';

interface VisionPhase {
  year: string;
  title: string;
  description: string;
  current: boolean;
}

const visionPhases: VisionPhase[] = [
  {
    year: "2023-2025",
    title: "Phase d'implantation",
    description: "Déploiement initial de LandChain dans les régions pilotes et développement des partenariats stratégiques avec les administrations locales.",
    current: true
  },
  {
    year: "2026-2027",
    title: "Phase d'expansion",
    description: "Extension de la plateforme LandChain à l'ensemble du territoire national et développement de nouvelles fonctionnalités.",
    current: false
  },
  {
    year: "2028-2029",
    title: "Phase d'intégration",
    description: "Intégration complète avec les systèmes gouvernementaux et création d'un écosystème numérique foncier au niveau national.",
    current: false
  },
  {
    year: "2030",
    title: "Objectif final",
    description: "Un système foncier entièrement digitalisé, transparent et accessible à tous les citoyens, servant de modèle pour d'autres pays africains.",
    current: false
  }
];

const Vision: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Vision</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre feuille de route pour transformer le Sénégal grâce à la blockchain.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPhases.map((phase, index) => (
            <FadeIn key={phase.year} direction="up" delay={0.2 + index * 0.1} className={`bg-gray-50 p-6 rounded-lg shadow-md ${phase.current ? 'border-2 border-blue-500' : ''}`}>
              <h3 className="text-xl font-bold mb-2">{phase.year}</h3>
              <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision; 
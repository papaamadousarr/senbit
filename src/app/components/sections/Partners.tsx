'use client';

import React from 'react';
import FadeIn from '../animations/FadeIn';
import OptimizedImage from '../common/OptimizedImage';

interface Partner {
  name: string;
  type: string;
  description: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "Ministère du Numérique",
    type: "Gouvernemental",
    description: "Partenaire stratégique dans notre mission de digitalisation du Sénégal.",
    logo: "/images/partners/partner1.png"
  },
  {
    name: "Institut de la Blockchain",
    type: "Académique",
    description: "Collaboration sur la recherche et le développement des technologies blockchain.",
    logo: "/images/partners/partner2.png"
  },
  {
    name: "SenFintech",
    type: "Privé",
    description: "Partenariat pour le développement des solutions de paiement intégrées.",
    logo: "/images/partners/partner3.png"
  },
  {
    name: "Digital Africa",
    type: "Association",
    description: "Soutien au développement de l'écosystème numérique africain.",
    logo: "/images/partners/partner4.png"
  },
  {
    name: "CTIC Dakar",
    type: "Incubateur",
    description: "Accompagnement et mentorat pour notre croissance.",
    logo: "/images/partners/partner5.png"
  },
  {
    name: "Communauté des maires",
    type: "Collectif",
    description: "Partenariat pour le déploiement de LandChain dans les communes.",
    logo: "/images/partners/partner6.png"
  }
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Partenaires</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec des institutions de premier plan pour transformer le Sénégal.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <FadeIn key={partner.name} direction="up" delay={0.2 + index * 0.1} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <OptimizedImage
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{partner.type}</p>
              <p className="text-gray-600">{partner.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 
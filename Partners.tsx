'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Shield, Users, Landmark, Scale } from 'lucide-react';

interface Partner {
  name: string;
  type: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const partners: Partner[] = [
  {
    name: "Ministère de l'Urbanisme",
    type: "Gouvernemental",
    description: "Partenariat stratégique pour la digitalisation du cadastre national et la modernisation de la gestion foncière.",
    icon: <Building2 className="w-8 h-8" />,
    color: "text-blue-600"
  },
  {
    name: "Ordre des Notaires",
    type: "Professionnel",
    description: "Collaboration pour l'intégration des actes notariés dans la blockchain et la sécurisation des transactions.",
    icon: <Scale className="w-8 h-8" />,
    color: "text-green-600"
  },
  {
    name: "Banque Mondiale",
    type: "International",
    description: "Soutien au développement de l'infrastructure blockchain pour la gestion foncière au Sénégal.",
    icon: <Globe className="w-8 h-8" />,
    color: "text-purple-600"
  },
  {
    name: "Communauté des Maires",
    type: "Collectif",
    description: "Partenariat pour le déploiement de SenChain dans les collectivités locales.",
    icon: <Users className="w-8 h-8" />,
    color: "text-orange-600"
  },
  {
    name: "Institut de la Blockchain",
    type: "Académique",
    description: "Recherche et développement de solutions blockchain innovantes pour le foncier.",
    icon: <Shield className="w-8 h-8" />,
    color: "text-red-600"
  },
  {
    name: "Fonds Africain de Développement",
    type: "Institutionnel",
    description: "Financement et accompagnement du projet de modernisation foncière.",
    icon: <Landmark className="w-8 h-8" />,
    color: "text-indigo-600"
  }
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Partenaires Stratégiques</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec des institutions de premier plan pour transformer
            la gestion foncière au Sénégal grâce à la blockchain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${partner.color} mb-4`}>
                {partner.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{partner.type}</p>
              <p className="text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Devenir Partenaire
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 
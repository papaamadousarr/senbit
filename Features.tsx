'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  Users, 
  Building2, 
  Lock, 
  Globe, 
  Zap, 
  BarChart 
} from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Sécurité Blockchain",
    description: "Protection infaillible des titres fonciers grâce à la technologie blockchain.",
    icon: <Shield className="w-8 h-8" />,
    color: "text-blue-600"
  },
  {
    id: 2,
    title: "Titres Numériques",
    description: "Transformation des titres fonciers en actifs numériques sécurisés.",
    icon: <FileText className="w-8 h-8" />,
    color: "text-green-600"
  },
  {
    id: 3,
    title: "Gestion Collaborative",
    description: "Plateforme de gestion foncière collaborative pour les communautés.",
    icon: <Users className="w-8 h-8" />,
    color: "text-purple-600"
  },
  {
    id: 4,
    title: "Urbanisme Intelligent",
    description: "Solutions d'urbanisme basées sur des données blockchain fiables.",
    icon: <Building2 className="w-8 h-8" />,
    color: "text-orange-600"
  },
  {
    id: 5,
    title: "Transparence Totale",
    description: "Traçabilité complète de toutes les transactions foncières.",
    icon: <Lock className="w-8 h-8" />,
    color: "text-red-600"
  },
  {
    id: 6,
    title: "Accessibilité",
    description: "Accès à la plateforme depuis n'importe quel appareil connecté.",
    icon: <Globe className="w-8 h-8" />,
    color: "text-indigo-600"
  },
  {
    id: 7,
    title: "Transactions Rapides",
    description: "Processus de transaction immobilière accéléré et sécurisé.",
    icon: <Zap className="w-8 h-8" />,
    color: "text-yellow-600"
  },
  {
    id: 8,
    title: "Analytics Avancés",
    description: "Tableaux de bord et analyses détaillées du marché foncier.",
    icon: <BarChart className="w-8 h-8" />,
    color: "text-pink-600"
  }
];

const Features: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les Fonctionnalités de SenChain
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment SenChain révolutionne la gestion foncière au Sénégal
            avec des solutions innovantes et sécurisées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
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
            Explorer les Fonctionnalités
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 
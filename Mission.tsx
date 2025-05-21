'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Users, Building2 } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: "100%",
    label: "Sécurité Garantie",
    icon: <Shield className="w-8 h-8" />,
    color: "text-blue-600"
  },
  {
    id: 2,
    value: "14",
    label: "Régions Couvertes",
    icon: <Globe className="w-8 h-8" />,
    color: "text-green-600"
  },
  {
    id: 3,
    value: "50K+",
    label: "Utilisateurs Actifs",
    icon: <Users className="w-8 h-8" />,
    color: "text-purple-600"
  },
  {
    id: 4,
    value: "100K+",
    label: "Titres Sécurisés",
    icon: <Building2 className="w-8 h-8" />,
    color: "text-orange-600"
  }
];

const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Transformer la gestion foncière au Sénégal en utilisant la blockchain
            pour garantir la transparence, la sécurité et l'accessibilité pour tous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-blue-100 mb-8">
              Nous aspirons à créer un écosystème foncier numérique où chaque citoyen
              peut accéder, gérer et sécuriser ses droits fonciers de manière transparente
              et efficace, contribuant ainsi au développement durable du Sénégal.
            </p>
            <button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition-colors">
              Rejoindre SenChain
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission; 
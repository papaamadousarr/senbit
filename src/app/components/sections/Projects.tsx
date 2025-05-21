'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, FileText, Users, Building2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Titres Fonciers Sécurisés",
    description: "Enregistrement et sécurisation des titres fonciers sur la blockchain pour une traçabilité totale.",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    category: "Sécurité"
  },
  {
    id: 2,
    title: "Transactions Immobilières",
    description: "Simplification et sécurisation des transactions immobilières grâce à la blockchain.",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    category: "Transactions"
  },
  {
    id: 3,
    title: "Gestion Communautaire",
    description: "Plateforme collaborative pour la gestion et la résolution des litiges fonciers.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    category: "Collaboration"
  },
  {
    id: 4,
    title: "Urbanisme Intelligent",
    description: "Solutions pour une gestion efficace et transparente du développement urbain.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    category: "Urbanisme"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SenChain en Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment SenChain transforme la gestion foncière au Sénégal
            avec des solutions innovantes basées sur la blockchain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Explorer SenChain
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
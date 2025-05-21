'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Users, Building2, Fingerprint, Leaf, FileCheck2, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SenChain (Foncier)",
    description: "Enregistrement et sécurisation des titres fonciers sur la blockchain pour une traçabilité totale.",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    category: "Blockchain Foncier",
    highlight: true
  },
  {
    id: 2,
    title: "SenID (Identité Numérique)",
    description: "Gestion sécurisée de l'identité numérique des citoyens pour l'accès aux services publics et privés.",
    icon: <Fingerprint className="w-8 h-8 text-green-600" />,
    category: "Identité Numérique"
  },
  {
    id: 3,
    title: "SenAgri (Agriculture Intelligente)",
    description: "Plateforme de traçabilité et de gestion intelligente des productions agricoles basée sur la blockchain.",
    icon: <Leaf className="w-8 h-8 text-lime-600" />,
    category: "AgriTech"
  },
  {
    id: 4,
    title: "SenDoc (Documents Sécurisés)",
    description: "Certification et gestion dématérialisée des documents officiels et administratifs.",
    icon: <FileCheck2 className="w-8 h-8 text-purple-600" />,
    category: "e-Gouvernement"
  },
  {
    id: 5,
    title: "Smart Road (Routes Intelligentes)",
    description: "Gestion intelligente et connectée des infrastructures routières grâce à l'IoT et la blockchain pour plus de sécurité et d'efficacité.",
    icon: <Globe className="w-8 h-8 text-yellow-500" />,
    category: "Smart City",
    highlight: true
  },
  {
    id: 6,
    title: "Transactions Immobilières",
    description: "Simplification et sécurisation des transactions immobilières grâce à la blockchain.",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    category: "Transactions"
  },
  {
    id: 7,
    title: "Gestion Communautaire",
    description: "Plateforme collaborative pour la gestion et la résolution des litiges fonciers.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    category: "Collaboration"
  },
  {
    id: 8,
    title: "Urbanisme Intelligent",
    description: "Solutions pour une gestion efficace et transparente du développement urbain.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    category: "Urbanisme"
  },
  {
    id: 9,
    title: "Accessibilité Numérique",
    description: "Accès aux services SenBit depuis n'importe quel appareil connecté, partout au Sénégal.",
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    category: "Inclusion Digitale"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">L'écosystème SenBit en Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment SenBit transforme le Sénégal avec des solutions innovantes basées sur la blockchain, l'identité numérique et l'agritech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 ${project.highlight ? 'border-blue-600' : 'border-transparent'}`}>
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
            Explorer l'écosystème SenBit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
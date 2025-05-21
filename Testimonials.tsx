'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "SenChain a révolutionné notre façon de gérer les titres fonciers. La transparence et la sécurité apportées par la blockchain sont inestimables.",
    author: "Moussa Diop",
    position: "Directeur des Affaires Foncières",
    organization: "Ministère de l'Urbanisme"
  },
  {
    quote: "Grâce à SenChain, nous avons pu résoudre des litiges fonciers qui duraient depuis des années. La plateforme est un véritable outil de paix sociale.",
    author: "Aminata Sow",
    position: "Maire",
    organization: "Commune de Rufisque"
  },
  {
    quote: "L'innovation technologique de SenChain a considérablement accéléré nos processus d'enregistrement foncier. Un véritable gain de temps et d'efficacité.",
    author: "Ibrahima Diallo",
    position: "Notaire",
    organization: "Ordre des Notaires du Sénégal"
  },
  {
    quote: "SenChain a permis à notre communauté de sécuriser ses terres ancestrales. C'est une solution qui protège notre patrimoine pour les générations futures.",
    author: "Fatou Ndiaye",
    position: "Chef de Village",
    organization: "Communauté Rurale de Thiès"
  }
];

const Testimonials: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils Parlent de SenChain</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les retours d'expérience de nos utilisateurs et partenaires
            sur l'impact de SenChain dans la gestion foncière au Sénégal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-lg">{testimonial.author}</p>
                <p className="text-blue-600">{testimonial.position}</p>
                <p className="text-gray-500">{testimonial.organization}</p>
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
            Voir Plus de Témoignages
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 
'use client';

import React, { useState } from 'react';
import FadeIn from '../animations/FadeIn';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Inscription à la newsletter:", email);
    alert("Merci de votre inscription à notre newsletter!");
    setEmail('');
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Restez informé
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et opportunités.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-bold py-2 px-6 rounded-md hover:bg-blue-50 transition-colors"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Newsletter; 
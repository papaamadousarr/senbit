'use client';

import React from 'react';
import FadeIn from '../animations/FadeIn';
import { CounterAnimation } from '../common/CounterAnimation';

const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous transformons le Sénégal grâce à la blockchain et à la digitalisation, en offrant des solutions innovantes et sécurisées.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn direction="up" delay={0.3} className="text-center">
            <CounterAnimation end={100} suffix="%" />
            <p className="text-lg font-semibold mt-2">Satisfaction Client</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} className="text-center">
            <CounterAnimation end={50} suffix="+" />
            <p className="text-lg font-semibold mt-2">Projets Réalisés</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.5} className="text-center">
            <CounterAnimation end={10} suffix="+" />
            <p className="text-lg font-semibold mt-2">Années d'Expérience</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Mission; 
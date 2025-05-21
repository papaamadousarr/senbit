'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, Lock } from 'lucide-react';

const BinaryColumn = ({ delay = 0 }) => {
  const bits = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    value: Math.random() > 0.5 ? '1' : '0',
    opacity: Math.random() * 0.5 + 0.3
  }));

  return (
    <div className="flex flex-col space-y-2">
      {bits.map((bit) => (
        <motion.div
          key={bit.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: bit.opacity,
            y: [0, 20, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay + bit.id * 0.1,
            ease: "linear"
          }}
          className="text-blue-400 text-sm font-mono"
        >
          {bit.value}
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Animated binary background */}
      <div className="absolute inset-0 overflow-hidden flex justify-around opacity-20">
        {[...Array(8)].map((_, i) => (
          <BinaryColumn key={i} delay={i * 0.2} />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SenBit
              <span className="block text-2xl md:text-3xl mt-2 text-blue-300">
                Transformer le Sénégal en 0 & 1
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-blue-100"
          >
            Innovation technologique au service du développement durable
            et de la transformation digitale du Sénégal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center space-x-2">
              <Shield className="text-blue-300" />
              <span>Innovation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="text-blue-300" />
              <span>Transformation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="text-blue-300" />
              <span>Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors flex items-center">
              Découvrir SenBit
              <ArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Voir la démo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
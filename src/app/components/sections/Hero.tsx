'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
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
              SenChain
              <span className="block text-2xl md:text-3xl mt-2 text-blue-300">
                Révolutionner le foncier au Sénégal avec la blockchain
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-blue-100"
          >
            Sécurisez vos titres fonciers, simplifiez les transactions immobilières
            et assurez la transparence dans la gestion du foncier au Sénégal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center space-x-2">
              <Shield className="text-blue-300" />
              <span>Sécurité Garantie</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="text-blue-300" />
              <span>Accessible Partout</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="text-blue-300" />
              <span>Transparence Totale</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors flex items-center">
              Découvrir SenChain
              <ArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Voir la démo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated blockchain visualization */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-16 h-16 bg-blue-700 rounded-lg"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 
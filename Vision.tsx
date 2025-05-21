'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Building, Factory, Home, Landmark, Warehouse } from 'lucide-react';
import { useRef } from 'react';

interface Building {
  id: number;
  x: number;
  y: number;
  type: 'skyscraper' | 'office' | 'factory' | 'landmark' | 'residential' | 'warehouse';
  connections: number[];
  rotation?: number;
  scale?: number;
  color?: string;
  height?: number;
  description: string;
}

const buildings: Building[] = [
  { 
    id: 1, 
    x: 20, 
    y: 30, 
    type: 'skyscraper', 
    connections: [2, 3, 4],
    rotation: -15,
    scale: 1.2,
    color: '#60A5FA',
    height: 120,
    description: 'Centre d\'affaires moderne et connecté, symbole de l\'innovation'
  },
  { 
    id: 2, 
    x: 40, 
    y: 50, 
    type: 'office', 
    connections: [1, 4, 5],
    rotation: 10,
    scale: 0.9,
    color: '#34D399',
    height: 80,
    description: 'Espace de travail intelligent et collaboratif'
  },
  { 
    id: 3, 
    x: 60, 
    y: 40, 
    type: 'factory', 
    connections: [1, 4, 6],
    rotation: -5,
    scale: 1.1,
    color: '#FBBF24',
    height: 60,
    description: 'Production industrielle optimisée par l\'IA'
  },
  { 
    id: 4, 
    x: 80, 
    y: 60, 
    type: 'landmark', 
    connections: [1, 2, 3, 5, 6],
    rotation: 15,
    scale: 1,
    color: '#F87171',
    height: 100,
    description: 'Point de repère culturel et technologique'
  },
  { 
    id: 5, 
    x: 90, 
    y: 30, 
    type: 'residential', 
    connections: [2, 4, 6],
    rotation: -10,
    scale: 0.8,
    color: '#A78BFA',
    height: 70,
    description: 'Habitat connecté et durable'
  },
  {
    id: 6,
    x: 50,
    y: 70,
    type: 'warehouse',
    connections: [3, 4, 5],
    rotation: 5,
    scale: 1.1,
    color: '#60A5FA',
    height: 50,
    description: 'Logistique avancée et automatisée'
  }
];

const getBuildingIcon = (type: string) => {
  switch (type) {
    case 'skyscraper':
      return <Building2 className="w-10 h-10" />;
    case 'office':
      return <Building className="w-10 h-10" />;
    case 'factory':
      return <Factory className="w-10 h-10" />;
    case 'landmark':
      return <Landmark className="w-10 h-10" />;
    case 'residential':
      return <Home className="w-10 h-10" />;
    case 'warehouse':
      return <Warehouse className="w-10 h-10" />;
    default:
      return <Building className="w-10 h-10" />;
  }
};

export default function Vision(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [60, 45]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden min-h-screen">
      {/* 3D Motherboard background with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        style={{
          rotateX,
          scale,
          opacity,
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2360A5FA' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          opacity: 0.1,
          transform: 'translateZ(-100px)'
        }} />
      </motion.div>

      {/* Animated circuit traces */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          {buildings.map((building) => (
            building.connections.map((targetId) => {
              const target = buildings.find(b => b.id === targetId);
              if (!target) return null;
              
              return (
                <motion.path
                  key={`${building.id}-${targetId}`}
                  d={`M ${building.x}% ${building.y}% L ${target.x}% ${target.y}%`}
                  stroke="url(#beamGradient)"
                  strokeWidth="4"
                  strokeDasharray="20 20"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 0.8,
                    strokeDashoffset: [0, -40]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    filter: 'blur(1px)',
                    transform: 'translateZ(0)'
                  }}
                />
              );
            })
          ))}
        </svg>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Notre Vision
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transformer le Sénégal en 0 & 1 : Une ville intelligente où chaque composant
            est connecté, chaque service est digitalisé, et chaque citoyen est au cœur
            de l'innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {buildings.map((building, index) => (
            <motion.div
              key={building.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center relative group cursor-pointer"
              style={{
                position: 'relative',
                left: `${building.x}%`,
                top: `${building.y}%`,
                transform: `translate(-50%, -50%) rotate(${building.rotation}deg) scale(${building.scale})`,
                border: `1px solid ${building.color}40`,
                boxShadow: `0 0 20px ${building.color}20`,
                height: `${building.height}px`
              }}
            >
              <motion.div 
                className="text-blue-400 mb-4 flex justify-center"
                style={{ color: building.color }}
                whileHover={{ scale: 1.1 }}
              >
                {getBuildingIcon(building.type)}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                {building.type === 'skyscraper' ? 'Gratte-ciel' :
                 building.type === 'office' ? 'Bureaux' :
                 building.type === 'factory' ? 'Usine' :
                 building.type === 'landmark' ? 'Monument' :
                 building.type === 'residential' ? 'Résidentiel' :
                 'Entrepôt'}
              </h3>
              <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {building.description}
              </p>
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
          <motion.button 
            className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Découvrir Notre Vision</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
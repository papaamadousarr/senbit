import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  const getVariants = (): Variants => {
    const distance = 20;
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    };

    return {
      hidden: {
        opacity: 0,
        ...directions[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 
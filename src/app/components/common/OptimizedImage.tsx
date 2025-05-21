'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWYxZjEiLz48L3N2Zz4='
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoading(false);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  const imageStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    objectFit: 'cover' as const,
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={imageStyle}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-100"
            style={{
              backgroundImage: `url(${placeholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
      </AnimatePresence>

      {!error ? (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={imageStyle}
          onLoad={() => setIsLoading(false)}
          onError={() => setError(true)}
          loading={priority ? 'eager' : 'lazy'}
          {...(width && height ? { width, height } : {})}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          Erreur de chargement
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 
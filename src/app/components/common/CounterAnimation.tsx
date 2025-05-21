'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export const CounterAnimation: React.FC<CounterProps> = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-blue-600">
      {count}{suffix}
    </div>
  );
}; 
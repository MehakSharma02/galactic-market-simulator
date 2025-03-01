
import { useState, useEffect } from 'react';

interface PlanetProps {
  name: string;
  size: 'sm' | 'md' | 'lg';
  type: 'rocky' | 'gas' | 'ice' | 'lava' | 'ocean';
  className?: string;
}

export default function Planet({ name, size, type, className }: PlanetProps) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), Math.random() * 1000);
    return () => clearTimeout(timer);
  }, []);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  const typeStyles = {
    rocky: {
      background: 'radial-gradient(circle at 30% 30%, #a3a3a3, #5c5c5c)',
      shadow: 'after:shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.6)]'
    },
    gas: {
      background: 'radial-gradient(circle at 30% 30%, #6366f1, #4338ca)',
      shadow: 'after:shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.3)]'
    },
    ice: {
      background: 'radial-gradient(circle at 30% 30%, #e0f2fe, #7dd3fc)',
      shadow: 'after:shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.2)]'
    },
    lava: {
      background: 'radial-gradient(circle at 30% 30%, #ef4444, #991b1b)',
      shadow: 'after:shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.5)]'
    },
    ocean: {
      background: 'radial-gradient(circle at 30% 30%, #38bdf8, #0369a1)',
      shadow: 'after:shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.4)]'
    }
  };

  return (
    <div 
      className={`${className} flex flex-col items-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        className={`${sizeClasses[size]} rounded-full planet-shadow ${typeStyles[type].shadow} animate-float`}
        style={{ background: typeStyles[type].background }}
      >
        {/* Planet rings for gas planets */}
        {type === 'gas' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[30%] bg-white/10 rounded-full -rotate-12 transform-gpu"></div>
        )}
      </div>
      {name && <span className="mt-2 text-sm text-cosmic-silver">{name}</span>}
    </div>
  );
}


import { useState } from 'react';

interface AlienTraderProps {
  species: 'zurvian' | 'krelthan' | 'xyphorian';
  name: string;
  trait: string;
  relationship: 'hostile' | 'neutral' | 'friendly';
  avatar: string;
}

export default function AlienTrader({ species, name, trait, relationship, avatar }: AlienTraderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const speciesColors = {
    zurvian: 'from-amber-500/20 to-amber-800/10 border-amber-500/30',
    krelthan: 'from-red-500/20 to-red-800/10 border-red-500/30',
    xyphorian: 'from-blue-500/20 to-blue-800/10 border-blue-500/30',
  };

  const relationshipClasses = {
    hostile: 'bg-red-500/20 text-red-400',
    neutral: 'bg-yellow-500/20 text-yellow-400',
    friendly: 'bg-green-500/20 text-green-400',
  };

  return (
    <div className={`cosmic-card cursor-pointer overflow-hidden transition-all duration-300`} 
         onClick={() => setIsExpanded(!isExpanded)}>
      <div className={`absolute inset-0 bg-gradient-to-br ${speciesColors[species]} opacity-50`} />
      
      <div className="relative p-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cosmic-navy/70 shadow-lg">
            <img 
              src={avatar} 
              alt={name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full bg-cosmic-navy/50">
                {species.charAt(0).toUpperCase() + species.slice(1)}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${relationshipClasses[relationship]}`}>
                {relationship.charAt(0).toUpperCase() + relationship.slice(1)}
              </span>
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-cosmic-navy/50 animate-fade-in">
            <div className="mb-3">
              <span className="text-cosmic-silver text-sm">Trait:</span>
              <p className="text-sm mt-1">{trait}</p>
            </div>
            
            <div className="mb-3">
              <span className="text-cosmic-silver text-sm">Negotiation Style:</span>
              <p className="text-sm mt-1">
                {species === 'zurvian' && 'Prefers bulk trades and always asks for discounts.'}
                {species === 'krelthan' && 'Cunning and unpredictable. Watch for hidden fees.'}
                {species === 'xyphorian' && 'Logical and data-driven. Values precise information.'}
              </p>
            </div>
            
            <button className="cosmic-button-secondary w-full mt-2 py-2 text-sm">Initiate Contact</button>
          </div>
        )}
      </div>
    </div>
  );
}

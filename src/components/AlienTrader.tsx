
import { TrendingUp, TrendingDown, AlertTriangle, MessageCircle } from 'lucide-react';

interface AlienTraderProps {
  species: 'zurvian' | 'krelthan' | 'xyphorian';
  name: string;
  trait: string;
  relationship: 'friendly' | 'neutral' | 'hostile';
  avatar: string;
  onNegotiate?: () => void;
}

export default function AlienTrader({ species, name, trait, relationship, avatar, onNegotiate }: AlienTraderProps) {
  // Relationship styles
  const relationshipStyles = {
    friendly: {
      icon: <TrendingUp className="w-3 h-3 mr-1" />,
      color: 'text-green-400 bg-green-400/10'
    },
    neutral: {
      icon: null,
      color: 'text-blue-400 bg-blue-400/10'
    },
    hostile: {
      icon: <TrendingDown className="w-3 h-3 mr-1" />,
      color: 'text-red-400 bg-red-400/10'
    }
  };

  // Species colors
  const speciesColors = {
    zurvian: 'border-purple-500/30',
    krelthan: 'border-amber-500/30',
    xyphorian: 'border-blue-500/30'
  };

  return (
    <div className="cosmic-card p-4">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${speciesColors[species]}`}>
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white font-medium">{name}</h3>
              <div className="text-xs text-cosmic-silver mt-0.5">{species.charAt(0).toUpperCase() + species.slice(1)}</div>
            </div>
            
            <div className={`text-xs px-2 py-1 rounded-full flex items-center ${relationshipStyles[relationship].color}`}>
              {relationshipStyles[relationship].icon}
              {relationship.charAt(0).toUpperCase() + relationship.slice(1)}
            </div>
          </div>
          
          <div className="text-sm mt-2 text-cosmic-silver">{trait}</div>
          
          {relationship === 'hostile' && (
            <div className="flex items-center text-xs text-amber-400 mt-1">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Unpredictable deals
            </div>
          )}
        </div>
      </div>
      
      <button 
        onClick={onNegotiate}
        className="mt-3 w-full cosmic-button-secondary py-2 text-sm flex items-center justify-center gap-1"
      >
        <MessageCircle className="w-4 h-4" />
        Negotiate
      </button>
    </div>
  );
}


import { useState } from 'react';
import { Coins, ArrowUp, ArrowDown, TrendingUp, TrendingDown } from 'lucide-react';

interface ResourceCardProps {
  name: string;
  quantity: number;
  price: number;
  trend: 'up' | 'down' | 'stable';
  rarity: 'common' | 'uncommon' | 'rare' | 'exotic';
}

export default function ResourceCard({ name, quantity, price, trend, rarity }: ResourceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const rarityClasses = {
    common: 'from-gray-400/20 to-gray-600/20 border-gray-500/30',
    uncommon: 'from-green-400/20 to-green-600/20 border-green-500/30',
    rare: 'from-blue-400/20 to-blue-600/20 border-blue-500/30',
    exotic: 'from-purple-400/20 to-purple-600/20 border-purple-500/30'
  };

  const trendIcon = {
    up: <TrendingUp className="w-4 h-4 text-green-400" />,
    down: <TrendingDown className="w-4 h-4 text-red-400" />,
    stable: <span className="w-4 h-[2px] bg-gray-400 inline-block" />
  };

  return (
    <div 
      className={`cosmic-card overflow-hidden transition-all duration-300 ${isHovered ? 'scale-[1.02]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${rarityClasses[rarity]} opacity-50`} />
      
      <div className="relative p-4 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs px-2 py-1 rounded-full bg-cosmic-navy/50 border border-cosmic-navy/70">
            {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
          </span>
          <div className="flex items-center gap-1">
            {trendIcon[trend]}
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-white mb-2">{name}</h3>
        
        <div className="mt-auto space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-cosmic-silver text-sm">Available:</span>
            <span className="font-medium">{quantity.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-cosmic-silver text-sm">Price:</span>
            <div className="flex items-center gap-1 font-medium">
              <Coins className="w-4 h-4 text-cosmic-teal" />
              <span>{price.toLocaleString()} GC</span>
            </div>
          </div>
          
          <button className="cosmic-button-secondary w-full mt-3 py-2 text-sm">Trade Now</button>
        </div>
      </div>
    </div>
  );
}

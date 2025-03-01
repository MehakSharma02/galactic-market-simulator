
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

interface ResourceCardProps {
  name: string;
  quantity: number;
  price: number;
  trend: 'up' | 'down' | 'stable';
  rarity: 'common' | 'uncommon' | 'rare';
  onBuy?: () => void;
  onSell?: () => void;
}

export default function ResourceCard({ name, quantity, price, trend, rarity, onBuy, onSell }: ResourceCardProps) {
  // Choose color based on rarity
  const rarityColors = {
    common: 'text-blue-400 bg-blue-400/10',
    uncommon: 'text-purple-400 bg-purple-400/10',
    rare: 'text-orange-400 bg-orange-400/10'
  };

  return (
    <div className="cosmic-card p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-1 rounded-full ${rarityColors[rarity]}`}>
              {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
            </span>
            
            {trend !== 'stable' && (
              <span className={`flex items-center text-xs ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {trend === 'up' ? '+4.2%' : '-2.8%'}
              </span>
            )}
            
            {trend === 'stable' && (
              <span className="flex items-center text-xs text-cosmic-silver">
                <Minus className="w-3 h-3 mr-1" />
                Stable
              </span>
            )}
          </div>
        </div>
        
        <div className="text-lg font-semibold text-white">{price} GC</div>
      </div>
      
      <div className="mb-4">
        <div className="text-sm text-cosmic-silver mb-1">Quantity</div>
        <div className="text-2xl font-semibold text-white">{quantity.toLocaleString()}</div>
      </div>
      
      <div className="flex gap-2 mt-4">
        <button 
          onClick={onBuy}
          className="cosmic-button-secondary flex-1 py-1.5 text-sm"
        >
          Buy
        </button>
        <button 
          onClick={onSell}
          className="cosmic-button-secondary flex-1 py-1.5 text-sm"
        >
          Sell
        </button>
      </div>
    </div>
  );
}

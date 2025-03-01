
import { AlertTriangle, ArrowRight, TrendingUp } from 'lucide-react';
import Planet from './Planet';

interface RouteProps {
  id: string;
  source: { name: string; type: 'rocky' | 'gas' | 'ice' | 'lava' | 'ocean' };
  destination: { name: string; type: 'rocky' | 'gas' | 'ice' | 'lava' | 'ocean' };
  resource: string;
  profit: number;
  risk: 'low' | 'medium' | 'high';
  duration: number;
  onActivate?: () => void;
}

export default function TradeRouteCard({ route, onActivate }: { route: RouteProps, onActivate?: () => void }) {
  const { source, destination, resource, profit, risk, duration } = route;
  
  // Risk colors for UI
  const riskColor = {
    low: 'text-green-400',
    medium: 'text-amber-400',
    high: 'text-red-400'
  };
  
  return (
    <div className="cosmic-card p-5">
      {/* Route header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-cosmic-silver text-sm">
          <div className="w-2 h-2 rounded-full bg-cosmic-purple"></div>
          <span>Trade Route</span>
        </div>
        <div className={`flex items-center text-xs ${riskColor[risk]}`}>
          {risk !== 'low' && <AlertTriangle className="w-3 h-3 mr-1" />}
          {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk
        </div>
      </div>
      
      {/* Planets info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col items-center">
          <Planet name="" size="sm" type={source.type} />
          <span className="mt-2 text-sm text-white">{source.name}</span>
        </div>
        
        <div className="flex flex-col items-center px-2">
          <ArrowRight className="w-5 h-5 text-cosmic-silver mb-2" />
          <span className="text-xs text-cosmic-silver">{duration} days</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Planet name="" size="sm" type={destination.type} />
          <span className="mt-2 text-sm text-white">{destination.name}</span>
        </div>
      </div>
      
      {/* Resource and profit info */}
      <div className="bg-cosmic-navy/30 rounded-lg p-3 mb-4">
        <div className="text-sm text-cosmic-silver mb-1">Trading Resource</div>
        <div className="text-white font-medium">{resource}</div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-sm text-cosmic-silver">Estimated Profit</div>
          <div className="text-xl font-bold text-white">{profit.toLocaleString()} GC</div>
        </div>
        
        <div className="flex items-center text-green-400 text-sm">
          <TrendingUp className="w-4 h-4 mr-1" />
          {Math.floor(profit / 1000)}k / day
        </div>
      </div>
      
      {/* Action button */}
      <button 
        onClick={onActivate}
        className="w-full cosmic-button py-2 text-sm"
      >
        Activate Route
      </button>
    </div>
  );
}

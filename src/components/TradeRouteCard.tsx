
import { useState } from 'react';
import { Ship, ArrowRight } from 'lucide-react';
import Planet from './Planet';

interface TradeRouteProps {
  route: {
    id: string;
    source: {
      name: string;
      type: 'rocky' | 'gas' | 'ice' | 'lava' | 'ocean';
    };
    destination: {
      name: string;
      type: 'rocky' | 'gas' | 'ice' | 'lava' | 'ocean';
    };
    resource: string;
    profit: number;
    risk: 'low' | 'medium' | 'high';
    duration: number;
  };
}

export default function TradeRouteCard({ route }: TradeRouteProps) {
  const [expanded, setExpanded] = useState(false);

  const riskClasses = {
    low: 'bg-green-500/20 text-green-300',
    medium: 'bg-yellow-500/20 text-yellow-300',
    high: 'bg-red-500/20 text-red-300'
  };

  return (
    <div 
      className="cosmic-card overflow-hidden cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Planet 
              name=""
              size="sm"
              type={route.source.type}
            />
            <ArrowRight className="w-5 h-5 text-cosmic-silver" />
            <Planet 
              name=""
              size="sm"
              type={route.destination.type}
            />
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${riskClasses[route.risk]}`}>
            {route.risk.toUpperCase()} RISK
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-cosmic-silver">Route:</span>
            <span className="font-medium">{route.source.name} → {route.destination.name}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-cosmic-silver">Resource:</span>
            <span className="font-medium">{route.resource}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-cosmic-silver">Est. Profit:</span>
            <span className="font-medium text-cosmic-teal">+{route.profit.toLocaleString()} GC</span>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-cosmic-navy/50 space-y-3 animate-fade-in">
            <div className="flex justify-between items-center">
              <span className="text-cosmic-silver">Travel time:</span>
              <span className="font-medium">{route.duration} days</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-cosmic-silver">Status:</span>
              <span className="font-medium text-green-400">Available</span>
            </div>

            <div className="flex justify-between gap-2 mt-4">
              <button className="cosmic-button-secondary py-2 text-sm flex-1">Details</button>
              <button className="cosmic-button py-2 text-sm flex-1 flex items-center justify-center gap-1">
                <Ship className="w-4 h-4" />
                <span>Deploy</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

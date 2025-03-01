
import { Rocket, Shield, Package, Fuel } from 'lucide-react';

interface SpaceshipCardProps {
  name: string;
  type: 'cargo' | 'explorer' | 'trader' | 'military';
  stats: {
    speed: number;
    capacity: number;
    defense: number;
    range: number;
  };
  status: 'active' | 'maintenance' | 'en-route';
  image: string;
}

export default function SpaceshipCard({ name, type, stats, status, image }: SpaceshipCardProps) {
  const statusClasses = {
    'active': 'bg-green-500/20 text-green-400',
    'maintenance': 'bg-yellow-500/20 text-yellow-400',
    'en-route': 'bg-blue-500/20 text-blue-400'
  };

  const maxStats = {
    speed: 10,
    capacity: 10,
    defense: 10,
    range: 10
  };

  const typeTitle = {
    'cargo': 'Cargo Vessel',
    'explorer': 'Explorer',
    'trader': 'Trade Ship',
    'military': 'Military Escort'
  };

  return (
    <div className="cosmic-card overflow-hidden">
      <div className="h-40 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black to-transparent z-10" />
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
            {status === 'en-route' ? 'En Route' : status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-medium text-white">{name}</h3>
            <span className="text-cosmic-silver text-sm">{typeTitle[type]}</span>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-cosmic-silver" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-cosmic-silver text-xs">Speed</span>
                <span className="text-xs">{stats.speed}/{maxStats.speed}</span>
              </div>
              <div className="h-1.5 bg-cosmic-navy rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cosmic-purple rounded-full" 
                  style={{ width: `${(stats.speed / maxStats.speed) * 100}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-cosmic-silver" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-cosmic-silver text-xs">Cargo</span>
                <span className="text-xs">{stats.capacity}/{maxStats.capacity}</span>
              </div>
              <div className="h-1.5 bg-cosmic-navy rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cosmic-teal rounded-full" 
                  style={{ width: `${(stats.capacity / maxStats.capacity) * 100}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cosmic-silver" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-cosmic-silver text-xs">Defense</span>
                <span className="text-xs">{stats.defense}/{maxStats.defense}</span>
              </div>
              <div className="h-1.5 bg-cosmic-navy rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full" 
                  style={{ width: `${(stats.defense / maxStats.defense) * 100}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-cosmic-silver" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-cosmic-silver text-xs">Range</span>
                <span className="text-xs">{stats.range}/{maxStats.range}</span>
              </div>
              <div className="h-1.5 bg-cosmic-navy rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-500 rounded-full" 
                  style={{ width: `${(stats.range / maxStats.range) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <button className="cosmic-button-secondary py-2 text-sm flex-1">Details</button>
          <button className="cosmic-button py-2 text-sm flex-1">Deploy</button>
        </div>
      </div>
    </div>
  );
}

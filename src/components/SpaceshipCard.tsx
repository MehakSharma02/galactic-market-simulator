
import { Shield, Package, Gauge, Wifi } from 'lucide-react';

interface SpaceshipCardProps {
  name: string;
  type: 'trader' | 'cargo' | 'explorer';
  stats: {
    speed: number;
    capacity: number;
    defense: number;
    range: number;
  };
  status: 'active' | 'en-route' | 'maintenance';
  image: string;
  onDeploy?: () => void;
}

export default function SpaceshipCard({ name, type, stats, status, image, onDeploy }: SpaceshipCardProps) {
  // Status colors
  const statusColors = {
    'active': 'bg-green-500/20 text-green-400',
    'en-route': 'bg-blue-500/20 text-blue-400',
    'maintenance': 'bg-orange-500/20 text-orange-400',
  };
  
  // Type display names
  const typeNames = {
    'trader': 'Trade Vessel',
    'cargo': 'Cargo Ship',
    'explorer': 'Explorer',
  };

  return (
    <div className="cosmic-card overflow-hidden">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/90 to-transparent"></div>
        
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
          <div>
            <div className="text-xs text-cosmic-silver">{typeNames[type]}</div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status.replace('-', ' ')}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-1">
            <div className="text-xs text-cosmic-silver flex items-center">
              <Gauge className="w-3 h-3 mr-1" /> Speed
            </div>
            <div className="flex items-center mt-1">
              <div className="h-1.5 bg-cosmic-navy rounded-full flex-1">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${stats.speed * 10}%` }}></div>
              </div>
              <span className="text-xs text-cosmic-silver ml-2">{stats.speed}/10</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-xs text-cosmic-silver flex items-center">
              <Package className="w-3 h-3 mr-1" /> Capacity
            </div>
            <div className="flex items-center mt-1">
              <div className="h-1.5 bg-cosmic-navy rounded-full flex-1">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${stats.capacity * 10}%` }}></div>
              </div>
              <span className="text-xs text-cosmic-silver ml-2">{stats.capacity}/10</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-xs text-cosmic-silver flex items-center">
              <Shield className="w-3 h-3 mr-1" /> Defense
            </div>
            <div className="flex items-center mt-1">
              <div className="h-1.5 bg-cosmic-navy rounded-full flex-1">
                <div className="h-full bg-red-500 rounded-full" style={{ width: `${stats.defense * 10}%` }}></div>
              </div>
              <span className="text-xs text-cosmic-silver ml-2">{stats.defense}/10</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-xs text-cosmic-silver flex items-center">
              <Wifi className="w-3 h-3 mr-1" /> Range
            </div>
            <div className="flex items-center mt-1">
              <div className="h-1.5 bg-cosmic-navy rounded-full flex-1">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${stats.range * 10}%` }}></div>
              </div>
              <span className="text-xs text-cosmic-silver ml-2">{stats.range}/10</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onDeploy}
          className={`w-full cosmic-button-secondary py-2 text-sm ${status === 'en-route' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={status === 'en-route'}
        >
          {status === 'active' ? 'Deploy Ship' : status === 'en-route' ? 'In Transit' : 'Repair Ship'}
        </button>
      </div>
    </div>
  );
}

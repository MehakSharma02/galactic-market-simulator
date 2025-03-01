
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    label: string;
  };
  color?: 'purple' | 'teal' | 'orange' | 'blue';
}

export default function StatsCard({ title, value, icon, trend, color = 'purple' }: StatsCardProps) {
  const colorClasses = {
    purple: 'from-cosmic-purple/20 to-cosmic-lavender/5 border-cosmic-purple/30',
    teal: 'from-cosmic-teal/20 to-cosmic-teal/5 border-cosmic-teal/30',
    orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
  };

  return (
    <div className={`cosmic-card overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-50`} />
      
      <div className="relative p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="text-cosmic-silver font-medium">
            {title}
          </div>
          <div className="p-2 rounded-lg bg-cosmic-navy/50 border border-cosmic-navy">
            {icon}
          </div>
        </div>
        
        <div className="text-2xl font-bold">
          {value}
        </div>
        
        {trend && (
          <div className="mt-3 flex items-center gap-2">
            <div className={`text-sm ${trend.value >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend.value >= 0 ? '+' : ''}{trend.value}%
            </div>
            <div className="text-xs text-cosmic-silver">
              {trend.label}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

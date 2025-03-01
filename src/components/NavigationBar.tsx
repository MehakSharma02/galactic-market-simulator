
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShoppingCart, Coins, ChartBar, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ChartBar, href: '/' },
    { id: 'planets', label: 'Planets', icon: Globe, href: '/planets' },
    { id: 'market', label: 'Market', icon: ShoppingCart, href: '/market' },
    { id: 'fleet', label: 'Fleet', icon: Rocket, href: '/fleet' },
    { id: 'finances', label: 'Finances', icon: Coins, href: '/finances' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-cosmic-black/80 border-b border-cosmic-navy/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-cosmic-purple" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cosmic-teal to-cosmic-purple">
              Cosmic Commerce
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "nav-link flex items-center gap-2",
                  activeTab === item.id && "active"
                )}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <button className="cosmic-button-secondary text-sm px-4 py-2 flex items-center gap-2">
            <Coins className="w-4 h-4" />
            <span>15,783 GC</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-cosmic-dark/90 backdrop-blur-md border-t border-cosmic-navy/50 px-2 py-3">
        <div className="flex justify-between items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-all",
                activeTab === item.id 
                  ? "text-cosmic-purple" 
                  : "text-cosmic-silver"
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

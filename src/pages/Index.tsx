
import { useState, useEffect } from 'react';
import { Rocket, ShoppingCart, Coins, Globe, Database, Ship, ChartBar } from 'lucide-react';
import NavigationBar from '@/components/NavigationBar';
import Planet from '@/components/Planet';
import ResourceCard from '@/components/ResourceCard';
import TradeRouteCard from '@/components/TradeRouteCard';
import StatsCard from '@/components/StatsCard';
import AlienTrader from '@/components/AlienTrader';
import SpaceshipCard from '@/components/SpaceshipCard';
import { cn } from '@/lib/utils';

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Sample data
  const resources = [
    { name: 'Energy Crystals', quantity: 12050, price: 520, trend: 'up' as const, rarity: 'uncommon' as const },
    { name: 'Quantum Matter', quantity: 4230, price: 1450, trend: 'down' as const, rarity: 'rare' as const },
    { name: 'Titanium Alloy', quantity: 25400, price: 340, trend: 'stable' as const, rarity: 'common' as const },
    { name: 'Xenon Gas', quantity: 8700, price: 670, trend: 'up' as const, rarity: 'uncommon' as const },
  ];

  const routes = [
    {
      id: '1',
      source: { name: 'Zerath-9', type: 'lava' as const },
      destination: { name: 'Veloria Prime', type: 'ocean' as const },
      resource: 'Energy Crystals',
      profit: 24500,
      risk: 'medium' as const,
      duration: 3,
    },
    {
      id: '2',
      source: { name: 'Xenthoria', type: 'ice' as const },
      destination: { name: 'Krex', type: 'rocky' as const },
      resource: 'Rare Minerals',
      profit: 15300,
      risk: 'low' as const,
      duration: 2,
    },
    {
      id: '3',
      source: { name: 'Gasmorn', type: 'gas' as const },
      destination: { name: 'Techthor', type: 'rocky' as const },
      resource: 'Xenon Gas',
      profit: 32700,
      risk: 'high' as const,
      duration: 5,
    },
  ];

  const traders = [
    {
      species: 'zurvian' as const,
      name: 'Zal\'kor',
      trait: 'Master of bulk trades',
      relationship: 'friendly' as const,
      avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      species: 'krelthan' as const,
      name: 'Vex\'tral',
      trait: 'Unpredictable negotiator',
      relationship: 'neutral' as const,
      avatar: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      species: 'xyphorian' as const,
      name: 'Myndra',
      trait: 'Data-driven strategist',
      relationship: 'hostile' as const,
      avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];
  
  const ships = [
    {
      name: 'Stellar Whisper',
      type: 'trader' as const,
      stats: {
        speed: 7,
        capacity: 5,
        defense: 3,
        range: 8
      },
      status: 'active' as const,
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Quantum Beast',
      type: 'cargo' as const,
      stats: {
        speed: 4,
        capacity: 9,
        defense: 6,
        range: 7
      },
      status: 'en-route' as const,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    }
  ];

  return (
    <div className="min-h-screen w-full pb-20 md:pb-10">
      {/* Star field background */}
      <div className="star-field"></div>
      
      <NavigationBar />
      
      <main className={cn(
        "container mx-auto px-4 pt-24 transition-opacity duration-700",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <section className="mb-10">
          <div className="relative mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Cosmic Commerce</h1>
            <p className="text-cosmic-silver max-w-2xl">
              Build your interstellar trade empire, negotiate with alien species, and establish profitable trade routes across the galaxy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard 
              title="Total Assets" 
              value="15,783 GC" 
              icon={<Coins className="w-5 h-5 text-cosmic-lavender" />}
              trend={{ value: 12.4, label: "this cycle" }}
              color="purple"
            />
            <StatsCard 
              title="Active Ships" 
              value="2" 
              icon={<Ship className="w-5 h-5 text-cosmic-teal" />}
              color="teal"
            />
            <StatsCard 
              title="Trade Routes" 
              value="3" 
              icon={<Globe className="w-5 h-5 text-blue-400" />}
              trend={{ value: 1, label: "new route" }}
              color="blue"
            />
            <StatsCard 
              title="Resources" 
              value="4" 
              icon={<Database className="w-5 h-5 text-orange-400" />}
              color="orange"
            />
          </div>
        </section>
        
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Top Trade Routes</h2>
            <button className="text-cosmic-purple text-sm hover:text-cosmic-lavender transition-colors">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map(route => (
              <TradeRouteCard key={route.id} route={route} />
            ))}
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Your Fleet</h2>
              <button className="cosmic-button-secondary text-sm px-4 py-2 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                <span>Add Ship</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ships.map((ship, index) => (
                <SpaceshipCard key={index} {...ship} />
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Alien Traders</h2>
              <button className="text-cosmic-purple text-sm hover:text-cosmic-lavender transition-colors">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {traders.map((trader, index) => (
                <AlienTrader key={index} {...trader} />
              ))}
            </div>
          </section>
        </div>
        
        <section className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Market Resources</h2>
            <button className="cosmic-button-secondary text-sm px-4 py-2 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Go to Market</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>
        
        <section className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Explored Planets</h2>
            <button className="text-cosmic-purple text-sm hover:text-cosmic-lavender transition-colors">
              View Galaxy Map
            </button>
          </div>
          
          <div className="glass-panel p-6 flex flex-wrap justify-center gap-8">
            <Planet name="Zerath-9" size="md" type="lava" />
            <Planet name="Veloria Prime" size="md" type="ocean" />
            <Planet name="Gasmorn" size="md" type="gas" />
            <Planet name="Xenthoria" size="md" type="ice" />
            <Planet name="Krex" size="md" type="rocky" />
          </div>
        </section>
        
        <section className="mt-10 flex justify-center">
          <button className="cosmic-button flex items-center gap-2 py-4 px-8">
            <ChartBar className="w-5 h-5" />
            <span>View Analytics Dashboard</span>
          </button>
        </section>
      </main>
    </div>
  );
}

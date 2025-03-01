
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Rocket, ShoppingCart, Coins, Globe, Database, Ship, ChartBar, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';

import NavigationBar from '@/components/NavigationBar';
import Planet from '@/components/Planet';
import ResourceCard from '@/components/ResourceCard';
import TradeRouteCard from '@/components/TradeRouteCard';
import StatsCard from '@/components/StatsCard';
import AlienTrader from '@/components/AlienTrader';
import SpaceshipCard from '@/components/SpaceshipCard';
import HowToPlayModal from '@/components/HowToPlayModal';
import { cn } from '@/lib/utils';

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Game state
  const [gameState, setGameState] = useState({
    credits: 15783,
    day: 1,
  });

  // Determine which content to show based on the route
  const currentView = location.pathname.split('/')[1] || 'dashboard';

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

  // Button action handlers
  const handleViewAllRoutes = useCallback(() => {
    navigate('/fleet');
    toast.info('Viewing all trade routes');
  }, [navigate]);

  const handleAddShip = useCallback(() => {
    toast.success('Adding a new ship to your fleet', {
      description: 'This feature will be available soon!'
    });
  }, []);

  const handleViewAllTraders = useCallback(() => {
    navigate('/market');
    toast.info('Viewing all alien traders');
  }, [navigate]);

  const handleGoToMarket = useCallback(() => {
    navigate('/market');
    toast.info('Navigating to the market');
  }, [navigate]);

  const handleViewGalaxyMap = useCallback(() => {
    navigate('/planets');
    toast.info('Opening galaxy map');
  }, [navigate]);

  const handleViewAnalytics = useCallback(() => {
    navigate('/finances');
    toast.info('Loading analytics dashboard');
  }, [navigate]);

  // Content for each view
  const renderPlanetsView = () => (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Galaxy Map</h2>
      </div>
      
      <div className="glass-panel p-6 flex flex-wrap justify-center gap-12">
        <Planet name="Zerath-9" size="lg" type="lava" />
        <Planet name="Veloria Prime" size="lg" type="ocean" />
        <Planet name="Gasmorn" size="lg" type="gas" />
        <Planet name="Xenthoria" size="lg" type="ice" />
        <Planet name="Krex" size="lg" type="rocky" />
        <Planet name="Techthor" size="lg" type="rocky" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map(route => (
          <TradeRouteCard key={route.id} route={route} />
        ))}
      </div>
    </section>
  );

  const renderMarketView = () => (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Market Resources</h2>
          <button 
            className="cosmic-button-secondary text-sm px-4 py-2"
            onClick={() => toast.info('Resource prices updated!')}
          >
            Refresh Prices
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <ResourceCard 
              key={index} 
              {...resource} 
              onBuy={() => {
                toast.success(`Purchased ${resource.name}`, {
                  description: `Bought 100 units for ${resource.price * 100} GC`,
                });
              }}
              onSell={() => {
                toast.success(`Sold ${resource.name}`, {
                  description: `Sold 100 units for ${resource.price * 100} GC`,
                });
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Available Traders</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {traders.map((trader, index) => (
            <AlienTrader 
              key={index} 
              {...trader} 
              onNegotiate={() => {
                toast.success(`Started negotiations with ${trader.name}`, {
                  description: `${trader.species} traders prefer ${
                    trader.species === 'zurvian' ? 'bulk deals' : 
                    trader.species === 'krelthan' ? 'cunning negotiations' : 
                    'data-driven proposals'
                  }`,
                });
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );

  const renderFleetView = () => (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Your Fleet</h2>
          <button 
            className="cosmic-button-secondary text-sm px-4 py-2 flex items-center gap-2"
            onClick={handleAddShip}
          >
            <Rocket className="w-4 h-4" />
            <span>Add Ship</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ships.map((ship, index) => (
            <SpaceshipCard 
              key={index} 
              {...ship} 
              onDeploy={() => {
                toast.success(`Deployed ${ship.name}`, {
                  description: `Ship is now ready for a new mission`,
                });
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Trade Routes</h2>
          <button 
            className="cosmic-button-secondary text-sm px-4 py-2"
            onClick={() => {
              toast.success('Created new trade route', {
                description: 'Route will be available after scanning',
              });
            }}
          >
            Create New Route
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map(route => (
            <TradeRouteCard 
              key={route.id} 
              route={route} 
              onActivate={() => {
                toast.success(`Activated route to ${route.destination.name}`, {
                  description: `Your ship will arrive in ${route.duration} days`,
                });
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );

  const renderFinancesView = () => (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Financial Overview</h2>
          <button 
            className="cosmic-button-secondary text-sm px-4 py-2"
            onClick={() => {
              setGameState(prev => ({
                ...prev,
                credits: prev.credits + Math.floor(Math.random() * 1000),
                day: prev.day + 1
              }));
              toast.success('Advanced to next day', {
                description: 'All financial data updated',
              });
            }}
          >
            Advance Day
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Total Assets" 
            value={`${gameState.credits.toLocaleString()} GC`}
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
            title="Day" 
            value={gameState.day.toString()} 
            icon={<Database className="w-5 h-5 text-orange-400" />}
            color="orange"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
        </div>
        
        <div className="glass-panel p-4">
          <table className="w-full">
            <thead>
              <tr className="text-left text-cosmic-silver">
                <th className="py-2 px-4">Transaction</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Day</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-cosmic-navy/30">
                <td className="py-3 px-4">Route to Veloria Prime</td>
                <td className="py-3 px-4 text-green-400">+24,500 GC</td>
                <td className="py-3 px-4">{gameState.day - 1}</td>
                <td className="py-3 px-4"><span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Completed</span></td>
              </tr>
              <tr className="border-t border-cosmic-navy/30">
                <td className="py-3 px-4">Ship Maintenance</td>
                <td className="py-3 px-4 text-red-400">-5,200 GC</td>
                <td className="py-3 px-4">{gameState.day - 2}</td>
                <td className="py-3 px-4"><span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">Processed</span></td>
              </tr>
              <tr className="border-t border-cosmic-navy/30">
                <td className="py-3 px-4">Energy Crystals Sale</td>
                <td className="py-3 px-4 text-green-400">+12,750 GC</td>
                <td className="py-3 px-4">{gameState.day - 3}</td>
                <td className="py-3 px-4"><span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  const renderDashboardView = () => (
    <>
      <section className="mb-10">
        <div className="relative mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">Cosmic Commerce</h1>
              <p className="text-cosmic-silver max-w-2xl">
                Build your interstellar trade empire, negotiate with alien species, and establish profitable trade routes across the galaxy.
              </p>
            </div>
            <button 
              onClick={() => setShowHowToPlay(true)}
              className="cosmic-button-secondary px-4 py-2 flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>How to Play</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Total Assets" 
            value={`${gameState.credits.toLocaleString()} GC`}
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
          <button 
            className="text-cosmic-purple text-sm hover:text-cosmic-lavender transition-colors"
            onClick={handleViewAllRoutes}
          >
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map(route => (
            <TradeRouteCard 
              key={route.id} 
              route={route} 
              onActivate={() => {
                toast.success(`Activated route to ${route.destination.name}`, {
                  description: `Your ship will arrive in ${route.duration} days`,
                });
              }}
            />
          ))}
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Your Fleet</h2>
            <button 
              className="cosmic-button-secondary text-sm px-4 py-2 flex items-center gap-2"
              onClick={handleAddShip}
            >
              <Rocket className="w-4 h-4" />
              <span>Add Ship</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ships.map((ship, index) => (
              <SpaceshipCard 
                key={index} 
                {...ship} 
                onDeploy={() => {
                  toast.success(`Deployed ${ship.name}`, {
                    description: `Ship is now ready for a new mission`,
                  });
                }}
              />
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Alien Traders</h2>
            <button 
              className="text-cosmic-purple text-sm hover:text-cosmic-lavender transition-colors"
              onClick={handleViewAllTraders}
            >
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {traders.map((trader, index) => (
              <AlienTrader 
                key={index} 
                {...trader} 
                onNegotiate={() => {
                  toast.success(`Started negotiations with ${trader.name}`, {
                    description: `${trader.species} traders prefer ${
                      trader.species === 'zurvian' ? 'bulk deals' : 
                      trader.species === 'krelthan' ? 'cunning negotiations' : 
                      'data-driven proposals'
                    }`,
                  });
                }}
              />
            ))}
          </div>
        </section>
      </div>
      
      <section className="mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Market Resources</h2>
          <button 
            className="cosmic-button-secondary text-sm px-4 py-2 flex items-center gap-2"
            onClick={handleGoToMarket}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Go to Market</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <ResourceCard 
              key={index} 
              {...resource} 
              onBuy={() => {
                toast.success(`Purchased ${resource.name}`, {
                  description: `Bought 100 units for ${resource.price * 100} GC`,
                });
              }}
              onSell={() => {
                toast.success(`Sold ${resource.name}`, {
                  description: `Sold 100 units for ${resource.price * 100} GC`,
                });
              }}
            />
          ))}
        </div>
      </section>
      
      <section className="mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Explored Planets</h2>
          <button 
            className="text-cosmic-purple text-sm hover:text-cosmic-lavender transition-colors"
            onClick={handleViewGalaxyMap}
          >
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
        <button 
          className="cosmic-button flex items-center gap-2 py-4 px-8"
          onClick={handleViewAnalytics}
        >
          <ChartBar className="w-5 h-5" />
          <span>View Analytics Dashboard</span>
        </button>
      </section>
    </>
  );

  // Render the appropriate view based on currentView
  const renderContent = () => {
    switch (currentView) {
      case 'planets':
        return renderPlanetsView();
      case 'market':
        return renderMarketView();
      case 'fleet':
        return renderFleetView();
      case 'finances':
        return renderFinancesView();
      default:
        return renderDashboardView();
    }
  };

  return (
    <div className="min-h-screen w-full pb-20 md:pb-10">
      {/* Star field background */}
      <div className="star-field"></div>
      
      <NavigationBar />
      
      <main className={cn(
        "container mx-auto px-4 pt-24 transition-opacity duration-700",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        {renderContent()}
      </main>

      {/* How to Play Modal */}
      <HowToPlayModal 
        isOpen={showHowToPlay} 
        onClose={() => setShowHowToPlay(false)} 
      />
    </div>
  );
}

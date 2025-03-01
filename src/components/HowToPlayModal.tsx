
import React from 'react';
import { X } from 'lucide-react';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToPlayModal = ({ isOpen, onClose }: HowToPlayModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="cosmic-card max-w-3xl max-h-[80vh] overflow-y-auto w-11/12 p-6 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">How to Play Cosmic Commerce</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-cosmic-navy/50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6 text-cosmic-silver">
          <section>
            <h3 className="text-xl font-semibold text-white mb-2">🌍 Step 1: Discover the Galactic Economy</h3>
            <p className="mb-2">
              Different planets have different resources and needs. Some are rich in rare minerals, while others desperately need fuel or food.
            </p>
            <div className="pl-4 border-l-2 border-cosmic-purple/50">
              <p className="font-medium text-white">Your Task:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Explore planets to see what they produce and what they need</li>
                <li>Identify the most profitable trade routes by analyzing supply & demand</li>
                <li>Check for market trends – Prices fluctuate based on scarcity and competition</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-2">🤝 Step 2: Make Deals & Negotiate</h3>
            <p className="mb-2">
              Aliens don't trade like humans! Each species has a unique negotiation style – some love aggressive bargaining, others prefer trust-based deals.
            </p>
            <div className="pl-4 border-l-2 border-cosmic-teal/50">
              <p className="font-medium text-white">Types of Traders:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="text-white">The Zurvians</span> – They love bulk trading and always ask for discounts</li>
                <li><span className="text-white">The Krelthans</span> – They are greedy and cunning, using mind games in negotiations</li>
                <li><span className="text-white">The Xyphorians</span> – They only trust logical, data-backed proposals</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-2">🚀 Step 3: Manage Your Fleet & Resources</h3>
            <p className="mb-2">
              Now that you've got deals in place, it's time to transport your goods safely!
            </p>
            <div className="pl-4 border-l-2 border-blue-400/50">
              <p className="font-medium text-white">Challenges You'll Face:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="text-white">Space Piracy</span> – Some trade routes are risky! Do you hire mercenaries for protection?</li>
                <li><span className="text-white">Galactic Storms</span> – Unpredictable weather might damage your cargo</li>
                <li><span className="text-white">Traffic & Delays</span> – Your shipments must arrive on time to keep clients happy!</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-2">📈 Step 4: Expand Your Trade Empire</h3>
            <p className="mb-2">
              Once you've mastered a few trade routes, it's time to scale up!
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Set up trade hubs on different planets</li>
              <li>Hire AI-driven merchants to automate deals</li>
              <li>Invest in advanced technologies to predict market trends</li>
            </ul>
            <p className="mt-2 italic">Your decision-making will shape the entire galactic economy!</p>
          </section>

          <div className="mt-4 pt-4 border-t border-cosmic-navy">
            <h3 className="text-xl font-semibold text-white mb-2">🏆 Winning the Mission!</h3>
            <p>You succeed if:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You create a massive trade network across multiple planets</li>
              <li>Your profits keep growing despite economic shifts</li>
              <li>You become the most influential trader in the galaxy!</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="cosmic-button-secondary px-6 py-2"
          >
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;

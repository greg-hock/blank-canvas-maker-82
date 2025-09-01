import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/utils/analytics';

const CTA = () => {
  return (
    <section id="join-waitlist" className="py-24 relative overflow-hidden space-bg clip-path-slant">
      {/* Add some stars for the space theme */}
      {Array(30).fill(0).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6 py-10 relative z-10">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block py-1 px-3 rounded-full bg-launch-orange/10 text-launch-orange text-sm mb-6">
                Limited Access Warning! ⚠️
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't Just Guess. <span className="gradient-text">Prove Your Business Has Legs.</span>
              </h2>
              
              <p className="text-gray-600 mb-8">
                Launch10 can only accept a limited number of users each month. Choose a plan and get started today!
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Get actionable data on your ideas",
                  "Pure, unadulterated business validation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-launch-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-8xl">🚀</div>
                <div className="text-2xl font-bold text-gray-800">Ready for Liftoff?</div>
                <div className="text-gray-600">Choose your perfect plan and start validating today</div>
                <Link 
                  to="/pricing"
                  className="inline-block bg-launch-orange text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold animate-pulse-subtle"
                  onClick={() => {
                    trackCTAClick("Let's Launch 10!", 'cta_section');
                    window.scrollTo(0, 0);
                  }}
                >
                  Let's Launch 10!
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 text-white">
          <h3 className="text-2xl font-bold mb-4">Still scrolling? Here's the TL;DR:</h3>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Launch10 lets you test 10 business ideas simultaneously with real customers and real purchase intent. 
            Stop guessing which idea will work, and start knowing. All in less time than it takes to watch an episode of Shark Tank.
          </p>
          <Link 
            to="/pricing"
            className="inline-block bg-launch-orange text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold animate-pulse-subtle"
            onClick={() => {
              trackCTAClick('Start Testing Your Ideas', 'cta_section');
              window.scrollTo(0, 0);
            }}
          >
            Start Testing Your Ideas →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

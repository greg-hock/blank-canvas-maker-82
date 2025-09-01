import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { createStars } from '@/lib/stars';
import { trackCTAClick } from '@/utils/analytics';

const Hero = () => {
  const [stars] = useState(createStars(100));
  const [isLaunching, setIsLaunching] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLaunchClick = () => {
    if (isLaunching) return;
    
    setIsLaunching(true);
    trackCTAClick('Launch Your Ideas', 'hero');
    
    if (rocketRef.current) {
      rocketRef.current.classList.add('animate-rocket-launch');
      navigate('/pricing', { state: { scroll: 'top' } });
      window.scrollTo(0, 0);
      rocketRef.current.classList.remove('animate-rocket-launch');
      setIsLaunching(false);
    }
  };

  return (
    <section className="relative overflow-hidden space-bg min-h-screen flex items-center">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
      
      {/* Orbit Lines */}
      <div className="orbit-line" style={{ width: '300px', height: '300px', left: '20%', top: '60%' }}></div>
      <div className="orbit-line" style={{ width: '500px', height: '500px', left: '80%', top: '40%' }}></div>
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6 pt-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 text-center md:text-left animate-fade-in">
            <div className="inline-block py-1 px-3 rounded-full bg-gray-800/30 text-white text-sm mb-6 animate-pulse-subtle">
              Stop Building Businesses Nobody Wants
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Test 10 Business Ideas in{' '}
              <span className="text-launch-orange">10 Minutes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Because life's too short for bad ideas. Validate your business concepts with real customers before wasting months of development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleLaunchClick}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-launch-orange rounded-full text-white font-medium text-lg transition-all hover:bg-orange-600 shadow-lg hover:shadow-xl button-glow"
              >
                <span>Launch Your Ideas</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#how-it-works"
                onClick={() => trackCTAClick('Learn How', 'hero')}
                className="flex items-center justify-center px-8 py-3 border border-white/20 rounded-full text-white font-medium text-lg transition-all hover:bg-white/10"
              >
                Learn How
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center md:justify-end relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div ref={rocketRef} className="relative transition-all duration-500 animate-subtle-float">
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-launch-orange/20 rounded-full blur-xl"></div>
              <Rocket className="w-40 h-40 text-launch-orange filter drop-shadow-lg" />
            </div>
          </div>
        </div>
        
        <div className="mt-24 md:mt-32 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-6 animate-slide-up">Trusted by forward-thinking entrepreneurs</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['TechStars', 'Y Combinator', 'Pioneer', 'Antler', 'Indie Hackers'].map((name, index) => (
              <div 
                key={index} 
                className="text-white/50 font-bold text-xl animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;

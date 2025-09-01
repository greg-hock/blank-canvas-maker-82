
import { useEffect, useRef } from 'react';
import { Lightbulb, Rocket, TrendingUp, Trophy } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="w-10 h-10 text-launch-orange" />,
    title: "Give us your half-baked ideas",
    description: "We'll turn your \"Uber for plants\" concept into a sleek, professional landing page that makes it look like you've been in business for years."
  },
  {
    icon: <Rocket className="w-10 h-10 text-launch-orange" />,
    title: "We launch your fleet of landing pages",
    description: "Each one optimized to convert visitors into customers. No coding required. No design skills needed. Just pure, beautiful validation."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-launch-orange" />,
    title: "Watch real humans try to give you money",
    description: "The only validation that matters. Your waiting list fills up with people who ACTUALLY attempted to check out."
  },
  {
    icon: <Trophy className="w-10 h-10 text-launch-orange" />,
    title: "Pick your winner and crush it",
    description: "Launch your real business with a pre-built audience of eager customers. Sleep better knowing you're not wasting your life on a digital pet rock."
  }
];

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const stepElements = document.querySelectorAll('.step-card');
    stepElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      stepElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Here's How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple 4-step process to go from uncertain to unstoppable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={stepsRef}>
          {steps.map((step, index) => (
            <div 
              key={index}
              className="step-card relative bg-white shadow-lg border border-gray-100 rounded-xl p-6 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-5 -left-5 w-16 h-16 flex items-center justify-center rounded-full bg-launch-space border-4 border-white shadow-lg">
                <div className="text-xl font-bold text-white">{index + 1}</div>
              </div>
              
              <div className="ml-8 mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block py-2 px-4 rounded-full bg-gray-100 text-gray-800 text-sm mb-4">
            83% of startups fail because they build something nobody asked for
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Stop Building Businesses Nobody Wants
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            You're about to spend the next 6 months of your life coding, designing, and hustling for your big idea. 
            Wouldn't it be nice to know if anyone actually wants to buy it first?
          </p>
          <a 
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-launch-orange text-white font-medium transition-all hover:bg-orange-600 shadow-lg hover:shadow-xl button-glow"
          >
            Launch Your Ideas
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

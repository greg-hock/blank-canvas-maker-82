import { useEffect, useRef } from 'react';
import { Target, Clock, TrendingUp, PackageCheck, BarChart3, Brain } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-10 h-10 text-launch-orange" />,
    title: "From Napkin Sketch to Launch in Minutes",
    description: "Give us your napkin sketches and word salad. We'll transform them into conversion-optimized landing pages that would make your design friends weep with envy."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-launch-orange" />,
    title: "Scary Detailed Analytics",
    description: "Track every page view, hover, click, and purchase attempt. Know exactly which ideas make wallets open faster than free beer at a tech conference."
  },
  {
    icon: <PackageCheck className="w-10 h-10 text-launch-orange" />,
    title: "Real Purchase Intent Validation",
    description: "No more 'great idea, bro' feedback from your mom. Get actual checkout attempts from strangers willing to pay real American dollars for your thing."
  },
  {
    icon: <Target className="w-10 h-10 text-launch-orange" />,
    title: "A/B Testing on Autopilot",
    description: "We automatically test different headlines, images, and price points. It's like having a marketing team without the marketing team attitude."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-launch-orange" />,
    title: "Build a Pre-Launch Waiting List",
    description: "Capture contact info from people who tried to give you money. When you launch for real, you'll have a list of highly qualified leads."
  },
  {
    icon: <Brain className="w-10 h-10 text-launch-orange" />,
    title: "Idea Optimization Engine",
    description: "Our AI-powered feedback system tells you exactly why people aren't buying (it's usually the price, but sometimes it's because your idea involves ferrets)."
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-zoom-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features That Make Your <br /> Entrepreneurial Friends 
            <span className="gradient-text ml-1">Jealous</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to validate your business ideas quickly and effectively,
            with none of the usual hassle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={featuresRef}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card fancy-border p-6 bg-white shadow-sm transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

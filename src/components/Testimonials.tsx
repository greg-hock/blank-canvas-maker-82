import { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "I was about to spend $50K building an app for dog walkers. Launch10 helped me discover that what dog walkers actually wanted was insurance, not another app. Saved me from financial ruin and my marriage.",
    author: "Alex T.",
    title: "Not Divorced"
  },
  {
    quote: "Used Launch10 to test 10 e-commerce ideas in a week. Nine failed spectacularly. The tenth now makes $42K/month. The data showed me exactly why the winners won and the losers lost.",
    author: "Sarah M.",
    title: "No Longer Has Roommates"
  },
  {
    quote: "My friends were telling me my business idea was genius. Launch10 told me the cold, hard truth: nobody would pay more than $7 for it. Painful but necessary knowledge.",
    author: "Devin R.",
    title: "Now Has A Different Idea"
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
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
    
    const testimonialElements = document.querySelectorAll('.testimonial-card');
    testimonialElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      testimonialElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-2 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Take <span className="gradient-text">Our Word</span> For It
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's what entrepreneurs just like you have to say about their Launch10 experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card glass-effect bg-white p-8 rounded-xl shadow-md transition-all duration-300 flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic flex-grow min-h-[150px]">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-launch-orange text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

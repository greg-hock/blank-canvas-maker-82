
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="w-5 h-5 text-launch-orange" />
              <span className="font-bold text-xl text-gray-800">
                LAUNCH<span className="text-launch-orange">10</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Stop building businesses nobody wants. Test 10 ideas in 10 minutes and find 
              the ones worth pursuing.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Launch10. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Careers', 'Blog', 'Press'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-launch-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Help Center', 'Privacy', 'Terms'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-launch-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-launch-navy to-launch-space p-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-20 h-20 mb-6 relative">
          <Rocket className="w-20 h-20 text-launch-orange animate-float" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-6">
          Looks like this page got lost in space
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-launch-orange text-white font-medium transition-all hover:bg-orange-600 shadow-lg hover:shadow-xl button-glow"
        >
          Return to Mission Control
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { useEffect, useState } from "react";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Start fade out after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo Placeholder - Replace with actual logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">PPIS</h1>
        </div>

        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-gray-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );

};


export default Preloader;


"use client";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
        >
          <source src="/tubes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    
      <div className="absolute inset-0 z-10 "></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
       
        <div className="space-y-6 pr-12">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="block text-gray-300">Decentralized</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700">
              Emergency Aid
            </span>
            <span className="block text-gray-300">Management</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-xl">
            A blockchain-powered platform ensuring transparent, efficient, and secure distribution of emergency aid across global networks.
          </p>
          
          <div className="flex space-x-4">
            <a href="#campaigns" className="group">
              <div className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Campaigns
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
            
            
          </div>

          {/* Satisfied Clients Section */}
          <div className="flex items-center mt-8">
            <div className="flex -space-x-3 mr-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div 
                  key={index} 
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-700"
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              100+ Trusted Campaigns
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
import React, { useRef } from 'react';
import cherryImg from '../assets/juices/cherry.png';
import blueberryImg from '../assets/juices/blueberry.png';
import strawberryImg from '../assets/juices/strawberry.png';
import grapeImg from '../assets/juices/grape.png';
import orangeImg from '../assets/juices/orange.png';

const VENDORS = [
  { id: 1, name: 'Andhra Naturals', image: cherryImg, type: 'Organic Shop' },
  { id: 2, name: 'Bharathis Book and Beyond', image: blueberryImg, type: 'Stationery' },
  { id: 3, name: 'Local Plumbers', image: strawberryImg, type: 'Professional Service' },
  { id: 4, name: 'Verified Tutors', image: grapeImg, type: 'Education' },
  { id: 5, name: 'Neighborhood Tailors', image: orangeImg, type: 'Clothing' },
];

const WellnessProducts = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto pt-20 px-6">
      <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-10">
        <h2 className="text-3xl font-black text-gray-800 tracking-tight">Community Partners</h2>
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all"
          >
            ←
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all"
          >
            →
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar pb-10"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {VENDORS.map((prod) => (
          <div 
            key={vendor.id} 
            className="min-w-[280px] bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-6 shadow-xl flex flex-col items-center group cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative w-full h-48 flex justify-center mb-6">
              {/* Product Background Circle */}
              <div className="absolute inset-0 bg-white/50 rounded-full scale-75 group-hover:scale-90 transition-transform duration-500" />
              <img 
                src={vendor.image} 
                alt={vendor.name} 
                className="relative z-10 object-contain h-full group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-xl"
              />
            </div>
            
<h3 className="text-lg font-bold text-gray-800 mb-1">{vendor.name}</h3>
             <p className="text-gray-500 font-medium mb-4">{vendor.type}</p>
             
             <button className="w-full py-3 rounded-full bg-[#6db33f] hover:bg-[#5a9c32] text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-md">
               View Details
             </button>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default WellnessProducts;

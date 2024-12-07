import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ToolsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tools = [
    {
      name: "EDM",
      description: "",
      icon: "/Tools/EDM.jpg"
    },
    {
      name: "Horizontal Milling",
      description: "",
      icon: "/Tools/H_Milling.jpg"
    },
    {
      name: "Lathe Machine",
      description: "",
      icon: "/Tools/Lathe_Machine.png"
    },
    {
      name: "M1TR",
      description: "",
      icon: "/Tools/M1TR.jpg"
    },
    {
      name: "Surface Grinder",
      description: "",
      icon: "/Tools/Surface_Grinder1.jpg"
    },
    {
      name: "Vertical Milling",
      description: "",
      icon: "/Tools/V_Milling.png"
    },
    {
      name: "VMC",
      description: "",
      icon: "/Tools/VMC.jpg"
    },
    {
      name: "Surface Grinder 2",
      description: "",
      icon: "/Tools/Surface_Grinder1.jpg"
    }
  ];

  const getCardClasses = (offset) => {
    const positions = [
      { scale: 'scale-75', position: 'left-[5%] -translate-x-1/2', zIndex: 'z-10', opacity: 'opacity-30' },
      { scale: 'scale-90', position: 'left-[20%] -translate-x-1/2', zIndex: 'z-20', opacity: 'opacity-60' },
      { scale: 'scale-125', position: 'left-1/2 -translate-x-1/2', zIndex: 'z-30', opacity: 'opacity-100' },
      { scale: 'scale-90', position: 'right-[20%] translate-x-1/2', zIndex: 'z-20', opacity: 'opacity-60' },
      { scale: 'scale-75', position: 'right-[5%] translate-x-1/2', zIndex: 'z-10', opacity: 'opacity-30' },
    ]

    const normalizedOffset = ((offset % tools.length) + tools.length) % tools.length
    const currentPosition = positions[normalizedOffset] || { scale: 'scale-0', position: '', zIndex: 'z-0', opacity: 'opacity-0' }

    return `absolute transition-all duration-500 ease-in-out transform bg-white shadow-xl rounded-xl text-center overflow-hidden 
      w-80 h-[400px] ${currentPosition.scale} ${currentPosition.position} ${currentPosition.zIndex} ${currentPosition.opacity}`
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-70"></div>
      <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
        <h2 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-gray-800 z-30">
          In House Facilities
        </h2>
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-40 bg-white/20 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white/40 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Previous slide"
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-40 bg-white/20 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white/40 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Next slide"
        >
          <ChevronRight size={40} />
        </button>
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className={getCardClasses(index - currentIndex)}
          >
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="relative w-56 h-56 mx-auto mb-6 overflow-hidden rounded-lg bg-white shadow-inner">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-95"
                />
              </div>

              <h2 className="text-2xl font-bold mb-4 truncate w-full text-gray-800">{tool.name}</h2>
              <p className="text-gray-600 text-base line-clamp-3">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {tools.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ToolsCarousel;

"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'

const images = [
  { id: '1', name: 'Console E-Check SPM- Can Based', src: '/Solutions/Console E-Check SPM.png?height=400&width=600&text=Mountain+Landscape' },
  { id: '2', name: 'Console E-Check SPM', src: '/Solutions/Console E-Check SPM2.png?height=400&width=600&text=Serene+Beach' },
  { id: '3', name: 'Endurance testing SPM', src: '/Solutions/Endurance testing SPM.png?height=400&width=600&text=City+Skyline' },
  { id: '4', name: 'Pneumatic base pressing SPM', src: '/Solutions/Pneumatic base pressing SPM.png?height=400&width=600&text=Forest+Trail' },
  { id: '5', name: 'Servo base pressing SPM', src: '/Solutions/Servo base pressing SPM.png?height=400&width=600&text=Desert+Sunset' },
  { id: '6', name: 'Vision Testing SPM', src: '/Solutions/Vision Testing SPM.png?height=400&width=600&text=Northern+Lights' },
  { id: '7', name: 'Screwing SPM', src: '/Solutions/Screwing SPM.png?height=400&width=600&text=Northern+Lights' },
]

const EnhancedImageStackAccordion = () => {
  const [activeImage, setActiveImage] = useState('1')

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto p-4">
      <div section id="solutions" className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/3 space-y-2">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setActiveImage(image.id)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center justify-between shadow-md hover:shadow-lg ${
                activeImage === image.id
                  ? 'bg-blue-500 text-white transform scale-105'
                  : 'bg-white hover:bg-gray-100 text-gray-800 hover:translate-x-1'
              }`}
            >
              <span className="font-medium">{image.name}</span>
              <ChevronRightIcon
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeImage === image.id ? 'transform rotate-90' : ''
                }`}
              />
            </button>
          ))}
        </div>
        <div className="w-full md:w-2/3 relative h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence>
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                  animate={{
                    scale: activeImage === image.id ? 1 : 0.8,
                    rotate: activeImage === image.id ? 0 : -10,
                    opacity: activeImage === image.id ? 1 : 0.5,
                    zIndex: activeImage === image.id ? images.length : images.length - index,
                  }}
                  exit={{ scale: 0.8, rotate: 10, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div className="w-full h-full bg-white p-2 rounded-lg shadow-xl">
                    <img
                      src={image.src}
                      alt={image.name}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          variant="default"
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          Explore More
        </button>
      </div>
    </div>
  )
}

export default EnhancedImageStackAccordion


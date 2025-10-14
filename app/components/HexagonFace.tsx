'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HexagonFaceProps {
  id: number
  image: string
  title: string
  rotateY: number
}

const HexagonFace = ({ id, image, title, rotateY }: HexagonFaceProps) => {
  return (
    <div
      className="absolute w-64 h-64 bg-white rounded-lg shadow-lg border-2 border-turquoise-200 overflow-hidden cursor-pointer"
      style={{
        transform: `rotateY(${rotateY}deg) translateZ(200px)`,
        transformOrigin: 'center center',
      }}
    >
      {/* Real Image or Placeholder */}
      <div className="w-full h-full relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-turquoise-100 to-turquoise-200 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-12 h-12 bg-turquoise-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span class="text-white font-bold text-lg">${id}</span>
                    </div>
                  </div>
                </div>
              `;
            }
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        </div>
      </div>
    </div>
  )
}

export default HexagonFace

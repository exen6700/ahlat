'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Phone, Mail } from 'lucide-react'
import HexagonFace from './HexagonFace'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-turquoise-50 to-white">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="gradient-text">Firmanızın TASARIMCISI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Profesyonel reklam tasarım hizmetleri ile markanızı öne çıkarın. 
              Tabela, kartvizit, broşür ve daha fazlası için güvenilir çözüm ortağınız.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-turquoise-600 hover:bg-turquoise-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Ücretsiz Teklif Alın
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/portfoy"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-turquoise-600 text-turquoise-600 hover:bg-turquoise-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5" />
                Portföyümüzü İnceleyin
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-turquoise-600 mr-2" />
                <span>0533 510 01 09</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-turquoise-600 mr-2" />
                <span>info@ahlattasarim.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Hexagon Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[32rem] h-[32rem] mt-72">
              {/* 3D Hexagon Container */}
              <div className="absolute inset-0 transform-gpu perspective-1000">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-full h-full transform-style-preserve-3d"
                >
                  {/* Hexagon Faces */}
                  {[
                    { id: 1, image: '/images/beauty.png', title: 'Beauty', rotateY: 0 },
                    { id: 2, image: '/images/liza butik.png', title: 'Liza Butik', rotateY: 60 },
                    { id: 3, image: '/images/mk.png', title: 'MK', rotateY: 120 },
                    { id: 4, image: '/images/petsop.png', title: 'Petsop', rotateY: 180 },
                    { id: 5, image: '/images/beauty.png', title: 'Beauty', rotateY: 240 },
                    { id: 6, image: '/images/mk.png', title: 'MK', rotateY: 300 },
                  ].map((face) => (
                    <HexagonFace
                      key={face.id}
                      id={face.id}
                      image={face.image}
                      title={face.title}
                      rotateY={face.rotateY}
                    />
                  ))}
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-turquoise-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-turquoise-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

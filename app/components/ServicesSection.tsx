'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ServicesSection = () => {
  const services = [
    {
      title: 'Tabela Tasarım',
      description: 'Profesyonel tabela\ntasarımı ve üretimi.\nİç ve dış mekan\ntabelaları.',
      href: '/hizmetler/tabela',
      image: '/images/tabela.jpg',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Kartvizit',
      description: 'Modern ve etkileyici\nkartvizit tasarımı\nve baskı hizmetleri.',
      href: '/hizmetler/kartvizit',
      image: '/images/kartvizit.jpg',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      title: 'Broşür Tasarım',
      description: 'Kurumsal broşür ve\nkatalog tasarımı ile\nprofesyonel baskı.',
      href: '/hizmetler/brosur',
      image: '/images/broşür.jpg',
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      title: 'Bardak Baskı',
      description: 'Promosyon bardakları\nve özel baskılı\nürünler.',
      href: '/hizmetler/bardak-baski',
      image: '/images/bardak baskı.jpg',
      color: 'from-orange-500/20 to-orange-600/20'
    },
    {
      title: 'Lazer Kesim',
      description: 'Hassas lazer kesim\nhizmetleri ile\nözel tasarımlar.',
      href: '/hizmetler/lazer-kesim',
      image: '/images/lazer kesim.jpg',
      color: 'from-red-500/20 to-red-600/20'
    },
    {
      title: 'Promosyon Ürünleri',
      description: 'Çeşitli promosyon ürünleri ve kurumsal hediyeler.',
      href: '/hizmetler/promosyon',
      image: '/images/promosyon.png',
      color: 'from-pink-500/20 to-pink-600/20'
    },
    {
      title: 'Web Tasarım',
      description: 'Modern ve responsive web sitesi tasarımı.',
      href: '/hizmetler/web-tasarim',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
      color: 'from-indigo-500/20 to-indigo-600/20'
    },
    {
      title: 'Vinil Baskı',
      description: 'Vinil baskı ve çıkartma tasarımı hizmetleri.',
      href: '/hizmetler/vinil-baski',
      image: '/images/mk.png',
      color: 'from-yellow-500/20 to-yellow-600/20'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-turquoise-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Markanızı en iyi şekilde temsil edecek profesyonel tasarım hizmetleri sunuyoruz.
            Her projede kalite ve müşteri memnuniyeti önceliğimizdir.
          </p>
        </motion.div>

        {/* Honeycomb Grid - Zigzag Layout */}
        <div className="flex flex-col items-center gap-0 max-w-full mx-auto mt-16">
          {/* Top Row - 4 hexagons */}
          <div className="flex items-center mb-[-200px]" style={{ gap: '-384px' }}>
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="relative w-96 h-[28rem] overflow-hidden">
                    {/* Hexagon Shape */}
                    <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 200 240" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <pattern id={`pattern-${index}`} patternUnits="userSpaceOnUse" width="200" height="240">
                            <image href={service.image} width="200" height="240" opacity="0.8" />
                          </pattern>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(20, 184, 166, 0.1)" />
                            <stop offset="100%" stopColor="rgba(20, 184, 166, 0.3)" />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="100,20 160,60 160,140 100,180 40,140 40,60"
                          fill={`url(#pattern-${index})`}
                          stroke="rgba(20, 184, 166, 0.3)"
                          strokeWidth="1"
                          className="group-hover:stroke-turquoise-400 transition-colors duration-300"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-turquoise-200 transition-colors duration-200 drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 3 hexagons (zigzag offset) */}
          <div className="flex items-center justify-center" style={{ marginLeft: '0px', gap: '-192px' }}>
            {services.slice(4, 7).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="relative w-96 h-[28rem] overflow-hidden">
                    {/* Hexagon Shape */}
                    <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 200 240" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <pattern id={`pattern-${index + 4}`} patternUnits="userSpaceOnUse" width="200" height="240">
                            <image href={service.image} width="200" height="240" opacity="0.8" />
                          </pattern>
                          <linearGradient id={`gradient-${index + 4}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(20, 184, 166, 0.1)" />
                            <stop offset="100%" stopColor="rgba(20, 184, 166, 0.3)" />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="100,20 160,60 160,140 100,180 40,140 40,60"
                          fill={`url(#pattern-${index + 4})`}
                          stroke="rgba(20, 184, 166, 0.3)"
                          strokeWidth="1"
                          className="group-hover:stroke-turquoise-400 transition-colors duration-300"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-turquoise-200 transition-colors duration-200 drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/hizmetler"
            className="inline-flex items-center px-8 py-4 bg-turquoise-600 hover:bg-turquoise-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Tüm Hizmetlerimizi İnceleyin
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

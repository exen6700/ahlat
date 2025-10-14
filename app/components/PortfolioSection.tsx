'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Tabela Tasarımı',
      category: 'Tabela',
      image: '/images/tabela.jpg',
      description: 'Modern ve dikkat çekici tabela tasarımı',
      tags: ['Pleksi', 'LED', 'Dış Mekan']
    },
    {
      id: 2,
      title: 'Kurumsal Kartvizit',
      category: 'Kartvizit',
      image: '/images/kartvizit.jpg',
      description: 'Profesyonel kurumsal kartvizit tasarımı',
      tags: ['Mat Kuşe', 'Spot UV', 'Özel Kesim']
    },
    {
      id: 3,
      title: 'Broşür Tasarımı',
      category: 'Broşür',
      image: '/images/broşür.jpg',
      description: 'Etkileyici broşür ve katalog tasarımı',
      tags: ['A4', 'Çift Taraflı', 'Yüksek Çözünürlük']
    },
    {
      id: 4,
      title: 'Bardak Baskı',
      category: 'Promosyon',
      image: '/images/bardak baskı.jpg',
      description: 'Özel baskılı promosyon bardakları',
      tags: ['Serigrafi', 'Sublimasyon', 'Dayanıklı']
    },
    {
      id: 5,
      title: 'Lazer Kesim',
      category: 'Lazer Kesim',
      image: '/images/lazer kesim.jpg',
      description: 'Hassas lazer kesim ile özel tasarımlar',
      tags: ['Akrilik', 'MDF', 'Hassas Kesim']
    },
    {
      id: 6,
      title: 'Web Tasarım',
      category: 'Web',
      image: '/images/beauty.png',
      description: 'Modern ve responsive web sitesi tasarımı',
      tags: ['Responsive', 'SEO', 'Hızlı']
    }
  ]

  const categories = ['Tümü', 'Tabela', 'Kartvizit', 'Broşür', 'Promosyon', 'Lazer Kesim', 'Web']

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portföyümüz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Binlerce başarılı projemizden örnekler. Her projede kalite ve müşteri memnuniyeti önceliğimizdir.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-turquoise-200 text-turquoise-600 hover:bg-turquoise-600 hover:text-white transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Turkuaz Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-turquoise-500/20 to-turquoise-600/30"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-turquoise-600 text-sm font-medium rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`/portfoy/${item.id}`}
                      className="bg-white text-turquoise-600 px-4 py-2 rounded-lg font-medium hover:bg-turquoise-600 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Detayları Görün
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-turquoise-600 font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">#{item.id}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-turquoise-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/portfoy"
            className="inline-flex items-center px-8 py-4 bg-turquoise-600 hover:bg-turquoise-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Tüm Projelerimizi İnceleyin
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection

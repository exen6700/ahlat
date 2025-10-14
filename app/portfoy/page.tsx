'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Filter } from 'lucide-react'
import { useState } from 'react'

export default function PortfoyPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const categories = ['Tümü', 'Tabela', 'Kartvizit', 'Broşür', 'Promosyon', 'Lazer Kesim', 'Web']

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Tabela Tasarımı',
      category: 'Tabela',
      image: '/api/placeholder/400/300',
      description: 'Dikkat çekici LED ışıklı tabela tasarımı',
      tags: ['Pleksi', 'LED', 'Dış Mekan'],
      client: 'Yılmaz İnşaat',
      year: '2024'
    },
    {
      id: 2,
      title: 'Kurumsal Kartvizit',
      category: 'Kartvizit',
      image: '/api/placeholder/400/300',
      description: 'Profesyonel kurumsal kartvizit tasarımı',
      tags: ['Mat Kuşe', 'Spot UV', 'Özel Kesim'],
      client: 'Demir Kafe',
      year: '2024'
    },
    {
      id: 3,
      title: 'Broşür Tasarımı',
      category: 'Broşür',
      image: '/api/placeholder/400/300',
      description: 'Etkileyici broşür ve katalog tasarımı',
      tags: ['A4', 'Çift Taraflı', 'Yüksek Çözünürlük'],
      client: 'Kaya Tekstil',
      year: '2024'
    },
    {
      id: 4,
      title: 'Bardak Baskı',
      category: 'Promosyon',
      image: '/api/placeholder/400/300',
      description: 'Özel baskılı promosyon bardakları',
      tags: ['Serigrafi', 'Sublimasyon', 'Dayanıklı'],
      client: 'Özkan Eczanesi',
      year: '2024'
    },
    {
      id: 5,
      title: 'Lazer Kesim',
      category: 'Lazer Kesim',
      image: '/api/placeholder/400/300',
      description: 'Hassas lazer kesim ile özel tasarımlar',
      tags: ['Akrilik', 'MDF', 'Hassas Kesim'],
      client: 'Çelik Oto',
      year: '2024'
    },
    {
      id: 6,
      title: 'Web Tasarım',
      category: 'Web',
      image: '/api/placeholder/400/300',
      description: 'Modern ve responsive web sitesi tasarımı',
      tags: ['Responsive', 'SEO', 'Hızlı'],
      client: 'Arslan Gıda',
      year: '2024'
    },
    {
      id: 7,
      title: 'Totem Tabela',
      category: 'Tabela',
      image: '/api/placeholder/400/300',
      description: 'Büyük boyutlu totem tabela tasarımı',
      tags: ['Metal', 'LED', 'Dayanıklı'],
      client: 'Highend Clinic',
      year: '2023'
    },
    {
      id: 8,
      title: 'Kurumsal Kimlik',
      category: 'Kartvizit',
      image: '/api/placeholder/400/300',
      description: 'Kurumsal kimlik paketi tasarımı',
      tags: ['Logo', 'Kartvizit', 'Antetli'],
      client: 'Faac',
      year: '2023'
    },
    {
      id: 9,
      title: 'Promosyon Seti',
      category: 'Promosyon',
      image: '/api/placeholder/400/300',
      description: 'Çeşitli promosyon ürünleri seti',
      tags: ['Kalem', 'Defter', 'Çanta'],
      client: 'Esis Cafe',
      year: '2023'
    }
  ]

  const filteredItems = selectedCategory === 'Tümü' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-turquoise-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Portföyümüz
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Binlerce başarılı projemizden örnekler. Her projede kalite ve müşteri memnuniyeti önceliğimizdir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center space-x-2 text-gray-600 mb-4 w-full justify-center">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Kategori:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-turquoise-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-turquoise-100 hover:text-turquoise-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
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
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-turquoise-100 to-turquoise-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-turquoise-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <p className="text-turquoise-700 font-medium">{item.category}</p>
                      </div>
                    </div>
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
                    
                    {/* Client & Year */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <span className="text-gray-500">
                        <strong>Müşteri:</strong> {item.client}
                      </span>
                      <span className="text-gray-500">
                        <strong>Yıl:</strong> {item.year}
                      </span>
                    </div>
                    
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

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Bu kategoride proje bulunamadı
              </h3>
              <p className="text-gray-500">
                Lütfen farklı bir kategori seçin veya tüm projeleri görüntüleyin.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portföy İstatistikleri
            </h2>
            <p className="text-xl text-gray-600">
              Başarılarımızı rakamlarla keşfedin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '15000+', label: 'Tamamlanan Proje' },
              { number: '5000+', label: 'Memnun Müşteri' },
              { number: '32', label: 'Yıllık Tecrübe' },
              { number: '4.9/5', label: 'Müşteri Memnuniyeti' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-turquoise-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise-600 to-turquoise-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Projenizi Hayata Geçirmeye Hazır mısınız?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Portföyümüzdeki gibi profesyonel tasarımlar için bizimle iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-8 py-4 bg-white text-turquoise-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Ücretsiz Teklif Alın
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

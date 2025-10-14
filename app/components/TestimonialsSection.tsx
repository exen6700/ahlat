'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      company: 'Yılmaz İnşaat',
      position: 'Genel Müdür',
      content: 'Ahlat Tasarım ile çalışmak harika bir deneyimdi. Tabela tasarımımız tam istediğimiz gibi oldu. Profesyonel yaklaşımları ve kaliteli işçilikleri için teşekkürler.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Fatma Demir',
      company: 'Demir Kafe',
      position: 'İşletme Sahibi',
      content: 'Kartvizit ve broşür tasarımlarımız için Ahlat Tasarım\'ı tercih ettik. Sonuçlar mükemmeldi. Müşterilerimiz çok beğendi. Kesinlikle tavsiye ederim.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      company: 'Kaya Tekstil',
      position: 'Pazarlama Müdürü',
      content: 'Promosyon ürünlerimiz için çalıştık. Hem tasarım hem de kalite açısından çok memnun kaldık. Zamanında teslimat ve uygun fiyat.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Ayşe Özkan',
      company: 'Özkan Eczanesi',
      position: 'Eczane Sahibi',
      content: 'Eczane tabelamız için Ahlat Tasarım\'ı seçtik. Yasal düzenlemelere uygun, profesyonel bir tasarım yaptılar. Çok memnunuz.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Ali Çelik',
      company: 'Çelik Oto',
      position: 'Sahip',
      content: 'Oto servisimiz için tabela ve kartvizit tasarımı yaptırdık. Hem görsel hem de kalite açısından mükemmel sonuçlar aldık.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Zeynep Arslan',
      company: 'Arslan Gıda',
      position: 'İnsan Kaynakları',
      content: 'Kurumsal kimlik çalışmamız için Ahlat Tasarım ile çalıştık. Profesyonel yaklaşımları ve yaratıcı tasarımları için teşekkürler.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-turquoise-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşteri Yorumları
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Binlerce memnun müşterimizin deneyimlerini okuyun. Kalite ve müşteri memnuniyeti bizim önceliğimizdir.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-turquoise-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-turquoise-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise-400 to-turquoise-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-turquoise-600 font-medium">{testimonial.position}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-turquoise-600 mb-2">5000+</div>
              <div className="text-gray-600">Memnun Müşteri</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-turquoise-600 mb-2">15000+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-turquoise-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Müşteri Memnuniyeti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-turquoise-600 mb-2">32</div>
              <div className="text-gray-600">Yıllık Tecrübe</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection

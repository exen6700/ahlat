'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Palette, CreditCard, FileText, Coffee, Scissors, Gift, Globe, Star } from 'lucide-react'

export default function HizmetlerPage() {
  const services = [
    {
      icon: Palette,
      title: 'Tabela Tasarım',
      description: 'Profesyonel tabela tasarımı ve üretimi. İç ve dış mekan tabelaları.',
      features: [
        'Pleksi Tabela',
        'LED Işıklı Tabela',
        'Kutu Harf Tabela',
        'Totem Tabela',
        'Banko Arkası Tabela',
        'Neon Led Tabela'
      ],
      color: 'from-blue-500 to-blue-600',
      href: '/hizmetler/tabela'
    },
    {
      icon: CreditCard,
      title: 'Kartvizit',
      description: 'Modern ve etkileyici kartvizit tasarımı ve baskı hizmetleri.',
      features: [
        'Mat Kuşe Kartvizit',
        'Parlak Kuşe Kartvizit',
        'Spot UV Kartvizit',
        'Özel Kesim Kartvizit',
        'Çift Taraflı Tasarım',
        'Hızlı Baskı'
      ],
      color: 'from-green-500 to-green-600',
      href: '/hizmetler/kartvizit'
    },
    {
      icon: FileText,
      title: 'Broşür Tasarım',
      description: 'Kurumsal broşür ve katalog tasarımı ile profesyonel baskı.',
      features: [
        'A4 Broşür',
        'A5 Broşür',
        'Katalog Tasarımı',
        'Çift Taraflı Baskı',
        'Yüksek Çözünürlük',
        'Profesyonel Tasarım'
      ],
      color: 'from-purple-500 to-purple-600',
      href: '/hizmetler/brosur'
    },
    {
      icon: Coffee,
      title: 'Bardak Baskı',
      description: 'Promosyon bardakları ve özel baskılı ürünler.',
      features: [
        'Serigrafi Baskı',
        'Sublimasyon Baskı',
        'Çeşitli Boyutlar',
        'Dayanıklı Malzeme',
        'Özel Tasarım',
        'Toplu Sipariş'
      ],
      color: 'from-orange-500 to-orange-600',
      href: '/hizmetler/bardak-baski'
    },
    {
      icon: Scissors,
      title: 'Lazer Kesim',
      description: 'Hassas lazer kesim hizmetleri ile özel tasarımlar.',
      features: [
        'Akrilik Kesim',
        'MDF Kesim',
        'Ahşap Kesim',
        'Metal Kesim',
        'Hassas Kesim',
        'Özel Tasarım'
      ],
      color: 'from-red-500 to-red-600',
      href: '/hizmetler/lazer-kesim'
    },
    {
      icon: Gift,
      title: 'Promosyon Ürünleri',
      description: 'Çeşitli promosyon ürünleri ve kurumsal hediyeler.',
      features: [
        'Kalem Setleri',
        'Not Defteri',
        'Çanta ve Çantalar',
        'Anahtarlık',
        'Masaüstü Ürünleri',
        'Özel Tasarım'
      ],
      color: 'from-pink-500 to-pink-600',
      href: '/hizmetler/promosyon'
    },
    {
      icon: Globe,
      title: 'Web Tasarım',
      description: 'Modern ve responsive web sitesi tasarımı.',
      features: [
        'Responsive Tasarım',
        'SEO Optimizasyonu',
        'Hızlı Yükleme',
        'Modern Tasarım',
        'Mobil Uyumlu',
        'Güvenlik'
      ],
      color: 'from-indigo-500 to-indigo-600',
      href: '/hizmetler/web-tasarim'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'İletişim',
      description: 'Projeniz hakkında detaylı bilgi alıyoruz'
    },
    {
      step: 2,
      title: 'Tasarım',
      description: 'Size özel tasarım çözümleri sunuyoruz'
    },
    {
      step: 3,
      title: 'Onay',
      description: 'Tasarımı onayınıza sunuyoruz'
    },
    {
      step: 4,
      title: 'Üretim',
      description: 'Kaliteli malzeme ile üretim yapıyoruz'
    },
    {
      step: 5,
      title: 'Teslimat',
      description: 'Zamanında teslimat sağlıyoruz'
    }
  ]

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
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              32 yıllık tecrübemizle reklam ve tasarım sektöründe geniş bir hizmet yelpazesi sunuyoruz. 
              Her projede kalite ve müşteri memnuniyeti önceliğimizdir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-turquoise-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-turquoise-600 font-medium hover:text-turquoise-700 transition-colors duration-200"
                    >
                      <span>Detayları Görün</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projelerinizi en verimli şekilde hayata geçirmek için adım adım ilerliyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-turquoise-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-turquoise-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Ahlat Tasarım?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin tercih etme sebeplerini keşfedin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Kalite Garantisi',
                description: '1. kalite malzeme ve işçilik ile her projede mükemmellik hedefliyoruz.'
              },
              {
                icon: CheckCircle,
                title: 'Hızlı Teslimat',
                description: 'Belirlenen sürelerde teslimat garantisi ile projelerinizi zamanında tamamlıyoruz.'
              },
              {
                icon: Palette,
                title: 'Yaratıcı Tasarım',
                description: 'Uzman tasarım ekibimizle markanızı öne çıkaracak yaratıcı çözümler sunuyoruz.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-turquoise-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
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
              Uzman ekibimizle birlikte markanızı en iyi şekilde temsil edecek tasarımlar oluşturalım.
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

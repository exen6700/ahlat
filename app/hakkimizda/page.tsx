'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Clock, Star, Target, Heart } from 'lucide-react'

export default function HakkimizdaPage() {
  const values = [
    {
      icon: Target,
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını uygularız.'
    },
    {
      icon: Heart,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri memnuniyeti bizim en büyük önceliğimizdir.'
    },
    {
      icon: Clock,
      title: 'Zamanında Teslimat',
      description: 'Projelerinizi belirlenen sürede teslim ederiz.'
    },
    {
      icon: Award,
      title: 'Tecrübe',
      description: '32 yıllık tecrübemizle güvenilir hizmet sunuyoruz.'
    }
  ]

  const team = [
    {
      name: 'Ahmet Ahlat',
      position: 'Kurucu & Genel Müdür',
      experience: '32 Yıl',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Fatma Ahlat',
      position: 'Tasarım Müdürü',
      experience: '15 Yıl',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Mehmet Yılmaz',
      position: 'Üretim Müdürü',
      experience: '20 Yıl',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Ayşe Demir',
      position: 'Satış Müdürü',
      experience: '12 Yıl',
      image: '/api/placeholder/200/200'
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
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              20 yıllık tecrübemizle reklam ve tasarım sektöründe lider konumdayız. 
              Binlerce memnun müşterimizle birlikte büyümeye devam ediyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  2004 yılında kurulan Ahlat Tasarım, reklam ve tasarım sektöründe 
                  Türkiye'nin önde gelen firmalarından biridir. Küçük bir atölyeden 
                  başlayan yolculuğumuz, bugün modern teknoloji ve uzman kadromuzla 
                  binlerce projeyi başarıyla tamamlamıştır.
                </p>
                <p>
                  Müşteri memnuniyeti ve kalite odaklı yaklaşımımız sayesinde 
                  sektörde güvenilir bir marka haline geldik. Her projede 
                  müşterilerimizin beklentilerini aşmayı hedefliyoruz.
                </p>
                <p>
                  Bugün tabela tasarımından web tasarımına, kartvizit baskısından 
                  promosyon ürünlerine kadar geniş bir hizmet yelpazesi sunuyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-turquoise-100 to-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-turquoise-500 to-turquoise-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-3xl">A</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ahlat Tasarım</h3>
                  <p className="text-gray-600 mb-6">Reklam & Tasarım Hizmetleri</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-turquoise-700">2004</div>
                      <div className="text-gray-600">Kuruluş Yılı</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-turquoise-700">5000+</div>
                      <div className="text-gray-600">Müşteri</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-turquoise-700">15000+</div>
                      <div className="text-gray-600">Proje</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-turquoise-700">20</div>
                      <div className="text-gray-600">Yıl Tecrübe</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çalışma prensiplerimiz ve değerlerimiz, müşteri memnuniyeti ve kalite odaklı yaklaşımımızın temelini oluşturur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-turquoise-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uzman ve deneyimli ekibimizle müşterilerimize en kaliteli hizmeti sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-turquoise-400 to-turquoise-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-turquoise-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-500 text-sm">
                  {member.experience} Tecrübe
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise-600 to-turquoise-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Rakamlarla Ahlat Tasarım</h2>
            <p className="text-xl opacity-90">Başarılarımızı rakamlarla keşfedin</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '5000+', label: 'Memnun Müşteri' },
              { icon: Award, number: '15000+', label: 'Tamamlanan Proje' },
              { icon: Clock, number: '20', label: 'Yıllık Tecrübe' },
              { icon: Star, number: '4.9', label: 'Müşteri Memnuniyeti' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

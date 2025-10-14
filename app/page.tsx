'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Northern Lights Aurora Effect - Full Page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Aurora Layer 1 - Top */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-turquoise-700/40 via-turquoise-600/30 to-transparent opacity-60"></div>
        
        {/* Aurora Layer 2 - Middle */}
        <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-b from-turquoise-600/35 via-turquoise-500/25 to-turquoise-700/20 opacity-50"></div>
        
        {/* Aurora Layer 3 - Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-turquoise-800/30 via-turquoise-700/20 to-transparent opacity-40"></div>

        {/* Vertical Aurora Streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1 bg-gradient-to-b from-turquoise-600/60 via-turquoise-500/40 to-transparent h-full opacity-70"></div>
          <div className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-turquoise-700/50 via-turquoise-600/35 to-transparent h-full opacity-60"></div>
          <div className="absolute top-0 left-3/4 w-1 bg-gradient-to-b from-turquoise-500/55 via-turquoise-700/30 to-transparent h-full opacity-65"></div>
        </div>

        {/* Horizontal Aurora Waves */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-2 bg-gradient-to-r from-transparent via-turquoise-600/40 to-transparent opacity-50"></div>
          <div className="absolute top-2/3 left-0 w-full h-2 bg-gradient-to-r from-transparent via-turquoise-700/35 to-transparent opacity-45"></div>
        </div>

        {/* Subtle Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-turquoise-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>


        {/* Content with higher z-index */}
        <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-turquoise-600 to-turquoise-700 text-white relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">20 Yıllık Tecrübe</h2>
              <p className="text-xl opacity-90">Binlerce memnun müşteri, binlerce başarılı proje</p>
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

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Projenizi Hayata Geçirmeye Hazır mısınız?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Uzman ekibimizle birlikte markanızı en iyi şekilde temsil edecek tasarımlar oluşturalım.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center px-8 py-4 bg-turquoise-600 hover:bg-turquoise-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Hemen İletişime Geçin
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/portfoy"
                  className="inline-flex items-center px-8 py-4 border-2 border-turquoise-600 text-turquoise-600 hover:bg-turquoise-600 hover:text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Portföyümüzü İnceleyin
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

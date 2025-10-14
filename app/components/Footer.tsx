'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Tabela Tasarım', href: '/hizmetler/tabela' },
    { name: 'Kartvizit', href: '/hizmetler/kartvizit' },
    { name: 'Broşür Tasarım', href: '/hizmetler/brosur' },
    { name: 'Bardak Baskı', href: '/hizmetler/bardak-baski' },
    { name: 'Lazer Kesim', href: '/hizmetler/lazer-kesim' },
    { name: 'Promosyon Ürünleri', href: '/hizmetler/promosyon' },
    { name: 'Web Tasarım', href: '/hizmetler/web-tasarim' },
  ]

  const company = [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Portföy', href: '/portfoy' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Gizlilik Sözleşmesi', href: '/gizlilik' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-turquoise-500 to-turquoise-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ahlat Tasarım</h3>
                <p className="text-gray-400">Reklam & Tasarım</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              32 yıllık tecrübe ile profesyonel reklam tasarım hizmetleri sunuyoruz. 
              Tabela, kartvizit, broşür ve daha fazlası için güvenilir çözüm ortağınız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-turquoise-600 rounded-full flex items-center justify-center hover:bg-turquoise-700 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-turquoise-600 rounded-full flex items-center justify-center hover:bg-turquoise-700 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-turquoise-600 rounded-full flex items-center justify-center hover:bg-turquoise-700 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-turquoise-600 rounded-full flex items-center justify-center hover:bg-turquoise-700 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-turquoise-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Kurumsal</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-turquoise-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-turquoise-400" />
                <span className="text-gray-300">0533 510 01 09</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-turquoise-400" />
                <span className="text-gray-300">info@ahlattasarim.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-turquoise-400 mt-1" />
                <span className="text-gray-300">
                  Merkez Mah. Atatürk Cad. No:123<br />
                  İstanbul/Türkiye
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ahlat Tasarım. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/gizlilik" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-200">
                Gizlilik Sözleşmesi
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-200">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

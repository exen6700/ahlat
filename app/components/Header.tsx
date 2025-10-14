'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { 
      name: 'Hizmetlerimiz', 
      href: '/hizmetler',
      submenu: [
        { name: 'Tabela Tasarım', href: '/hizmetler/tabela' },
        { name: 'Kartvizit', href: '/hizmetler/kartvizit' },
        { name: 'Broşür Tasarım', href: '/hizmetler/brosur' },
        { name: 'Bardak Baskı', href: '/hizmetler/bardak-baski' },
        { name: 'Lazer Kesim', href: '/hizmetler/lazer-kesim' },
        { name: 'Promosyon Ürünleri', href: '/hizmetler/promosyon' },
        { name: 'Web Tasarım', href: '/hizmetler/web-tasarim' },
      ]
    },
    { name: 'Portföy', href: '/portfoy' },
    { name: 'İletişim', href: '/iletisim' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Main Navigation */}
      <nav className="bg-turquoise-600">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <div className="flex justify-between items-center h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                className="relative w-20 h-20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Şenol Ahlat Logo"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className="text-white hover:text-turquoise-200 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-turquoise-50 hover:text-turquoise-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-turquoise-200 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="py-2">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-turquoise-50 hover:text-turquoise-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="bg-gray-50">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-8 py-2 text-sm text-gray-600 hover:bg-turquoise-50 hover:text-turquoise-600 transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

export default Header

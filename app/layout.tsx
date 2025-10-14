import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ahlattasarim.com'),
  title: 'Ahlat Tasarım - Reklam, Tabela, Kartvizit Hizmetleri',
  description: 'Profesyonel reklam tasarım hizmetleri. Tabela, kartvizit, broşür, bardak baskı, lazer kesim ve promosyon ürünleri.',
  keywords: 'reklam, tasarım, tabela, kartvizit, broşür, bardak baskı, lazer kesim, promosyon',
  authors: [{ name: 'Ahlat Tasarım' }],
  openGraph: {
    title: 'Ahlat Tasarım - Reklam ve Tasarım Hizmetleri',
    description: 'Profesyonel reklam tasarım hizmetleri. Tabela, kartvizit, broşür, bardak baskı, lazer kesim ve promosyon ürünleri.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIChatbot from '@/components/AIChatbot'
import Analytics from '@/components/Analytics'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'hömy - AI-Powered Interior Design & Home Solutions',
  description: 'Transform your space with AI-powered interior design. Get personalized design recommendations, shop curated products, and connect with professional designers. Try our free AI design tool today!',
  keywords: 'interior design, AI design, home decor, furniture, home improvement, design consultation',
  authors: [{ name: 'Techie Home' }],
  creator: 'Techie Home',
  publisher: 'Techie Home',
  robots: 'index, follow',
  metadataBase: new URL('https://homy.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://homy.com',
    siteName: 'hömy',
    title: 'hömy - AI-Powered Interior Design & Home Solutions',
    description: 'Transform your space with AI-powered interior design. Get personalized design recommendations, shop curated products, and connect with professional designers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HOMY - AI-Powered Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hömy - AI-Powered Interior Design & Home Solutions',
    description: 'Transform your space with AI-powered interior design. Get personalized design recommendations, shop curated products, and connect with professional designers.',
    images: ['/og-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const themeColor = '#0ea5e9'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <AIChatbot />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}

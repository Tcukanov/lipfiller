import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lipfiller.nyc'),
  title: {
    default: 'LipFiller NYC | Premier Aesthetic Med Studio in New York City',
    template: '%s | LipFiller NYC',
  },
  description:
    'LipFiller NYC is a premier aesthetic med studio in New York City specializing in lip fillers, dermal fillers, Botox, Russian lip technique, microblading, and skin rejuvenation. Book your appointment today.',
  keywords: [
    'lip filler NYC',
    'lip fillers New York',
    'Russian lip technique NYC',
    'dermal fillers Manhattan',
    'Botox NYC',
    'aesthetic med spa New York',
    'lip augmentation NYC',
    'microblading NYC',
    'cosmetic injections New York',
    'face contouring NYC',
  ],
  authors: [{ name: 'LipFiller NYC' }],
  creator: 'LipFiller NYC',
  publisher: 'LipFiller NYC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lipfiller.nyc',
    siteName: 'LipFiller NYC',
    title: 'LipFiller NYC | Premier Aesthetic Med Studio in New York City',
    description:
      'Expert lip fillers, dermal fillers, Botox, and microblading services in NYC. Experience the Russian lip technique and advanced aesthetic treatments.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LipFiller NYC - Aesthetic Med Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LipFiller NYC | Premier Aesthetic Med Studio',
    description:
      'Expert lip fillers, dermal fillers, Botox, and microblading services in NYC.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <Toaster position="top-center" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

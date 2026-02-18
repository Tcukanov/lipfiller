'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

const procedures = [
  { name: 'Russian Lip Technique', href: '/procedures/russian-lip-filler' },
  { name: 'Lip Augmentation', href: '/procedures/lip-augmentation' },
  { name: 'Face Contouring', href: '/procedures/face-contouring' },
  { name: 'Botox', href: '/procedures/botox' },
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Aftercare', href: '/aftercare' },
  { name: 'Policies', href: '/policies' },
]

export function Footer() {
  const pathname = usePathname()

  // Don't show footer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <footer className="bg-primary-900 text-cream-100">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display tracking-widest">
                <span className="text-cream-100">LIPFILLER</span>
                <span className="text-gold-400">.NYC</span>
              </span>
            </Link>
            <p className="text-cream-400 mb-6 leading-relaxed">
              Premier aesthetic med studio in New York City. Experience the unity
              of modern aesthetic trends, artistry, and medical expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream-600 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream-600 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Procedures */}
          <div>
            <h3 className="text-sm font-medium mb-6 tracking-widest uppercase text-gold-400">Procedures</h3>
            <ul className="space-y-3">
              {procedures.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream-400 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-6 tracking-widest uppercase text-gold-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream-400 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium mb-6 tracking-widest uppercase text-gold-400">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6465438898"
                  className="flex items-start gap-3 text-cream-400 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>646.543.8898</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lipfiller.nyc"
                  className="flex items-start gap-3 text-cream-400 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@lipfiller.nyc</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=245+5th+Avenue+New+York+NY+10016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-cream-400 hover:text-gold-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    245 5th Avenue, Floor 3
                    <br />
                    New York, NY 10016
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-500 text-sm">
            © {new Date().getFullYear()} LipFiller.nyc. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream-500">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

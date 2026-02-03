'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const procedures = [
  { name: 'Russian Lip Technique', href: '/procedures/russian-lip-filler' },
  { name: 'Lip Augmentation', href: '/procedures/lip-augmentation' },
  { name: 'Face Contouring', href: '/procedures/face-contouring' },
  { name: 'Botox', href: '/procedures/botox' },
  { name: 'Powder Brows', href: '/procedures/powder-brows' },
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
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold tracking-tight">
                <span className="text-primary-400">Lip</span>
                <span className="text-white">Filler</span>
                <span className="text-gold-400">.nyc</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premier aesthetic med studio in New York City. Experience the unity
              of modern aesthetic trends, artistry, and medical expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Procedures */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Procedures</h3>
            <ul className="space-y-3">
              {procedures.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6465438898"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>646.543.8898</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lipfiller.nyc"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors"
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
                  className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors"
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
            <div className="mt-6">
              <Link href="/contact" className="btn btn-primary">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LipFiller.nyc. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

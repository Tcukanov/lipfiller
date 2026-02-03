'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Russian Lip Technique', href: '/procedures/russian-lip-filler' },
  { name: 'Procedures', href: '/procedures' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't show header on admin pages
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary-900 text-cream-100 py-2.5">
        <div className="container-custom flex justify-between items-center text-sm tracking-wide">
          <div className="flex items-center gap-8">
            <a
              href="tel:6465438898"
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              646.543.8898
            </a>
            <span className="flex items-center gap-2 text-cream-300">
              <MapPin className="w-4 h-4" />
              245 5th Avenue, Floor 3, NYC
            </span>
          </div>
          <Link
            href="/contact"
            className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
            : 'bg-cream-50'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display tracking-widest">
                <span className="text-primary-900">LIPFILLER</span>
                <span className="text-gold-500">.NYC</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors relative py-2 uppercase',
                    pathname === item.href
                      ? 'text-gold-500'
                      : 'text-primary-700 hover:text-gold-500',
                    pathname === item.href &&
                      'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold-400'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn btn-primary">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary-900 hover:text-gold-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 bg-cream-50 shadow-lg transition-all duration-300 overflow-hidden border-t border-cream-200',
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="container-custom py-6 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-4 py-3 text-base tracking-wide transition-colors uppercase',
                  pathname === item.href
                    ? 'text-gold-500'
                    : 'text-primary-800 hover:text-gold-500'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6 px-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full"
              >
                Book Now
              </Link>
            </div>
            <div className="px-4 py-4 border-t border-cream-200 mt-4">
              <a
                href="tel:6465438898"
                className="flex items-center gap-2 text-primary-600"
              >
                <Phone className="w-4 h-4" />
                646.543.8898
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

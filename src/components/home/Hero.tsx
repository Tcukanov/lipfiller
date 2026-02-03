'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-200/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-px bg-gold-400" />
              <span className="text-sm tracking-[0.3em] text-primary-600 uppercase">
                New York City
              </span>
            </motion.div>

            <h1 className="heading-display text-primary-900 mb-8">
              <span className="block">Aesthetic</span>
              <span className="block text-gold-500">Med Studio</span>
            </h1>

            <p className="text-lg text-primary-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The unity of the most modern aesthetic trends, artistry, and
              medical expertise. Enhance your natural beauty with our expert
              practitioners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary group"
              >
                Book Your Appointment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/procedures" className="btn btn-outline">
                Explore Procedures
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-cream-300"
            >
              <div>
                <div className="text-3xl font-display text-primary-900">2000+</div>
                <div className="text-sm text-primary-500 tracking-wide">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary-900">10+</div>
                <div className="text-sm text-primary-500 tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary-900">3000+</div>
                <div className="text-sm text-primary-500 tracking-wide">Procedures</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image - Next.js automatically converts to WebP */}
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <Image
                  src="/img/lip-filler-nyc.jpg"
                  alt="Lip Filler Results - Natural Enhancement at LipFiller NYC"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
              </div>

              {/* Floating Rating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 bottom-20 bg-primary-900 text-cream-100 p-6 max-w-xs shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="text-gold-400">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                  <div>
                    <div className="font-display text-lg">5.0 Rating</div>
                    <div className="text-sm text-cream-400">500+ Reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

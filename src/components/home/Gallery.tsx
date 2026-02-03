'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const categories = [
  { name: 'Face Contouring', image: '/gallery/face-contouring.jpg' },
  { name: 'Lip Augmentation', image: '/gallery/lip-augmentation.jpg' },
  { name: 'Botox', image: '/gallery/botox.jpg' },
  { name: 'Powder Brows', image: '/gallery/powder-brows.jpg' },
]

export function Gallery() {
  return (
    <section className="section-padding bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-gold-400 font-medium tracking-wider uppercase text-sm mb-4">
              From Passion to Love
            </span>

            <h2 className="heading-section mb-6">Our Works</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Every day, women spend an average of 55-minutes applying and
              perfecting their makeup. Those daily routine adds up to $300,000 on
              makeup during their lifetime.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Thankfully, there is an easier way to achieve a head-turning
              appearance. With our services you will start each day with a
              flawless look. Our practitioners ensure that you wake up every
              morning looking beautiful and ready for anything.
            </p>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors group"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary-800 to-secondary-800 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
                    {category.name}
                  </h3>
                </div>

                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-gold-400/50 rounded-xl transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

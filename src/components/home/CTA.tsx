'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-section text-white mb-6">
            Ready to Enhance Your Natural Beauty?
          </h2>

          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Schedule your consultation today and discover how our expert
            practitioners can help you achieve your aesthetic goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-white text-primary-700 hover:bg-gray-100 group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>

            <a
              href="tel:6465438898"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              646.543.8898
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

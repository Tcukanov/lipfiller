'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">
                N E W &nbsp; Y O R K &nbsp; C I T Y
              </span>
            </motion.div>

            <h1 className="heading-display text-gray-900 mb-6">
              <span className="block">AESTHETIC</span>
              <span className="block text-gradient">MED STUDIO</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The unity of the most modern aesthetic trends, artistry, and
              medical expertise. Enhance your natural beauty with our expert
              practitioners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="btn btn-primary group">
                Book Your Appointment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/procedures" className="btn btn-outline">
                Explore Procedures
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600">5K+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-500">Procedures</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Placeholder - Replace with actual image */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-primary-400" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Premium Aesthetic Treatments
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 bottom-20 bg-white rounded-xl shadow-xl p-4 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">5.0 Rating</div>
                    <div className="text-sm text-gray-500">500+ Reviews</div>
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

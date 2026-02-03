'use client'

import { motion } from 'framer-motion'
import { Leaf, Award, Fingerprint } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const features = [
  {
    title: 'Naturalness',
    description:
      'When less is more, it\'s all about naturalness. Wherever you go you will always look magnificent.',
    icon: Leaf,
  },
  {
    title: 'Perfection',
    description:
      'Want to feel confident in your perfection? LipFiller NYC is your principal ally.',
    icon: Award,
  },
  {
    title: 'Individuality',
    description:
      'Our services are specifically designed to enhance your natural beauty and save you 15 minutes every morning.',
    icon: Fingerprint,
  },
]

export function Features() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Looking to Enhance Your Beauty?"
          description="Experience the perfect blend of artistry and medical expertise"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-6 shadow-lg shadow-primary-200">
                <feature.icon className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

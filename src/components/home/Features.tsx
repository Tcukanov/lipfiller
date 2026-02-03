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
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Looking to Enhance Your Beauty?"
          description="Experience the perfect blend of artistry and medical expertise"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 border border-gold-400 text-gold-500 mb-8">
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-display text-primary-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-primary-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

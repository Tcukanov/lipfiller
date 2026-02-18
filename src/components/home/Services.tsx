'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Syringe, Sparkles, Heart, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    title: 'Dermal Fillers & Injectables',
    description:
      'Restore volume and smooth wrinkles with premium dermal fillers. Specializing in lip augmentation, cheek enhancement, and jawline contouring.',
    icon: Syringe,
    href: '/procedures#dermal-fillers',
  },
  {
    title: 'Botox & Anti-Aging',
    description:
      'Smooth wrinkles and prevent new lines from forming with Botox. Expert treatment for forehead lines, crow\'s feet, and frown lines.',
    icon: Sparkles,
    href: '/procedures/botox',
  },
  {
    title: 'Facial Contouring',
    description:
      'Sculpt and define your facial features with expert contouring techniques. Create a more balanced, harmonious appearance non-surgically.',
    icon: Heart,
    href: '/procedures/face-contouring',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Services"
          title="Procedures"
          description="We specialize in Dermal Fillers, Botox, Lip Enhancement, and Facial Contouring to help you achieve natural, beautiful results."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link href={service.href} className="block group">
                <div className="border border-cream-300 h-full p-10 hover:border-gold-400 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-14 h-14 border border-cream-300 flex items-center justify-center mb-8 group-hover:border-gold-400 group-hover:text-gold-500 transition-colors text-primary-700">
                    <service.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display text-primary-900 mb-4 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-primary-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center text-gold-500 tracking-wide text-sm uppercase group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

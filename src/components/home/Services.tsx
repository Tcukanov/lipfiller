'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Syringe, Sparkles, PenTool, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    title: 'Dermal Fillers & Injectables',
    description:
      'Restore volume and smooth wrinkles with premium dermal fillers. Specializing in lip augmentation, cheek enhancement, and jawline contouring.',
    icon: Syringe,
    href: '/procedures#dermal-fillers',
    color: 'primary',
  },
  {
    title: 'Skin Rejuvenation & Bio-stimulation',
    description:
      'Advanced treatments to revitalize your skin. Microneedling, PRP therapy, and cutting-edge laser treatments for a youthful glow.',
    icon: Sparkles,
    href: '/procedures#skin-rejuvenation',
    color: 'gold',
  },
  {
    title: 'Microblading & Cosmetic Tattoo',
    description:
      'Wake up with perfect brows every day. Natural-looking microblading and cosmetic tattooing for lips and eyeliner.',
    icon: PenTool,
    href: '/procedures#microblading',
    color: 'secondary',
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
          description="We specialize in Dermal Fillers, Botox, Bio-stimulation, Microneedling/PRP, Skin Rejuvenation & Tightening, Microblading and Cosmetic Tattoo"
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
                <div className="card h-full p-8 hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                      service.color === 'primary'
                        ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'
                        : service.color === 'gold'
                        ? 'bg-gold-100 text-gold-600 group-hover:bg-gold-500 group-hover:text-white'
                        : 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-800 group-hover:text-white'
                    }`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

import { Metadata } from 'next'
import Link from 'next/link'
import { Syringe, Sparkles, PenTool, Heart, Smile, Clock, Shield, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Procedures | Lip Fillers, Botox & Aesthetic Treatments',
  description:
    'Explore our comprehensive range of aesthetic procedures including lip fillers, Russian lip technique, dermal fillers, Botox, face contouring, microblading, and skin rejuvenation in NYC.',
  keywords: [
    'lip filler procedures NYC',
    'Russian lip technique',
    'dermal fillers Manhattan',
    'Botox treatments New York',
    'face contouring NYC',
    'microblading NYC',
    'aesthetic procedures NYC',
  ],
  openGraph: {
    title: 'Procedures | LipFiller NYC',
    description:
      'Comprehensive aesthetic procedures including lip fillers, Botox, and microblading in New York City.',
  },
}

const procedures = [
  {
    category: 'Lip Enhancement',
    icon: Heart,
    items: [
      {
        title: 'Russian Lip Filler Technique',
        slug: 'russian-lip-filler',
        description:
          'The Russian lip technique creates a heart-shaped, doll-like lip appearance with more height than width. No duck lip effect.',
        price: 'Starting at $650',
        duration: '30-45 min',
        featured: true,
      },
      {
        title: 'Lip Augmentation',
        slug: 'lip-augmentation',
        description:
          'Enhance your lips with natural-looking volume and definition using premium hyaluronic acid fillers.',
        price: 'Starting at $550',
        duration: '30 min',
      },
    ],
  },
  {
    category: 'Facial Enhancement',
    icon: Sparkles,
    items: [
      {
        title: 'Face Contouring',
        slug: 'face-contouring',
        description:
          'Sculpt and define your facial features including cheekbones, jawline, and chin for a more balanced appearance.',
        price: 'Starting at $800',
        duration: '45-60 min',
      },
      {
        title: 'Under Eye Treatment',
        slug: 'under-eye-treatment',
        description:
          'Reduce dark circles and hollowness under the eyes for a refreshed, youthful appearance.',
        price: 'Starting at $600',
        duration: '30 min',
      },
    ],
  },
  {
    category: 'Anti-Aging',
    icon: Syringe,
    items: [
      {
        title: 'Botox',
        slug: 'botox',
        description:
          'Smooth wrinkles and prevent new lines from forming. Treat forehead lines, crow\'s feet, and frown lines.',
        price: 'Starting at $12/unit',
        duration: '15-30 min',
      },
      {
        title: 'Skin Rejuvenation',
        slug: 'skin-rejuvenation',
        description:
          'Advanced bio-stimulation treatments including microneedling and PRP therapy for youthful, glowing skin.',
        price: 'Starting at $350',
        duration: '60 min',
      },
    ],
  },
  {
    category: 'Cosmetic Tattoo',
    icon: PenTool,
    items: [
      {
        title: 'Powder Brows',
        slug: 'powder-brows',
        description:
          'Achieve perfect, soft, powdery brows that last. Suitable for all skin types with long-lasting results.',
        price: 'Starting at $450',
        duration: '2-3 hours',
      },
      {
        title: 'Microblading',
        slug: 'microblading',
        description:
          'Create natural-looking, hair-like strokes for beautiful, defined eyebrows that wake up ready.',
        price: 'Starting at $400',
        duration: '2 hours',
      },
    ],
  },
]

export default function ProceduresPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-gray-900 mb-6">
              Our <span className="text-gradient">Procedures</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We specialize in Dermal Fillers, Botox, Bio-stimulation,
              Microneedling/PRP, Skin Rejuvenation & Tightening, Microblading and
              Cosmetic Tattoo
            </p>
          </div>
        </div>
      </section>

      {/* Procedures List */}
      <section className="section-padding">
        <div className="container-custom">
          {procedures.map((category, categoryIndex) => (
            <div
              key={category.category}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className={categoryIndex > 0 ? 'mt-20' : ''}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <category.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((procedure) => (
                  <Link
                    key={procedure.slug}
                    href={`/procedures/${procedure.slug}`}
                    className="group"
                  >
                    <div
                      className={`card p-6 h-full transition-all duration-300 hover:-translate-y-1 ${
                        procedure.featured
                          ? 'ring-2 ring-primary-500 ring-offset-2'
                          : ''
                      }`}
                    >
                      {procedure.featured && (
                        <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                          Most Popular
                        </span>
                      )}

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {procedure.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {procedure.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {procedure.duration}
                          </span>
                        </div>
                        <span className="font-semibold text-primary-600">
                          {procedure.price}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Experience Excellence in Aesthetic Care"
            description="Our commitment to your safety and satisfaction"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Licensed Professionals</h3>
              <p className="text-gray-600">
                All procedures performed by licensed medical professionals with
                extensive training.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold-100 text-gold-600 flex items-center justify-center mb-4">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Natural Results</h3>
              <p className="text-gray-600">
                We prioritize natural-looking enhancements that complement your
                unique features.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                Every treatment plan is customized to your individual goals and
                anatomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="heading-section text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your aesthetic goals with our expert
            practitioners.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

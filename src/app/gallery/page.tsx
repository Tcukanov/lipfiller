import { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Gallery | Before & After Results',
  description:
    'View our before and after gallery showcasing lip filler, Botox, and face contouring results at LipFiller NYC.',
  keywords: [
    'lip filler before after NYC',
    'Botox results',
    'face contouring gallery',
    'dermal filler results',
    'aesthetic treatment results',
  ],
  openGraph: {
    title: 'Gallery | LipFiller NYC',
    description:
      'View stunning before and after results from our aesthetic treatments.',
  },
}

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Lip Enhancement', slug: 'lips' },
  { name: 'Face Contouring', slug: 'face' },
  { name: 'Botox', slug: 'botox' },
]

// Placeholder gallery items - these would come from the database
const galleryItems = [
  {
    id: 1,
    title: 'Russian Lip Technique',
    category: 'lips',
    description: 'Natural enhancement with the Russian lip technique',
  },
  {
    id: 2,
    title: 'Lip Augmentation',
    category: 'lips',
    description: 'Subtle volume enhancement for fuller lips',
  },
  {
    id: 3,
    title: 'Cheek Enhancement',
    category: 'face',
    description: 'Restored volume and defined cheekbones',
  },
  {
    id: 4,
    title: 'Jawline Contouring',
    category: 'face',
    description: 'Sculpted, defined jawline',
  },
  {
    id: 5,
    title: 'Forehead Botox',
    category: 'botox',
    description: 'Smooth, wrinkle-free forehead',
  },
  {
    id: 6,
    title: 'Full Lip Enhancement',
    category: 'lips',
    description: 'Dramatic yet natural lip transformation',
  },
  {
    id: 7,
    title: 'Comprehensive Facial Contouring',
    category: 'face',
    description: 'Multi-area facial enhancement',
  },
  {
    id: 8,
    title: "Crow's Feet Treatment",
    category: 'botox',
    description: 'Youthful, refreshed eye area',
  },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-gray-900 mb-6">
              Our <span className="text-gradient">Works</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every day, women spend an average of 55-minutes applying and
              perfecting their makeup. With our services you will start each day
              with a flawless look.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.slug === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 cursor-pointer"
              >
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/50 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.title}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              More results coming soon! Follow us on Instagram for daily updates.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Real Results, Real Stories"
            description="Hear from our satisfied clients about their transformation journey"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-600">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="heading-section text-white mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our gallery of beautiful transformations. Book your consultation
            today.
          </p>
          <a 
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-primary-700 hover:bg-gray-100"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </>
  )
}

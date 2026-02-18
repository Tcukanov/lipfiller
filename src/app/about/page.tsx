import { Metadata } from 'next'
import { Award, Heart, Shield, Users } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'About Us | Expert Aesthetic Practitioners',
  description:
    'Learn about LipFiller NYC - your trusted aesthetic med studio in New York City. Expert practitioners, premium products, and personalized care since 2018.',
  keywords: [
    'about lipfiller NYC',
    'aesthetic med spa New York',
    'lip filler experts NYC',
    'cosmetic injectors Manhattan',
  ],
  openGraph: {
    title: 'About Us | LipFiller NYC',
    description:
      'Expert aesthetic practitioners in New York City specializing in lip fillers, dermal fillers, and Botox.',
  },
}

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description:
      'Your comfort, safety, and satisfaction are our top priorities. We take the time to understand your unique goals and create personalized treatment plans.',
  },
  {
    icon: Award,
    title: 'Excellence & Expertise',
    description:
      'Our practitioners are highly trained in the latest techniques and use only premium, FDA-approved products for optimal results.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'We maintain the highest standards of safety and hygiene, following all medical protocols and best practices.',
  },
  {
    icon: Users,
    title: 'Natural Results',
    description:
      'We believe in enhancing your natural beauty, not changing it. Our artistic approach ensures results that look and feel like you.',
  },
]

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About LipFiller NYC',
    description: 'Learn about our expert aesthetic practitioners and premium services',
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: siteConfig.name,
      foundingDate: '2018',
      description:
        'Premier aesthetic med studio in New York City specializing in lip fillers, dermal fillers, Botox, and facial contouring.',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <span className="w-12 h-px bg-gold-400" />
              <span className="tracking-[0.3em] uppercase text-sm text-gold-500">
                Our Story
              </span>
              <span className="w-12 h-px bg-gold-400" />
            </div>
            <h1 className="heading-display text-primary-900 mb-6">
              About <span className="text-gradient">LipFiller NYC</span>
            </h1>
            <p className="text-lg text-primary-600 leading-relaxed">
              Your trusted aesthetic med studio in the heart of Manhattan, dedicated to
              enhancing your natural beauty with expert care and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-center text-primary-900 mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-primary-600">
              <p>
                Founded in 2018, LipFiller NYC has become one of Manhattan's most trusted
                destinations for aesthetic treatments. What started as a passion for helping
                people feel confident in their own skin has grown into a thriving practice
                known for excellence, artistry, and natural-looking results.
              </p>
              <p>
                Our studio combines medical expertise with an artistic eye, ensuring every
                treatment is tailored to your unique features and goals. We believe that the
                best cosmetic enhancements are the ones that look like you—just refreshed,
                rejuvenated, and radiant.
              </p>
              <p>
                Located in the heart of New York City, we serve clients from all five boroughs
                and beyond. Our reputation is built on trust, expertise, and the hundreds of
                satisfied clients who return to us time and time again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <h2 className="heading-section text-center text-primary-900 mb-16">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-cream-300 p-8 hover:border-gold-400 transition-all duration-300"
              >
                <div className="w-16 h-16 border border-cream-300 flex items-center justify-center mb-6 text-primary-700">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section text-primary-900 mb-8">
              Expert Credentials
            </h2>
            <p className="text-lg text-primary-600 mb-12 max-w-2xl mx-auto">
              Our practitioners are certified, experienced, and continuously trained in the
              latest aesthetic techniques and safety protocols.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-cream-300 p-6">
                <div className="text-4xl font-display text-gold-500 mb-2">1000+</div>
                <p className="text-primary-600 text-sm uppercase tracking-wider">
                  Treatments Performed
                </p>
              </div>
              <div className="border border-cream-300 p-6">
                <div className="text-4xl font-display text-gold-500 mb-2">5 Years</div>
                <p className="text-primary-600 text-sm uppercase tracking-wider">
                  In Business
                </p>
              </div>
              <div className="border border-cream-300 p-6">
                <div className="text-4xl font-display text-gold-500 mb-2">500+</div>
                <p className="text-primary-600 text-sm uppercase tracking-wider">
                  5-Star Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-cream-200 text-lg mb-8 max-w-2xl mx-auto">
            Book your consultation today and discover why so many New Yorkers trust
            LipFiller NYC for their aesthetic needs.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-lg px-10"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </>
  )
}

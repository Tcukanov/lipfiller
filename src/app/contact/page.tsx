import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Contact Us | Book Your Appointment',
  description:
    'Book your appointment at LipFiller NYC. Located at 245 5th Avenue, Floor 3, New York, NY 10016. Call us at 646.543.8898 or book online.',
  keywords: [
    'book lip filler NYC',
    'aesthetic appointment New York',
    'contact lip filler clinic',
    'schedule botox NYC',
  ],
  openGraph: {
    title: 'Contact Us | LipFiller NYC',
    description:
      'Book your appointment at LipFiller NYC. Located in Manhattan, NY.',
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneLink}`,
  },
  {
    icon: Mail,
    title: 'Email',
    content: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    title: 'Address',
    content: siteConfig.contact.address,
    href: siteConfig.contact.googleMapsLink,
  },
  {
    icon: Clock,
    title: 'Hours',
    content: `${siteConfig.hours.weekdays}\n${siteConfig.hours.saturday}\n${siteConfig.hours.sunday}`,
  },
]

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact LipFiller NYC',
    description: 'Book your appointment at LipFiller NYC',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: `+1-${siteConfig.contact.phoneLink}`,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '245 5th Avenue, Floor 3',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10016',
        addressCountry: 'US',
      },
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
                Get In Touch
              </span>
              <span className="w-12 h-px bg-gold-400" />
            </div>
            <h1 className="heading-display text-primary-900 mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-primary-600 leading-relaxed">
              Ready to enhance your natural beauty? Book your appointment online or
              get in touch with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Primary CTA */}
            <div className="text-center mb-16 p-10 bg-cream-100 border border-cream-300">
              <h2 className="text-2xl font-display text-primary-900 mb-4">
                Book Your Appointment Online
              </h2>
              <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
                View our services, check availability, and book your appointment
                directly through our online booking system.
              </p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-10"
              >
                Book Now
              </a>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="border border-cream-300 p-6 hover:border-gold-400 transition-colors bg-white"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 border border-cream-300 flex items-center justify-center flex-shrink-0 text-primary-700">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-2 tracking-wide uppercase text-sm">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary-600 hover:text-gold-500 transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-primary-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden h-96 bg-gray-100 border border-cream-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175438563!2d-73.98893!3d40.744799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7c4fab243%3A0x7a7b1b141a048f62!2s245%205th%20Ave%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LipFiller NYC Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

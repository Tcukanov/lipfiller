import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Book Your Appointment',
  description:
    'Book your appointment at LipFiller NYC. Located at 245 5th Avenue, Floor 3, New York, NY 10016. Call us at 646.543.8898 or fill out our contact form.',
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
    content: '646.543.8898',
    href: 'tel:6465438898',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@lipfiller.nyc',
    href: 'mailto:info@lipfiller.nyc',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '245 5th Avenue, Floor 3\nNew York, NY 10016',
    href: 'https://maps.google.com/?q=245+5th+Avenue+New+York+NY+10016',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Fri: 10am - 7pm\nSat: 10am - 5pm\nSun: Closed',
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
      name: 'LipFiller NYC',
      telephone: '+1-646-543-8898',
      email: 'info@lipfiller.nyc',
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-gray-900 mb-6">
              Book Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to enhance your natural beauty? Schedule your consultation
              today and discover how our expert practitioners can help you
              achieve your aesthetic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-primary-600 transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-80 bg-gray-100">
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
        </div>
      </section>
    </>
  )
}

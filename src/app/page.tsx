import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'
import { Features } from '@/components/home/Features'
import { Gallery } from '@/components/home/Gallery'
import { InstagramFeed } from '@/components/home/InstagramFeed'
import { CTA } from '@/components/home/CTA'

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'LipFiller NYC',
  image: 'https://lipfiller.nyc/og-image.jpg',
  '@id': 'https://lipfiller.nyc',
  url: 'https://lipfiller.nyc',
  telephone: '+1-646-543-8898',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '245 5th Avenue, Floor 3',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10016',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7448,
    longitude: -73.9867,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  servesCuisine: 'Aesthetic Medical Services',
  description:
    'Premier aesthetic med studio in New York City specializing in lip fillers, dermal fillers, Botox, Russian lip technique, microblading, and skin rejuvenation.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '500',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Lip Filler Treatment',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'LipFiller NYC',
  },
  areaServed: {
    '@type': 'City',
    name: 'New York',
  },
  description:
    'Professional lip filler treatments including Russian lip technique, lip augmentation, and dermal fillers in NYC.',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <Hero />
      <Services />
      <Features />
      <Gallery />
      <InstagramFeed />
      <CTA />
    </>
  )
}

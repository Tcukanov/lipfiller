import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { pricingPackages, pricingCategories } from '@/data/pricing'

export const metadata: Metadata = {
  title: 'Pricing | Lip Filler & Aesthetic Treatment Costs',
  description:
    'View our transparent pricing for lip fillers, Botox, face contouring, microblading, and other aesthetic treatments in NYC. Competitive rates with premium results.',
  keywords: [
    'lip filler cost NYC',
    'Botox price New York',
    'dermal filler pricing',
    'microblading cost NYC',
    'aesthetic treatment prices',
  ],
  openGraph: {
    title: 'Pricing | LipFiller NYC',
    description:
      'Transparent pricing for all aesthetic treatments at LipFiller NYC.',
  },
}

// Data imported from @/data/pricing

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-gray-900 mb-6">
              Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quality aesthetic treatments at competitive prices. All prices
              include consultation and aftercare instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-primary-600 font-medium tracking-wider uppercase text-sm mb-4">
              Save More
            </span>
            <h2 className="heading-section text-gray-900">
              Treatment Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card p-8 relative ${
                  pkg.featured ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-primary-600 mb-6">
                  {pkg.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn w-full ${
                    pkg.featured ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-primary-600 font-medium tracking-wider uppercase text-sm mb-4">
              A La Carte
            </span>
            <h2 className="heading-section text-gray-900">
              Individual Services
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pricingCategories.map((category) => (
              <div
                key={category.title}
                className={`card p-6 ${
                  category.featured ? 'ring-2 ring-primary-200' : ''
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900">
                            {service.name}
                          </h4>
                          {service.popular && (
                            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2 py-0.5 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          {service.description}
                        </p>
                      </div>
                      <div className="font-semibold text-gray-900 whitespace-nowrap">
                        {service.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Important Information
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Prices are subject to change. Please confirm during consultation.</li>
              <li>• All treatments include a consultation and aftercare instructions.</li>
              <li>• A deposit may be required to book certain services.</li>
              <li>• Touch-up policies vary by treatment. Ask for details.</li>
              <li>• We accept cash, credit cards, and financing options.</li>
            </ul>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Financing Available
              </h4>
              <p className="text-gray-600 text-sm">
                We offer flexible payment plans through Cherry and CareCredit.
                Ask us about financing options during your consultation.
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
            Book your free consultation to discuss your goals and receive a
            personalized treatment plan.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

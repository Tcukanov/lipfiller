import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Lip Filler & Aesthetic Treatment Costs',
  description:
    'View our transparent pricing for lip fillers, Botox, face contouring, and other aesthetic treatments in NYC. Book your appointment online.',
  keywords: [
    'lip filler cost NYC',
    'Botox price New York',
    'dermal filler pricing',
    'facial contouring cost NYC',
    'aesthetic treatment prices',
  ],
  openGraph: {
    title: 'Pricing | LipFiller NYC',
    description:
      'Transparent pricing for all aesthetic treatments at LipFiller NYC. Book online now.',
  },
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-cream-100 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <span className="w-12 h-px bg-gold-400" />
              <span className="tracking-[0.3em] uppercase text-sm text-gold-500">
                Our Pricing
              </span>
              <span className="w-12 h-px bg-gold-400" />
            </div>
            <h1 className="heading-display text-primary-900 mb-6">Pricing</h1>
            <p className="text-lg text-primary-600 leading-relaxed mb-6">
              View our services and book your appointment online
            </p>
          </div>
        </div>
      </section>

      {/* Square Booking Widget - Full Width */}
      <section className="bg-white">
        <div className="w-full">
          <iframe
            src="https://book.squareup.com/appointments/tjaxlujatpec8t/location/6DMYCF1TTHFBE"
            title="Book Appointment - LipFiller NYC"
            className="w-full border-0"
            style={{ 
              minHeight: '1000px',
              height: '100vh'
            }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Important Info - Below Widget */}
      <section className="py-16 bg-cream-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-display text-primary-900 mb-6">
              Important Information
            </h3>
            <ul className="space-y-3 text-primary-600">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">•</span>
                <span>All treatments include a consultation and aftercare instructions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">•</span>
                <span>A booking deposit is required to hold your appointment and will be applied to the cost of your procedure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">•</span>
                <span>By scheduling online, you agree that you have read and understand all policies and are at least 18 years old.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">•</span>
                <span>We accept cash, credit cards, and financing options.</span>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-white border border-cream-300">
              <h4 className="font-semibold text-primary-900 mb-3">
                Questions? Call Us
              </h4>
              <p className="text-primary-600 mb-4">
                If you have questions about pricing or which treatment is right for you, we're here to help.
              </p>
              <a 
                href="tel:6465438898" 
                className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-medium transition-colors"
              >
                <span>📞</span>
                <span>646.543.8898</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

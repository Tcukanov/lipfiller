import { Metadata } from 'next'
import { Clock, CheckCircle, AlertCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Aftercare Instructions | Post-Treatment Care Guide',
  description:
    'Complete aftercare instructions for lip fillers, Botox, and other aesthetic treatments at LipFiller NYC. Ensure optimal results and healing.',
  keywords: [
    'lip filler aftercare',
    'Botox aftercare NYC',
    'dermal filler recovery',
    'post-treatment care',
  ],
  openGraph: {
    title: 'Aftercare Instructions | LipFiller NYC',
    description:
      'Complete post-treatment care guide for optimal results and healing.',
  },
}

const lipFillerAftercare = {
  dos: [
    'Apply ice packs (wrapped in cloth) for 10-15 minutes at a time to reduce swelling',
    'Sleep with your head elevated for the first 2 nights',
    'Stay hydrated - drink plenty of water',
    'Take Arnica supplements to minimize bruising (if not allergic)',
    'Use a gentle cleanser and moisturizer',
    'Wait 24-48 hours before wearing lipstick or lip products',
  ],
  donts: [
    'Touch, press, or massage the treated area for 24-48 hours',
    'Engage in strenuous exercise or heavy lifting for 24-48 hours',
    'Consume alcohol for 24 hours',
    'Expose lips to extreme heat (sauna, hot tub, hot showers) for 48 hours',
    'Have dental work done for at least 2 weeks',
    'Use harsh exfoliants or skincare products for 48 hours',
  ],
}

const botoxAftercare = {
  dos: [
    'Keep your head upright for 4 hours after treatment',
    'Exercise facial muscles in treated areas (frown, raise eyebrows) for the first hour',
    'Resume normal skincare routine after 24 hours',
    'Be patient - full results appear in 7-14 days',
    'Stay hydrated',
  ],
  donts: [
    'Lie down or bend over for 4 hours',
    'Exercise or do strenuous activity for 24 hours',
    'Massage or rub the treated areas',
    'Consume alcohol for 24 hours',
    'Undergo facial treatments, facials, or microdermabrasion for 24 hours',
    'Expose yourself to extreme heat for 24 hours',
  ],
}

export default function AftercarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Aftercare Instructions - LipFiller NYC',
    description: 'Post-treatment care guide for aesthetic procedures',
    specialty: 'Dermatology',
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
                Post-Treatment
              </span>
              <span className="w-12 h-px bg-gold-400" />
            </div>
            <h1 className="heading-display text-primary-900 mb-6">
              Aftercare <span className="text-gradient">Instructions</span>
            </h1>
            <p className="text-lg text-primary-600 leading-relaxed">
              Proper aftercare ensures optimal results and a smooth recovery. Follow these
              guidelines for the best outcome from your treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-gold-50 border-y border-gold-200 py-6">
        <div className="container-custom">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">
                Emergency Contact Information
              </h3>
              <p className="text-primary-700 mb-2">
                If you experience severe swelling, pain, or any concerning symptoms, please
                contact us immediately:
              </p>
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="text-gold-600 font-semibold hover:text-gold-700"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lip Filler Aftercare */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-primary-900 mb-4 text-center">
              Lip Filler Aftercare
            </h2>
            <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
              Follow these instructions for the first 48 hours after your lip filler treatment
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dos */}
              <div className="border border-cream-300 p-8 bg-cream-50">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-primary-900">DO</h3>
                </div>
                <ul className="space-y-3">
                  {lipFillerAftercare.dos.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="border border-cream-300 p-8 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-primary-900">DON'T</h3>
                </div>
                <ul className="space-y-3">
                  {lipFillerAftercare.donts.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botox Aftercare */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-primary-900 mb-4 text-center">
              Botox Aftercare
            </h2>
            <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
              Follow these instructions for the first 24 hours after your Botox treatment
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dos */}
              <div className="border border-cream-300 p-8 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-primary-900">DO</h3>
                </div>
                <ul className="space-y-3">
                  {botoxAftercare.dos.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="border border-cream-300 p-8 bg-cream-100">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-primary-900">DON'T</h3>
                </div>
                <ul className="space-y-3">
                  {botoxAftercare.donts.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section text-primary-900 mb-12 text-center">
              What to Expect
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 border-l-2 border-gold-400 pl-6 pb-6">
                <div className="flex-shrink-0 w-24 font-semibold text-gold-600">
                  Day 1-2
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">
                    Initial Swelling & Bruising
                  </h3>
                  <p className="text-primary-600">
                    Some swelling, tenderness, and possible bruising are normal. This is when
                    you'll see the most swelling.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-gold-400 pl-6 pb-6">
                <div className="flex-shrink-0 w-24 font-semibold text-gold-600">
                  Day 3-5
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Swelling Subsides</h3>
                  <p className="text-primary-600">
                    Swelling begins to decrease significantly. You'll start to see your
                    results more clearly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-gold-400 pl-6 pb-6">
                <div className="flex-shrink-0 w-24 font-semibold text-gold-600">
                  Week 2
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Final Results Emerge</h3>
                  <p className="text-primary-600">
                    Swelling completely resolves and you'll see your final results. Filler
                    settles into place.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-gold-400 pl-6">
                <div className="flex-shrink-0 w-24 font-semibold text-gold-600">
                  Week 2-4
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">
                    Follow-up (if needed)
                  </h3>
                  <p className="text-primary-600">
                    If any adjustments are needed, we can schedule a touch-up appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white border-t border-cream-300">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display text-primary-900 mb-4">
            Questions About Your Aftercare?
          </h2>
          <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
            Don't hesitate to reach out if you have any concerns or questions about your
            recovery.
          </p>
          <a
            href={`tel:${siteConfig.contact.phoneLink}`}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Us: {siteConfig.contact.phone}
          </a>
        </div>
      </section>
    </>
  )
}

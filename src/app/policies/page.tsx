import { Metadata } from 'next'
import { Shield, Calendar, CreditCard, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Policies | Cancellation, Payment & Privacy',
  description:
    'Read our policies for appointments, cancellations, payments, and privacy at LipFiller NYC. Transparent policies for your peace of mind.',
  keywords: [
    'lipfiller NYC policies',
    'cancellation policy',
    'payment policy',
    'privacy policy aesthetic clinic',
  ],
  openGraph: {
    title: 'Policies | LipFiller NYC',
    description: 'Our appointment, cancellation, payment, and privacy policies.',
  },
}

const policies = [
  {
    icon: Calendar,
    title: 'Appointment & Cancellation Policy',
    content: [
      {
        heading: 'Booking Appointments',
        text: 'Appointments can be booked online through our booking system or by calling us directly. We require a valid phone number and email address to confirm your appointment.',
      },
      {
        heading: 'Cancellation & Rescheduling',
        text: 'We require at least 24 hours notice to cancel or reschedule an appointment. Late cancellations (less than 24 hours) or no-shows may be subject to a cancellation fee of 50% of the service cost.',
      },
      {
        heading: 'Late Arrivals',
        text: 'Please arrive 10 minutes early for your appointment. If you arrive more than 15 minutes late, we may need to reschedule your appointment to avoid rushing your treatment or affecting other clients.',
      },
      {
        heading: 'Consultation Required',
        text: 'All first-time clients are required to have a consultation before treatment. This can be done in person or over the phone and is complimentary.',
      },
    ],
  },
  {
    icon: CreditCard,
    title: 'Payment Policy',
    content: [
      {
        heading: 'Accepted Payment Methods',
        text: 'We accept all major credit cards, debit cards, cash, and digital payment methods (Apple Pay, Google Pay). Payment is due at the time of service.',
      },
      {
        heading: 'Deposits',
        text: 'Certain procedures may require a deposit at the time of booking. Deposits are non-refundable but can be applied to a future appointment if you cancel with proper notice.',
      },
      {
        heading: 'Pricing',
        text: 'All prices are subject to change without notice. The price quoted at the time of your consultation is the price you will pay, even if our general pricing changes before your appointment.',
      },
      {
        heading: 'Packages & Promotions',
        text: 'Package deals and promotional offers cannot be combined unless otherwise stated. Packages must be used within 12 months of purchase.',
      },
    ],
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    content: [
      {
        heading: 'Information We Collect',
        text: 'We collect personal information including your name, contact details, medical history, and treatment records. This information is necessary to provide you with safe and effective care.',
      },
      {
        heading: 'How We Use Your Information',
        text: 'Your information is used solely for providing treatment, maintaining medical records, appointment reminders, and improving our services. We never sell or share your personal information with third parties for marketing purposes.',
      },
      {
        heading: 'HIPAA Compliance',
        text: 'We are fully compliant with HIPAA regulations and take the privacy of your medical information seriously. All records are stored securely and accessed only by authorized personnel.',
      },
      {
        heading: 'Photos & Marketing',
        text: 'We may request to take before and after photos of your treatment for medical records. Separate consent is always obtained before using any photos for marketing purposes, and photos are never shared with your identifying information.',
      },
    ],
  },
  {
    icon: AlertCircle,
    title: 'Treatment & Safety Policy',
    content: [
      {
        heading: 'Medical History',
        text: 'You must disclose your complete medical history, current medications, and allergies before treatment. Failure to disclose relevant medical information may result in complications and releases us from liability.',
      },
      {
        heading: 'Contraindications',
        text: 'Certain medical conditions, medications, or circumstances may make you ineligible for treatment. We reserve the right to refuse service if we believe it would be unsafe.',
      },
      {
        heading: 'Consent Forms',
        text: 'All clients must sign an informed consent form before treatment, acknowledging the risks, benefits, and possible side effects of the procedure.',
      },
      {
        heading: 'Results & Expectations',
        text: 'Results vary by individual and cannot be guaranteed. We will provide realistic expectations during your consultation, but individual results depend on many factors including age, skin type, lifestyle, and body chemistry.',
      },
      {
        heading: 'Touch-Ups & Corrections',
        text: 'Complimentary touch-ups are offered for certain procedures within a specified timeframe. Additional product beyond the standard amount will be charged accordingly.',
      },
    ],
  },
]

export default function PoliciesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Policies - LipFiller NYC',
    description:
      'Appointment, cancellation, payment, and privacy policies for LipFiller NYC',
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
                Transparency
              </span>
              <span className="w-12 h-px bg-gold-400" />
            </div>
            <h1 className="heading-display text-primary-900 mb-6">
              Our <span className="text-gradient">Policies</span>
            </h1>
            <p className="text-lg text-primary-600 leading-relaxed">
              We believe in transparency and clear communication. Please review our policies
              to ensure a smooth and pleasant experience.
            </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-12">
            {policies.map((policy, index) => (
              <div
                key={policy.title}
                className={`border border-cream-300 p-8 md:p-12 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-cream-50'
                }`}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 border border-cream-300 flex items-center justify-center flex-shrink-0 bg-white text-primary-700">
                    <policy.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display text-primary-900 mt-2">
                    {policy.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {policy.content.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">
                        {section.heading}
                      </h3>
                      <p className="text-primary-600 leading-relaxed">{section.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-gold-50 border-y border-gold-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AlertCircle className="w-12 h-12 text-gold-600 mx-auto mb-4" />
            <h2 className="text-2xl font-display text-primary-900 mb-4">
              Important Notice
            </h2>
            <p className="text-primary-700 leading-relaxed mb-6">
              By booking an appointment with LipFiller NYC, you acknowledge that you have read
              and agree to these policies. We reserve the right to update our policies at any
              time. The most current version will always be available on our website.
            </p>
            <p className="text-primary-700 leading-relaxed">
              If you have any questions about our policies, please don't hesitate to contact
              us before booking your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-t border-cream-300">
        <div className="container-custom">
          <p className="text-center text-sm text-primary-500">
            Last Updated: February 2026
          </p>
        </div>
      </section>
    </>
  )
}

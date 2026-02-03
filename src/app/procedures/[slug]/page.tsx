import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, CheckCircle, ArrowLeft, Calendar, Phone } from 'lucide-react'
import { procedures, getProcedureBySlug, getProcedureSlugs } from '@/data/procedures'
import { siteConfig } from '@/data/site-config'

// Convert procedures array to object for compatibility
const proceduresData: Record<string, {
  title: string
  category: string
  description: string
  content: string
  benefits: string[]
  duration: string
  recovery: string
  price: string
  faqs: { question: string; answer: string }[]
}> = Object.fromEntries(
  procedures.map(p => [p.slug, p])
)

// Legacy data for backward compatibility
const legacyProceduresData: Record<string, {
  title: string
  category: string
  description: string
  content: string
  benefits: string[]
  duration: string
  recovery: string
  price: string
  faqs: { question: string; answer: string }[]
}> = {
  'russian-lip-filler': {
    title: 'Russian Lip Filler Technique',
    category: 'Lip Enhancement',
    description:
      'The Russian lip technique creates a heart-shaped, doll-like lip appearance with more height than width.',
    content: `
      <p>The Russian lip filler technique is a specialized method that focuses on creating height and definition in the lips rather than volume. This technique creates a flatter, more defined lip shape with a lifted appearance.</p>
      
      <h3>What Makes Russian Lips Different?</h3>
      <p>Unlike traditional lip filler techniques that focus on adding volume horizontally (making lips look bigger and often resulting in the "duck lip" effect), the Russian technique works vertically. The filler is injected into the lip in a specific pattern that lifts the lip tissue upward, creating that distinctive heart-shaped appearance.</p>
      
      <h3>The Procedure</h3>
      <p>Before the treatment, a topical numbing cream is applied to ensure your comfort. Using a very fine needle or cannula, small amounts of hyaluronic acid filler are carefully injected into multiple points on the lip. The technique requires precision and artistry to create the perfect heart-shaped result.</p>
      
      <h3>Results & Aftercare</h3>
      <p>You'll see immediate results, though the final outcome becomes apparent once any initial swelling subsides (usually within 2-3 days). Results typically last 6-12 months. We provide detailed aftercare instructions to ensure optimal healing and lasting results.</p>
    `,
    benefits: [
      'Natural-looking, heart-shaped lips',
      'Enhanced lip definition and border',
      'No "duck lip" effect',
      'Minimal downtime',
      'Long-lasting results (6-12 months)',
      'Reversible with hyaluronidase if desired',
    ],
    duration: '30-45 minutes',
    recovery: '24-48 hours of mild swelling',
    price: 'Starting at $650',
    faqs: [
      {
        question: 'Does the Russian lip technique hurt?',
        answer:
          'We use topical numbing cream before the procedure, and most fillers contain lidocaine for additional comfort. Most clients report only mild discomfort.',
      },
      {
        question: 'How long do Russian lips last?',
        answer:
          'Results typically last 6-12 months, depending on your metabolism and the specific filler used. Touch-up treatments can extend your results.',
      },
      {
        question: 'Am I a good candidate for Russian lips?',
        answer:
          'The Russian technique works well for most people who want more defined, lifted lips without excessive volume. During your consultation, we\'ll assess your lip anatomy and discuss the best approach for your goals.',
      },
    ],
  },
  'lip-augmentation': {
    title: 'Lip Augmentation',
    category: 'Lip Enhancement',
    description:
      'Enhance your lips with natural-looking volume and definition using premium hyaluronic acid fillers.',
    content: `
      <p>Lip augmentation is one of our most popular procedures, designed to add volume, definition, and symmetry to your lips. Using premium hyaluronic acid fillers, we create beautiful, natural-looking results tailored to your unique facial features.</p>
      
      <h3>Customized Treatment</h3>
      <p>Every lip augmentation at LipFiller NYC is fully customized. During your consultation, we'll discuss your goals, assess your lip anatomy, and create a treatment plan that enhances your natural beauty while maintaining facial harmony.</p>
      
      <h3>The Procedure</h3>
      <p>After applying topical numbing cream, your practitioner will carefully inject small amounts of filler using advanced techniques. The entire procedure takes about 30 minutes, and you can return to most normal activities immediately.</p>
    `,
    benefits: [
      'Customized to your goals',
      'Natural-looking enhancement',
      'Immediate, visible results',
      'Minimal downtime',
      'Safe and reversible',
      'Boosts confidence',
    ],
    duration: '30 minutes',
    recovery: '24-48 hours',
    price: 'Starting at $550',
    faqs: [
      {
        question: 'How much filler will I need?',
        answer:
          'The amount varies based on your natural lip size and desired results. Most first-time clients use 0.5-1ml of filler. We recommend starting conservatively and adding more if desired.',
      },
      {
        question: 'Will my lips look natural?',
        answer:
          'Absolutely! Our goal is always to enhance your natural beauty. We use advanced techniques and premium products to ensure your results look beautiful and natural.',
      },
    ],
  },
  'face-contouring': {
    title: 'Face Contouring',
    category: 'Facial Enhancement',
    description:
      'Sculpt and define your facial features for a more balanced, harmonious appearance.',
    content: `
      <p>Face contouring with dermal fillers is a non-surgical way to enhance your cheekbones, define your jawline, and create a more balanced facial profile. Our expert injectors use advanced techniques to create natural-looking results that enhance your unique beauty.</p>
      
      <h3>Treatment Areas</h3>
      <p>We can enhance multiple areas including cheeks, jawline, chin, and temples. Many clients choose to address multiple areas in a single session for comprehensive facial rejuvenation.</p>
      
      <h3>The Artistry of Contouring</h3>
      <p>Facial contouring requires both medical expertise and artistic vision. Our practitioners understand facial anatomy and proportions, ensuring your results enhance your natural features while maintaining harmony and balance.</p>
    `,
    benefits: [
      'Non-surgical enhancement',
      'Immediate, visible results',
      'Natural-looking contours',
      'Customized treatment',
      'Minimal downtime',
      'Long-lasting results (12-18 months)',
    ],
    duration: '45-60 minutes',
    recovery: '1-2 days',
    price: 'Starting at $800',
    faqs: [
      {
        question: 'Is face contouring painful?',
        answer:
          'We use topical numbing and fillers with lidocaine to ensure your comfort. Most clients experience only mild pressure during the procedure.',
      },
      {
        question: 'How long do results last?',
        answer:
          'Facial contouring results typically last 12-18 months, depending on the area treated and the type of filler used.',
      },
    ],
  },
  'botox': {
    title: 'Botox',
    category: 'Anti-Aging',
    description:
      'Smooth wrinkles and prevent new lines from forming with this gold-standard treatment.',
    content: `
      <p>Botox is the world's most popular non-surgical cosmetic treatment for good reason. It effectively smooths existing wrinkles and prevents new ones from forming, helping you maintain a youthful, refreshed appearance.</p>
      
      <h3>How Botox Works</h3>
      <p>Botox temporarily relaxes the muscles that cause dynamic wrinkles—the lines that form from repeated facial expressions like frowning, squinting, and raising your eyebrows. By relaxing these muscles, your skin appears smoother and more youthful.</p>
      
      <h3>Treatment Areas</h3>
      <p>Common treatment areas include forehead lines, frown lines (between the eyebrows), and crow's feet (around the eyes). Botox can also be used for other concerns like bunny lines, lip flip, and excessive sweating.</p>
    `,
    benefits: [
      'Proven, safe treatment',
      'Quick procedure (15-30 min)',
      'No downtime required',
      'Preventative benefits',
      'Natural-looking results',
      'Results last 3-4 months',
    ],
    duration: '15-30 minutes',
    recovery: 'None',
    price: 'Starting at $12/unit',
    faqs: [
      {
        question: 'When will I see results?',
        answer:
          'You\'ll start to see results within 3-5 days, with full effects visible at 2 weeks.',
      },
      {
        question: 'Will I look frozen?',
        answer:
          'Not when done properly! Our goal is to soften lines while maintaining your natural expressions. We use conservative amounts and precise placement for natural results.',
      },
    ],
  },
  'powder-brows': {
    title: 'Powder Brows',
    category: 'Cosmetic Tattoo',
    description:
      'Achieve perfect, soft, powdery brows that last with this semi-permanent makeup technique.',
    content: `
      <p>Powder brows (also known as ombre brows) create a soft, filled-in look similar to makeup. This semi-permanent makeup technique is perfect for all skin types and provides long-lasting, beautiful results.</p>
      
      <h3>The Technique</h3>
      <p>Using a specialized machine, tiny dots of pigment are deposited into the skin, creating a soft, powdery effect that mimics the look of filled-in brows. The result is soft at the front and gradually builds to more definition at the tail.</p>
      
      <h3>Who Is It For?</h3>
      <p>Powder brows work beautifully for almost everyone, including those with oily skin (where microblading may not hold as well), sparse brows, or anyone who wants to wake up with perfect brows every day.</p>
    `,
    benefits: [
      'Long-lasting results (1-3 years)',
      'Soft, natural look',
      'Suitable for all skin types',
      'Low maintenance',
      'Time-saving daily routine',
      'Customized shape and color',
    ],
    duration: '2-3 hours',
    recovery: '7-10 days',
    price: 'Starting at $450',
    faqs: [
      {
        question: 'How long do powder brows last?',
        answer:
          'Powder brows typically last 1-3 years, depending on your skin type and lifestyle. A touch-up is recommended at 6-8 weeks and annually thereafter.',
      },
      {
        question: 'Is the procedure painful?',
        answer:
          'A topical numbing cream is applied before and during the procedure to ensure your comfort. Most clients describe the sensation as mild scratching.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return getProcedureSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const procedure = proceduresData[slug]

  if (!procedure) {
    return {
      title: 'Procedure Not Found',
    }
  }

  return {
    title: `${procedure.title} | NYC's Premier Treatment`,
    description: procedure.description,
    keywords: [
      procedure.title.toLowerCase(),
      `${procedure.title.toLowerCase()} NYC`,
      `${procedure.category.toLowerCase()} NYC`,
      'aesthetic treatment NYC',
      'cosmetic procedure New York',
    ],
    openGraph: {
      title: `${procedure.title} | LipFiller NYC`,
      description: procedure.description,
    },
  }
}

export default async function ProcedurePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const procedure = proceduresData[slug]

  if (!procedure) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: procedure.title,
    description: procedure.description,
    procedureType: 'Cosmetic',
    howPerformed: procedure.content,
    preparation: 'Consultation required',
    followup: procedure.recovery,
    status: 'Available',
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
          <Link
            href="/procedures"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Procedures
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {procedure.category}
            </span>

            <h1 className="heading-display text-gray-900 mb-6">
              {procedure.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {procedure.description}
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-primary-500" />
                <span>{procedure.duration}</span>
              </div>
              <div className="text-2xl font-bold text-primary-600">
                {procedure.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: procedure.content }}
              />

              {/* Benefits */}
              <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {procedure.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              {procedure.faqs.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {procedure.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="border border-gray-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Booking Card */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Book This Treatment
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{procedure.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Recovery</span>
                      <span className="font-medium">{procedure.recovery}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price</span>
                      <span className="font-medium text-primary-600">
                        {procedure.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a 
                      href={siteConfig.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phoneLink}`}
                      className="btn btn-outline w-full"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Info Card */}
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Free Consultation
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Not sure if this treatment is right for you? Book a free
                    consultation to discuss your goals with our expert
                    practitioners.
                  </p>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 font-medium text-sm hover:text-primary-700"
                  >
                    Schedule Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

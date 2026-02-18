export interface Procedure {
  slug: string
  title: string
  category: string
  description: string
  content: string
  benefits: string[]
  duration: string
  recovery: string
  price: string
  popular?: boolean
  faqs: {
    question: string
    answer: string
  }[]
}

export const procedures: Procedure[] = [
  {
    slug: 'russian-lip-filler',
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
    popular: true,
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
          "The Russian technique works well for most people who want more defined, lifted lips without excessive volume. During your consultation, we'll assess your lip anatomy and discuss the best approach for your goals.",
      },
    ],
  },
  {
    slug: 'lip-augmentation',
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
  {
    slug: 'face-contouring',
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
  {
    slug: 'botox',
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
          "You'll start to see results within 3-5 days, with full effects visible at 2 weeks.",
      },
      {
        question: 'Will I look frozen?',
        answer:
          'Not when done properly! Our goal is to soften lines while maintaining your natural expressions. We use conservative amounts and precise placement for natural results.',
      },
    ],
  },
]

export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug)
}

export function getProcedureSlugs(): string[] {
  return procedures.map((p) => p.slug)
}

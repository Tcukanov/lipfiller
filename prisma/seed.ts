import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  await prisma.user.upsert({
    where: { email: 'admin@lipfiller.nyc' },
    update: {},
    create: {
      email: 'admin@lipfiller.nyc',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    },
  })

  // Create site settings
  await prisma.siteSettings.upsert({
    where: { id: 'main' },
    update: {},
    create: {
      id: 'main',
      siteName: 'LipFiller NYC',
      phone: '646.543.8898',
      email: 'info@lipfiller.nyc',
      address: '245 5th Avenue, Floor 3, New York, NY, 10016',
      heroTitle: 'AESTHETIC MED STUDIO',
      heroSubtitle: 'THE UNITY OF THE MOST MODERN AESTHETIC TRENDS, ARTISTRY, & MEDICAL EXPERTISE',
      aboutText: 'Every day, women spend an average of 55-minutes applying and perfecting their makeup. Those daily routine adds up to $300,000 on makeup during their lifetime. Thankfully, there is an easier way to achieve a head-turning appearance. With our services you will start each day with a flawless look.',
    },
  })

  // Create services
  const services = [
    {
      title: 'Dermal Fillers & Injectables',
      slug: 'dermal-fillers-injectables',
      description: 'Restore volume and smooth wrinkles with premium dermal fillers',
      content: 'Our expert practitioners use the highest quality dermal fillers to restore facial volume, smooth wrinkles, and enhance your natural features. We specialize in lip augmentation, cheek enhancement, jawline contouring, and under-eye treatments.',
      icon: 'Syringe',
      order: 1,
    },
    {
      title: 'Skin Rejuvenation & Bio-stimulation',
      slug: 'skin-rejuvenation',
      description: 'Advanced treatments to revitalize and refresh your skin',
      content: 'Experience the latest in skin rejuvenation technology. Our bio-stimulation treatments promote collagen production, improve skin texture, and restore your youthful glow. Treatments include microneedling, PRP therapy, and advanced laser treatments.',
      icon: 'Sparkles',
      order: 2,
    },
    {
      title: 'Microblading & Cosmetic Tattoo',
      slug: 'microblading-cosmetic-tattoo',
      description: 'Wake up with perfect brows every day',
      content: 'Our skilled artists create natural-looking, beautiful brows using the microblading technique. We also offer cosmetic tattooing for lips and eyeliner, helping you save time on your daily routine while always looking your best.',
      icon: 'Pen',
      order: 3,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    })
  }

  // Create procedures
  const procedures = [
    {
      title: 'Russian Lip Filler Technique',
      slug: 'russian-lip-filler',
      category: 'Lip Enhancement',
      description: 'The Russian lip technique creates a heart-shaped, doll-like lip appearance with more height than width.',
      content: 'The Russian lip filler technique is a specialized method that focuses on creating height and definition in the lips rather than volume. This technique creates a flatter, more defined lip shape with a lifted appearance. The result is a heart-shaped, doll-like lip that appears fuller without the "duck lip" effect.',
      benefits: 'Natural-looking results, Enhanced lip definition, Heart-shaped appearance, No duck lip effect, Long-lasting results',
      duration: '30-45 minutes',
      recovery: '24-48 hours',
      price: 'Starting at $650',
      order: 1,
    },
    {
      title: 'Lip Augmentation',
      slug: 'lip-augmentation',
      category: 'Lip Enhancement',
      description: 'Enhance your lips with natural-looking volume and definition.',
      content: 'Our lip augmentation treatments use premium hyaluronic acid fillers to add volume, define your lip border, and create the perfect pout. Our experienced practitioners customize each treatment to your unique facial features and desired results.',
      benefits: 'Customized results, Natural-looking enhancement, Immediate results, Minimal downtime, Reversible treatment',
      duration: '30 minutes',
      recovery: '24-48 hours',
      price: 'Starting at $550',
      order: 2,
    },
    {
      title: 'Face Contouring',
      slug: 'face-contouring',
      category: 'Facial Enhancement',
      description: 'Sculpt and define your facial features for a more balanced appearance.',
      content: 'Face contouring with dermal fillers can enhance your cheekbones, define your jawline, and create a more balanced facial profile. Our expert injectors use advanced techniques to create natural-looking results that enhance your unique beauty.',
      benefits: 'Non-surgical enhancement, Immediate results, Natural-looking contours, Customized treatment, Minimal downtime',
      duration: '45-60 minutes',
      recovery: '1-2 days',
      price: 'Starting at $800',
      order: 3,
    },
    {
      title: 'Botox',
      slug: 'botox',
      category: 'Anti-Aging',
      description: 'Smooth wrinkles and prevent new lines from forming.',
      content: 'Botox is the gold standard for treating and preventing fine lines and wrinkles. Our skilled practitioners use precise injection techniques to smooth forehead lines, crow\'s feet, and frown lines while maintaining your natural expressions.',
      benefits: 'Proven results, Quick treatment, No downtime, Preventative benefits, Natural-looking results',
      duration: '15-30 minutes',
      recovery: 'None',
      price: 'Starting at $12/unit',
      order: 4,
    },
    {
      title: 'Powder Brows',
      slug: 'powder-brows',
      category: 'Cosmetic Tattoo',
      description: 'Achieve perfect, soft, powdery brows that last.',
      content: 'Powder brows create a soft, filled-in look similar to makeup. This technique is perfect for all skin types and provides long-lasting, beautiful results. Wake up every day with perfect brows without the daily hassle of makeup application.',
      benefits: 'Long-lasting results, Soft natural look, Suitable for all skin types, Low maintenance, Time-saving',
      duration: '2-3 hours',
      recovery: '7-10 days',
      price: 'Starting at $450',
      order: 5,
    },
  ]

  for (const procedure of procedures) {
    await prisma.procedure.upsert({
      where: { slug: procedure.slug },
      update: procedure,
      create: procedure,
    })
  }

  // Create FAQs
  const faqs = [
    {
      question: 'How long do lip fillers last?',
      answer: 'Lip fillers typically last between 6-12 months, depending on the type of filler used and your individual metabolism. Touch-up treatments can help maintain your results.',
      category: 'Lip Fillers',
      order: 1,
    },
    {
      question: 'Is the procedure painful?',
      answer: 'We use topical numbing cream and fillers containing lidocaine to ensure your comfort during the procedure. Most clients describe the sensation as mild pressure with minimal discomfort.',
      category: 'General',
      order: 2,
    },
    {
      question: 'What is the recovery time?',
      answer: 'Most clients can return to normal activities immediately. Some swelling and bruising may occur but typically resolves within 24-48 hours. We provide detailed aftercare instructions to optimize your results.',
      category: 'General',
      order: 3,
    },
    {
      question: 'How do I prepare for my appointment?',
      answer: 'Avoid blood thinners, alcohol, and supplements like fish oil for 1 week before your appointment. Come with clean skin and no makeup on the treatment area.',
      category: 'General',
      order: 4,
    },
  ]

  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq,
    })
  }

  // Create testimonials
  const testimonials = [
    {
      name: 'Sarah M.',
      content: 'Absolutely love my results! The team made me feel so comfortable and the Russian lip technique gave me exactly the look I wanted - natural but enhanced.',
      rating: 5,
    },
    {
      name: 'Jessica L.',
      content: 'Best decision I ever made! My powder brows save me so much time every morning. The attention to detail was incredible.',
      rating: 5,
    },
    {
      name: 'Amanda K.',
      content: 'Professional, clean, and amazing results. I\'ve been coming here for Botox for over a year and wouldn\'t go anywhere else.',
      rating: 5,
    },
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

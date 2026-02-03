export interface Service {
  title: string
  description: string
  href: string
}

export const services: Service[] = [
  {
    title: 'Dermal Fillers & Injectables',
    description:
      'Restore volume and smooth wrinkles with premium dermal fillers. Specializing in lip augmentation, cheek enhancement, and jawline contouring.',
    href: '/procedures#dermal-fillers',
  },
  {
    title: 'Skin Rejuvenation & Bio-stimulation',
    description:
      'Advanced treatments to revitalize your skin. Microneedling, PRP therapy, and cutting-edge laser treatments for a youthful glow.',
    href: '/procedures#skin-rejuvenation',
  },
  {
    title: 'Microblading & Cosmetic Tattoo',
    description:
      'Wake up with perfect brows every day. Natural-looking microblading and cosmetic tattooing for lips and eyeliner.',
    href: '/procedures#microblading',
  },
]

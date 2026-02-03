export interface PricingItem {
  name: string
  price: string
  description: string
  popular?: boolean
}

export interface PricingCategory {
  title: string
  services: PricingItem[]
}

export interface Package {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

export const pricingPackages: Package[] = [
  {
    name: 'Lip Lover',
    price: '$999',
    description: 'Perfect for lip enhancement enthusiasts',
    features: [
      '1ml Premium Lip Filler',
      'Lip Flip (Botox)',
      'Aftercare Kit',
      'Free Touch-Up (within 2 weeks)',
    ],
  },
  {
    name: 'Full Glow',
    price: '$1,999',
    description: 'Complete facial rejuvenation',
    features: [
      '1ml Lip Filler',
      'Cheek Enhancement',
      'Full Face Botox',
      'Microneedling Session',
      '15% Off Future Treatments',
    ],
    featured: true,
  },
  {
    name: 'Brow Boss',
    price: '$599',
    description: 'Wake up with perfect brows',
    features: [
      'Powder Brows or Microblading',
      'Brow Shaping Consultation',
      'Aftercare Kit',
      'Free Touch-Up (6-8 weeks)',
    ],
  },
]

export const pricingCategories: PricingCategory[] = [
  {
    title: 'Lip Enhancement',
    services: [
      {
        name: 'Russian Lip Technique',
        price: '$650+',
        description: 'Heart-shaped, lifted lips with natural definition',
        popular: true,
      },
      {
        name: 'Lip Augmentation (0.5ml)',
        price: '$550',
        description: 'Natural volume enhancement',
      },
      {
        name: 'Lip Augmentation (1ml)',
        price: '$750',
        description: 'Fuller, more dramatic results',
      },
      {
        name: 'Lip Flip (Botox)',
        price: '$150',
        description: 'Subtle upper lip enhancement',
      },
    ],
  },
  {
    title: 'Facial Enhancement',
    services: [
      {
        name: 'Cheek Enhancement',
        price: '$800+',
        description: 'Restore volume and define cheekbones',
      },
      {
        name: 'Jawline Contouring',
        price: '$900+',
        description: 'Sculpt and define the jawline',
      },
      {
        name: 'Chin Enhancement',
        price: '$650+',
        description: 'Balance facial proportions',
      },
      {
        name: 'Under Eye Treatment',
        price: '$600+',
        description: 'Reduce dark circles and hollowness',
      },
      {
        name: 'Full Face Contouring',
        price: '$2,000+',
        description: 'Comprehensive facial sculpting',
      },
    ],
  },
  {
    title: 'Botox & Anti-Aging',
    services: [
      {
        name: 'Botox (per unit)',
        price: '$12',
        description: 'Premium Botox treatment',
      },
      {
        name: 'Forehead Lines',
        price: '$250+',
        description: 'Approximately 15-25 units',
      },
      {
        name: 'Frown Lines (11s)',
        price: '$200+',
        description: 'Approximately 15-20 units',
      },
      {
        name: "Crow's Feet",
        price: '$200+',
        description: 'Approximately 12-24 units',
      },
      {
        name: 'Full Face Botox',
        price: '$500+',
        description: 'Comprehensive wrinkle treatment',
      },
    ],
  },
  {
    title: 'Skin Rejuvenation',
    services: [
      {
        name: 'Microneedling',
        price: '$350',
        description: 'Stimulate collagen production',
      },
      {
        name: 'Microneedling + PRP',
        price: '$550',
        description: 'Enhanced healing with platelet-rich plasma',
      },
      {
        name: 'Chemical Peel',
        price: '$150+',
        description: 'Refresh and renew skin',
      },
      {
        name: 'PRP Facial',
        price: '$500',
        description: 'Vampire facial for rejuvenation',
      },
    ],
  },
  {
    title: 'Permanent Makeup',
    services: [
      {
        name: 'Powder Brows',
        price: '$450',
        description: 'Soft, filled-in brow look',
      },
      {
        name: 'Microblading',
        price: '$400',
        description: 'Natural hair-like strokes',
      },
      {
        name: 'Combination Brows',
        price: '$500',
        description: 'Microblading + powder shading',
      },
      {
        name: 'Lip Blush',
        price: '$400',
        description: 'Semi-permanent lip color',
      },
      {
        name: 'Brow Touch-Up',
        price: '$150',
        description: 'Annual maintenance session',
      },
    ],
  },
]

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
    price: '$1,799',
    description: 'Complete facial enhancement',
    features: [
      '1ml Lip Filler',
      'Cheek Enhancement',
      'Full Face Botox',
      'Under Eye Treatment',
      '15% Off Future Treatments',
    ],
    featured: true,
  },
  {
    name: 'Contour & Sculpt',
    price: '$1,499',
    description: 'Define and enhance your features',
    features: [
      'Jawline Contouring',
      'Cheek Enhancement',
      'Chin Enhancement',
      'Aftercare Kit',
      '10% Off Future Treatments',
    ],
  },
]

export const pricingCategories: PricingCategory[] = [
  {
    title: 'Lip Enhancement',
    services: [
      {
        name: 'Russian Lip Technique',
        price: '$450+',
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
]

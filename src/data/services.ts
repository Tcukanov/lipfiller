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
    title: 'Botox & Anti-Aging',
    description:
      'Smooth wrinkles and prevent new lines from forming with Botox. Expert treatment for forehead lines, crow\'s feet, and frown lines.',
    href: '/procedures/botox',
  },
  {
    title: 'Facial Contouring',
    description:
      'Sculpt and define your facial features with expert contouring techniques. Create a more balanced, harmonious appearance non-surgically.',
    href: '/procedures/face-contouring',
  },
]

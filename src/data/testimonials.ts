export interface Testimonial {
  name: string
  treatment: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    treatment: 'Russian Lip Technique',
    text: 'Absolutely love my results! The team made me feel so comfortable and the Russian lip technique gave me exactly the look I wanted - natural but enhanced.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    treatment: 'Powder Brows',
    text: "Best decision I ever made! My powder brows save me so much time every morning. The attention to detail was incredible.",
    rating: 5,
  },
  {
    name: 'Amanda K.',
    treatment: 'Botox',
    text: "Professional, clean, and amazing results. I've been coming here for Botox for over a year and wouldn't go anywhere else.",
    rating: 5,
  },
]

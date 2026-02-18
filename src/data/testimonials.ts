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
    treatment: 'Face Contouring',
    text: "Amazing transformation! The facial contouring gave me such beautiful definition. The results look so natural and balanced.",
    rating: 5,
  },
  {
    name: 'Amanda K.',
    treatment: 'Botox',
    text: "Professional, clean, and amazing results. I've been coming here for Botox for over a year and wouldn't go anywhere else.",
    rating: 5,
  },
]

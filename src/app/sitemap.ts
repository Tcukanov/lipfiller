import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lipfiller.nyc'

  const staticPages = [
    '',
    '/procedures',
    '/procedures/russian-lip-filler',
    '/procedures/lip-augmentation',
    '/procedures/face-contouring',
    '/procedures/botox',
    '/procedures/powder-brows',
    '/pricing',
    '/gallery',
    '/contact',
    '/about',
    '/aftercare',
    '/policies',
  ]

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('procedures') ? 0.9 : 0.8,
  }))
}

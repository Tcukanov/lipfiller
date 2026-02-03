import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { SettingsForm } from '@/components/admin/SettingsForm'

async function getSettings() {
  let settings = await prisma.siteSettings.findFirst()

  if (!settings) {
    settings = await prisma.siteSettings.create({
      data: {
        id: 'main',
        siteName: 'LipFiller NYC',
        phone: '646.543.8898',
        email: 'info@lipfiller.nyc',
        address: '245 5th Avenue, Floor 3, New York, NY, 10016',
        heroTitle: 'AESTHETIC MED STUDIO',
        heroSubtitle:
          'THE UNITY OF THE MOST MODERN AESTHETIC TRENDS, ARTISTRY, & MEDICAL EXPERTISE',
        aboutText: '',
      },
    })
  }

  return settings
}

export default async function AdminSettingsPage() {
  const session = await getSession()

  if (!session) {
    redirect('/admin/login')
  }

  const settings = await getSettings()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
        <p className="text-gray-600">
          Update your business information and site content.
        </p>
      </div>

      <SettingsForm settings={settings} />
    </div>
  )
}

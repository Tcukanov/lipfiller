import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function PUT(request: Request) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { siteName, phone, email, address, heroTitle, heroSubtitle, aboutText } =
      body

    const settings = await prisma.siteSettings.upsert({
      where: { id: 'main' },
      update: {
        siteName,
        phone,
        email,
        address,
        heroTitle,
        heroSubtitle,
        aboutText,
      },
      create: {
        id: 'main',
        siteName,
        phone,
        email,
        address,
        heroTitle,
        heroSubtitle,
        aboutText,
      },
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Update settings error:', error)
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

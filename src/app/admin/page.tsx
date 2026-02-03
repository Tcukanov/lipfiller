import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import {
  Syringe,
  Image,
  MessageSquare,
  Mail,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
} from 'lucide-react'

async function getStats() {
  const [proceduresCount, galleryCount, testimonialsCount, contactsCount, unreadContacts] =
    await Promise.all([
      prisma.procedure.count(),
      prisma.galleryItem.count(),
      prisma.testimonial.count(),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { isRead: false } }),
    ])

  return {
    proceduresCount,
    galleryCount,
    testimonialsCount,
    contactsCount,
    unreadContacts,
  }
}

async function getRecentContacts() {
  return prisma.contactSubmission.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
  })
}

export default async function AdminDashboard() {
  const session = await getSession()

  if (!session) {
    redirect('/admin/login')
  }

  const stats = await getStats()
  const recentContacts = await getRecentContacts()

  const statCards = [
    {
      title: 'Procedures',
      value: stats.proceduresCount,
      icon: Syringe,
      href: '/admin/procedures',
      color: 'bg-primary-500',
    },
    {
      title: 'Gallery Items',
      value: stats.galleryCount,
      icon: Image,
      href: '/admin/gallery',
      color: 'bg-gold-500',
    },
    {
      title: 'Testimonials',
      value: stats.testimonialsCount,
      icon: MessageSquare,
      href: '/admin/testimonials',
      color: 'bg-secondary-500',
    },
    {
      title: 'Contact Submissions',
      value: stats.contactsCount,
      icon: Mail,
      href: '/admin/contacts',
      color: 'bg-green-500',
      badge: stats.unreadContacts > 0 ? stats.unreadContacts : undefined,
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s an overview of your site.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <Link
            key={stat.title}
            href={stat.href}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow relative"
          >
            {stat.badge && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {stat.badge}
              </span>
            )}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg ${stat.color} text-white flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Contacts */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Contact Submissions
          </h2>
          <Link
            href="/admin/contacts"
            className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center gap-1"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {recentContacts.length > 0 ? (
          <div className="divide-y">
            {recentContacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-4 flex items-center justify-between ${
                  !contact.isRead ? 'bg-primary-50' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    {!contact.isRead && (
                      <span className="bg-primary-600 text-white text-xs px-2 py-0.5 rounded">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{contact.email}</p>
                  {contact.service && (
                    <p className="text-sm text-primary-600">{contact.service}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No contact submissions yet.
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <Link
          href="/admin/procedures"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group"
        >
          <Syringe className="w-8 h-8 text-primary-500 mb-3" />
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
            Manage Procedures
          </h3>
          <p className="text-sm text-gray-500">Add or edit treatment info</p>
        </Link>

        <Link
          href="/admin/gallery"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group"
        >
          <Image className="w-8 h-8 text-gold-500 mb-3" />
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
            Update Gallery
          </h3>
          <p className="text-sm text-gray-500">Add before/after photos</p>
        </Link>

        <Link
          href="/admin/settings"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group"
        >
          <TrendingUp className="w-8 h-8 text-secondary-500 mb-3" />
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
            Site Settings
          </h3>
          <p className="text-sm text-gray-500">Update contact & business info</p>
        </Link>
      </div>
    </div>
  )
}

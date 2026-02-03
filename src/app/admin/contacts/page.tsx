import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ContactList } from '@/components/admin/ContactList'

async function getContacts() {
  return prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export default async function AdminContactsPage() {
  const session = await getSession()

  if (!session) {
    redirect('/admin/login')
  }

  const contacts = await getContacts()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Contact Submissions</h1>
        <p className="text-gray-600">
          View and manage contact form submissions from potential clients.
        </p>
      </div>

      <ContactList contacts={contacts} />
    </div>
  )
}

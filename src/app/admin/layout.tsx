import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  // Allow access to login page without authentication
  // The login page will handle its own redirect if already authenticated

  return (
    <div className="min-h-screen bg-gray-100">
      {session ? (
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      ) : (
        <main>{children}</main>
      )}
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Image,
  MessageSquare,
  Settings,
  LogOut,
  Syringe,
  HelpCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Procedures', href: '/admin/procedures', icon: Syringe },
  { name: 'Gallery', href: '/admin/gallery', icon: Image },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { name: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { name: 'Contact Submissions', href: '/admin/contacts', icon: FileText },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-64 bg-secondary-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="block">
          <span className="text-xl font-display font-bold tracking-tight">
            <span className="text-primary-400">Lip</span>
            <span className="text-white">Filler</span>
            <span className="text-gold-400">.nyc</span>
          </span>
          <span className="block text-xs text-gray-400 mt-1">Admin Panel</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white text-sm transition-colors"
        >
          View Site →
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white text-sm transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  )
}

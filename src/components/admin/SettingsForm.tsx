'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'

interface Settings {
  id: string
  siteName: string
  phone: string
  email: string
  address: string
  heroTitle: string
  heroSubtitle: string
  aboutText: string
}

export function SettingsForm({ settings }: { settings: Settings }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState(settings)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to save')

      toast.success('Settings saved successfully!')
    } catch {
      toast.error('Failed to save settings')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Business Information */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Business Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="siteName" className="label">
              Site Name
            </label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="phone" className="label">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="address" className="label">
              Business Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Hero Section
        </h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="heroTitle" className="label">
              Hero Title
            </label>
            <input
              type="text"
              id="heroTitle"
              name="heroTitle"
              value={formData.heroTitle}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="heroSubtitle" className="label">
              Hero Subtitle
            </label>
            <textarea
              id="heroSubtitle"
              name="heroSubtitle"
              rows={2}
              value={formData.heroSubtitle}
              onChange={handleChange}
              className="input resize-none"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          About Section
        </h2>

        <div>
          <label htmlFor="aboutText" className="label">
            About Text
          </label>
          <textarea
            id="aboutText"
            name="aboutText"
            rows={4}
            value={formData.aboutText}
            onChange={handleChange}
            className="input resize-none"
            placeholder="Tell visitors about your practice..."
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" isLoading={isLoading}>
          <Save className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </form>
  )
}

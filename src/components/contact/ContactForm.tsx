'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'

const services = [
  'Russian Lip Technique',
  'Lip Augmentation',
  'Face Contouring',
  'Botox',
  'Skin Rejuvenation',
  'Powder Brows',
  'Microblading',
  'Other',
]

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send message')

      toast.success('Message sent successfully! We\'ll be in touch soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    } catch {
      toast.error('Failed to send message. Please try again or call us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="service" className="label">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="input resize-none"
          placeholder="Tell us about your goals or ask any questions..."
        />
      </div>

      <Button type="submit" isLoading={isLoading} className="w-full sm:w-auto">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
    </form>
  )
}

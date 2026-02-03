'use client'

import { useState } from 'react'
import { Mail, Phone, Calendar, Check, Trash2, X } from 'lucide-react'
import toast from 'react-hot-toast'

interface Contact {
  id: string
  name: string
  email: string
  phone: string | null
  service: string | null
  message: string
  isRead: boolean
  createdAt: Date
}

export function ContactList({ contacts: initialContacts }: { contacts: Contact[] }) {
  const [contacts, setContacts] = useState(initialContacts)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: true }),
      })

      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isRead: true } : c))
      )

      if (selectedContact?.id === id) {
        setSelectedContact((prev) => (prev ? { ...prev, isRead: true } : null))
      }

      toast.success('Marked as read')
    } catch {
      toast.error('Failed to update')
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return

    try {
      await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' })

      setContacts((prev) => prev.filter((c) => c.id !== id))
      if (selectedContact?.id === id) {
        setSelectedContact(null)
      }

      toast.success('Contact deleted')
    } catch {
      toast.error('Failed to delete')
    }
  }

  const unreadCount = contacts.filter((c) => !c.isRead).length

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">
              {contacts.length} submissions
            </span>
            {unreadCount > 0 && (
              <span className="bg-primary-100 text-primary-700 text-sm font-medium px-2 py-1 rounded">
                {unreadCount} unread
              </span>
            )}
          </div>
        </div>

        <div className="divide-y max-h-[600px] overflow-y-auto">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                  selectedContact?.id === contact.id ? 'bg-primary-50' : ''
                } ${!contact.isRead ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900 truncate">
                        {contact.name}
                      </p>
                      {!contact.isRead && (
                        <span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{contact.email}</p>
                    {contact.service && (
                      <p className="text-sm text-primary-600">{contact.service}</p>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {contact.message}
                </p>
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No contact submissions yet.
            </div>
          )}
        </div>
      </div>

      {/* Detail View */}
      <div className="bg-white rounded-xl shadow-sm">
        {selectedContact ? (
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedContact.name}
                </h2>
                {selectedContact.service && (
                  <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-2 py-1 rounded mt-2">
                    {selectedContact.service}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <a
                  href={`mailto:${selectedContact.email}`}
                  className="hover:text-primary-600"
                >
                  {selectedContact.email}
                </a>
              </div>
              {selectedContact.phone && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="hover:text-primary-600"
                  >
                    {selectedContact.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Message</h3>
              <p className="text-gray-600 whitespace-pre-wrap">
                {selectedContact.message}
              </p>
            </div>

            <div className="flex gap-3">
              {!selectedContact.isRead && (
                <button
                  onClick={() => markAsRead(selectedContact.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Check className="w-4 h-4" />
                  Mark as Read
                </button>
              )}
              <a
                href={`mailto:${selectedContact.email}?subject=Re: Your inquiry at LipFiller NYC`}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Reply via Email
              </a>
              <button
                onClick={() => deleteContact(selectedContact.id)}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-auto"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center p-8 text-gray-500">
            Select a submission to view details
          </div>
        )}
      </div>
    </div>
  )
}

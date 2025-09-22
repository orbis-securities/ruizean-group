'use client'

import { useState } from 'react'
import { Modal, Input, Button, Toast } from '@/components/ui'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState<'success' | 'error'>('success')
  const [showError, setShowError] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)

    try {
      const response = await fetch('https://us-central1-orbis-cms.cloudfunctions.net/ruisean_sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // 성공 토스트 표시
        setToastMessage('Message sent successfully! We\'ll get back to you soon.')
        setToastType('success')
        setShowToast(true)

        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })

        // 모달은 자동으로 닫지 않음 (사용자가 직접 닫아야 함)
      } else {
        setShowError(true)
        console.error('Submit error:', result)
      }
    } catch (error) {
      setShowError(true)
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Toast Notification */}
      <Toast
        isVisible={showToast}
        message={toastMessage}
        type={toastType}
        onClose={() => setShowToast(false)}
        duration={3000}
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        label="Contact"
        title="Let's Connect"
        description="Whether you're a founder looking for capital or a partner exploring collaboration, we'd love to hear from you"
      >
      {/* 연락 폼 */}
      <form onSubmit={handleSubmit}>
        <div
          className="w-full max-w-[816px] mx-auto flex flex-col"
          style={{ gap: '8px' }}
        >
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            disabled={isSubmitting}
          />

          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            disabled={isSubmitting}
          />

          <Input
            type="tel"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            disabled={isSubmitting}
          />

          <Input
            placeholder="Company (optional)"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            disabled={isSubmitting}
          />

          <textarea
            className="
              w-full h-[120px] px-4 py-[14px] rounded-xl
              border border-[#F2F2F2] bg-white
              font-funnel-sans font-medium text-sm text-black
              leading-[1.4] resize-none
              placeholder:text-gray-400
              focus:outline-none
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            placeholder="Message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            required
            disabled={isSubmitting}
            style={{ letterSpacing: '0%' }}
          />

          {/* Error Message (only shown in form) */}
          {showError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              ❌ Failed to send message. Please try again.
            </div>
          )}

          {/* 제출 버튼 */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </div>
      </form>
      </Modal>
    </>
  )
}
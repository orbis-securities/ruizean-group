'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { SectionHeader } from '@/components/ui'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  label?: string
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  label,
  title,
  description,
  children,
  className
}: ModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden' // 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* 모달 */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`
                w-full max-w-[896px] max-h-[90vh]
                bg-white rounded-xl p-10
                flex flex-col overflow-hidden
                shadow-2xl relative
                ${className || ''}
              `}
              style={{ gap: '24px' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 닫기 버튼 */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 헤더 영역 */}
              <div className="text-center">
                <SectionHeader
                  label={label}
                  title={title}
                  description={description}
                />
              </div>

              {/* 상단 구분선 */}
              <div className="w-full h-px border-t border-[#EDEDED]"></div>

              {/* 컨텐츠 영역 */}
              <div className="flex-1 overflow-y-auto">
                {children || (
                  <div className="min-h-[200px] flex items-center justify-center text-gray-400">
                    컨텐츠가 들어갈 자리입니다
                  </div>
                )}
              </div>

              {/* 하단 구분선 */}
              <div className="w-full h-px border-t border-[#EDEDED]"></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  label,
  error,
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      {/* 라벨 */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}

      {/* 인풋 */}
      <input
        id={inputId}
        className={cn(
          // 기본 스타일 - 816px x 48px, padding 14px 16px, border-radius 12px
          'w-full max-w-[816px] h-[48px]',
          'px-4 py-[14px]', // 16px 좌우, 14px 상하
          'rounded-xl', // 12px 반경
          'border border-[#F2F2F2]',
          'bg-white',
          // 폰트 스타일 - Funnel Sans Medium 14px
          'font-funnel-sans font-medium text-sm text-black',
          'leading-[1.4]', // 140% 행간
          // 상태별 스타일
          'placeholder:text-gray-400',
          'focus:outline-none',
          'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed',
          // 에러 상태
          error && 'border-red-300 focus:ring-red-500',
          className
        )}
        ref={ref}
        style={{
          gap: '10px',
          letterSpacing: '0%'
        }}
        {...props}
      />

      {/* 에러 메시지 */}
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
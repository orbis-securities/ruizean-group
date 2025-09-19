import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  loading = false,
  disabled,
  children,
  ...props
}, ref) => {
  const variants = {
    primary: 'bg-[#3A6ABB] hover:bg-[#2E5AA6] text-white',
  }

  return (
    <button
      className={cn(
        // 기본 스타일 - 텍스트에 맞게 자동 조정, padding 12px 24px, border-radius 12px
        'inline-flex items-center justify-center',
        'min-w-[120px] sm:min-w-[150px] h-[40px] sm:h-[44px]',
        'px-6 py-3', // 24px 좌우, 12px 상하
        'rounded-xl', // 12px 반경
        'gap-2', // 8px 간격
        // 폰트 스타일 - Funnel Sans, 500 weight, 14px, line-height 1.4
        'font-funnel-sans font-light text-sm leading-[1.4]',
        'transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-[#3A6ABB] focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        // variant 적용
        variants[variant],
        // loading 상태
        loading && 'cursor-wait',
        className
      )}
      disabled={disabled || loading}
      ref={ref}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
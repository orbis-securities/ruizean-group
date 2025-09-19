import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'wide' | 'narrow'
  padding?: 'default' | 'none' | 'sm' | 'lg'
}

export default function Container({
  children,
  className,
  size = 'default',
  padding = 'default'
}: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-4xl',      // ~896px
    default: 'max-w-content', // 1500px (custom)
    wide: 'max-w-screen-2xl'  // ~1536px
  }

  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    default: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  }

  return (
    <div
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
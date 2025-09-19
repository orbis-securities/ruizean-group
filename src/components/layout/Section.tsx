import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'default' | 'wide' | 'narrow'
  padding?: 'none' | 'sm' | 'default' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'transparent'
  containedBackground?: boolean
}

export default function Section({
  children,
  className,
  containerSize = 'default',
  padding = 'default',
  background = 'transparent',
  containedBackground = false
}: SectionProps) {
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    default: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  }

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: ''
  }

  if (containedBackground) {
    return (
      <section className={cn(paddingClasses[padding], className)}>
        <Container
          size={containerSize}
          className={cn(backgroundClasses[background])}
        >
          {children}
        </Container>
      </section>
    )
  }

  return (
    <section
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}
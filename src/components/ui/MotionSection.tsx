'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionSectionProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function MotionSection({
  children,
  delay = 0,
  duration = 1.2,
  className
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
import type { Metadata } from 'next'
import './globals.css'
import { funnelDisplay, funnelSans, pretendard, atkinsonMono } from './fonts'

export const metadata: Metadata = {
  title: 'Ruizean Group',
  description: 'Ruizean Group Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body
        className={`
          ${funnelDisplay.variable}
          ${funnelSans.variable}
          ${pretendard.variable}
          ${atkinsonMono.variable}
          font-pretendard
        `}
      >
        {children}
      </body>
    </html>
  )
}
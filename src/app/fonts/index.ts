import localFont from 'next/font/local'

// Funnel Display - 제목용
export const funnelDisplay = localFont({
  src: [
    { path: './files/FunnelDisplay-Light.ttf', weight: '300' },
    { path: './files/FunnelDisplay-Regular.ttf', weight: '400' },
    { path: './files/FunnelDisplay-Medium.ttf', weight: '500' },
    { path: './files/FunnelDisplay-SemiBold.ttf', weight: '600' },
    { path: './files/FunnelDisplay-Bold.ttf', weight: '700' },
    { path: './files/FunnelDisplay-ExtraBold.ttf', weight: '800' },
  ],
  variable: '--font-funnel-display',
  display: 'swap',
})

// Funnel Sans - 본문용
export const funnelSans = localFont({
  src: [
    { path: './files/FunnelSans-Light.ttf', weight: '300' },
    { path: './files/FunnelSans-Regular.ttf', weight: '400' },
    { path: './files/FunnelSans-Medium.ttf', weight: '500' },
    { path: './files/FunnelSans-SemiBold.ttf', weight: '600' },
    { path: './files/FunnelSans-Bold.ttf', weight: '700' },
  ],
  variable: '--font-funnel-sans',
  display: 'swap',
})

// Pretendard - 한글 최적화
export const pretendard = localFont({
  src: [
    { path: './files/Pretendard-Light.woff2', weight: '300' },
    { path: './files/Pretendard-Regular.woff2', weight: '400' },
    { path: './files/Pretendard-Medium.woff2', weight: '500' },
    { path: './files/Pretendard-SemiBold.woff2', weight: '600' },
    { path: './files/Pretendard-Bold.woff2', weight: '700' },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})

// Atkinson Hyperlegible Mono - 코드/데이터용
export const atkinsonMono = localFont({
  src: [
    { path: './files/AtkinsonHyperlegibleMono-Regular.ttf', weight: '400' },
    { path: './files/AtkinsonHyperlegibleMono-Bold.ttf', weight: '700' },
  ],
  variable: '--font-atkinson-mono',
  display: 'swap',
})
import Image from 'next/image'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

interface HeaderProps {
  onPitchClick?: () => void
}

export default function Header({ onPitchClick }: HeaderProps) {
  return (
    <header className="w-full h-[76px] border-b border-[#F7F7F7]">
      <div className="w-full max-w-[1500px] mx-auto h-full px-4 sm:px-5 py-4 flex justify-center sm:justify-between items-center">
        {/* 로고 및 회사명 (모바일: 중앙, 데스크톱: 왼쪽) */}
        <div className="flex items-center">
          {/* 로고 */}
          <div className="w-6 h-6 sm:w-8 sm:h-8">
            <Image
              src="/sources/svg/ruizeanLogo.svg"
              alt="Ruizean Logo"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>

          {/* 회사명 */}
          <h1
            className="ml-2 sm:ml-[6.4px] font-pretendard font-bold text-lg sm:text-2xl leading-none tracking-[-0.01em] text-[#191919] whitespace-nowrap"
            style={{ lineHeight: '100%' }}
          >
            Ruizean Group
          </h1>
        </div>

        {/* 오른쪽 버튼 (데스크톱만) */}
        <div className="hidden sm:flex items-center">
          <Button onClick={onPitchClick}>Pitch Your Ideas</Button>
        </div>
      </div>
    </header>
  )
}
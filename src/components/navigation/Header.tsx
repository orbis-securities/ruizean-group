import Image from 'next/image'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

export default function Header() {
  return (
    <header className="w-full h-[76px] border-b border-[#F7F7F7]">
      <Container className="h-full px-5 py-4 flex justify-between items-center">
        {/* 왼쪽 로고 및 회사명 */}
        <div className="flex items-center min-w-fit h-full">
          {/* 로고 */}
          <div className="w-8 h-8 flex items-center justify-center">
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
            className="ml-[6.4px] min-w-[163px] h-[29px] font-pretendard font-bold text-2xl leading-none tracking-[-0.01em] text-[#191919] whitespace-nowrap flex items-center"
            style={{ lineHeight: '100%' }}
          >
            Ruizean Group
          </h1>
        </div>

        {/* 오른쪽 버튼 */}
        <div className="flex items-center">
          <Button>Pitch Your Ideas</Button>
        </div>
      </Container>
    </header>
  )
}
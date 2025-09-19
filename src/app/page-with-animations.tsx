import { Container, Section } from '@/components/layout'
import { Header } from '@/components/navigation'
import { Button, SectionHeader, FadeInUp } from '@/components/ui'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* First Section */}
      <FadeInUp>
        <section
          className="h-auto min-h-[600px] sm:h-[1144px] pt-[30px] sm:pt-[60px] pb-[48px] sm:pb-[96px] px-4 sm:px-0 flex flex-col items-center"
          style={{ gap: '24px' }}
        >
          {/* 텍스트와 버튼 영역 */}
          <Container>
            <div className="w-full max-w-[654px] h-auto sm:h-[240px] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
              {/* 제목 */}
              <h1
                className="w-full max-w-[654px] h-auto sm:h-[124px] font-funnel-display font-semibold text-[32px] sm:text-[56px] text-center text-black flex items-center justify-center px-4 sm:px-0"
                style={{
                  lineHeight: '110%',
                  letterSpacing: '0%'
                }}
              >
                Backing the Bold. Investing in the Future
              </h1>

              {/* 서브텍스트 */}
              <p
                className="font-funnel-sans font-light text-sm sm:text-base text-center text-black px-4 sm:px-0"
                style={{
                  lineHeight: '150%',
                  letterSpacing: '0%'
                }}
              >
                Global Financial Access, Technology & Strategic Capital
              </p>

              {/* 버튼 영역 */}
              <div className="flex justify-center">
                <Button>Pitch Your Ideas</Button>
              </div>
            </div>
          </Container>

          {/* 이미지 영역 - 화면 전체 너비 */}
          <div
            className="w-full h-[300px] sm:h-[700px]"
            style={{
              backgroundImage: 'url(/sources/images/ruizeanBG_1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
        </section>
      </FadeInUp>

      {/* Second Section - Desktop */}
      <FadeInUp delay={100}>
        <section className="hidden sm:flex w-[1440px] h-[814px] mx-auto items-center justify-center" style={{ gap: '60px' }}>
          <div className="w-[1320px] h-[622px] flex items-center justify-center" style={{ gap: '60px' }}>
            {/* 이미지 박스 */}
            <div className="w-[460px] h-[622px] flex items-center justify-center" style={{ gap: '48px' }}>
              <div
                className="w-[460px] h-[622px] rounded-xl bg-[#D9D9D9] flex items-center justify-center"
              >
                <img
                  src="/sources/images/3dSphere.png"
                  alt="3D Sphere"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div
              className="w-[854px] h-[622px] pl-6 flex flex-col"
              style={{ gap: '120px' }}
            >
              {/* 첫 번째 텍스트 블록 */}
              <div
                className="w-[830px] h-[204px] flex flex-col"
                style={{ gap: '48px' }}
              >
                {/* 첫 번째 서브 블록 */}
                <div className="w-[830px] h-[82px] flex items-center">
                  <SectionHeader label="Who We Are" title="About Us" />
                </div>

                {/* 통계 4개 */}
                <div
                  className="w-[830px] h-[74px] flex flex-row"
                  style={{ gap: '40px' }}
                >
                  <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                    <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%' }}>$55M</div>
                    <div className="font-funnel-sans font-light text-base text-[#A6A6A6]">Under Active Investment</div>
                  </div>
                  <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                    <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%' }}>8</div>
                    <div className="font-funnel-sans font-light text-base text-[#A6A6A6]">Portfolio Companies</div>
                  </div>
                  <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                    <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%' }}>9+</div>
                    <div className="font-funnel-sans font-light text-base text-[#A6A6A6]">Countries</div>
                  </div>
                  <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                    <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%' }}>10+</div>
                    <div className="font-funnel-sans font-light text-base text-[#A6A6A6]">Years of Experience</div>
                  </div>
                </div>
              </div>

              {/* 두 번째 텍스트 블록 */}
              <div
                className="w-[830px] h-[298px] flex flex-col"
                style={{ gap: '24px' }}
              >
                <p
                  className="font-funnel-display font-semibold text-[40px]"
                  style={{
                    lineHeight: '115%',
                    letterSpacing: '0%'
                  }}
                >
                  <span className="text-black">We&apos;re a global investment company, </span>
                  <span className="text-[#A6A6A6]">deploying our own capital to back emerging technology, fintech, and intellectual property ventures</span>
                  <span className="text-black"> — creating long-term value and driving innovation</span>
                </p>

                {/* Where We Invest 버튼 */}
                <div className="flex">
                  <Button>Where We Invest</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* Second Section - Mobile Version */}
      <FadeInUp delay={100}>
        <section className="block sm:hidden w-full py-8 px-4">
          <div className="w-full max-w-[360px] mx-auto space-y-8">
            {/* SectionHeader */}
            <div className="text-center">
              <SectionHeader label="Who We Are" title="About Us" />
            </div>

            {/* 이미지 */}
            <div className="px-4">
              <div className="w-full h-[180px] rounded-xl bg-[#D9D9D9] overflow-hidden">
                <img
                  src="/sources/images/3dSphere.png"
                  alt="3D Sphere"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 25%'
                  }}
                />
              </div>
            </div>

            {/* 통계 카드들 */}
            <div className="grid grid-cols-2 gap-4 sm:gap-[40px]">
              <div className="bg-gray-100 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 text-center sm:text-left shadow-sm sm:shadow-none h-[80px] sm:h-auto flex flex-col justify-center">
                <div className="font-funnel-display font-semibold text-2xl sm:text-[40px] text-black">$55M</div>
                <div className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">Under Active Investment</div>
              </div>
              <div className="bg-gray-100 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 text-center sm:text-left shadow-sm sm:shadow-none h-[80px] sm:h-auto flex flex-col justify-center">
                <div className="font-funnel-display font-semibold text-2xl sm:text-[40px] text-black">8</div>
                <div className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">Portfolio Companies</div>
              </div>
              <div className="bg-gray-100 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 text-center sm:text-left shadow-sm sm:shadow-none h-[80px] sm:h-auto flex flex-col justify-center">
                <div className="font-funnel-display font-semibold text-2xl sm:text-[40px] text-black">9+</div>
                <div className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">Countries</div>
              </div>
              <div className="bg-gray-100 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 text-center sm:text-left shadow-sm sm:shadow-none h-[80px] sm:h-auto flex flex-col justify-center">
                <div className="font-funnel-display font-semibold text-2xl sm:text-[40px] text-black">10+</div>
                <div className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">Years of Experience</div>
              </div>
            </div>

            {/* 회사 설명 + 버튼 */}
            <div className="space-y-6">
              <p className="font-funnel-display font-semibold text-lg sm:text-[40px] text-center sm:text-left" style={{ lineHeight: '115%' }}>
                <span className="text-black">We&apos;re a global investment company, </span>
                <span className="text-[#A6A6A6]">deploying our own capital to back emerging technology, fintech, and intellectual property ventures</span>
                <span className="text-black"> — creating long-term value and driving innovation</span>
              </p>
              <div className="flex justify-center sm:justify-start">
                <Button>Where We Invest</Button>
              </div>
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* Third Section - Desktop */}
      <FadeInUp delay={200}>
        <section className="hidden sm:flex w-[1500px] h-[702px] mx-auto px-[60px] pt-[96px] pb-[96px] items-center justify-center" style={{ gap: '48px' }}>
          {/* Portfolio 카드들 */}
        </section>
      </FadeInUp>

      {/* Third Section - Mobile Version */}
      <FadeInUp delay={200}>
        <section className="block sm:hidden w-full py-8 px-4">
          {/* 모바일 Portfolio */}
        </section>
      </FadeInUp>

      {/* Fourth Section - Desktop */}
      <FadeInUp delay={300}>
        <section className="hidden sm:flex w-full h-[892px] bg-[#FAFAFA] items-center justify-center" style={{ gap: '48px' }}>
          {/* Our Approach */}
        </section>
      </FadeInUp>

      {/* Fourth Section - Mobile Version */}
      <FadeInUp delay={300}>
        <section className="block sm:hidden w-full bg-[#FAFAFA] py-8 px-4">
          {/* 모바일 Our Approach */}
        </section>
      </FadeInUp>

      {/* Fifth Section - Desktop */}
      <FadeInUp delay={400}>
        <section className="hidden sm:flex w-[1500px] h-[696px] mx-auto items-center justify-center" style={{ gap: '48px' }}>
          {/* CTA */}
        </section>
      </FadeInUp>

      {/* Fifth Section - Mobile Version */}
      <FadeInUp delay={400}>
        <section className="block sm:hidden w-full py-8 px-4">
          {/* 모바일 CTA */}
        </section>
      </FadeInUp>

      {/* Footer - Desktop */}
      <FadeInUp delay={500}>
        <footer className="hidden sm:flex w-[1500px] h-[440px] mx-auto px-[60px] pt-[48px] pb-[48px] items-center justify-center" style={{ gap: '48px' }}>
          {/* 데스크톱 Footer */}
        </footer>
      </FadeInUp>

      {/* Footer - Mobile Version */}
      <FadeInUp delay={500}>
        <footer className="block sm:hidden w-full py-6 px-4">
          {/* 모바일 Footer */}
        </footer>
      </FadeInUp>
    </main>
  )
}
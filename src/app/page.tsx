import { Container, Section } from '@/components/layout'
import { Header } from '@/components/navigation'
import { Button, SectionHeader } from '@/components/ui'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* First Section */}
      <section
        className="h-[1144px] pt-[60px] pb-[96px] flex flex-col items-center"
        style={{ gap: '48px' }}
      >
        {/* 텍스트와 버튼 영역 */}
        <Container>
          <div className="w-[654px] h-[240px] mx-auto flex flex-col items-center justify-center gap-6">
            {/* 제목 */}
            <h1
              className="w-[654px] h-[124px] font-funnel-display font-semibold text-[56px] text-center text-black flex items-center justify-center"
              style={{
                lineHeight: '110%',
                letterSpacing: '0%'
              }}
            >
              Backing the Bold. Investing in the Future
            </h1>

            {/* 서브텍스트 */}
            <p
              className="font-funnel-sans font-light text-base text-center text-black"
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
          className="w-full h-[700px]"
          style={{
            backgroundImage: 'url(/sources/images/ruizeanBG_1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
      </section>

      {/* Second Section */}
      <section className="w-[1440px] h-[814px] mx-auto flex items-center justify-center" style={{ gap: '60px' }}>
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

              {/* 두 번째 서브 블록 */}
              <div
                className="w-[830px] h-[74px] flex flex-row"
                style={{ gap: '40px' }}
              >
                {/* 첫 번째 아이템 */}
                <div
                  className="w-[203px] h-[74px] flex flex-col"
                  style={{ gap: '4px' }}
                >
                  <div
                    className="font-funnel-display font-semibold text-[40px] text-black"
                    style={{
                      lineHeight: '115%',
                      letterSpacing: '0%'
                    }}
                  >
                    $55M
                  </div>
                  <div
                    className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                    style={{
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}
                  >
                    Under Active Investment
                  </div>
                </div>

                {/* 두 번째 아이템 */}
                <div
                  className="w-[203px] h-[74px] flex flex-col"
                  style={{ gap: '4px' }}
                >
                  <div
                    className="font-funnel-display font-semibold text-[40px] text-black"
                    style={{
                      lineHeight: '115%',
                      letterSpacing: '0%'
                    }}
                  >
                    8
                  </div>
                  <div
                    className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                    style={{
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}
                  >
                    Portfolio Companies
                  </div>
                </div>

                {/* 세 번째 아이템 */}
                <div
                  className="w-[203px] h-[74px] flex flex-col"
                  style={{ gap: '4px' }}
                >
                  <div
                    className="font-funnel-display font-semibold text-[40px] text-black"
                    style={{
                      lineHeight: '115%',
                      letterSpacing: '0%'
                    }}
                  >
                    9+
                  </div>
                  <div
                    className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                    style={{
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}
                  >
                    Countries
                  </div>
                </div>

                {/* 네 번째 아이템 */}
                <div
                  className="w-[203px] h-[74px] flex flex-col"
                  style={{ gap: '4px' }}
                >
                  <div
                    className="font-funnel-display font-semibold text-[40px] text-black"
                    style={{
                      lineHeight: '115%',
                      letterSpacing: '0%'
                    }}
                  >
                    10+
                  </div>
                  <div
                    className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                    style={{
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}
                  >
                    Years of Experience
                  </div>
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

      {/* Third Section */}
      <section
        className="w-[1500px] h-[702px] mx-auto px-[60px] pt-[96px] pb-[96px] flex items-center justify-center"
        style={{ gap: '48px' }}
      >
        <div
          className="w-[1380px] h-[510px] flex flex-col"
          style={{ gap: '48px' }}
        >
          {/* 헤더 영역 */}
          <div className="w-[1380px] h-[122px] flex items-center">
            <SectionHeader
              label="Portfolio"
              title="Where We Invest"
              description="We invest in transformative companies at the intersection of technology, infrastructure, and everyday impact"
            />
          </div>

          {/* 콘텐츠 영역 */}
          <div
            className="w-[1380px] h-[340px] flex flex-row"
            style={{ gap: '6px' }}
          >
            {/* 첫 번째 카드 - Fintech */}
            <div className="w-[341px] h-[340px] flex flex-col justify-between border-t rounded-xl p-4 bg-[#FAFAFA]">
              {/* 이미지 */}
              <div className="w-[100px] h-[100px]">
                <img
                  src="/sources/images/cardIcon_1.png"
                  alt="Fintech"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="w-[309px] h-[76px] flex flex-col" style={{ gap: '4px' }}>
                <p
                  className="font-funnel-sans font-light text-base text-black"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  Fintech
                </p>
                <p
                  className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  Rebuilding financial systems for speed, access, and inclusion.
                </p>
              </div>
            </div>

            {/* 두 번째 카드 - Real Estate */}
            <div className="w-[341px] h-[340px] flex flex-col justify-between border-t rounded-xl p-4 bg-[#FAFAFA]">
              {/* 이미지 */}
              <div className="w-[100px] h-[100px]">
                <img
                  src="/sources/images/cardIcon_2.png"
                  alt="Real Estate"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="w-[309px] h-[76px] flex flex-col" style={{ gap: '4px' }}>
                <p
                  className="font-funnel-sans font-light text-base text-black"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  Real Estate
                </p>
                <p
                  className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  Building long-term value with strategic real estate investments.
                </p>
              </div>
            </div>

            {/* 세 번째 카드 - AI */}
            <div className="w-[341px] h-[340px] flex flex-col justify-between border-t rounded-xl p-4 bg-[#FAFAFA]">
              {/* 이미지 */}
              <div className="w-[100px] h-[100px]">
                <img
                  src="/sources/images/cardIcon_3.png"
                  alt="AI"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="w-[309px] h-[76px] flex flex-col" style={{ gap: '4px' }}>
                <p
                  className="font-funnel-sans font-light text-base text-black"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  AI
                </p>
                <p
                  className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  Driving intelligent systems that transform finance and enterprise.
                </p>
              </div>
            </div>

            {/* 네 번째 카드 - SaaS & Enterprise */}
            <div className="w-[341px] h-[340px] flex flex-col justify-between border-t rounded-xl p-4 bg-[#FAFAFA]">
              {/* 이미지 */}
              <div className="w-[100px] h-[100px]">
                <img
                  src="/sources/images/cardIcon_4.png"
                  alt="SaaS & Enterprise"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="w-[309px] h-[76px] flex flex-col" style={{ gap: '4px' }}>
                <p
                  className="font-funnel-sans font-light text-base text-black"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  SaaS & Enterprise
                </p>
                <p
                  className="font-funnel-sans font-light text-base text-[#A6A6A6]"
                  style={{
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  Powering workflows and teams with scalable, intuitive platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section
        className="w-full h-[892px] bg-[#FAFAFA] flex items-center justify-center"
        style={{ gap: '48px' }}
      >
        <div
          className="w-[1380px] h-[892px] px-[60px] pt-[96px] pb-[96px] flex items-center justify-center"
          style={{ gap: '48px' }}
        >
          <div
            className="w-[1260px] h-[700px] flex items-center justify-center"
            style={{ gap: '48px' }}
          >
            <div
              className="w-[1260px] h-[700px] flex flex-row items-center"
              style={{ gap: '6px' }}
            >
              {/* 텍스트 영역 */}
              <div
                className="w-[567px] h-[506px] pl-6 flex flex-col"
                style={{ gap: '32px' }}
              >
                <SectionHeader
                  label="Approach"
                  title="Our Approach"
                  description="We keep things simple, strategic, and founder-first — from first conversation to long-term growth"
                />

                {/* 첫 번째 아이템 - Discovery */}
                <div
                  className="w-[543px] h-[88px] pt-3 border-t border-[#F2F2F2] flex flex-col"
                  style={{ gap: '24px' }}
                >
                  <div
                    className="w-[543px] h-[76px] flex flex-col"
                    style={{ gap: '4px' }}
                  >
                    <p
                      className="font-sans font-normal text-base text-black"
                      style={{
                        lineHeight: '150%',
                        letterSpacing: '0%'
                      }}
                    >
                      1 Discovery
                    </p>
                    <p
                      className="font-sans font-normal text-base text-[#A6A6A6]"
                      style={{
                        lineHeight: '150%',
                        letterSpacing: '0%'
                      }}
                    >
                      We start by listening. Every founder, market, and story is different — we take time to understand your vision and the opportunity ahead.
                    </p>
                  </div>
                </div>

                {/* 두 번째 아이템 - Research */}
                <div
                  className="w-[543px] h-[88px] pt-3 border-t border-[#F2F2F2] flex flex-col"
                  style={{ gap: '24px' }}
                >
                  <div
                    className="w-[543px] h-[76px] flex flex-col"
                    style={{ gap: '4px' }}
                  >
                    <p
                      className="font-sans font-normal text-base text-black"
                      style={{
                        lineHeight: '150%',
                        letterSpacing: '0%'
                      }}
                    >
                      2 Research
                    </p>
                    <p
                      className="font-sans font-normal text-base text-[#A6A6A6]"
                      style={{
                        lineHeight: '150%',
                        letterSpacing: '0%'
                      }}
                    >
                      We dive deep. From industry trends to product mechanics, we form conviction through thoughtful analysis and firsthand diligence.
                    </p>
                  </div>
                </div>

                {/* 세 번째 아이템 - Partnership */}
                <div
                  className="w-[543px] h-[88px] pt-3 border-t border-[#F2F2F2] flex flex-col"
                  style={{ gap: '24px' }}
                >
                  <div
                    className="w-[543px] h-[76px] flex flex-col"
                    style={{ gap: '4px' }}
                  >
                    <p
                      className="font-sans font-normal text-base text-black"
                      style={{
                        lineHeight: '150%',
                        letterSpacing: '0%'
                      }}
                    >
                      3 Partnership
                    </p>
                    <p
                      className="font-sans font-normal text-base text-[#A6A6A6]"
                      style={{
                        lineHeight: '150%',
                        letterSpacing: '0%'
                      }}
                    >
                      When we invest, we commit. That means strategic input, access to our capital, network and long-term support through every stage of growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* 이미지 영역 */}
              <div className="w-[687px] h-[700px]">
                <img
                  src="/sources/images/3dBoxes.png"
                  alt="3D Boxes"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section
        className="w-[1500px] h-[696px] mx-auto flex items-center justify-center"
        style={{ gap: '48px' }}
      >
        <div
          className="w-[1500px] h-[696px] px-[60px] pt-[48px] pb-[48px] flex items-center justify-center"
          style={{ gap: '48px' }}
        >
          <div
            className="w-[1380px] h-[600px] rounded-xl p-10 relative overflow-hidden"
            style={{ gap: '24px' }}
          >
            {/* 배경 이미지 */}
            <img
              src="/sources/images/ruizeanBG_2.png"
              alt="Ruizean Background 2"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />

            {/* 검은색 오버레이 */}
            <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>

            {/* 내용이 들어갈 자리 */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div
                className="w-[1300px] h-[128px] flex flex-col items-center justify-center"
                style={{ gap: '16px' }}
              >
                {/* 라벨 */}
                <p
                  className="font-atkinson-mono font-normal text-sm uppercase text-white text-center"
                  style={{
                    lineHeight: '140%',
                    letterSpacing: '3%'
                  }}
                >
                  Get Started
                </p>

                {/* 제목 */}
                <h2
                  className="font-funnel-display font-semibold text-[40px] text-white text-center"
                  style={{
                    lineHeight: '115%',
                    letterSpacing: '0%'
                  }}
                >
                  Have a bold idea?<br />
                  Let&apos;s build the future together.
                </h2>

                {/* 버튼 */}
                <div className="flex justify-center">
                  <Button>Pitch Your Ideas</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-[1500px] h-[440px] mx-auto px-[60px] pt-[48px] pb-[48px] flex items-center justify-center"
        style={{ gap: '48px' }}
      >
        <div
          className="w-[1380px] h-[344px] rounded-xl p-10 bg-[#FAFAFA] flex flex-col items-center justify-center"
          style={{ gap: '48px' }}
        >
          {/* 첫 번째 영역 */}
          <div
            className="w-[1300px] h-[133px] flex flex-col justify-start items-start"
            style={{ gap: '24px' }}
          >
            {/* 로고와 회사명 */}
            <div className="flex items-center">
              {/* 로고 */}
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="/sources/svg/ruizeanLogo.svg"
                  alt="Ruizean Logo"
                  className="w-full h-full"
                />
              </div>

              {/* 회사명 */}
              <h3
                className="ml-[6.4px] font-pretendard font-bold text-2xl leading-none tracking-[-0.01em] text-[#191919] whitespace-nowrap"
                style={{ lineHeight: '100%' }}
              >
                Ruizean Group
              </h3>
            </div>

            {/* 설명 텍스트 */}
            <p
              className="font-funnel-sans font-light text-sm text-left text-black"
              style={{
                lineHeight: '140%',
                letterSpacing: '0%'
              }}
            >
              Bridging Opportunities Across Borders<br />
              Delivering Global Financial Access,<br />
              Technology & Strategic Capital
            </p>
          </div>

          {/* 두 번째 영역 */}
          <div
            className="w-[1300px] h-[83px] flex flex-col justify-start items-start"
            style={{ gap: '16px' }}
          >
            {/* 저작권 */}
            <p
              className="font-funnel-sans font-light text-xs text-black"
              style={{
                lineHeight: '140%',
                letterSpacing: '0%'
              }}
            >
              © Ruizean Group Pty Ltd
            </p>

            {/* 구분선 */}
            <div className="w-full h-px border-t border-[#E6E6E6]"></div>

            {/* 주소와 법적 고지 */}
            <p
              className="font-funnel-sans font-light text-xs text-[#A6A6A6]"
              style={{
                lineHeight: '140%',
                letterSpacing: '0%'
              }}
            >
              Suite 902, Level 9, Tower B, 821 Pacific Highway, Chatswood NSW, Australia, 2067 ACN: 167 543 580<br />
              The information provided on this website is for general informational purposes only and does not constitute financial advice or an offer to buy or sell any financial product.
            </p>
          </div>
        </div>
      </footer>

    </main>
  )
}
'use client'

import { Container, Section } from '@/components/layout'
import { Header } from '@/components/navigation'
import { Button, SectionHeader, MotionSection, Modal, Input } from '@/components/ui'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* First Section - Hero */}
      <MotionSection>
        <section className="h-auto min-h-[500px] sm:h-[1144px] pt-8 sm:pt-[60px] pb-8 sm:pb-[96px] px-4 sm:px-0 flex flex-col items-center gap-6 sm:gap-12">
        {/* 텍스트와 버튼 영역 */}
        <Container>
          <div className="w-full max-w-[654px] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6">
            {/* 제목 */}
            <h1
              className="w-full font-funnel-display font-semibold text-2xl sm:text-[56px] text-center text-black"
              style={{
                lineHeight: '110%',
                letterSpacing: '0%'
              }}
            >
              Backing the Bold. Investing in the Future
            </h1>

            {/* 서브텍스트 */}
            <p
              className="font-funnel-sans font-light text-sm sm:text-base text-center text-black"
              style={{
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
              Global Financial Access, Technology & Strategic Capital
            </p>

            {/* 버튼 영역 */}
            <div className="flex justify-center">
              <Button onClick={() => setIsModalOpen(true)}>Pitch Your Ideas</Button>
            </div>
          </div>
        </Container>

        {/* 이미지 영역 - 화면 전체 너비 */}
        <div
          className="w-full h-[250px] sm:h-[700px]"
          style={{
            backgroundImage: 'url(/sources/images/ruizeanBG_1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
        </section>
      </MotionSection>

      {/* Second Section - Desktop */}
      <MotionSection>
        <section className="hidden sm:flex w-[1440px] h-[814px] mx-auto items-center justify-center" style={{ gap: '60px' }}>
        <div className="w-[1320px] h-[622px] flex items-center justify-center" style={{ gap: '60px' }}>
          {/* 이미지 박스 */}
          <div className="w-[460px] h-[622px] flex items-center justify-center" style={{ gap: '48px' }}>
            <div className="w-[460px] h-[622px] rounded-xl bg-[#D9D9D9] flex items-center justify-center">
              <img
                src="/sources/images/3dSphere.png"
                alt="3D Sphere"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* 텍스트 영역 */}
          <div className="w-[854px] h-[622px] pl-6 flex flex-col" style={{ gap: '120px' }}>
            {/* 첫 번째 텍스트 블록 */}
            <div className="w-[830px] h-[204px] flex flex-col" style={{ gap: '48px' }}>
              {/* 첫 번째 서브 블록 */}
              <div className="w-[830px] h-[82px] flex items-center">
                <SectionHeader label="Who We Are" title="About Us" />
              </div>

              {/* 두 번째 서브 블록 */}
              <div className="w-[830px] h-[74px] flex flex-row" style={{ gap: '40px' }}>
                <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                  <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%', letterSpacing: '0%' }}>$55M</div>
                  <div className="font-funnel-sans font-light text-base text-[#A6A6A6]" style={{ lineHeight: '150%', letterSpacing: '0%' }}>Under Active Investment</div>
                </div>
                <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                  <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%', letterSpacing: '0%' }}>8</div>
                  <div className="font-funnel-sans font-light text-base text-[#A6A6A6]" style={{ lineHeight: '150%', letterSpacing: '0%' }}>Portfolio Companies</div>
                </div>
                <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                  <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%', letterSpacing: '0%' }}>9+</div>
                  <div className="font-funnel-sans font-light text-base text-[#A6A6A6]" style={{ lineHeight: '150%', letterSpacing: '0%' }}>Countries</div>
                </div>
                <div className="w-[203px] h-[74px] flex flex-col" style={{ gap: '4px' }}>
                  <div className="font-funnel-display font-semibold text-[40px] text-black" style={{ lineHeight: '115%', letterSpacing: '0%' }}>10+</div>
                  <div className="font-funnel-sans font-light text-base text-[#A6A6A6]" style={{ lineHeight: '150%', letterSpacing: '0%' }}>Years of Experience</div>
                </div>
              </div>
            </div>

            {/* 두 번째 텍스트 블록 */}
            <div className="w-[830px] h-[298px] flex flex-col" style={{ gap: '24px' }}>
              <p className="font-funnel-display font-semibold text-[40px]" style={{ lineHeight: '115%', letterSpacing: '0%' }}>
                <span className="text-black">We&apos;re a global investment company, </span>
                <span className="text-[#A6A6A6]">deploying our own capital to back emerging technology, fintech, and intellectual property ventures</span>
                <span className="text-black"> — creating long-term value and driving innovation</span>
              </p>
              <div className="flex">
                <Button onClick={() => setIsModalOpen(true)}>Where We Invest</Button>
              </div>
            </div>
          </div>
        </div>
        </section>
      </MotionSection>

      {/* Second Section - Mobile Version */}
      <MotionSection>
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
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm h-[70px] flex flex-col justify-center">
              <div className="font-funnel-display font-semibold text-xl text-black">$55M</div>
              <div className="font-funnel-sans font-light text-xs text-[#A6A6A6]">Under Active Investment</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm h-[70px] flex flex-col justify-center">
              <div className="font-funnel-display font-semibold text-xl text-black">8</div>
              <div className="font-funnel-sans font-light text-xs text-[#A6A6A6]">Portfolio Companies</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm h-[70px] flex flex-col justify-center">
              <div className="font-funnel-display font-semibold text-xl text-black">9+</div>
              <div className="font-funnel-sans font-light text-xs text-[#A6A6A6]">Countries</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm h-[70px] flex flex-col justify-center">
              <div className="font-funnel-display font-semibold text-xl text-black">10+</div>
              <div className="font-funnel-sans font-light text-xs text-[#A6A6A6]">Years of Experience</div>
            </div>
          </div>

          {/* 회사 설명 */}
          <p className="font-funnel-display font-semibold text-lg text-center" style={{ lineHeight: '115%' }}>
            <span className="text-black">We&apos;re a global investment company, </span>
            <span className="text-[#A6A6A6]">deploying our own capital to back emerging technology, fintech, and intellectual property ventures</span>
            <span className="text-black"> — creating long-term value and driving innovation</span>
          </p>

          {/* 버튼 */}
          <div className="flex justify-center">
            <Button onClick={() => setIsModalOpen(true)}>Where We Invest</Button>
          </div>
        </div>
        </section>
      </MotionSection>

      {/* Third Section - Portfolio */}
      <MotionSection>
        <section className="w-full max-w-[1500px] h-auto sm:h-[702px] mx-auto px-4 sm:px-[60px] py-8 sm:py-[96px]">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-8 sm:gap-[48px]">
          {/* 헤더 */}
          <div className="text-center sm:text-left">
            <SectionHeader
              label="Portfolio"
              title="Where We Invest"
              description="We invest in transformative companies at the intersection of technology, infrastructure, and everyday impact"
            />
          </div>

          {/* 카드들 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[6px]">
            {/* Fintech */}
            <div className="w-full h-auto sm:h-[340px] flex flex-col justify-between border rounded-xl p-4 bg-[#FAFAFA]">
              <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] mx-auto sm:mx-0">
                <img src="/sources/images/cardIcon_1.png" alt="Fintech" className="w-full h-full object-contain" />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="font-funnel-sans font-light text-base text-black mb-2">Fintech</p>
                <p className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">
                  Rebuilding financial systems for speed, access, and inclusion.
                </p>
              </div>
            </div>

            {/* Real Estate */}
            <div className="w-full h-auto sm:h-[340px] flex flex-col justify-between border rounded-xl p-4 bg-[#FAFAFA]">
              <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] mx-auto sm:mx-0">
                <img src="/sources/images/cardIcon_2.png" alt="Real Estate" className="w-full h-full object-contain" />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="font-funnel-sans font-light text-base text-black mb-2">Real Estate</p>
                <p className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">
                  Building long-term value with strategic real estate investments.
                </p>
              </div>
            </div>

            {/* AI */}
            <div className="w-full h-auto sm:h-[340px] flex flex-col justify-between border rounded-xl p-4 bg-[#FAFAFA]">
              <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] mx-auto sm:mx-0">
                <img src="/sources/images/cardIcon_3.png" alt="AI" className="w-full h-full object-contain" />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="font-funnel-sans font-light text-base text-black mb-2">AI</p>
                <p className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">
                  Driving intelligent systems that transform finance and enterprise.
                </p>
              </div>
            </div>

            {/* SaaS & Enterprise */}
            <div className="w-full h-auto sm:h-[340px] flex flex-col justify-between border rounded-xl p-4 bg-[#FAFAFA]">
              <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] mx-auto sm:mx-0">
                <img src="/sources/images/cardIcon_4.png" alt="SaaS & Enterprise" className="w-full h-full object-contain" />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="font-funnel-sans font-light text-base text-black mb-2">SaaS & Enterprise</p>
                <p className="font-funnel-sans font-light text-sm sm:text-base text-[#A6A6A6]">
                  Powering workflows and teams with scalable, intuitive platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </MotionSection>

      {/* Fourth Section - Our Approach */}
      <MotionSection>
        <section className="w-full h-auto sm:h-[892px] bg-[#FAFAFA] py-8 sm:py-0 px-4 sm:px-0 flex items-center justify-center">
        <div className="w-full max-w-[1380px] h-auto sm:h-[892px] px-4 sm:px-[60px] py-8 sm:py-[96px] flex items-center justify-center">
          <div className="w-full max-w-[1260px] flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-[48px]">
            {/* 텍스트 영역 */}
            <div className="w-full sm:w-[567px]">
              <div className="space-y-6 sm:space-y-8">
                <SectionHeader
                  label="Approach"
                  title="Our Approach"
                  description="We keep things simple, strategic, and founder-first — from first conversation to long-term growth"
                />

                {/* 프로세스 단계들 */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-t border-[#F2F2F2] pt-4">
                    <div className="space-y-2">
                      <p className="font-sans font-normal text-base text-black">1 Discovery</p>
                      <p className="font-sans font-normal text-sm sm:text-base text-[#A6A6A6]">
                        We start by listening. Every founder, market, and story is different — we take time to understand your vision and the opportunity ahead.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#F2F2F2] pt-4">
                    <div className="space-y-2">
                      <p className="font-sans font-normal text-base text-black">2 Research</p>
                      <p className="font-sans font-normal text-sm sm:text-base text-[#A6A6A6]">
                        We dive deep. From industry trends to product mechanics, we form conviction through thoughtful analysis and firsthand diligence.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#F2F2F2] pt-4">
                    <div className="space-y-2">
                      <p className="font-sans font-normal text-base text-black">3 Partnership</p>
                      <p className="font-sans font-normal text-sm sm:text-base text-[#A6A6A6]">
                        When we invest, we commit. That means strategic input, access to our capital, network and long-term support through every stage of growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="w-full sm:w-[687px] h-[250px] sm:h-[700px]">
              <img
                src="/sources/images/3dBoxes.png"
                alt="3D Boxes"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        </section>
      </MotionSection>

      {/* Fifth Section - CTA */}
      <MotionSection>
        <section className="w-full h-auto sm:h-[696px] flex items-center justify-center px-4 sm:px-0 py-8 sm:py-0">
        <div className="w-full max-w-[1500px] h-auto sm:h-[696px] px-4 sm:px-[60px] py-6 sm:py-[48px] flex items-center justify-center">
          <div
            className="w-full max-w-[1380px] h-[300px] sm:h-[600px] rounded-xl p-6 sm:p-10 relative overflow-hidden"
          >
            {/* 배경 이미지 */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                backgroundImage: 'url(/sources/images/ruizeanBG_2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* 검은색 오버레이 */}
            <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>

            {/* 내용 */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-full max-w-[1300px] text-center space-y-4 sm:space-y-6">
                {/* 라벨 */}
                <p
                  className="font-atkinson-mono font-normal text-xs sm:text-sm uppercase text-white"
                  style={{
                    lineHeight: '140%',
                    letterSpacing: '3%'
                  }}
                >
                  Get Started
                </p>

                {/* 제목 */}
                <h2
                  className="font-funnel-display font-semibold text-xl sm:text-[40px] text-white"
                  style={{
                    lineHeight: '115%',
                    letterSpacing: '0%'
                  }}
                >
                  Have a bold idea?<br />
                  Let&apos;s build the future together.
                </h2>

                {/* 버튼 */}
                <div className="flex justify-center pt-2">
                  <Button onClick={() => setIsModalOpen(true)}>Pitch Your Ideas</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </MotionSection>

      {/* Footer */}
      <MotionSection>
        <footer className="w-full max-w-[1500px] h-auto sm:h-[440px] mx-auto px-4 sm:px-[60px] py-6 sm:py-[48px] flex items-center justify-center">
        <div className="w-full max-w-[1380px] h-auto sm:h-[344px] rounded-xl p-6 sm:p-10 bg-[#FAFAFA] flex flex-col items-center sm:items-start justify-center gap-6 sm:gap-[48px]">
          {/* 첫 번째 영역 */}
          <div className="w-full flex flex-col items-center sm:items-start gap-4 sm:gap-6">
            {/* 로고와 회사명 */}
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                <img src="/sources/svg/ruizeanLogo.svg" alt="Ruizean Logo" className="w-full h-full" />
              </div>
              <h3 className="ml-2 sm:ml-[6.4px] font-pretendard font-bold text-lg sm:text-2xl text-[#191919]">
                Ruizean Group
              </h3>
            </div>

            {/* 설명 텍스트 */}
            <p className="font-funnel-sans font-light text-xs sm:text-sm text-center sm:text-left text-black">
              Bridging Opportunities Across Borders<br />
              Delivering Global Financial Access,<br />
              Technology & Strategic Capital
            </p>
          </div>

          {/* 두 번째 영역 */}
          <div className="w-full flex flex-col items-center sm:items-start gap-3 sm:gap-4">
            <p className="font-funnel-sans font-light text-xs text-black">© Ruizean Group Pty Ltd</p>

            <div className="w-full h-px border-t border-[#E6E6E6]"></div>

            <p className="font-funnel-sans font-light text-xs text-[#A6A6A6] text-center sm:text-left">
              Suite 902, Level 9, Tower B, 821 Pacific Highway, Chatswood NSW, Australia, 2067 ACN: 167 543 580<br />
              The information provided on this website is for general informational purposes only and does not constitute financial advice or an offer to buy or sell any financial product.
            </p>
          </div>
        </div>
        </footer>
      </MotionSection>

      {/* Contact Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        label="Contact"
        title="Let's Connect"
        description="Whether you're a founder looking for capital or a partner exploring collaboration, we'd love to hear from you"
      >
        {/* 연락 폼 */}
        <div
          className="w-full max-w-[816px] mx-auto flex flex-col"
          style={{ gap: '8px' }}
        >
          <Input
            placeholder="Name"
            required
          />

          <Input
            type="email"
            placeholder="Email"
            required
          />

          <Input
            type="tel"
            placeholder="Phone (optional)"
          />

          <Input
            placeholder="Company (optional)"
          />

          <textarea
            className="
              w-full h-[120px] px-4 py-[14px] rounded-xl
              border border-[#F2F2F2] bg-white
              font-funnel-sans font-medium text-sm text-black
              leading-[1.4] resize-none
              placeholder:text-gray-400
              focus:outline-none
            "
            placeholder="Message"
            style={{ letterSpacing: '0%' }}
          />

          {/* 제출 버튼 */}
          <div className="pt-4">
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </Modal>
    </main>
  )
}
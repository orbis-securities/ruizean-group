export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Ruizean Group</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-500 hover:text-gray-900">소개</a>
              <a href="#services" className="text-gray-500 hover:text-gray-900">서비스</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">연락처</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ruizean Group에
            <br />
            오신 것을 환영합니다
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            혁신적인 솔루션과 전문적인 서비스로 고객의 성공을 함께 만들어갑니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              서비스 알아보기
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition duration-300">
              문의하기
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">회사 소개</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ruizean Group은 고객의 비즈니스 성장을 위한 최적의 파트너입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">혁신</h4>
              <p className="text-gray-600">최신 기술과 창의적 아이디어로 혁신적인 솔루션을 제공합니다.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">신뢰</h4>
              <p className="text-gray-600">투명하고 정직한 소통으로 고객과의 신뢰 관계를 구축합니다.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">협력</h4>
              <p className="text-gray-600">고객과 함께 성장하며 상호 발전할 수 있는 관계를 만들어갑니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">서비스</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              다양한 분야의 전문 서비스를 통해 고객의 목표 달성을 지원합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">컨설팅</h4>
              <p className="text-gray-600 mb-4">
                전문적인 분석과 전략 수립으로 비즈니스 성장을 도와드립니다.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                자세히 보기 →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">솔루션 개발</h4>
              <p className="text-gray-600 mb-4">
                맞춤형 소프트웨어 솔루션으로 업무 효율성을 향상시킵니다.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                자세히 보기 →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">마케팅 지원</h4>
              <p className="text-gray-600 mb-4">
                효과적인 마케팅 전략으로 브랜드 가치를 높여드립니다.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                자세히 보기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">문의하기</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            궁금한 점이 있으시거나 상담을 원하신다면 언제든지 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@ruizeangroup.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              이메일 보내기
            </a>
            <a
              href="tel:+82-2-1234-5678"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              전화 상담
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Ruizean Group</h4>
            <p className="text-gray-400 mb-4">
              혁신적인 솔루션으로 더 나은 미래를 만들어갑니다.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                회사소개
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2024 Ruizean Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
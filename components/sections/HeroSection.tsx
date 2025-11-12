import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] px-4 py-24 text-white md:py-32">
      {/* Background Pattern (Optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="container relative mx-auto max-w-4xl text-center">
        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          🌏 대한민국에서 일하기
          <br />
          가장 좋은 도시 찾기
        </h1>

        {/* Sub Headline */}
        <p className="mb-10 text-lg text-white/90 md:text-xl">
          디지털 노마드를 위한 완벽한 일과 삶의 균형을 찾아보세요
        </p>

        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="도시 이름 검색..."
                className="h-14 pl-10 text-base"
              />
            </div>
            <Button size="lg" className="h-14 bg-brand-orange hover:bg-brand-orange/90">
              검색
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="h-12 bg-white px-8 text-base text-brand-blue hover:bg-white/90"
        >
          🚀 도시 탐색 시작하기
        </Button>

        {/* Popular Searches (Optional) */}
        <div className="mt-8">
          <p className="mb-3 text-sm text-white/70">인기 검색어:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['제주', '부산', '강릉', '경주', '속초'].map((city) => (
              <button
                key={city}
                className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur transition-colors hover:bg-white/30"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

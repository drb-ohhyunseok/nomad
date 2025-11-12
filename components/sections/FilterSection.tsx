import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const budgetFilters = [
  { label: '저예산', value: 'low', desc: '150만원 미만' },
  { label: '중예산', value: 'medium', desc: '150-250만원' },
  { label: '고예산', value: 'high', desc: '250만원 이상' },
]

const environmentFilters = [
  { label: '바다', value: 'sea', icon: '🌊' },
  { label: '산', value: 'mountain', icon: '⛰️' },
  { label: '도시', value: 'city', icon: '🏙️' },
  { label: '자연', value: 'nature', icon: '🌳' },
]

const purposeFilters = [
  { label: '집중작업', value: 'focus', icon: '💼' },
  { label: '네트워킹', value: 'networking', icon: '🎉' },
  { label: '워케이션', value: 'workation', icon: '🏖️' },
]

const sortOptions = [
  '종합 평점순',
  '생활비 저렴한 순',
  '인터넷 빠른 순',
  '노마드 많은 순',
  '최근 리뷰 많은 순',
]

export default function FilterSection() {
  return (
    <section className="border-b bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="도시 이름, 태그로 검색..."
              className="h-12 pl-12 pr-4"
            />
          </div>
        </div>

        {/* Quick Filters */}
        <div className="space-y-6">
          {/* Budget */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span>💰</span>
              예산
            </h3>
            <div className="flex flex-wrap gap-2">
              {budgetFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant="outline"
                  size="sm"
                  className="hover:border-brand-blue hover:text-brand-blue"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Environment */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span>🏖️</span>
              환경
            </h3>
            <div className="flex flex-wrap gap-2">
              {environmentFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant="outline"
                  size="sm"
                  className="hover:border-brand-blue hover:text-brand-blue"
                >
                  <span className="mr-1">{filter.icon}</span>
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Purpose */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span>🎯</span>
              목적
            </h3>
            <div className="flex flex-wrap gap-2">
              {purposeFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant="outline"
                  size="sm"
                  className="hover:border-brand-blue hover:text-brand-blue"
                >
                  <span className="mr-1">{filter.icon}</span>
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort & Reset */}
          <div className="flex items-center justify-between border-t pt-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <Button variant="ghost" size="sm">
              필터 초기화
            </Button>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">47개 도시</span> 중{' '}
              <span className="font-semibold text-brand-blue">47개</span> 발견
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

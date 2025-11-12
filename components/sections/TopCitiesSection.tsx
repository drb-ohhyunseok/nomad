import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CityCard from '@/components/cards/CityCard'
import { mockCities } from '@/lib/mockData'

export default function TopCitiesSection() {
  const topCities = mockCities.slice(0, 10)

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              🔥 인기 도시 TOP 10
            </h2>
            <p className="text-muted-foreground">
              가장 많은 노마드들이 선택한 도시
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            전체보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* City Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="w-full max-w-xs">
            전체보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

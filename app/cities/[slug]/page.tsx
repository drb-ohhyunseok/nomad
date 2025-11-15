import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { mockCities } from '@/lib/mockData'
import CityDetailHeader from '@/components/city/CityDetailHeader'
import CityFilters from '@/components/city/CityFilters'
import CityStats from '@/components/city/CityStats'
import { Badge } from '@/components/ui/badge'

interface PageProps {
  params: {
    slug: string
  }
}

// 메타데이터 생성
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = mockCities.find((c) => c.slug === params.slug)

  if (!city) {
    return {
      title: '도시를 찾을 수 없습니다',
    }
  }

  return {
    title: `${city.name} - 한국 노마드 시티`,
    description: `${city.name}의 상세 정보를 확인하세요. ${city.region}의 디지털 노마드 핫플레이스.`,
  }
}

export default function CityDetailPage({ params }: PageProps) {
  // slug로 도시 찾기
  const city = mockCities.find((c) => c.slug === params.slug)

  // 도시를 찾지 못한 경우 404
  if (!city) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <CityDetailHeader city={city} />

        {/* Hero Image */}
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl sm:h-80 lg:h-96">
          <Image
            src={city.thumbnail}
            alt={city.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {/* Filters Section */}
          <CityFilters city={city} />

          {/* Stats Section */}
          <CityStats city={city} />

          {/* Tags Section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold">태그</h2>
            <div className="flex flex-wrap gap-2">
              {city.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

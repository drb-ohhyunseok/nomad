import { Button } from '@/components/ui/button'

const regions = [
  { id: 'jeju', name: '제주/섬', icon: '🏖️', count: 5 },
  { id: 'capital', name: '수도권', icon: '🏙️', count: 8 },
  { id: 'gangwon', name: '강원', icon: '🌊', count: 12 },
  { id: 'chungcheong', name: '충청', icon: '🏛️', count: 6 },
  { id: 'jeolla', name: '전라', icon: '🏞️', count: 9 },
  { id: 'gyeongsang', name: '경상', icon: '🏔️', count: 7 },
]

export default function RegionSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            🗺️ 지역별 탐색
          </h2>
          <p className="text-muted-foreground">
            원하는 지역의 도시들을 빠르게 찾아보세요
          </p>
        </div>

        {/* Region Buttons */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {regions.map((region) => (
            <Button
              key={region.id}
              variant="outline"
              className="h-auto flex-col gap-2 p-6 hover:border-brand-blue hover:bg-brand-blue/5"
            >
              <span className="text-4xl">{region.icon}</span>
              <span className="text-base font-semibold">{region.name}</span>
              <span className="text-xs text-muted-foreground">
                {region.count}개 도시
              </span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

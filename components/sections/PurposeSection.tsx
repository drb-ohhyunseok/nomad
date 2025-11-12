import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { mockPurposes } from '@/lib/mockData'

export default function PurposeSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            🎯 목적별 추천
          </h2>
          <p className="text-muted-foreground">
            당신의 목적에 맞는 완벽한 도시를 찾아보세요
          </p>
        </div>

        {/* Purpose Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {mockPurposes.map((purpose) => (
            <Card
              key={purpose.id}
              className="group transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-orange text-4xl">
                  {purpose.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {purpose.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {purpose.description}
                </p>
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">
                    추천 도시:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {purpose.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full bg-brand-blue/10 px-3 py-1 text-sm text-brand-blue"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="group w-full hover:bg-brand-blue hover:text-white"
                >
                  둘러보기
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

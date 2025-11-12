import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { mockGuides } from '@/lib/mockData'

export default function GuideSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            📚 노마드 생활 가이드
          </h2>
          <p className="text-muted-foreground">
            성공적인 노마드 생활을 위한 완벽한 가이드
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {mockGuides.map((guide) => (
            <Card
              key={guide.id}
              className="group transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-4xl">
                  {guide.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {guide.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {guide.description}
                </p>
                <Button
                  variant="ghost"
                  className="group w-full hover:bg-purple-500 hover:text-white"
                >
                  읽기
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

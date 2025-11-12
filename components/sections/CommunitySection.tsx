import { Calendar, Users, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { mockMeetups } from '@/lib/mockData'

export default function CommunitySection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            🤝 커뮤니티
          </h2>
          <p className="text-muted-foreground">
            다른 노마드들과 함께 성장하세요
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upcoming Meetups */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand-blue" />
                다가오는 밋업 (27회/월)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockMeetups.map((meetup) => (
                <div
                  key={meetup.id}
                  className="flex items-start justify-between rounded-lg border p-4 transition-colors hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <p className="mb-1 font-semibold text-foreground">
                      🏖️ {meetup.title}
                    </p>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {new Date(meetup.date).toLocaleDateString('ko-KR', {
                        month: 'long',
                        day: 'numeric',
                        weekday: 'short',
                      })}{' '}
                      {new Date(meetup.date).toLocaleTimeString('ko-KR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {meetup.attendeeCount}/{meetup.maxAttendees}명 참여
                    </p>
                  </div>
                  <Button size="sm">참여하기</Button>
                </div>
              ))}
              <Button variant="ghost" className="w-full">
                모든 밋업 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* New Nomads */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-blue" />
                새로 가입한 노마드 (277명/월)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="grid grid-cols-6 gap-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-full bg-gradient-to-br from-brand-blue to-brand-orange"
                    >
                      <div className="flex h-full w-full items-center justify-center text-xs font-bold text-white">
                        {String.fromCharCode(65 + i)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                개발자, 디자이너, 마케터 등 다양한 분야의 노마드들이 함께하고
                있습니다!
              </p>
              <Button className="w-full">
                커뮤니티 가입
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import {
  ThumbsUp,
  ThumbsDown,
  DollarSign,
  Home,
  Coffee,
  Wifi,
  ThermometerSun,
  Users,
  MessageSquare,
  Wind,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { City, weatherIcons } from '@/types'

interface CityStatsProps {
  city: City
}

export default function CityStats({ city }: CityStatsProps) {
  const weatherIcon = weatherIcons[city.currentWeather]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">도시 통계</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* 좋아요 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2">
              <ThumbsUp className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">좋아요</p>
              <p className="text-lg font-bold text-foreground">
                {city.likeCount}
              </p>
            </div>
          </div>

          {/* 싫어요 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 p-2">
              <ThumbsDown className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">싫어요</p>
              <p className="text-lg font-bold text-foreground">
                {city.dislikeCount}
              </p>
            </div>
          </div>

          {/* 월 생활비 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-2">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">월 생활비</p>
              <p className="text-lg font-bold text-foreground">
                {(city.monthlyCost / 10000).toFixed(0)}만원
              </p>
            </div>
          </div>

          {/* 렌트 비용 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-purple-100 p-2">
              <Home className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">렌트 비용</p>
              <p className="text-lg font-bold text-foreground">
                {(city.rentCost / 10000).toFixed(0)}만원
              </p>
            </div>
          </div>

          {/* 카페 비용 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-100 p-2">
              <Coffee className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">카페 비용</p>
              <p className="text-lg font-bold text-foreground">
                {(city.cafeCost / 10000).toFixed(0)}만원
              </p>
            </div>
          </div>

          {/* 인터넷 속도 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-100 p-2">
              <Wifi className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">인터넷 속도</p>
              <p className="text-lg font-bold text-foreground">
                {city.internetSpeed} Mbps
              </p>
            </div>
          </div>

          {/* 현재 날씨 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-sky-100 p-2">
              <ThermometerSun className="h-5 w-5 text-sky-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">현재 날씨</p>
              <p className="text-lg font-bold text-foreground">
                {city.currentTemp}°C {weatherIcon}
              </p>
            </div>
          </div>

          {/* 공기 질 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-teal-100 p-2">
              <Wind className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">공기 질 (PM2.5)</p>
              <p className="text-lg font-bold text-foreground">
                {city.airQuality} μg/m³
              </p>
            </div>
          </div>

          {/* 노마드 수 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-pink-100 p-2">
              <Users className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">노마드 수</p>
              <p className="text-lg font-bold text-foreground">
                {city.nomadCount}명
              </p>
            </div>
          </div>

          {/* 리뷰 수 */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-rose-100 p-2">
              <MessageSquare className="h-5 w-5 text-rose-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">리뷰 수</p>
              <p className="text-lg font-bold text-foreground">
                {city.reviewCount}개
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

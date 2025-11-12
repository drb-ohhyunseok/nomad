import Image from 'next/image'
import { MapPin, Star, Users, Wifi, ThermometerSun, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { City, weatherIcons } from '@/types'
import { cn } from '@/lib/utils'

interface CityCardProps {
  city: City
}

export default function CityCard({ city }: CityCardProps) {
  const weatherIcon = weatherIcons[city.currentWeather]

  return (
    <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={city.thumbnail}
          alt={city.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {/* Badge */}
        {city.badge && (
          <div className="absolute left-3 top-3">
            <Badge
              variant={city.badge === 'popular' ? 'default' : 'secondary'}
              className="bg-white/90 text-foreground backdrop-blur"
            >
              {city.badge === 'popular' ? '🔥 인기' : '📈 떠오름'}
            </Badge>
          </div>
        )}
        {/* Like Button */}
        <button
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 backdrop-blur transition-colors hover:bg-white"
          aria-label="찜하기"
        >
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      <CardContent className="p-4">
        {/* City Name & Region */}
        <div className="mb-3">
          <div className="mb-1 flex items-start justify-between">
            <h3 className="text-lg font-bold text-foreground">{city.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{city.overallRating}</span>
            </div>
          </div>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {city.region}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-3 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-base">💰</span>
            <span className="text-muted-foreground">
              {(city.monthlyCost / 10000).toFixed(0)}만원
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">
              {city.internetSpeed} Mbps
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">
              {city.nomadCount}명
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <ThermometerSun className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">
              {city.currentTemp}°C {weatherIcon}
            </span>
          </div>
        </div>

        {/* Rating Bars */}
        <div className="mb-3 space-y-1.5">
          <div>
            <div className="mb-0.5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">업무환경</span>
              <span className="font-medium">{city.workRating}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full bg-brand-blue"
                style={{ width: `${(city.workRating / 5) * 100}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-0.5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">생활비</span>
              <span className="font-medium">{city.costRating}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full bg-green-500"
                style={{ width: `${(city.costRating / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {city.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" size="sm">
            보기
          </Button>
          <Button className="flex-1" size="sm">
            <Heart className="mr-1 h-3.5 w-3.5" />
            찜하기
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

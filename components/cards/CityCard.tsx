'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users, Wifi, ThermometerSun, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { City, weatherIcons } from '@/types'

interface CityCardProps {
  city: City
}

export default function CityCard({ city }: CityCardProps) {
  const weatherIcon = weatherIcons[city.currentWeather]
  const [likeCount, setLikeCount] = useState(city.likeCount)
  const [dislikeCount, setDislikeCount] = useState(city.dislikeCount)
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault() // Link 클릭 방지

    if (userReaction === 'like') {
      // 이미 좋아요를 누른 경우 취소
      setLikeCount(prev => prev - 1)
      setUserReaction(null)
    } else {
      // 새로 좋아요 또는 싫어요에서 변경
      if (userReaction === 'dislike') {
        setDislikeCount(prev => prev - 1)
      }
      setLikeCount(prev => prev + 1)
      setUserReaction('like')
    }
  }

  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault() // Link 클릭 방지

    if (userReaction === 'dislike') {
      // 이미 싫어요를 누른 경우 취소
      setDislikeCount(prev => prev - 1)
      setUserReaction(null)
    } else {
      // 새로 싫어요 또는 좋아요에서 변경
      if (userReaction === 'like') {
        setLikeCount(prev => prev - 1)
      }
      setDislikeCount(prev => prev + 1)
      setUserReaction('dislike')
    }
  }

  return (
    <Link href={`/cities/${city.slug}`}>
      <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer">
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
        </div>

        <CardContent className="p-4">
          {/* City Name & Region */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-foreground">{city.name}</h3>
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

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {city.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Like/Dislike Buttons */}
          <div className="mt-3 flex items-center justify-between border-t pt-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 transition-colors ${
                userReaction === 'like'
                  ? 'text-blue-600'
                  : 'text-muted-foreground hover:text-blue-500'
              }`}
              aria-label="좋아요"
            >
              <ThumbsUp className={`h-4 w-4 ${userReaction === 'like' ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center gap-1.5 transition-colors ${
                userReaction === 'dislike'
                  ? 'text-red-600'
                  : 'text-muted-foreground hover:text-red-500'
              }`}
              aria-label="싫어요"
            >
              <span className="text-sm font-medium">{dislikeCount}</span>
              <ThumbsDown className={`h-4 w-4 ${userReaction === 'dislike' ? 'fill-current' : ''}`} />
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

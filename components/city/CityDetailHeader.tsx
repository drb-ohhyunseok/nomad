'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { City } from '@/types'

interface CityDetailHeaderProps {
  city: City
}

export default function CityDetailHeader({ city }: CityDetailHeaderProps) {
  const router = useRouter()

  return (
    <div className="mb-6 space-y-4">
      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.back()}
        className="group gap-2"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        뒤로 가기
      </Button>

      {/* City Name & Info */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            {city.name}
          </h1>
          {city.badge && (
            <Badge
              variant={city.badge === 'popular' ? 'default' : 'secondary'}
              className="text-sm"
            >
              {city.badge === 'popular' ? '🔥 인기' : '📈 떠오름'}
            </Badge>
          )}
        </div>
        <p className="flex items-center gap-1.5 text-lg text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {city.region}
        </p>
      </div>
    </div>
  )
}

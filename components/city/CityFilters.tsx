import { DollarSign, MapPinned, TreePine, Sun } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { City } from '@/types'

interface CityFiltersProps {
  city: City
}

export default function CityFilters({ city }: CityFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">필터 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* 예산 */}
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-green-100 p-2">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">예산</p>
              <p className="text-base font-semibold text-foreground">
                {city.budget}
              </p>
            </div>
          </div>

          {/* 지역 */}
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-blue-100 p-2">
              <MapPinned className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">지역</p>
              <p className="text-base font-semibold text-foreground">
                {city.regionCategory}
              </p>
            </div>
          </div>

          {/* 환경 */}
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-emerald-100 p-2">
              <TreePine className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">환경</p>
              <p className="text-base font-semibold text-foreground">
                {city.environment.join(', ')}
              </p>
            </div>
          </div>

          {/* 최고 계절 */}
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-amber-100 p-2">
              <Sun className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                최고 계절
              </p>
              <p className="text-base font-semibold text-foreground">
                {city.bestSeason}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

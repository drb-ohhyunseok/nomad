export interface City {
  id: string
  name: string // "제주시"
  region: string // "제주특별자치도"
  slug: string // "jeju"
  thumbnail: string // 이미지 URL
  badge?: 'popular' | 'rising' // 배지

  // 평점
  overallRating: number // 4.8
  workRating: number // 4.9
  costRating: number // 4.2
  communityRating: number // 4.5
  natureRating: number // 5.0
  foodRating: number // 4.3

  // 비용
  monthlyCost: number // 1800000 (원)
  rentCost: number // 500000
  cafeCost: number // 100000

  // 환경
  internetSpeed: number // 500 (Mbps)
  currentTemp: number // 23 (°C)
  currentWeather: 'sunny' | 'cloudy' | 'rainy' | 'snowy'
  airQuality: number // 15 (PM2.5)

  // 커뮤니티
  nomadCount: number // 324
  reviewCount: number // 127

  // 태그
  tags: string[] // ["카페천국", "힐링", "자연친화"]

  // 메타
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  cityId: string
  cityName: string
  rating: number
  title: string
  content: string
  author: string
  authorId: string
  helpfulCount: number
  commentCount: number
  createdAt: Date
}

export interface Meetup {
  id: string
  cityId: string
  cityName: string
  title: string
  date: Date
  attendeeCount: number
  maxAttendees: number
}

export interface Stats {
  cities: number
  nomads: number
  reviews: number
  meetups: number
}

export interface Guide {
  id: string
  icon: string
  title: string
  description: string
  link: string
}

export interface PurposeRecommendation {
  id: string
  icon: string
  title: string
  description: string
  cities: string[]
}

export type WeatherIcon = '☀️' | '⛅' | '☁️' | '🌧️' | '❄️'

export const weatherIcons: Record<City['currentWeather'], WeatherIcon> = {
  sunny: '☀️',
  cloudy: '⛅',
  rainy: '🌧️',
  snowy: '❄️',
}

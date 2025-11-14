export interface City {
  id: string
  name: string // "제주시"
  region: string // "제주특별자치도"
  slug: string // "jeju"
  thumbnail: string // 이미지 URL
  badge?: 'popular' | 'rising' // 배지

  // 좋아요/싫어요
  likeCount: number // 좋아요 수
  dislikeCount: number // 싫어요 수

  // 필터
  budget: '100만원' | '100~200만원' | '200만원 이상' // 예산
  regionCategory: '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도' // 지역 카테고리
  environment: string[] // ['자연친화', '도심선호', '카페작업', '코워킹 필수']
  bestSeason: '봄' | '여름' | '가을' | '겨울' // 최고 계절

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

// 필터 타입 정의
export type Budget = '100만원' | '100~200만원' | '200만원 이상'
export type RegionCategory = '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도'
export type Environment = '자연친화' | '도심선호' | '카페작업' | '코워킹 필수'
export type Season = '봄' | '여름' | '가을' | '겨울'

// 필터 옵션 인터페이스
export interface FilterOptions {
  budget?: Budget
  regionCategory?: RegionCategory
  environment?: Environment[]
  bestSeason?: Season
}

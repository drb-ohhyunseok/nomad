# 🇰🇷 한국 노마드 시티

디지털 노마드를 위한 대한민국 도시 정보 플랫폼 - 홈페이지 UI

## 🚀 프로젝트 개요

한국 노마드 시티는 디지털 노마드들이 대한민국의 다양한 도시에서 최적의 생활 환경을 찾을 수 있도록 돕는 웹 플랫폼입니다. 이 레포지토리는 **홈페이지 UI만을 포함**하며, 기능 구현 없이 순수한 UI 컴포넌트로 구성되어 있습니다.

## 📋 기술 스택

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Package Manager**: npm

## 🎨 주요 기능 (UI Only)

- ✅ 반응형 네비게이션 바 (Sticky)
- ✅ 히어로 섹션 (그라디언트 배경, 검색 바)
- ✅ 실시간 통계 표시
- ✅ 인기 도시 TOP 10 (카드 그리드)
- ✅ 필터 및 검색 UI
- ✅ 지역별 탐색
- ✅ 목적별 추천
- ✅ 커뮤니티 미리보기
- ✅ 최신 리뷰
- ✅ 노마드 생활 가이드
- ✅ 푸터

## 🏗️ 프로젝트 구조

```
nomad/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── input.tsx
│   ├── layout/
│   │   ├── Header.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TopCitiesSection.tsx
│   │   ├── FilterSection.tsx
│   │   ├── RegionSection.tsx
│   │   ├── PurposeSection.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── GuideSection.tsx
│   └── cards/
│       └── CityCard.tsx    # City card component
├── lib/
│   ├── utils.ts            # Utility functions
│   └── mockData.ts         # Mock data
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    └── images/             # Static images
```

## 🚀 시작하기

### 1. Dependencies 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 브라우저에서 확인

[http://localhost:3000](http://localhost:3000) 접속

## 📱 반응형 디자인

- **Mobile**: 0-767px (1열 리스트)
- **Tablet**: 768-1023px (2열 그리드)
- **Desktop**: 1024px+ (3열 그리드)

## 🎯 주요 특징

### Server Components 우선
모든 섹션 컴포넌트는 Next.js App Router의 Server Component로 구현되었습니다.

### Mock 데이터
실제 API 없이 작동하도록 `lib/mockData.ts`에 Mock 데이터가 포함되어 있습니다.

### 디자인 시스템
PRD 문서의 디자인 시스템을 Tailwind CSS config에 구현했습니다:
- 브랜드 컬러 (Blue, Orange)
- 타이포그래피 스케일
- 간격 시스템 (8px 기준)
- 그림자 및 모서리

### 접근성
- ARIA 속성 적용
- 키보드 네비게이션 지원
- 적절한 색상 대비

## 📝 라이센스

This project is for demonstration purposes only.

## 👥 기여자

- Product Manager
- Frontend Developer

---

**Note**: 이 프로젝트는 UI만 구현되어 있으며, 실제 기능은 Phase 2에서 개발됩니다.

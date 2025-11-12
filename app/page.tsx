import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import TopCitiesSection from '@/components/sections/TopCitiesSection'
import FilterSection from '@/components/sections/FilterSection'
import RegionSection from '@/components/sections/RegionSection'
import PurposeSection from '@/components/sections/PurposeSection'
import CommunitySection from '@/components/sections/CommunitySection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import GuideSection from '@/components/sections/GuideSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Top Cities Section */}
        <TopCitiesSection />

        {/* Filter Section */}
        <FilterSection />

        {/* Region Section */}
        <RegionSection />

        {/* Purpose Section */}
        <PurposeSection />

        {/* Community Section */}
        <CommunitySection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Guide Section */}
        <GuideSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

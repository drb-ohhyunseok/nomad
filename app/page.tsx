import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TopCitiesSection from '@/components/sections/TopCitiesSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Top Cities Section */}
        <TopCitiesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

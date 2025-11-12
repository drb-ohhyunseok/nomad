import { Search, Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-blue">🇰🇷</span>
            <span className="hidden text-lg font-bold text-foreground sm:inline-block">
              한국노마드시티
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-brand-blue"
            >
              홈
            </a>
            <a
              href="/cities"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-blue"
            >
              도시찾기
            </a>
            <a
              href="/community"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-blue"
            >
              커뮤니티
            </a>
            <a
              href="/meetups"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-blue"
            >
              밋업
            </a>
            <a
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-blue"
            >
              블로그
            </a>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">검색</span>
          </Button>

          {/* Login/Signup (Phase 2) */}
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm">회원가입</Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">메뉴</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

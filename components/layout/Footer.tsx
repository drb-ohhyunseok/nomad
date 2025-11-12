import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">회사</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  회사소개
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  제휴문의
                </a>
              </li>
              <li>
                <a
                  href="/advertise"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  광고문의
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">법적고지</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">리소스</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  블로그
                </a>
              </li>
              <li>
                <a
                  href="/guides"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  가이드
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-brand-blue"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              소셜 미디어
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-blue"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-blue"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-blue"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 한국노마드시티. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

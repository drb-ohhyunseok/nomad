import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "한국 노마드 시티 - 디지털 노마드를 위한 최고의 도시 찾기",
  description: "대한민국 47개 도시의 생활비, 업무환경, 커뮤니티 정보를 한눈에 비교하고 평가하세요. 1,234명의 노마드가 추천하는 최고의 도시를 찾아보세요.",
  keywords: "디지털노마드, 한국, 도시, 워케이션, 원격근무, 코워킹, 카페작업",
  openGraph: {
    title: "한국 노마드 시티 - 디지털 노마드를 위한 최고의 도시 찾기",
    description: "대한민국 47개 도시의 생활비, 업무환경, 커뮤니티 정보를 한눈에 비교하고 평가하세요.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  )
}

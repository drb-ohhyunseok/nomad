'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Lock, ArrowLeft } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError('이메일 또는 비밀번호가 올바르지 않습니다.')
        return
      }

      if (data.user) {
        router.push('/')
        router.refresh()
      }
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">홈으로 돌아가기</span>
          </Link>

          {/* Login Card */}
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 text-4xl">🇰🇷</div>
              <h1 className="mb-2 text-2xl font-bold text-gray-900">로그인</h1>
              <p className="text-sm text-gray-600">
                한국노마드시티에 오신 것을 환영합니다
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  이메일
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                  비밀번호
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError('')
                    }}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                  />
                  <span className="text-gray-600">로그인 상태 유지</span>
                </label>
                <a href="#" className="text-brand-blue hover:underline">
                  비밀번호 찾기
                </a>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? '로그인 중...' : '로그인'}
              </Button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              계정이 없으신가요?{' '}
              <Link href="/register" className="font-medium text-brand-blue hover:underline">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

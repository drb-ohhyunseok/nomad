'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Lock, User, ArrowLeft } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    if (formData.password.length < 8) {
      setError('비밀번호는 최소 8자 이상이어야 합니다.')
      return
    }

    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      })

      if (signUpError) {
        setError(signUpError.message)
        return
      }

      if (data.user) {
        alert('회원가입이 완료되었습니다! 이메일을 확인해주세요.')
        router.push('/login')
      }
    } catch (err) {
      setError('회원가입 중 오류가 발생했습니다.')
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

          {/* Register Card */}
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 text-4xl">🇰🇷</div>
              <h1 className="mb-2 text-2xl font-bold text-gray-900">회원가입</h1>
              <p className="text-sm text-gray-600">
                한국노마드시티 커뮤니티에 참여하세요
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
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  이름
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  이메일
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  최소 8자 이상, 영문/숫자/특수문자 포함
                </p>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  비밀번호 확인
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="space-y-2">
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                    required
                  />
                  <span className="text-gray-600">
                    <a href="#" className="text-brand-blue hover:underline">
                      이용약관
                    </a>
                    과{' '}
                    <a href="#" className="text-brand-blue hover:underline">
                      개인정보처리방침
                    </a>
                    에 동의합니다
                  </span>
                </label>
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                  />
                  <span className="text-gray-600">
                    마케팅 정보 수신에 동의합니다 (선택)
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? '회원가입 중...' : '회원가입'}
              </Button>
            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              이미 계정이 있으신가요?{' '}
              <Link href="/login" className="font-medium text-brand-blue hover:underline">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Star, ThumbsUp, MessageCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { mockReviews } from '@/lib/mockData'

export default function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              💬 최신 리뷰
            </h2>
            <p className="text-muted-foreground">
              실제 노마드들의 생생한 후기
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            전체 리뷰 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          {mockReviews.map((review) => (
            <Card
              key={review.id}
              className="transition-all hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="mb-2 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    {/* Title */}
                    <h3 className="mb-1 text-lg font-bold text-foreground">
                      {review.title}
                    </h3>
                    {/* City */}
                    <p className="text-sm text-brand-blue">
                      📍 {review.cityName}
                    </p>
                  </div>
                  {/* Time */}
                  <p className="text-sm text-muted-foreground">
                    {Math.floor(
                      (Date.now() - review.createdAt.getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}
                    일 전
                  </p>
                </div>

                {/* Content */}
                <p className="mb-4 text-sm text-muted-foreground">
                  {review.content.length > 120
                    ? `${review.content.slice(0, 120)}...`
                    : review.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    by{' '}
                    <span className="font-medium text-foreground">
                      @{review.author}
                    </span>
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-brand-blue">
                      <ThumbsUp className="h-4 w-4" />
                      {review.helpfulCount}
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-brand-blue">
                      <MessageCircle className="h-4 w-4" />
                      {review.commentCount}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="w-full max-w-xs">
            전체 리뷰 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

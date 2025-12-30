"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Review {
  author_name: string
  profile_photo_url?: string
  rating: number
}

interface GoogleReviewsBadgeProps {
  placeId?: string
  // Fallback data if API isn't configured yet
  fallbackRating?: number
  fallbackCount?: number
}

export function GoogleReviewsBadge({
  placeId,
  fallbackRating = 4.9,
  fallbackCount = 2847,
}: GoogleReviewsBadgeProps) {
  const [reviewsData, setReviewsData] = useState<{
    rating: number
    count: number
    topReviewers: Array<{ name: string; photo?: string; initials: string; color: string }>
  }>({
    rating: fallbackRating,
    count: fallbackCount,
    topReviewers: [
      { name: "John Doe", initials: "JD", color: "from-blue-400 to-blue-600" },
      { name: "Sarah Miller", initials: "SM", color: "from-purple-400 to-purple-600" },
      { name: "Alex Lee", initials: "AL", color: "from-green-400 to-green-600" },
    ],
  })

  useEffect(() => {
    // Only fetch if placeId is provided and we're in the browser
    if (!placeId || typeof window === "undefined") return

    async function loadReviews() {
      try {
        const response = await fetch(`/api/google-reviews?placeId=${placeId}`)
        if (!response.ok) throw new Error("Failed to fetch reviews")

        const data = await response.json()

        // Process top 3 reviewers
        const topReviewers = data.reviews.slice(0, 3).map((review: Review, index: number) => {
          const nameParts = review.author_name.trim().split(" ")
          const initials =
            nameParts.length > 1
              ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
              : nameParts[0].substring(0, 2)

          const colors = [
            "from-blue-400 to-blue-600",
            "from-purple-400 to-purple-600",
            "from-green-400 to-green-600",
          ]

          return {
            name: review.author_name,
            photo: review.profile_photo_url,
            initials: initials.toUpperCase(),
            color: colors[index] || colors[0],
          }
        })

        setReviewsData({
          rating: data.rating,
          count: data.user_ratings_total,
          topReviewers: topReviewers.length > 0 ? topReviewers : reviewsData.topReviewers,
        })
      } catch (error) {
        console.error("Error loading Google reviews:", error)
        // Keep fallback data on error
      }
    }

    loadReviews()
  }, [placeId])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 border border-border/60 backdrop-blur-md mb-8 hover:border-accent/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        {/* Stacked Profile Images */}
        <div className="flex items-center -space-x-2">
          {reviewsData.topReviewers.map((reviewer, index) => (
            <div key={index} className="relative">
              {reviewer.photo ? (
                <img
                  src={reviewer.photo}
                  alt={reviewer.name}
                  className="w-8 h-8 rounded-full border-2 border-card object-cover"
                />
              ) : (
                <div
                  className={`w-8 h-8 rounded-full border-2 border-card bg-linear-to-br ${reviewer.color} flex items-center justify-center text-xs font-semibold text-white`}
                >
                  {reviewer.initials}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Rating and Review Info */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 fill-accent text-accent" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="text-sm font-semibold text-foreground ml-0.5">{reviewsData.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {reviewsData.count.toLocaleString()} Google reviews
          </span>
        </div>
      </div>
    </motion.div>
  )
}

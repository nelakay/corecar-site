// Google Reviews API Integration
// You'll need to add GOOGLE_PLACES_API_KEY to your .env.local file

export interface GoogleReview {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  text: string
  time: number
}

export interface GoogleReviewsData {
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

/**
 * Fetch Google reviews using the Google Places API
 * @param placeId - Your Google Business Place ID
 * @returns Reviews data including rating and reviews
 */
export async function fetchGoogleReviews(
  placeId: string
): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!apiKey) {
    console.error("Google Places API key not configured")
    return null
  }

  try {
    // Use the Places API (New) - Place Details endpoint
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error("Failed to fetch Google reviews")
    }

    const data = await response.json()

    if (data.status !== "OK") {
      throw new Error(`Google Places API error: ${data.status}`)
    }

    return {
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    }
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return null
  }
}

/**
 * Get profile image or generate initials from reviewer name
 * @param review - Google review object
 * @returns Object with image URL or initials and color
 */
export function getReviewerAvatar(review: GoogleReview): {
  type: "image" | "initials"
  value: string
  color?: string
} {
  // Prioritize actual profile photo
  if (review.profile_photo_url) {
    return {
      type: "image",
      value: review.profile_photo_url,
    }
  }

  // Generate initials from name
  const nameParts = review.author_name.trim().split(" ")
  const initials =
    nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
      : nameParts[0].substring(0, 2)

  // Generate a consistent color based on the name
  const colors = [
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600",
    "from-green-400 to-green-600",
    "from-pink-400 to-pink-600",
    "from-orange-400 to-orange-600",
    "from-teal-400 to-teal-600",
  ]

  const colorIndex =
    review.author_name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length

  return {
    type: "initials",
    value: initials.toUpperCase(),
    color: colors[colorIndex],
  }
}

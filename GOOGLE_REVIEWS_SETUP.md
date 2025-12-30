# Google Reviews Integration Setup

This guide explains how to connect your website to display real Google reviews.

## Current Status

The reviews badge currently shows **fallback data** with:
- Rating: 4.9
- Review count: 2,847
- Three avatar placeholders with initials

## How to Connect to Real Google Reviews

### Step 1: Get Your Google Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for "CORE Car" or your business address
3. Copy the Place ID (format: `ChIJ...`)

### Step 2: Enable Google Places API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key
6. (Recommended) Restrict the API key to:
   - Application restrictions: HTTP referrers (websites)
   - Add your domain: `yourwebsite.com/*`
   - API restrictions: Places API only

### Step 3: Add Environment Variable

Create or update `.env.local` in your project root:

```bash
GOOGLE_PLACES_API_KEY=your_api_key_here
```

**Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

### Step 4: Update Hero Component

Replace the current static badge in `components/hero.tsx` with the dynamic component:

```tsx
import { GoogleReviewsBadge } from "@/components/google-reviews-badge"

// Inside the Hero component, replace the existing motion.div with:
<GoogleReviewsBadge
  placeId="YOUR_PLACE_ID_HERE"
  fallbackRating={4.9}
  fallbackCount={2847}
/>
```

### Step 5: Restart Development Server

```bash
npm run dev
```

## How It Works

1. **Component loads** → Shows fallback data immediately (no loading state)
2. **API call** → Fetches real reviews from Google Places API
3. **Data updates** → Displays actual rating, count, and reviewer avatars
4. **Prioritization** → Shows real profile photos when available, falls back to gradient avatars with initials
5. **Caching** → Reviews are cached for 1 hour to reduce API calls

## Features

- ✅ Displays top 3 most recent reviewers
- ✅ Shows actual profile photos when available
- ✅ Generates colorful gradient avatars with initials as fallback
- ✅ Real-time rating and review count
- ✅ Automatic caching (1 hour revalidation)
- ✅ Graceful error handling (shows fallback data on error)

## API Costs

Google Places API pricing (as of 2024):
- Place Details requests: $17 per 1,000 requests
- With caching (1 hour): ~$12/month for 25,000 visitors
- First $200/month is free (Google Cloud credits)

## Testing Without API Key

The component works perfectly without configuration:
- Shows fallback rating (4.9)
- Shows fallback count (2,847)
- Shows gradient avatar placeholders
- No errors or broken functionality

## Alternative: Third-Party Services

If you prefer not to use the Google Places API directly, consider:

1. **Elfsight Google Reviews Widget** - Paid service, no coding required
2. **Testimonial.to** - Collect and display reviews
3. **Trustpilot** - Alternative review platform
4. **Manual JSON file** - Store reviews in a static file you update periodically

## Troubleshooting

### Reviews not loading
- Check API key in `.env.local`
- Verify Place ID is correct
- Check browser console for errors
- Ensure Places API is enabled in Google Cloud

### Rate limit errors
- Increase cache duration (change `revalidate: 3600` to higher value)
- Consider server-side caching with Redis

### Profile photos not showing
- Google only provides photos if users have public Google accounts
- The component automatically falls back to gradient avatars

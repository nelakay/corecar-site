# Ghost CMS Integration Guide

This document outlines how to integrate Ghost CMS with the CoreCar website for blog and content management.

## Overview

Ghost CMS will be used to manage:
- Blog posts and articles
- Service descriptions
- Case studies and testimonials
- Any other dynamic content

## Setup Instructions

### 1. Ghost Installation Options

Choose one of the following options:

#### Option A: Ghost(Pro) - Recommended for Production
1. Sign up at [ghost.org](https://ghost.org)
2. Create a new publication
3. Get your API credentials from Settings → Integrations

#### Option B: Self-Hosted Ghost
1. Deploy Ghost on your own server
2. Follow the [Ghost installation guide](https://ghost.org/docs/install/)
3. Configure your API settings

### 2. Install Ghost Content API

```bash
npm install @tryghost/content-api
```

### 3. Environment Variables

Create a `.env.local` file in the project root:

```env
GHOST_API_URL=https://your-site.ghost.io
GHOST_CONTENT_API_KEY=your_content_api_key
```

### 4. Create Ghost API Client

Create `lib/ghost.ts`:

```typescript
import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL || '',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: 'v5.0'
})

export async function getPosts(limit = 10) {
  return await api.posts.browse({
    limit,
    include: 'tags,authors',
    order: 'published_at DESC'
  })
}

export async function getPost(slug: string) {
  return await api.posts.read(
    { slug },
    { include: 'tags,authors' }
  )
}

export async function getServices() {
  return await api.posts.browse({
    filter: 'tag:service',
    include: 'tags'
  })
}

export default api
```

### 5. Create API Routes

Create `app/api/blog/posts/route.ts`:

```typescript
import { getPosts } from '@/lib/ghost'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const posts = await getPosts()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
```

### 6. Update Blog Preview Component

Replace the mock data in `components/blog-preview.tsx` with:

```typescript
'use client'

import { useEffect, useState } from 'react'

export function BlogPreview() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blog/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 3)) // Show 3 most recent
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  // Rest of component...
}
```

## Content Structure in Ghost

### Recommended Tags
- `service` - For service pages
- `blog` - For blog posts
- `case-study` - For case studies
- `news` - For company news

### Custom Fields (via Ghost Admin)
You can add custom fields in Ghost to store additional metadata:
- Service pricing
- Vehicle specifications
- Testimonial ratings
- Location availability

## Dynamic Routes

### Blog Post Page
Create `app/blog/[slug]/page.tsx`:

```typescript
import { getPost } from '@/lib/ghost'
import { notFound } from 'next/navigation'

export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
```

### Services from Ghost
Update `components/services.tsx` to fetch from Ghost:

```typescript
const services = await getServices()
```

## Deployment Considerations

1. **ISR (Incremental Static Regeneration)**
   - Use Next.js ISR to cache Ghost content
   - Revalidate every 60 seconds or on-demand

2. **Webhooks**
   - Set up Ghost webhooks to trigger rebuilds
   - Configure in Ghost Admin → Integrations

3. **Image Optimization**
   - Ghost images should be optimized
   - Consider using Next.js Image component with Ghost image URLs

## Testing

Test the integration locally:
```bash
npm run dev
```

Visit:
- `/` - Homepage with blog preview
- `/blog` - Full blog listing
- `/blog/[slug]` - Individual posts

## Additional Resources

- [Ghost Content API Documentation](https://ghost.org/docs/content-api/)
- [Next.js and Ghost Integration](https://ghost.org/integrations/nextjs/)
- [@tryghost/content-api Package](https://www.npmjs.com/package/@tryghost/content-api)

"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// This component is designed to work with Ghost CMS
// Ghost API integration should be added in a separate API route
// Example: /app/api/ghost/posts/route.ts

interface BlogPost {
  id: string
  title: string
  excerpt: string
  feature_image: string
  published_at: string
  reading_time: number
  slug: string
}

// Mock data - replace with actual Ghost API data
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Executive Transportation",
    excerpt: "Discover how technology is reshaping the luxury transportation industry and what it means for business professionals.",
    feature_image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=450&fit=crop&q=80",
    published_at: "2024-01-15",
    reading_time: 5,
    slug: "future-of-executive-transportation",
  },
  {
    id: "2",
    title: "5 Ways to Maximize Productivity During Your Commute",
    excerpt: "Turn your travel time into productive work sessions with these proven strategies for busy executives.",
    feature_image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop&q=80",
    published_at: "2024-01-10",
    reading_time: 7,
    slug: "maximize-productivity-commute",
  },
  {
    id: "3",
    title: "Corporate Travel Best Practices for 2024",
    excerpt: "Essential guidelines for managing corporate transportation programs efficiently and cost-effectively.",
    feature_image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=450&fit=crop&q=80",
    published_at: "2024-01-05",
    reading_time: 6,
    slug: "corporate-travel-best-practices-2024",
  },
]

export function BlogPreview() {
  return (
    <section id="blog" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6"
          >
            Latest from
            <span className="block text-accent mt-2">Our Blog</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Insights, updates, and best practices for executive transportation
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="bg-card border-border overflow-hidden group cursor-pointer hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.reading_time} min read</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="border-border hover:bg-secondary hover:scale-105 transition-all group bg-transparent"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Principles } from "@/components/principles"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Fleet } from "@/components/fleet"
import { GlobalReach } from "@/components/global-reach"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { BlogPreview } from "@/components/blog-preview"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="px-4 lg:px-30 max-w-380 mx-auto">
        <Principles />
        <Services />
        <Features />
        <Fleet />
        <GlobalReach />
      </div>
      <Testimonials />
      <div className="px-4 lg:px-30 max-w-380 mx-auto">
        {/* <Pricing /> */}
        <FAQ />
        <BlogPreview />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}

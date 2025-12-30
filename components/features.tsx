"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Always Early",
    description: "Our chauffeurs arrive ahead of schedule to ensure you're never late for an important meeting.",
  },
  {
    title: "Professional Chauffeurs",
    description: "Thoroughly vetted drivers with extensive background checks and professional training.",
  },
  {
    title: "Complete Discretion",
    description: "Confidentiality is paramount. Your conversations and business remain strictly private.",
  },
  {
    title: "Premium Fleet",
    description: "Immaculately maintained luxury vehicles suited to the most discerning executives.",
  },
  {
    title: "Global Network",
    description: "Consistent service quality across 50+ cities worldwide through our vetted partner network.",
  },
  {
    title: "Real-Time Tracking",
    description: "Live updates on your driver's location and ETA through our mobile and desktop apps.",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleFeatures((prev) => [...prev, index])
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`lg:sticky self-start transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            style={{ top: 'calc(6rem + 2vh)' }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border group">
              <img
                src="/images/driver_waiting.png"
                alt="Professional chauffeur waiting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 max-w-[280px] hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="text-3xl font-bold text-foreground mb-1">99.8%</div>
              <div className="text-sm text-muted-foreground">On-time arrival rate</div>
            </div>
          </div>

          <div>
            <h2
              className={`text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              Consistency in
              <span className="block text-accent mt-2">Every Detail</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground mb-12 leading-relaxed transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              We've been successfully driving corporate executives for over 25 years. Our experience and professionalism
              shows, every mile of the way, 24/7/365.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-500 ${visibleFeatures.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

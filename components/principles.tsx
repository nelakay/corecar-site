"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Shield, Zap, Target } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Consistent",
    description: "Automate the busywork so your team stays focused",
  },
  {
    icon: Clock,
    title: "On-Time",
    description: "Speed meets precision to deliver fast, reliable results",
  },
  {
    icon: Shield,
    title: "Reliable",
    description: "Encrypt your data, stay compliant, and protect what matters",
  },
  {
    icon: Zap,
    title: "Efficient",
    description: "Streamlined operations that maximize productivity",
  },
]

export function Principles() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            principles.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
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
        {/* Statistics Counters */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24">
          <StatCounter end={25} suffix="+" label="Years Experience" />
          <StatCounter end={50} suffix="+" label="Global Cities" />
          <StatCounter end={24} suffix="/7" label="Availability" />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6"
          >
            Our CORE
            <span className="block text-accent mt-2">Principles</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <principle.icon className="w-7 h-7 text-accent group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                {principle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            let start = 0
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 16)

            return () => clearInterval(timer)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [end, hasStarted])

  return (
    <div ref={counterRef} className="text-center group hover:scale-110 transition-transform cursor-default">
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

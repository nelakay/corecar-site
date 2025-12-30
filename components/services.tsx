"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Plane, Users, TrendingUp, Building2, Clock, Calendar } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Corporate Car Service",
    description:
      "Dedicated executive transportation for business professionals with complete discretion and reliability.",
  },
  {
    icon: Users,
    title: "Group Transport",
    description: "SUVs, vans, and shuttles for team transportation and corporate events.",
  },
  {
    icon: TrendingUp,
    title: "Roadshows",
    description: "Multi-city investor roadshows and executive tours managed with precision and professionalism.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless door-to-door service ensuring you arrive on time for every flight, every time.",
  },
  {
    icon: Calendar,
    title: "Event Transportation",
    description: "Professional coordination for conferences, galas, and corporate events of any size.",
  },
  {
    icon: Clock,
    title: "Hourly & Point-to-Point",
    description: "Flexible booking options for your schedule, whether it's by the hour or by destination.",
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
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
    <section id="services" className="py-24 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6"
          >
            What CORE Car
            <span className="block text-accent mt-2">Offers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-pretty leading-relaxed"
          >
            Unmatched reliability, executive-level service, and nationwide & global coverage for all your transportation needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="bg-card border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 p-8 group cursor-pointer h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-accent group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

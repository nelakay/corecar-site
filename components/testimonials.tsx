"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CFO, TechCorp",
    content: "The automation features have transformed how our finance team operates. We've cut manual data entry by 80%.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "VP Operations, GlobalEx",
    content: "Seamless CRM integration means our team spends less time on admin and more time with clients.",
    rating: 5,
  },
  {
    name: "Jennifer Park",
    role: "CEO, InnovateLabs",
    content: "The workflow automation is incredible. Tasks that took hours now complete in minutes.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Director, Enterprise Solutions",
    content: "Best decision we made this year. The data connectivity alone has paid for itself.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "COO, Summit Group",
    content: "Professional, reliable, and incredibly efficient. Our team's productivity has never been higher.",
    rating: 5,
  },
  {
    name: "Robert Kim",
    role: "Managing Partner, Apex Capital",
    content: "The level of service and attention to detail is unmatched. Truly executive-class transportation.",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 w-80 md:w-96 shrink-0 mr-6 first:ml-0">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground leading-relaxed mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-accent font-semibold text-sm">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3, 6)

  return (
    <section className="py-24 lg:py-32 overflow-hidden -mx-6 lg:-mx-12">
      <div className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6"
          >
            Trusted by
            <span className="block text-accent mt-2">Industry Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            See what our clients have to say about their experience with CORE Car
          </motion.p>
        </div>

        {/* First Row - Left to Right */}
        <div className="relative mb-6">
          <motion.div
            className="flex"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative">
          <motion.div
            className="flex"
            animate={{
              x: ["-50%", 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

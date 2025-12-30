"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-700"
        >
          <div className="absolute inset-0 group">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&h=900&fit=crop&q=80"
              alt="Executive car interior"
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
          </div>

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6"
              >
                Ready to reclaim
                <span className="block text-accent mt-2">your time?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                Join thousands of business professionals who trust CORE Car for seamless, reliable transportation that keeps them focused on what matters most.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
                  asChild
                >
                  <a href="https://scweb-a.groundtools.com/US.CT.CORE/WebConnect/DefaultV2/Booking?WizardKey=Cdn4nBjt-zxMCZPuGVAAFNCWg3aMV8uI7Cxq4aG-WK9GeID5OasJD80Oph_J0enB-QvUa8pz1-TWhQO4xb2Anw" target="_blank" rel="noopener noreferrer">
                    Book a Ride
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary hover:scale-105 transition-all bg-transparent"
                >
                  Contact Sales
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

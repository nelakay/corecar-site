"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, ArrowRight, Luggage } from "lucide-react"

const vehicles = [
  {
    name: "Rolls Royce Cullinan",
    capacity: "5 Passengers",
    luggage: "8 Luggage",
    description: "The pinnacle of luxury SUV experience with unmatched comfort and prestige",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=200&h=150&fit=crop&q=80",
  },
  {
    name: "Mercedes S-Class",
    capacity: "3 Passengers",
    luggage: "3 Luggage",
    description: "Executive sedans offering sophistication and advanced technology",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=200&h=150&fit=crop&q=80",
  },
  {
    name: "Cadillac Escalade",
    capacity: "6 Passengers",
    luggage: "6 Luggage",
    description: "Spacious luxury SUVs perfect for group travel and extra luggage",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&h=150&fit=crop&q=80",
  },
  {
    name: "Mercedes Sprinter",
    capacity: "14 Passengers",
    luggage: "14 Luggage",
    description: "Executive vans for team transportation with premium amenities",
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&h=600&fit=crop&q=80",
    thumbnail: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=200&h=150&fit=crop&q=80",
  },
]

export function Fleet() {
  const [selectedVehicle, setSelectedVehicle] = useState(0)
  const currentVehicle = vehicles[selectedVehicle]

  return (
    <section id="fleet" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6"
          >
            Our Premium
            <span className="block text-accent mt-2">Fleet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-pretty leading-relaxed"
          >
            From luxury sedans to executive vans, our meticulously maintained fleet ensures comfort and prestige on every journey.
          </motion.p>
        </div>

        {/* Layout - Left Column (Image + Content), Right Column (Thumbnails) */}
        <div className="flex lg:flex-cols-[2fr,200px] gap-6 max-w-5xl mx-auto">
          {/* Left Column - Image on top, Content below */}
          <div className="flex flex-col gap-6">
            {/* Main Vehicle Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVehicle}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="aspect-video rounded-2xl overflow-hidden border border-border"
              >
                <img
                  src={currentVehicle.image}
                  alt={currentVehicle.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Content Below Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVehicle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {currentVehicle.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {currentVehicle.description}
                </p>

                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-2">Specification:</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground font-medium">{currentVehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground font-medium">{currentVehicle.luggage}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Vertical Thumbnail Stack */}
          <div className="flex flex-col gap-3">
            {vehicles.map((vehicle, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedVehicle(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedVehicle === index
                    ? "border-accent shadow-lg shadow-accent/20"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <img
                  src={vehicle.thumbnail}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/30 hover:bg-background/20 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { WorldMapSVG } from "./world-map-svg"

const regions = [
  {
    region: "North America",
    cities: ["New York", "San Francisco", "Chicago", "Toronto", "Miami", "Los Angeles"],
  },
  {
    region: "Europe",
    cities: ["London", "Paris", "Berlin", "Zurich", "Milan", "Munich"],
  },
  {
    region: "Asia Pacific",
    cities: ["Tokyo", "Singapore", "Mumbai", "Delhi", "Sydney", "Melbourne"],
  },
  {
    region: "Middle East",
    cities: ["Dubai", "Riyadh", "Abu Dhabi", "Doha"],
  },
  {
    region: "Latin America",
    cities: ["São Paulo", "Mexico City", "Buenos Aires", "Rio de Janeiro"],
  },
]

// City coordinates with real lat/long for accurate positioning
const cityCoordinates = [
  { name: "New York", lat: 40.7128, lon: -74.0060 },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { name: "Chicago", lat: 41.8781, lon: -87.6298 },
  { name: "Toronto", lat: 43.6532, lon: -79.3832 },
  { name: "Miami", lat: 25.7617, lon: -80.1918 },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { name: "London", lat: 51.5074, lon: -0.1278 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "Berlin", lat: 52.5200, lon: 13.4050 },
  { name: "Zurich", lat: 47.3769, lon: 8.5417 },
  { name: "Milan", lat: 45.4642, lon: 9.1900 },
  { name: "Munich", lat: 48.1351, lon: 11.5820 },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
  { name: "Delhi", lat: 28.7041, lon: 77.1025 },
  { name: "Sydney", lat: -33.8688, lon: 151.2093 },
  { name: "Melbourne", lat: -37.8136, lon: 144.9631 },
  { name: "Dubai", lat: 25.2048, lon: 55.2708 },
  { name: "Riyadh", lat: 24.7136, lon: 46.6753 },
  { name: "Abu Dhabi", lat: 24.4539, lon: 54.3773 },
  { name: "Doha", lat: 25.2854, lon: 51.5310 },
  { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
  { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
  { name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
  { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
]

export function GlobalReach() {
  const [visibleRegions, setVisibleRegions] = useState<number[]>([])
  const [isMapVisible, setIsMapVisible] = useState(false)
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            regions.forEach((_, index) => {
              setTimeout(() => {
                setVisibleRegions((prev) => [...prev, index])
              }, index * 120)
            })
            setTimeout(() => setIsMapVisible(true), regions.length * 120 + 300)
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
    <section id="global" className="py-24 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance mb-6">
            We Drive
            <span className="block text-accent mt-2">The World</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Globalization has become the norm for business travel. Our worldwide network ensures consistent,
            professional service wherever you go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 cursor-default ${
                visibleRegions.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">{region.region}</h3>
              <div className="space-y-2">
                {region.cities.map((city, cityIndex) => (
                  <div
                    key={cityIndex}
                    className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                      style={{ animationDelay: `${cityIndex * 100}ms` }}
                    />
                    <span className="text-muted-foreground hover:text-foreground transition-colors">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`relative aspect-21/9 rounded-2xl overflow-hidden border border-border group transition-all duration-1000 ${
            isMapVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* World map background with SVG continents */}
          <div className="absolute inset-0 bg-linear-to-br from-secondary/40 via-background to-secondary/30">
            {/* SVG World Map with integrated city markers */}
            <div className="absolute inset-0 text-accent z-20">
              <WorldMapSVG
                className="w-full h-full"
                cities={cityCoordinates}
                onCityHover={setHoveredCity}
                hoveredCity={hoveredCity}
              />
            </div>
            {/* Radial glow overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">50+ Cities</div>
              <div className="text-xl text-muted-foreground">Across 6 Continents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

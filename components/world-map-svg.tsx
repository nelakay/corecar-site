"use client"

import { useEffect, useState } from "react"
import { feature } from "topojson-client"
import type { Topology, GeometryCollection } from "topojson-specification"

interface WorldMapSVGProps {
  className?: string
  cities?: Array<{ name: string; lat: number; lon: number }>
  onCityHover?: (cityName: string | null) => void
  hoveredCity?: string | null
}

export function WorldMapSVG({ className = "", cities = [], onCityHover, hoveredCity }: WorldMapSVGProps) {
  const [paths, setPaths] = useState<string[]>([])

  useEffect(() => {
    // Load world atlas data
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((response) => response.json())
      .then((topology: Topology) => {
        const countries = feature(topology, topology.objects.countries as GeometryCollection)

        // Convert GeoJSON to SVG paths
        const svgPaths = countries.features.map((f) => {
          if (f.geometry.type === "Polygon") {
            return f.geometry.coordinates.map((ring) => {
              const points = ring.map((coord) => {
                // Simple equirectangular projection
                const x = (coord[0] + 180) * (1000 / 360)
                const y = (90 - coord[1]) * (500 / 180)
                return `${x},${y}`
              })
              return `M ${points.join(" L ")} Z`
            }).join(" ")
          } else if (f.geometry.type === "MultiPolygon") {
            return f.geometry.coordinates.map((polygon) => {
              return polygon.map((ring) => {
                const points = ring.map((coord) => {
                  const x = (coord[0] + 180) * (1000 / 360)
                  const y = (90 - coord[1]) * (500 / 180)
                  return `${x},${y}`
                })
                return `M ${points.join(" L ")} Z`
              }).join(" ")
            }).join(" ")
          }
          return ""
        })

        setPaths(svgPaths.filter(Boolean))
      })
      .catch((error) => {
        console.error("Failed to load world map:", error)
      })
  }, [])

  // Project lat/lon to SVG coordinates
  const projectToSVG = (lat: number, lon: number) => {
    const x = (lon + 180) * (1000 / 360)
    const y = (90 - lat) * (500 / 180)
    return { x, y }
  }

  return (
    <svg
      viewBox="0 0 1000 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Countries */}
      <g fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.2">
        {paths.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </g>

      {/* City markers */}
      <g className="city-markers">
        {cities.map((city, index) => {
          const { x, y } = projectToSVG(city.lat, city.lon)
          return (
            <g key={index}>
              {/* Solid circle */}
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="currentColor"
                opacity="1"
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={() => onCityHover?.(city.name)}
                onMouseLeave={() => onCityHover?.(null)}
              />
              {/* City name tooltip */}
              {hoveredCity === city.name && (
                <g className="tooltip-desktop">
                  <rect
                    x={x - 40}
                    y={y - 35}
                    width="80"
                    height="25"
                    rx="6"
                    fill="hsl(var(--background))"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.95"
                  />
                  <text
                    x={x}
                    y={y - 18}
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="12"
                    fontWeight="600"
                  >
                    {city.name}
                  </text>
                </g>
              )}
            </g>
          )
        })}
      </g>

      {/* Hide tooltips on mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            .tooltip-desktop {
              display: none;
            }
          }
        `}
      </style>
    </svg>
  )
}

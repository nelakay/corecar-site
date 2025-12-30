"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const servicesMenu = [
  { title: "Roadshows", description: "On-time, professional transport for high-stakes roadshows" },
  { title: "Group Transport", description: "SUVs, vans, and shuttles for team transportation" },
  { title: "Corporate Car Service", description: "Dedicated executive transportation for professionals" },
  { title: "Airport Transfers", description: "Seamless door-to-door service for every flight" },
]

const resourcesMenu = [
  { title: "Blog", description: "Latest insights and industry updates" },
  { title: "Case Studies", description: "Success stories from our clients" },
  { title: "Help Center", description: "Answers to common questions" },
  { title: "Contact", description: "Get in touch with our team" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 px-4 lg:px-30 pt-4">
      <div
        className={`max-w-380 mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-border/80 bg-background/95 backdrop-blur-xl shadow-lg"
            : "border-border/40 bg-background/80 backdrop-blur-xl"
        }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/corecar_logo.png"
                alt="CORE CAR"
                className="h-6 lg:h-7 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-all duration-300">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      <div className="p-2">
                        {servicesMenu.map((item, index) => (
                          <Link
                            key={index}
                            href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#fleet"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                Fleet
              </Link>

              <Link
                href="#partner"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                Become a Partner
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-all duration-300">
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      <div className="p-2">
                        {resourcesMenu.map((item, index) => (
                          <Link
                            key={index}
                            href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
                asChild
              >
                <a href="https://scweb-a.groundtools.com/US.CT.CORE/WebConnect/DefaultV2/Booking?WizardKey=Cdn4nBjt-zxMCZPuGVAAFNCWg3aMV8uI7Cxq4aG-WK9GeID5OasJD80Oph_J0enB-QvUa8pz1-TWhQO4xb2Anw" target="_blank" rel="noopener noreferrer">
                  Book a Ride
                </a>
              </Button>
              <button
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <nav className="px-6 py-4 flex flex-col gap-4 border-t border-border/40">
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {servicesMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-xs text-muted-foreground hover:text-foreground py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#fleet"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fleet
              </Link>

              <Link
                href="#partner"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Become a Partner
              </Link>

              <div>
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {resourcesMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-xs text-muted-foreground hover:text-foreground py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

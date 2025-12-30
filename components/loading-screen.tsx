"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Loading Text */}
      <div className="mb-8 text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-2">Executive Car Service</h2>
        <p className="text-sm text-muted-foreground">Preparing your experience...</p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-accent transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Progress Percentage */}
      <div className="mt-4 text-sm text-muted-foreground tabular-nums">{progress}%</div>
    </div>
  )
}

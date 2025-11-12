/**
 * Scroll Progress - Subtle Visual Feedback
 * Showing the journey without demanding attention
 */

import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      setProgress(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-100 z-50"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

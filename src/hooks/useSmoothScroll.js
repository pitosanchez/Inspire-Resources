/**
 * useSmoothScroll Hook
 * Smooth scrolling to anchor links with header offset
 * Respects user's motion preferences
 */

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const targetElement = document.querySelector(href)
      if (!targetElement) return

      e.preventDefault()

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      // Calculate offset for sticky header (80px on desktop, 64px on mobile)
      const headerHeight = window.innerWidth >= 1024 ? 80 : 64
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight

      if (prefersReducedMotion) {
        // Instant scroll for users who prefer reduced motion
        window.scrollTo({
          top: targetPosition,
          behavior: 'auto',
        })
      } else {
        // Smooth scroll with easing
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }

      // Update URL without triggering scroll
      if (window.history && window.history.pushState) {
        window.history.pushState(null, null, href)
      }
    }

    // Add event listener to document for all anchor clicks
    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])
}

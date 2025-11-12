/**
 * useSmoothScroll Hook
 * Smooth scrolling to anchor links - human-feeling motion
 */

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href === '#') return

      const targetElement = document.querySelector(href)
      if (!targetElement) return

      e.preventDefault()

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (prefersReducedMotion) {
        targetElement.scrollIntoView()
      } else {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: {
            y: targetElement,
            offsetY: 80, // Account for sticky header
          },
          ease: 'power3.inOut',
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

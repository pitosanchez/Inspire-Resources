/**
 * useScrollAnimation Hook
 * Gentle fade-in animations on scroll - respecting user preferences
 */

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !elementRef.current) {
      return
    }

    const {
      from = { opacity: 0, y: 30 },
      to = { opacity: 1, y: 0 },
      duration = 0.8,
      ease = 'power2.out',
      delay = 0,
      start = 'top 85%',
      toggleActions = 'play none none none',
    } = options

    const animation = gsap.fromTo(
      elementRef.current,
      from,
      {
        ...to,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start,
          toggleActions,
        },
      }
    )

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [options])

  return elementRef
}

export function useStaggerAnimation(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !containerRef.current) {
      return
    }

    const {
      from = { opacity: 0, y: 20 },
      to = { opacity: 1, y: 0 },
      duration = 0.6,
      stagger = 0.1,
      ease = 'power2.out',
      start = 'top 85%',
    } = options

    const children = containerRef.current.children

    const animation = gsap.fromTo(
      children,
      from,
      {
        ...to,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [options])

  return containerRef
}

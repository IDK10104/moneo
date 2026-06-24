import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fade+slide-up reveal for elements matching `selector` inside `containerRef`.
 * `stagger` adds a delay between each matched element.
 */
export function useScrollReveal(containerRef, selector = '[data-reveal]', stagger = 0.1) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector, containerRef.current)
      if (!els.length) return

      gsap.fromTo(
        els,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])
}

/** Stagger-in for a list of cards */
export function useCardStagger(containerRef, selector = '[data-card]', stagger = 0.08) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector, containerRef.current)
      if (!els.length) return

      gsap.fromTo(
        els,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])
}

/** Slide in from left/right for split sections */
export function useSplitReveal(leftRef, rightRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: leftRef.current, start: 'top 80%', once: true },
          }
        )
      }
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: rightRef.current, start: 'top 80%', once: true },
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])
}

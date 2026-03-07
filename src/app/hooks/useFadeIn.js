'use client'

import { useEffect } from 'react'

// watches elements and fades them in when they enter viewport
export function useFadeIn(selector, options = {}) {
    const { delay = 0, stagger = 100 } = options

    useEffect(() => {
        const elements = document.querySelectorAll(selector)
        if (!elements.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target
                        const index = Array.from(elements).indexOf(el)
                        el.style.animationDelay = `${delay + index * stagger}ms`
                        el.classList.add('fadeInUp')
                        observer.unobserve(el) // animate once only
                    }
                })
            },
            { threshold: 0.15 }
        )

        elements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}
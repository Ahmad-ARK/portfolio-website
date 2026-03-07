'use client'

import { useEffect } from 'react'
import { useLoader } from '../context/LoaderContext'

export function useSplitText(ref, options = {}) {
    const { loaderDone } = useLoader()
    const { delay = 0, charDelay = 30 } = options

    useEffect(() => {
        if (!loaderDone) return
        const el = ref.current
        if (!el) return

        const text = el.innerText
        el.innerHTML = ''

        text.split('').forEach((char, i) => {
            const span = document.createElement('span')
            span.textContent = char === ' ' ? '\u00A0' : char
            span.className = 'split-char'
            span.style.animationDelay = `${delay + i * charDelay}ms`
            el.appendChild(span)
        })
    }, [loaderDone])
}
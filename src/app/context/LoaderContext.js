'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LoaderContext = createContext()

export function LoaderProvider({ children }) {
    const [loaderDone, setLoaderDone] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaderDone(true)
        }, 1800) // same duration as loader

        return () => clearTimeout(timer)
    }, [])

    return (
        <LoaderContext.Provider value={{ loaderDone }}>
            {children}
        </LoaderContext.Provider>
    )
}

// custom hook — makes it easy to use in any component
export function useLoader() {
    return useContext(LoaderContext)
}
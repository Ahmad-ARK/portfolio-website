'use client'

import { useLoader } from '../context/LoaderContext'

export default function Loader() {
    const { loaderDone } = useLoader()

    return (
        <div className={`loader ${loaderDone ? 'loaderHidden' : ''}`}>
            <div className="loaderText">
                {'Ahmad.'.split('').map((char, i) => (
                    <span key={i} style={{ animationDelay: `${i * 80}ms` }}>
                        {char}
                    </span>
                ))}
            </div>
        </div>
    )
}
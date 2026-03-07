'use client'

export default function Slider() {
    const images = [
        'slider_1.png',
        'slider_2.png',
        'slider_3.png',
        'slider_4.png',
        'slider_5.png',
        'slider_6.png',
        'slider_7.png',
        'slider_8.png',
        'slider_9.png',
        'slider_10.png',
    ]

    return (
        <div className="slider" style={{
            '--width': '100px',
            '--height': '100px',
            '--quantity': 10,
        }}>
            <div className="list">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="item"
                        style={{ '--position': i + 1 }}
                    >
                        <img src={`/slider-images/${img}`} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
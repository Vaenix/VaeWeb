import { useState } from 'react'

export default function ProjectCarousel({ projects }) {
    const [activeIndex, setActiveIndex] = useState(1)
    const length = projects.length

    return (
        <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
            {projects.map((project, index) => {
                const pos = (index - activeIndex + length) % length

                let transformClass = ''
                if (pos === 0) transformClass = 'translate-x-[-30vw] scale-90 opacity-60 z-10 cursor-pointer'
                else if (pos === 1) transformClass = 'translate-x-0 scale-100 opacity-100 z-20'
                else if (pos === 2) transformClass = 'translate-x-[30vw] scale-90 opacity-60 z-10 cursor-pointer'
                else transformClass = 'hidden'

                const handleClick = () => {
                    if (pos === 0) {
                        setActiveIndex((prev) => (prev - 1 + length) % length)
                    } else if (pos === 2) {
                        setActiveIndex((prev) => (prev + 1) % length)
                    }
                }

                return (
                    <div
                        key={index}
                        onClick={handleClick}
                        className={`absolute w-[70vw] sm:w-[25vw] h-full p-6 bg-white rounded-lg shadow-md transition-all duration-500 transform ${transformClass}`}
                    >
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                        <p className="text-gray-600">{project.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}
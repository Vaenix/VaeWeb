import { useState, useEffect } from "react"
import ProjectCarousel from "../components/ProjectCarousel"
export default function Home() {
    const [expanded, setExpanded] = useState(false)
    const [activeIndex, setActiveIndex] = useState(1)

    const projects = [
        {
            title: "🎮 Portfolio Site",
            desc: "Built with React, Tailwind CSS, and deployed on Vercel."
        },
        {
            title: "💬 AI Chatbot",
            desc: "A chatbot using OpenAI + Node.js for real-time Q&A."
        },
        {
            title: "🧠 3D Avatar Builder",
            desc: "Using Three.js + Blender to render real-time avatars."
        }
    ]

    useEffect(() => {
        const handleScroll = () => setExpanded(true)
        window.addEventListener("wheel", handleScroll, { once: true })
        return () => window.removeEventListener("wheel", handleScroll)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center bg-blue-100 min-h-screen overflow-x-hidden">
            {/* Welcome Section */}
            <section id="welcome" className="w-full min-h-screen flex items-center justify-center bg-transparent relative">
                <div className={`absolute inset-0 transition-colors duration-1000 
          ${expanded ? 'bg-transparent' : 'bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6]'}`}></div>

                <div className={`absolute transition-all duration-1500 ease-in-out text-white
          ${expanded
                        ? 'flex items-center justify-center translate-x-[20vw] translate-y-[-35vh] scale-75 origin-top-right w-[55vw] h-[10vh] bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6] shadow-lg backdrop-blur-md text-4xl px-6 py-4 rounded'
                        : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent'
                    }`}>
                    <h2 className={`font-bold transition-opacity duration-700 ${expanded ? 'text-3xl opacity-100' : 'text-4xl opacity-100'}`}>
                        {expanded ? 'Vaenix -> Happy everyday <- :)' : 'Welcome to Vaenix\'s Home!'}
                    </h2>
                </div>
            </section>

            {/* Profile */}
            <section
                className={`
          absolute w-[55vw] h-[10vh] left-1/2 -translate-x-1/2 
          flex items-center justify-center bg-transparent z-10
          transition-all duration-1000 ease-in-out
          ${expanded ? 'opacity-100 translate-x-[-50vw] translate-y-[-40vh]' : 'opacity-0 translate-y-[100vh]'}
        `}
            >
                <button className="cursor-pointer w-[50vw] h-[10vh] text-3xl font-semibold bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] text-blue-900 shadow-lg backdrop-blur-md rounded flex items-center justify-center transition-all duration-300">
                    For Vaenix's Story
                </button>
            </section>

            {/* Project Button */}
            <section
                id="project"
                className={`
          absolute w-[100vw] h-[10vh] left-1/2 -translate-x-1/2 
          flex flex-col items-center justify-center bg-transparent z-10
          transition-all duration-1000 ease-in-out
          ${expanded ? 'opacity-100 translate-x-[-50vw] translate-y-[-20vh]' : 'opacity-0 translate-y-[100vh]'}
        `}
            >
                <button className="cursor-pointer w-[80vw] h-[10vh] text-3xl font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg backdrop-blur-md rounded flex items-center justify-center transition-all duration-300">
                    What Did I Do
                </button>
            </section>

            <section
                id="projects"
                className={`mt-[25vh] w-full flex flex-col items-center transition-all duration-1000 ease-in-out
    ${expanded ? 'opacity-100 translate-y-[-40vh]' : 'opacity-0 translate-y-10'}
  `}
            >
                <ProjectCarousel projects={projects} />
            </section>
        </div>
    )
}
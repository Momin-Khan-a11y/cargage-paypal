"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const partners = [
    { name: "logo", logo: "/logo/img1.png" },
    { name: "logo", logo: "/logo/img2.png" },
    { name: "logo", logo: "/logo/img3.png" },
    { name: "logo", logo: "/logo/img4.png" },
    { name: "logo", logo: "/logo/img5.png" },
    { name: "logo", logo: "/logo/img6.png" },
    { name: "logo", logo: "/logo/img7.png" },
]


export function PartnersSection() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
  
    // auto scroll
    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return


        let animationFrameId: number
        let scrollPosition = 0

        const scroll = () => {
            scrollPosition += 0.2
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0
            }
            scrollContainer.scrollLeft = scrollPosition
            animationFrameId = requestAnimationFrame(scroll)
        }

        animationFrameId = requestAnimationFrame(scroll)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [])

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev + 1) % partners.length)
        setTimeout(() => setIsAnimating(false), 500)
      }
    
      const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length)
        setTimeout(() => setIsAnimating(false), 500)
      }


    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        THE 4WheelsCar IS PROUDLY PARTNERED!</h2>
                    <p className="text-gray-600">
                        The 4WheelsCar is Proud to be Partnered with Leaders in the Automotive Industry
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto" data-aos="fade-up">
                    {/* Navigation Arrows */}
                    <button
                        title="Previous"
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center bg-transparent rounded-full z-10 hover:bg-gray-50 transition-colors"
                    disabled={isAnimating}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        title="Next"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center bg-transparent rounded-full z-10 hover:bg-gray-50 transition-colors"
                    disabled={isAnimating}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slides */}
                    <div ref={scrollRef} className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 240}px)` }}
                        >
                            {[...partners, ...partners].map((partner, index) => (
                                <div
                                    key={`${partner.name}-${index}`}
                                    className="w-[240px] flex-shrink-0 flex items-center justify-center px-8"
                                    style={{ width: "200px" }}
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={200}
                                        height={80}
                                        className="w-auto h-16 object-contain transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


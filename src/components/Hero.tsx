import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Hero() {
    return (
        <section className='h-screen bg-[url("/hero-bg.png")] bg-cover bg-clip-border bg-center bg-blend-darken w-full overflow-hidden  text-white pt-16'>
            <div className="container mx-auto px-4 pb-16">
                <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        LEARN THE STORY OF YOUR 
                        FUTURE DREAM CAR
                    </h1>
                    <p className="text-md sm:text-xl mb-8 text-white shadow-lg tracking-wide">Get detailed vehicle history reports in minutes</p>
                    <div className="flex flex-row gap-4 justify-center font-bold">
                        <Link href='/#get-report' className='bg-primary px-4 md:px-6 py-2 md:py-3 text-white hover:bg-primary/90 shadow-lg shadow-primary/30 rounded-full'>
                            Get Report
                        </Link>
                        <Link href='/#why-us' className='bg-primary px-4 md:px-6 py-2 md:py-3 text-white hover:bg-primary/90 shadow-lg shadow-primary/30 rounded-full'>
                            Learn More
                        </Link>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#0B1120]/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold uppercase">
                            <span className="text-primary">4Wheels </span>
                            <span className="text-white">Car</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-secondary transition-colors">
                            Home
                        </Link>
                        <Link href="/#steps" className="text-white hover:text-primary transition-colors">
                            How To
                        </Link>
                        <Link href="/#why-us" className="text-white hover:text-primary transition-colors">
                            Why Us
                        </Link>
                        <Link href="/#faq" className="text-white hover:text-primary transition-colors">
                            FAQ
                        </Link>
                        <Link href={'/#get-report'}>
                            <Button className="bg-gradient-to-r from-secondary to-primary text-textcolor hover:opacity-90 rounded-full">
                                Get Report
                            </Button>
                        </Link>

                    </nav>

                    {/* Mobile Menu Button */}
                    <button title='button' className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        <Menu />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden py-4 space-y-4">
                        <Link href="/" className="block text-white hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#/how-to" className="block text-white hover:text-primary transition-colors">
                            How To
                        </Link>
                        <Link href="#/why-us" className="block text-white hover:text-primary transition-colors">
                            Why Us
                        </Link>
                        <Link href="#/faq" className="block text-white hover:text-primary transition-colors">
                            FAQ
                        </Link>
                        <Button className="w-full bg-primary text-black hover:bg-primary/90">Get Report</Button>
                    </nav>
                )}
            </div>
        </header>
    )
}



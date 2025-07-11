"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import Link from "next/link"

export default function PrivacyPolicy() {
    const [agreed, setAgreed] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
        <main className="pt-20 bg-[#0B1120]">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#0B1120] to-[#0F172A] text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                Privacy Policy
                            </span>
                        </h1>
                        <p className="text-gray-400">Last Updated: January 21, 2025</p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px]">
                        <path
                            d="M0 0L60 10C120 20 240 40 360 46.7C480 53.3 600 46.7 720 43.3C840 40 960 40 1080 43.3C1200 46.7 1320 53.3 1380 56.7L1440 60V120H0V0Z"
                            fill="#0B1120"
                        />
                    </svg>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
                        <ScrollArea className="h-[60vh] p-6 md:p-8">
                            <div className="space-y-8 text-white">
                                <div data-aos="fade-up">
                                    <h2 className="text-2xl font-bold mb-4">Welcome to The 4WheelsCar</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        At The 4WheelsCar, we are committed to protecting your privacy. This Privacy Policy explains
                                        how we collect, use, and safeguard your personal information when you visit our website or use our
                                        services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Billing address</li>
                                        <li>Phone number</li>
                                        <li>Vehicle Identification Number (VIN)</li>
                                        <li>Payment information (used solely to process transactions)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                        <li>Process and deliver vehicle history reports ($39.99 per report)</li>
                                        <li>Provide customer support and respond to your inquiries</li>
                                        <li>Send important updates about service changes or policy updates</li>
                                        <li>Improve the functionality and user experience of our website</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We implement industry-standard security measures to protect your personal information. However, no
                                        method of transmission over the internet is 100% secure. While we strive to protect your data, we
                                        cannot guarantee its absolute security.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        You have the right to access, correct, or delete your personal information. Contact us at
                                        contact@thevehiclerecord.us to exercise these rights.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        If you have any questions about this Privacy Policy, please contact us at
                                        marie@4wheelscar.com
                                    </p>
                                </div>
                            </div>
                        </ScrollArea>

                        <div className="p-6 md:p-8 border-t border-white/10 bg-white/5">
                            <div className="flex items-center space-x-2 mb-4">
                                <Checkbox 
                                    id="terms" 
                                    checked={agreed} 
                                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                                    className="border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-white"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I have read and agree to the privacy policy
                                </label>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button 
                                    className="flex-1 bg-gradient-to-r from-secondary to-primary text-white hover:opacity-90 shadow-lg shadow-primary/30" 
                                    disabled={!agreed}
                                >
                                    <Link href="/#search" className="w-full h-full">Accept & Continue</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


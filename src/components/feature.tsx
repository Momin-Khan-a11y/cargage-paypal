"use client"

import { Trophy, Clock, FileText, DollarSign, TrendingUp, Banknote } from "lucide-react"
import Image from "next/image"

export function FeaturesSection() {

  const leftFeatures = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Information You Can Trust",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Full History",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Millions Of Records",
    },
  ]

  const rightFeatures = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce the Risk of unexpected cost",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Simplify Car Evaluation Process",
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Make your Sale Faster",
    },
  ]

  return (
    <section id='why-us' className="py-24 bg-gradient-to-b from-[#0B1120] to-[#0F172A] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            HERE IS WHY THE VEHICLE RECORD IS LEADING!
          </h2>
          <p className="text-gray-400">
            Our experts brings you the most detailed and up-to-date used car information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-4 md:gap-6"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="text-right">
                  <h3 className="font-semibold text-lg mb-1 text-white">{feature.title}</h3>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-textcolor">
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative" data-aos="zoom-in">
            <div className="aspect-[4/3] relative">
              <Image
                src="/feature.png"
                alt="Ford Raptor"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 md:gap-6"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-textcolor">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


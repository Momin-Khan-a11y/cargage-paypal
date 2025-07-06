"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"


interface StepsProps {
  currentStep: 1 | 2 | 3
  className?: string
}

export default function Steps({ currentStep, className }: StepsProps) {


  const handleDownload = () => {
    const fileUrl = '/report/report.txt'; 

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'DemoReport.txt'; 
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

   

  const steps = [
    {
      number: 1,
      title: "Begin with",
      heading: "Finding Your Car",
      description:
        "Search by vehicle identification number (VIN) or US license plate to find the car you want to research.",
    },
    {
      number: 2,
      title: "Then make a",
      heading: "Quick Payment",
      description: "Now complete your purchase easily through our secure and user-friendly checkout system.",
    },
    {
      number: 3,
      title: "That's All",
      heading: "Download Report",
      description:
        "Once the payment is made our system will automatically send you the Report on your Email in a few minutes.",
    },
  ]

  return (
    <div  className={cn("w-full px-4 mt-5 mb-12", className)}>
      <div id='steps' className="max-w-6xl mx-auto my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
          KNOWING YOUR VEHICLE IS EASIER!

        </h2>
        <p className="text-center text-gray-600 mb-12" data-aos="fade-up">
          Getting your vehicle history is now easier then ever before.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
          {steps.map((step) => {
            const isActive = step.number === currentStep

            return (
              <div key={step.number} className="relative px-4" data-aos="flip-left" >
                <motion.div
                  className={cn(
                    "relative p-6 rounded-2xl border-[4px] bg-white/5 backdrop-blur-sm",
                    isActive ? "border-secondary" : "border-transparent",
                  )}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    borderColor: isActive ? "hsl(var(--secondary))" : "transparent",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 rotate-180
                      border-l-[16px] border-l-transparent
                      border-b-[22px] border-b-secondary
                      border-r-[16px] border-r-transparent"
                    />
                  )}

                  <div className="text-center space-y-4">
                    <div className="text-lg font-medium">
                      {step.number}. {step.title}
                    </div>
                    <h3 className="text-2xl font-bold">{step.heading}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  
                </motion.div>
              </div>
            )
          })}
        </div>


        <div className="flex justify-center mt-12" data-aos="fade-up">
          <button className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          onClick={handleDownload}>
            Download Demo Report
          </button>
        </div>
      </div>
    </div>
  )
}


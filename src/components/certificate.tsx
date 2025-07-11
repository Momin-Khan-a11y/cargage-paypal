import React from 'react'
import Image from 'next/image'

function Certificate() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12 text-textcolor">
              4WheelsCar is certified by US Department <br />
              of Justice and NMVTIS
            </h2>
            <div className="flex justify-center gap-8 flex-wrap">
              <Image src="/doj-logo.png" alt="Department of Justice" width={200} height={200} className="h-32 w-auto" />
              <Image src="/nmvtis-logo.png" alt="NMVTIS" width={200} height={200} className="h-32 w-auto" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Certificate

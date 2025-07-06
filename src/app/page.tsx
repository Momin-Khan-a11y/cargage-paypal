'use client'
import Certificate from "@/components/certificate";
import Steps from "@/components/steps";
import Hero from "@/components/Hero";
import SearchSec from "@/components/search";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { FeaturesSection } from "@/components/feature";
import { FaqSection } from "@/components/faqs";
import { PartnersSection } from "@/components/partnered";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[url('/svg-bg-strip2.png')] bg-contain bg-blend-color-dodge  pt-6 sm:pt-32">
        
      </div>
      <Hero />
      <SearchSec />
      <Certificate />
      <Steps currentStep={1} />
      <FeaturesSection />
      <FaqSection />
      <PartnersSection />
    </div>
  );
}

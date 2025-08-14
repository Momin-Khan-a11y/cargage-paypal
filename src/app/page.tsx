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
    <div className="font-[family-name:var(--font-geist-sans)] bg-foreground">
      <div className=" bg-[#161616] pt-6 sm:pt-32">
        {/* bg-[url('/svg-bg-strip2.png')] bg-contain bg-blend-color-dodge */}
      </div>
      <Hero />
      <SearchSec />
      <Certificate />
      <Steps currentStep={1} className="" />
      <FeaturesSection />
      <FaqSection bg_col_up="from-[#0F172A] to-[#0c1733]" bg_col_down="bg-white" />
      <PartnersSection />
    </div>
  );
}

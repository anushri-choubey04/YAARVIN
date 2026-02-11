import React from "react";
import StorySection from "../components/home/StorySection";
import Hero from "../components/home/Hero";
import Occasion from "../components/home/Occasion";
import PriceSection from "../components/home/PriceSection";
import VideoSection from "../components/home/VideoSection";
import HowItWorks from "../components/home/HowItWorks";
import StoreLocation from "../components/home/StoreLocation";
import FAQ from "../components/home/FAQ";
import QuickView from "../components/home/QuickView";



export default function Home() {
  return (
    <div className="overflow-x-hidden">
     <StorySection/>
      <Hero />
      <Occasion />
      <HowItWorks />
      <QuickView />
      <VideoSection />
      <PriceSection />
      <StoreLocation />
      <FAQ />
      
    </div>
  );
}

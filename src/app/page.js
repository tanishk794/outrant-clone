import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import HowItWorksSection from "@/components/How";
import UnlockSection from "@/components/Unlock";
import GenerateImage from "@/components/GenerateImage";
import PublishContent from "@/components/PublishContent";
import BestWork from "@/components/BestWork";
import GeneratedContent from "@/components/GeneratedContent";
import TestimonialSection from "@/components/Tesimonial";
import PaymentInfo from "@/components/PaymentInfo";
export default function Home() {
  return (
    <div className="w-full h-full ">
      <Hero />
      <VideoSection />
      <HowItWorksSection />
      <UnlockSection />
      <GenerateImage />
      <PublishContent />
      <BestWork />
      <GeneratedContent />
      <TestimonialSection/>
      <PaymentInfo/>
    </div>
  );
}

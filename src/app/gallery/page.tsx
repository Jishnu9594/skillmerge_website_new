import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import ProgramHighlights from "@/components/programhighlights./program";
import ScrollingBanner from "@/components/scrollingbanner/scrollingbaner";
import FaqContactSection from "@/components/faq/faq";
import AboutUsSection from "@/components/Aboutus/About";
import WhatsAppButton from "@/components/Whatsappbutton/Whatsappbutton";
import HeroGallery from "@/components/Gallery/Gallery";
import MapSection from "@/components/Map/Map";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skillmerge | Gallery",
};

export default function About() {
  return (
    <main>
      <WhatsAppButton />
      <HeroGallery />
      <ScrollingBanner />
      <ProgramHighlights />
      <Courses />
      <Testimonial />
      <ScrollingBanner />
      <MapSection />
    </main>
  );
}

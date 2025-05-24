import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import ProgramHighlights from "@/components/programhighlights./program";
import ScrollingBanner from "@/components/scrollingbanner/scrollingbaner";
import FaqContactSection from "@/components/faq/faq";
import WhatIsHackingSection from "@/components/youtubevideo/youtube";
import GalleryCarousel from "@/components/Gallery/Gallery";
import WhatsAppButton from "@/components/Whatsappbutton/Whatsappbutton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skillmerge | Home",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <WhatsAppButton />
      <Hero />
      <ScrollingBanner />
      <WhatIsHackingSection />
      <ProgramHighlights />
      <Companies />
      <Courses />
      <Mentor />
      <ScrollingBanner />
      <FaqContactSection />
      <Testimonial />
      <GalleryCarousel />
      <ScrollingBanner />
    </main>
  );
}

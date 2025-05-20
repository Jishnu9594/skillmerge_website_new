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
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "eLearning",
};

export default function Home() {
  return (
    <main>
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
      <ScrollingBanner />
    </main>
  );
}

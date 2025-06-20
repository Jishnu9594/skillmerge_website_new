import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import ProgramHighlights from "@/components/programhighlights./program";
import ScrollingBanner from "@/components/scrollingbanner/scrollingbaner";
import FaqContactSection from "@/components/faq/faq";
import { Metadata } from "next";
import CoursesHero from "@/components/Cousres/cousres";
import WorkshopSection from "@/components/Workshops/Workshop";
import WhatsAppButton from "@/components/Whatsappbutton/Whatsappbutton";
import MapSection from "@/components/Map/Map";
export const metadata: Metadata = {
  title: "Skillmerge |Workshop",
};

export default function Course() {
  return (
    <main>
      <WhatsAppButton />
      <WorkshopSection />
      <ScrollingBanner />
      <ProgramHighlights />
      <Testimonial />
      <ScrollingBanner />
      <FaqContactSection />
      <MapSection />
    </main>
  );
}

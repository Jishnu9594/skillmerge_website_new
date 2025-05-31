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
// import GalleryCarousel from "@/components/Gallery/Gallery";
import WhatsAppButton from "@/components/Whatsappbutton/Whatsappbutton";
import MapSection from "@/components/Map/Map";
import SkillMergeRoadmap from "@/components/Roadmap/roadmap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skillmerge | Home",
  description:
    "Skillmerge offers hands-on cybersecurity training with real-world projects and expert mentorship. Launch your career in ethical hacking and cybersecurity today.",
  keywords: [
    "Cybersecurity Training",
    "Ethical Hacking Course",
    "Cybersecurity Career",
    "Skillmerge",
    "Cyber Security India",
    "Learn Ethical Hacking",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Skillmerge | Cybersecurity Training Platform",
    description:
      "Start your cybersecurity journey with Skillmerge. Practical training, real projects, and expert mentorship to boost your skills.",
    url: "https://www.skillmerge.in", // Replace with your live domain
    siteName: "Skillmerge",
    images: [
      {
        url: "/images/meta/og-image.jpg", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "Skillmerge Cybersecurity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillmerge | Cybersecurity Training Platform",
    description:
      "Join Skillmerge and become a skilled cybersecurity professional with hands-on training.",
    images: ["/images/meta/og-image.jpg"],
    site: "@skillmerge", // Replace with your Twitter handle if available
    creator: "@skillmerge",
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
      <SkillMergeRoadmap />
      <Mentor />
      <ScrollingBanner />
      <Testimonial />
      <ScrollingBanner />
      <FaqContactSection />
      <MapSection />
    </main>
  );
}

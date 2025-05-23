// import React from "react";
// // import Hero from "@/components/Home/Hero";
// // import Companies from "@/components/Home/Companies";
// // import Courses from "@/components/Home/Courses";
// // import Mentor from "@/components/Home/Mentor";
// // import Testimonial from "@/components/Home/Testimonials";
// // import ProgramHighlights from "@/components/programhighlights./program";
// // import ScrollingBanner from "@/components/scrollingbanner/scrollingbaner";
// // import FaqContactSection from "@/components/faq/faq";
// // import AboutUsSection from "@/components/Aboutus/About";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "eLearning",
// };

// export default function Blog() {
//   return <main></main>;
// }

// app/blog/page.tsx or components/BlogHero.tsx
export default function BlogHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-[#1BD46C] via-transparent to-[#1BD46C] animate-pulse-slow opacity-10 rotate-12" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle,#1BD46C_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          We’re Working on Something Amazing
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Our blog is launching soon with the latest in cybersecurity, tech
          insights, and industry updates. Stay tuned!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[#1BD46C] text-black font-semibold rounded-full hover:bg-opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}

// app/courses/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { courses } from "@/app/api/data"; // Adjusted import path to match your data location

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.details,
  };
}

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) return notFound();

  return (
    <section className="min-h-screen pt-28 px-4 bg-black text-white relative z-10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#011A10] via-[#010D07] to-[#011A10] animate-pulse-slow opacity-20 rotate-12" />
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#1BD46C_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern" />
      </div>

      {/* Course Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

        <Image
          src={course.image}
          alt={course.title}
          width={800}
          height={400}
          className="rounded-xl mb-6 object-cover"
          priority
        />

        <p className="text-gray-300 mb-6">{course.details}</p>

        <h2 className="text-2xl font-semibold mb-2 text-[#1BD46C]">
          What You'll Learn
        </h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          {course.whatYouLearn.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-[#1BD46C]">Modules</h2>
        <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-1">
          {course.modules.map((module, i) => (
            <li key={i}>{module}</li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold mb-2 text-[#1BD46C]">
          Career Opportunities
        </h2>
        <p className="text-gray-300 mb-6">
          Graduates can pursue roles like Security Analyst, Penetration Tester,
          Incident Responder, and more.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-[#1BD46C]">
          Certificate Overview
        </h2>
        <p className="text-gray-300 mb-6">
          On successful completion, receive a certificate recognized by industry
          professionals.
        </p>

        <a
          href="/docs/sample-brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1BD46C] underline mb-6 inline-block"
        >
          Download Course Brochure (PDF)
        </a>

        <div className="mt-8">
          <button className="bg-[#1BD46C] text-black px-6 py-3 rounded text-lg font-medium hover:bg-opacity-80 transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

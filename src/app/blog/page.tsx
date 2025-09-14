export default function BlogHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-[#9b59b6] via-transparent to-[#9b59b6] animate-pulse-slow opacity-10 rotate-12" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle,#9b59b6_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          We’re Working on Something Amazing
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Our blog is launching soon with the latest in cybersecurity, tech
          insights, and industry updates. Stay tuned!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[#9b59b6] text-white font-semibold rounded-full hover:bg-opacity-80 transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}

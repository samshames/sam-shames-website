import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I&apos;m Sam!
            </h1>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I&apos;m an engineer, entrepreneur, and angel investor living in
                Boston.
              </p>
              <p>
                In my past, I&apos;ve been{" "}
                <a
                  href="#professional-bio"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <strong>an inventor</strong>
                </a>
                &mdash;four patents granted,{" "}
                <a
                  href="#materials-projects"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <strong>a scientist</strong>
                </a>
                &mdash;published undegraduate research in materials science, and{" "}
                <a
                  href="#education-projects"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <strong>an educator</strong>
                </a>
                &mdash;teaching assistant at MIT,{" "}
                <a
                  href="#wrestling-projects"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <strong>an athlete</strong>
                </a>
                &mdash;national champion wrestler in college,{" "}
                <a
                  href="#cello-fun-fact"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <strong>and a musician</strong>
                </a>
                &mdash;cellist since the second grade. I&apos;m interested in
                science and the arts, startups and sports, philosophy and food,
                and almost everything in between.{" "}
              </p>
              <p>
                This website is a place to share my work. Keep scrolling to
                learn more.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <figure className="flex flex-col items-center">
              <div className="w-80 h-80 relative rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/Website%20photo.PNG"
                  alt="Sam Shames speaking at an event"
                  fill
                  className="object-cover object-[100%_center] scale-110 brightness-110"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-sm text-gray-500 text-center">
                Speaking at a November 2024 Hardware Boston Meet Up.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I&apos;m Sam!
            </h1>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>I&apos;m an engineer, entrepreneur, and angel investor living in Boston.</p>

              <p>
                I&apos;m also a{' '}
                <a href="#wrestling-projects" className="text-blue-600 hover:text-blue-800 underline">
                  <strong>(former) athlete</strong>
                </a>
                &mdash;national champion wrestler in college and now just broke 90 in golf,{' '}
                <a href="#timeline-cello" className="text-blue-600 hover:text-blue-800 underline">
                  <strong>a musician</strong>
                </a>
                &mdash;cellist since the second grade and a karaoke lover,{' '}
                <a href="#professional-bio" className="text-blue-600 hover:text-blue-800 underline">
                  <strong>an inventor</strong>
                </a>
                &mdash;four granted patents to date, and{' '}
                <a href="#education-projects" className="text-blue-600 hover:text-blue-800 underline">
                  <strong>an educator</strong>
                </a>
                &mdash;TA for multiple classes at MIT and lifelong learner. I&apos;m interested in science
                and the arts, startups and sports, technology and teaching, philosophy and food, and
                almost everything in between. I am an aspiring Renaissance Man.
              </p>

              <p>
                I&apos;m motivated by the joy of being alive and the opportunity to treat time as
                sacred. I made this website to share my work. Keep scrolling to learn more.
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
                  className="object-cover object-[90%_center] scale-110"
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
  )
}

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
              <p>
                I&apos;m an MIT-trained engineer, entrepreneur, and angel investor living in Boston.
                Over more than a decade growing Embr Labs from MIT prototyping competition to $50M
                in revenue and 225,000 units sold, I&apos;ve developed expertise in building and
                commercializing new technologies.
              </p>

              <p>
                I&apos;ve been an aspiring Renaissance Man since learning the term in the 9th grade.
                I&apos;m a musician–cellist since second grade and lover of karaoke–an athlete–national
                champion wrestler in college and just broke 90 in golf–and a life-long learner.
                I&apos;m interested in science and the arts, startups and sports, technology and
                teaching, philosophy and food, and almost everything in between.
              </p>

              <p>
                I&apos;m motivated by the joy of being alive and the opportunity to treat time as
                sacred. I made this website to share my work. Keep scrolling to learn more.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 relative rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/sam-photo.jpg"
                alt="Sam Shames"
                fill
                className="object-cover"
                priority
              />
            </div>
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
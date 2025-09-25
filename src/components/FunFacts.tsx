export default function FunFacts() {
  const funFacts = [
    {
      icon: "🎬",
      title: "Movie Extra with Mark Wahlberg",
      description: (
        <>
          I was{" "}
          <a
            href="/Ted%20movie.jpg"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            a featured extra
          </a>{" "}
          in the movie Ted after playing basketball with Mark Wahlberg at MIT.
          My game was terrible but my hustle impressed him enough to invite me
          to participate in the movie.
        </>
      ),
    },
    {
      icon: "🤸",
      title: "Backflip Off the Wall",
      description: (
        <>
          I learned how to run up a wall and do a backflip in college. I cannot
          do this anymore, but here&apos;s the{" "}
          <a
            href="https://www.youtube.com/watch?v=zalmpuxD14M"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            throwback video
          </a>
          .
        </>
      ),
    },
    {
      icon: "🏃",
      title: "Marathon Runner",
      description: (
        <>
          I&apos;ve run 6 marathons: the Boston Marathon from 2012 through 2016,
          including 2013 the year of the Boston Marathon bombing, 2014 as part
          of the{" "}
          <a
            href="https://mitstrong.mit.edu/team/shames/"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT Strong team
          </a>{" "}
          raising money for MIT police Officer Sean Collier, and the NYC
          marathon in 2017.
        </>
      ),
    },
    {
      icon: "👑",
      title: "Queen of Denmark",
      description:
        "I met the now Queen of Denmark and was featured live on Danish TV in 2015 when Embr was a finalist of the Index Design to Improve Life Awards.",
    },
    {
      icon: "📺",
      title: "First Man on QVC UK Menopause Show",
      description:
        "I was the first man to appear on QVC UK's Menopause Your Way show in 2023.",
    },
    {
      icon: "🎤",
      title: "Most Expensivest with 2Chainz",
      description: (
        <>
          I met 2Chainz while showcasing Embr Wave on season 3, episode 4 of{" "}
          <a
            href="https://www.imdb.com/title/tt8911118/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Most Expensivest
          </a>
          . They gave me the villain edit and made it seem like I wasn&apos;t
          supportive of 2Chainz&apos;s mom&apos;s hot flashes.
        </>
      ),
    },
    {
      icon: "🛢️",
      title: "Biodiesel Processor Project",
      description: (
        <>
          <a
            href="https://www.youtube.com/watch?v=5cwrX6MxEnw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Built a biodiesel processor
          </a>{" "}
          to convert waste fry oil from my high school cafeteria into usable
          fuel for a senior year project.
        </>
      ),
    },
    {
      anchor: "cello-fun-fact",
      icon: "🎻",
      title: "Cellist",
      description: (
        <>
          <a
            href="https://medium.com/positive-peer-pressure/my-cello-story-cb2d049c2f10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            I&apos;ve played the cello since second grade
          </a>
          . Although I stopped taking lessons after 11 years when I graduated
          high school, I still enjoy playing now and then.
        </>
      ),
    },
  ];

  return (
    <section
      id="fun-facts"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Fun Facts
        </h2>

        <p className="text-xl text-gray-600 mb-16 text-center">
          A bit more about me...
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              id={fact.anchor || undefined}
              className={`bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1${
                fact.anchor ? " scroll-mt-24" : ""
              }`}
            >
              <div className="text-4xl mb-4 text-center">{fact.icon}</div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                {fact.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

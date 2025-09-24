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
      title: "Off the Wall Backflips",
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
      icon: "⚾",
      title: "Fenway Park Brick Owner",
      description:
        "My high school friends and I bought a brick in Fenway Park as part of the 100th anniversary sale.",
    },
    {
      icon: "🚪",
      title: "Door Holder for UK Prime Minister",
      description:
        "I held the door open for former UK Prime Minister David Cameron when he visited MIT.",
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
      icon: "🐒",
      title: "Baboon Karma",
      description:
        "A baboon pooped in my backpack while on Safari in South Africa after I had made fun of my brother and sister-in-law for not locking their door properly. True karma.",
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
          Too weird for LinkedIn but worth sharing 😉
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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

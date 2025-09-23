export default function Timeline() {
  const timelineEvents = [
    {
      date: "February 2025",
      title: "Embr Wave wins an Oprah Menopause O-Ward",
      description: "Embr Wave wins an Oprah Menopause O-Ward for providing relief from Hot Flashes."
    },
    {
      date: "January 2024",
      title: "CBS Innovation Nation Follow-up",
      description: "CBS's Innovation Nation caught up 10 years later to see how far Embr has come since their 2015 story."
    },
    {
      date: "December 2022",
      title: "CB Insights Digital Health 150",
      description: "Embr is named to CB Insights' Digital Health 150 list of most promising digital health companies of 2022."
    },
    {
      date: "March 2021",
      title: "Embr Wave 2 Launch",
      description: "Embr Wave 2 successfully launches and wins an iF Design award. It was a 21 process navigating all the supply chain disruptions from Covid to bring it to market."
    },
    {
      date: "October 2019",
      title: "Good Morning America Pitch",
      description: "I pitched Embr Wave live on Good Morning America to Daymond John and the CEO of AARP and won the Innovator in Aging Award for the company."
    },
    {
      date: "July 2019",
      title: "Most Expensivest with 2Chainz",
      description: "I met 2Chainz while showcasing Embr Wave on the season 3 episode 4 of Most Expensivest about the future. They gave me the villain edit and made it seem like I wasn't supportive of 2Chainz mom's hot flashes."
    },
    {
      date: "November 2018",
      title: "MIT Wulff Lecture",
      description: "My alma mater invites me back to give the Wulff Lecture sharing my journey from undergraduate to entrepreneur."
    },
    {
      date: "October 2017",
      title: "Embr Wave Kickstarter Launch",
      description: "Four years after winning the prototyping competition, we launched the original Embr Wave on Kickstarter. We hit our $100k goal within the first 3 hours and raised nearly $630k."
    },
    {
      date: "May 2015",
      title: "CBS Innovation Nation Feature",
      description: "CBS's Innovation Nation airs a story on Embr that generates significant interest from potential customers, some of whom agree to beta test our latest prototypes."
    },
    {
      date: "January 2015",
      title: "Forbes 30 Under 30",
      description: "Recognized as a Forbes 30 Under 30 for my work at Embr"
    },
    {
      date: "November 2014",
      title: "Intel Make It Wearable Contest",
      description: "Embr Labs is a top 10 finalist in Intel's global Make It Wearable contest, gaining exposure and helping secure non-dilutive capital to continue the journey to market. I deliver a live 15m pitch to the CEO of Intel, Venus Williams, and a panel of other executives."
    },
    {
      date: "October 2013",
      title: "MIT MADMEC Competition Win",
      description: "Wired picked up the story about our prototype heating and cooling wristband that won the MIT MADMEC competition. We thought the value was helping buildings save energy."
    },
    {
      date: "March 2013",
      title: "NCWA National Wrestling Championship",
      description: "Won an NCWA national wrestling title, capping off a 31-0 season, and leading our team to a National Champion"
    },
    {
      date: "May 2012",
      title: "Madrid Research Experience",
      description: "Lived in Madrid, Spain for 3 months while doing research at a national lab as part of an MIT program. It was my first time living abroad and a powerful exposure to alternative cultures."
    },
    {
      date: "May 2010",
      title: "Biodiesel Processor Project",
      description: "Built a biodiesel processor to convert waste fry oil from my high school cafeteria into useable fuel"
    },
    {
      date: "March 2010",
      title: "New England Wrestling Championship",
      description: "Won the New England wrestling title at 112lbs after having fallen short my sophomore and junior year. I realized I wasn't ready to give up wrestling and decided to wrestle at MIT."
    },
    {
      date: "November 2006",
      title: "Started High School Wrestling",
      description: "Joined the high school wrestling team as an insecure 88lbs freshman. Lost repeatedly but fell in love with the sport and set the goal to become the first New England Champion in my school's history."
    },
    {
      date: "July 2004",
      title: "First International Trip",
      description: "Visited France with my family as part of a house exchange. It was my first time leaving the country and ignited a love of travel."
    },
    {
      date: "October 1998",
      title: "Started Cello Lessons",
      description: "Began taking cello lessons and would continue through 2010. I would eventually play in a few local orchestras and a chamber group at NEC."
    },
    {
      date: "November 1992",
      title: "My timeline begins",
      description: "The beginning of my journey"
    }
  ]

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Timeline
        </h2>

        <p className="text-xl text-gray-600 mb-16 text-center">
          Here are some of the key events that have shaped my personal and professional journey.
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
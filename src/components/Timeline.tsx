'use client'

import { useState } from "react";

export default function Timeline() {
  const [showAll, setShowAll] = useState(false);

  const timelineEvents: {
    date: string;
    title: string;
    description: string;
    id?: string;
  }[] = [
    {
      date: "February 2025",
      title: "Embr Wave wins an Oprah Menopause O-Ward",
      description:
        "<a href='https://www.oprahdaily.com/life/health/a63494760/oprah-menopause-awards-2025/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Embr Wave wins an Oprah Menopause O-Ward for providing relief from Hot Flashes.</a>",
    },
    {
      date: "January 2024",
      title: "CBS Innovation Nation Follow-up",
      description:
        "<a href='https://www.youtube.com/watch?v=AoPI2jsS25c' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>CBS's Innovation Nation caught up 10 years later to see how far Embr has come since their 2015 story.</a>",
    },
    {
      date: "December 2022",
      title: "CB Insights Digital Health 150",
      description:
        "<a href='https://www.cbinsights.com/research/report/digital-health-startups-redefining-healthcare-2022/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Embr is named to CB Insights' Digital Health 150 list of most promising digital health companies of 2022.</a>",
    },
    {
      date: "March 2021",
      title: "Embr Wave 2 Launch",
      description:
        "<a href='https://ifdesign.com/en/winner-ranking/project/embr-wave-2/314867' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Embr Wave 2 successfully launches and wins an iF Design award.</a> It was a 21-month process navigating all the supply chain disruptions from Covid to bring it to market.",
    },
    {
      date: "October 2019",
      title: "Good Morning America Pitch",
      description:
        "<a href='https://www.youtube.com/watch?v=d2FhmQdjtuU' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>I pitched Embr Wave live on Good Morning America to Daymond John and the CEO of AARP and won the Innovator in Aging Award for the company.</a>",
    },
    {
      date: "July 2019",
      title: "Most Expensivest with 2Chainz",
      description:
        "<a href='https://www.imdb.com/title/tt8911118/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>I met 2Chainz while showcasing Embr Wave on the season 3 episode 4 of Most Expensivest about the future.</a> They gave me the villain edit and made it seem like I wasn't supportive of 2Chainz's mom's hot flashes.",
    },
    {
      date: "November 2018",
      title: "MIT Wulff Lecture",
      description:
        "<a href='https://www.youtube.com/watch?v=y2rA3z1lC0Y' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>My alma mater invites me back to give the Wulff Lecture sharing my journey from undergraduate to entrepreneur.</a>",
    },
    {
      date: "October 2017",
      title: "Embr Wave Kickstarter Launch",
      description:
        "Four years after winning the prototyping competition, we launched the original <a href='https://www.kickstarter.com/projects/embrwave/embr-wave-a-thermostat-for-your-body/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Embr Wave on Kickstarter. We hit our $100k goal within the first 3 hours and raised nearly $630k.</a>",
    },
    {
      date: "May 2015",
      title: "CBS Innovation Nation Feature",
      description:
        "<a href='https://www.youtube.com/watch?v=rjsi_edlXp8' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>CBS's Innovation Nation airs a story on Embr that generates significant interest from potential customers, some of whom agree to beta test our latest prototypes.</a>",
    },
    {
      date: "January 2015",
      title: "Forbes 30 Under 30",
      description:
        "<a href='https://www.forbes.com/profile/samuel-shames/?' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Recognized as a Forbes 30 Under 30 for my work at Embr</a>",
    },
    {
      date: "November 2014",
      title: "Intel Make It Wearable Contest",
      description:
        "<a href='https://www.youtube.com/watch?v=sDZHITVfYrI' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Embr Labs is a top 10 finalist in Intel's global Make It Wearable contest, gaining exposure and helping secure non-dilutive capital to continue the journey to market. I deliver a live 15m pitch to the CEO of Intel, Venus Williams, and a panel of other executives.</a>",
    },
    {
      date: "October 2013",
      title: "MIT MADMEC Competition Win",
      description:
        "<a href='https://www.wired.com/2013/10/an-ingenious-wristband-that-keeps-your-body-at-the-perfect-temperature-no-ac-required/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Wired picked up the story about our prototype heating and cooling wristband that won the MIT MADMEC competition.</a> We thought the value was helping buildings save energy.",
      id: "timeline-madmec",
    },
    {
      date: "March 2013",
      title: "NCWA National Wrestling Championship",
      description:
        "<a href='https://www.thetech.com/2013/04/19/wrestling-v133-n19' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Won an NCWA national wrestling title, capping off a 31-0 season, and leading our team to a national championship.</a>",
    },
    {
      date: "May 2012",
      title: "Madrid Research Experience",
      description:
        "Lived in Madrid, Spain for 3 months while doing research at a national lab as part of an MIT program. It was my first time living abroad and a powerful exposure to alternative cultures.",
    },
    {
      date: "May 2010",
      title: "Biodiesel Processor Project",
      description:
        "<a href='https://www.youtube.com/watch?v=5cwrX6MxEnw' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>Built a biodiesel processor to convert waste fry oil from my high school cafeteria into usable fuel</a>",
    },
    {
      date: "March 2010",
      title: "New England Wrestling Championship",
      description:
        "Won the New England wrestling title at 112lbs after having fallen short my sophomore and junior year. I realized I wasn't ready to give up wrestling and decided to wrestle at MIT.",
    },
    {
      date: "November 2006",
      title: "Started High School Wrestling",
      description:
        "Joined the high school wrestling team as an insecure 88lbs freshman. Lost repeatedly but fell in love with the sport and set the goal to become the first New England Champion in my school's history.",
    },
    {
      date: "July 2004",
      title: "First International Trip",
      description:
        "Visited France with my family as part of a house exchange. It was my first time leaving the country and ignited a love of travel.",
    },
    {
      date: "March 2003",
      title: "Les Miserables Musical",
      description:
        "I was cast as a member of Gavroche’s gang in the local high school production of Les Miserables. I memorized the entire album and ignited a love of musical theatre.",
    },
    {
      date: "October 1998",
      title: "Started Cello Lessons",
      description:
        "Began taking cello lessons and would continue through 2010. I would eventually play in a few local orchestras and a chamber group at NEC.",
      id: "timeline-cello",
    },
    {
      date: "November 1992",
      title: "My Timeline Begins",
      description: "I was born on a Tuesday...",
    },
  ];

  const visibleEvents = showAll ? timelineEvents : timelineEvents.slice(0, 3);

  return (
    <section id="timeline" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Timeline
        </h2>

        <p className="text-xl text-gray-600 mb-16 text-center">
          Here are some of the key events that have shaped my personal and
          professional journey.
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {visibleEvents.map((event, index) => (
              <div
                key={index}
                id={event.id ? event.id : undefined}
                className="relative pl-20 scroll-mt-32"
              >
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

                  <div
                    className="text-gray-700 leading-relaxed [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>
              </div>
            ))}
          </div>

          {timelineEvents.length > 3 && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                aria-expanded={showAll}
              >
                <span>{showAll ? "Show fewer events" : "Show full timeline"}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${showAll ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

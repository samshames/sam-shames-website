"use client";

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
      date: "January 2024",
      title: "CBS Innovation Nation Follow-up",
      description:
        "<a href='https://www.youtube.com/watch?v=AoPI2jsS25c' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>CBS's Innovation Nation caught up 10 years later to see how far Embr has come since their 2015 story.</a>",
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
  ];

  const visibleEvents = showAll ? timelineEvents : timelineEvents.slice(0, 3);

  return (
    <section id="timeline" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Timeline
        </h2>

        <p className="text-xl text-gray-600 mb-16 text-center">
          Here are some of the key events that have shaped my professional
          journey to date.
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
                <span>
                  {showAll ? "Show fewer events" : "Show full timeline"}
                </span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    showAll ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

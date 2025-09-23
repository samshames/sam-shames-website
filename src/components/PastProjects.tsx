export default function PastProjects() {
  const educationProjects = [
    {
      title: "Passion Projects in Materials Science",
      date: "May 2014",
      description: "Created the Passion Projects in Materials Science elective for freshmen to pursue a semester-long research project on a topic of their choice."
    },
    {
      title: "LINC Conference Speaking",
      date: "June 2013",
      description: "Spoke at Panel during the MIT LINC (Learning International Networks Consortium) conference, giving a talk entitled 'Inspired Education - A Student's Vision'"
    },
    {
      title: "Future of Education Columns",
      date: "October 2012",
      description: "Wrote a series of opinion columns on the future of education for the MIT student newspaper. One of them on problem-based learning caught the attention of the Dean of Digital Learning and led to the chance to join a committee on the future of education."
    }
  ]

  const materialsProjects = [
    {
      title: "Rapid Windshield De-icing Research",
      date: "October 2013",
      description: "First-author on peer-reviewed research paper on the application of solar thermal fuel molecule for rapid windshield deicing, leading two $750,000 research collaboration with BMW"
    },
    {
      title: "Trabecular Bone Microstructure Evolution",
      date: "May 2013",
      description: "MIT senior thesis on the microstructure evolution of trabecular model and the use of genetic algorithms as novel optimization method"
    },
    {
      title: "Wolfram Demonstrations",
      date: "April 2012",
      description: "Programmed and published a series of interactive web apps on materials science and manufacturing using Mathematica for the Wolfram Demonstrations Project."
    }
  ]

  const wrestlingProjects = [
    {
      title: "Wrestling Stories Website",
      date: "2015 to 2018",
      description: "After losing in the national finals as a sophomore in 2012, I started writing about the life lessons I learned from wrestling. More than a year later, I finished When Disappoint Inspires. That story grew into Wrestling Stories, a website with more than 40 personal stories from 5 generations of wrestlers celebrating the impact the sport made on their lives."
    },
    {
      title: "MIT Assistant Coach",
      date: "2014 to 2017",
      description: "I was a volunteer assistant coach for the MIT wrestling team for three seasons after graduating. I stepped down after Embr Labs raised its Series A financing and I needed to use the time I was coaching on Embr Labs."
    }
  ]

  const creativeWriting = [
    {
      title: "Fiesta",
      description: "Creative essay"
    },
    {
      title: "Blogging Streak for positive peer pressure",
      description: "Personal development writing"
    },
    {
      title: "Becoming more conscious of consciousness",
      description: "Philosophical exploration"
    },
    {
      title: "Why study philosophy",
      description: "Educational essay"
    },
    {
      title: "Nature's Legos",
      description: "Science writing"
    }
  ]

  return (
    <section id="past-projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Past Projects
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <p className="text-gray-600 mb-8">
              Before co-founding Embr Labs, I was very interested in the future of education and lifelong learning. I was at MIT during the launch of Massive Open Online Courses (MOOCs) and the founding of platforms like EdX, Udacity, and Coursera. Some of my work reflects that interest:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {project.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Materials Science</h3>
            <p className="text-gray-600 mb-8">
              During my time at MIT, I was an active undergraduate researcher working primarily with Professor Jeffrey Grossman and Professor W. Craig Carter. While I didn&apos;t end up pursuing graduate work in materials science, I&apos;m proud of the work I did as an undergraduate.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialsProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      {project.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Wrestling</h3>
            <p className="text-gray-600 mb-8">
              More than almost anything else, wrestling has made me the person I am today. The sport helped me evolve from an insecure 88lbs freshman in high school to the first New England Champion in my school&apos;s history and then a National Champion at MIT. As Dan Gable said, &quot;Once you&apos;ve wrestled, everything else in life is easier.&quot;
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {wrestlingProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                      {project.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Creative Writing</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {creativeWriting.map((piece, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="text-md font-semibold text-gray-900 mb-2">
                    {piece.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {piece.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
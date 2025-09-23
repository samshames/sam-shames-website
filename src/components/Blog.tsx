export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Blog
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            I&apos;ve been writing regularly since college. As of 2025, I&apos;ve started blogging at Substack,
            but before then I published in the MIT newspaper The Tech and then on Medium.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg shadow-sm border border-orange-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8h18l-9 9L3 8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Current Blog
                </h3>
                <p className="text-gray-700 mb-6">
                  Read my latest thoughts and insights on Substack
                </p>
                <a
                  href="#"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Visit Substack →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  MIT The Tech
                </h3>
                <p className="text-gray-700 mb-6">
                  Previous writings from my time at MIT
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Read Articles →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Medium
                </h3>
                <p className="text-gray-700 mb-6">
                  Essays and reflections on entrepreneurship and life
                </p>
                <a
                  href="#"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  View Medium →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Featured Writing Topics
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Entrepreneurship & Startups
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Category creation and go-to-market strategies</li>
                  <li>• Hardware-software integration</li>
                  <li>• Subscription model design</li>
                  <li>• Building and scaling teams</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Personal Development
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Life lessons from wrestling</li>
                  <li>• The future of education</li>
                  <li>• Philosophy and consciousness</li>
                  <li>• Travel and cultural experiences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
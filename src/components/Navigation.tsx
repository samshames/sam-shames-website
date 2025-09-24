'use client'

import Image from 'next/image'

export default function Navigation() {
  const menuItems = [
    { name: 'Professional Bio', href: '#professional-bio' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Past Projects', href: '#past-projects' },
    { name: 'Fun Facts', href: '#fun-facts' },
    { name: 'Contact Me', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            <Image
              src="/logo.jpg"
              alt="Sam Shames logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span>Sam Shames</span>
          </button>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-base font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer text-gray-600 hover:text-gray-900">
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-base font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  )
}

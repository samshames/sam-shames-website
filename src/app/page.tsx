import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProfessionalBio from '@/components/ProfessionalBio'
import Timeline from '@/components/Timeline'
import PastProjects from '@/components/PastProjects'
import Blog from '@/components/Blog'
import FunFacts from '@/components/FunFacts'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProfessionalBio />
        <Timeline />
        <PastProjects />
        <Blog />
        <FunFacts />
        <Contact />
      </main>
    </div>
  )
}
import { Header } from '@/components/header'
import { UpperHeader } from '@/components/upper-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Solutions } from '@/components/solutions'
import { TechStack } from '@/components/tech-stack'
import { Portfolio } from '@/components/portfolio'
import { PortfolioShowcase } from '@/components/portfolio-showcase'
import { Partners } from '@/components/partners'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {

 
  
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-blue-500">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <UpperHeader />
        <Header />
        <Hero />
      </div>
      <Portfolio />
      <PortfolioShowcase />
      <Services />
      <Solutions />
      <TechStack />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  )
}


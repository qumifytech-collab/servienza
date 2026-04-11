'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import EarlyAdopters from '@/components/EarlyAdopters'
import Industries from '@/components/Industries'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import MobileApp from '@/components/MobileApp'
import Integrations from '@/components/Integrations'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <EarlyAdopters />
      <Industries />
      <Features />
      <HowItWorks />
      <MobileApp />
      <Integrations />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

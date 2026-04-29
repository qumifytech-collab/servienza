'use client'
import {useEffect} from 'react'
import HeroSection from '@/components/Hero'
import WhoWeAre from "@/components/who-we-are";
import OurServices from "@/components/our-services";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      {threshold: 0.12, rootMargin: '0px 0px -40px 0px'}
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <HeroSection/>
      <WhoWeAre/>
      <OurServices/>
      {/*<Industries />*/}
      {/*<Features />*/}
      {/*<HowItWorks />*/}
      {/*<MobileApp />*/}
      {/*<Integrations />*/}
      {/*<SocialProof />*/}
      {/*<Pricing />*/}
      {/*<FAQ />*/}
      {/*<Footer />*/}
    </main>
  )
}

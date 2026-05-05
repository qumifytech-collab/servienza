'use client'
import {useEffect} from 'react'
import HeroSection from '@/components/Hero'
import IndustriesServed from '@/components/IndustriesServed'
import FeaturesGrid from '@/components/FeaturesGrid'
import SmartDispatch from '@/components/SmartDispatch'
import Communication from '@/components/Communication'
import InvoicingPayments from '@/components/InvoicingPayments'
import TwoApps from '@/components/TwoApps'
import SupportOnboarding from '@/components/SupportOnboarding'
import Comparison from '@/components/Comparison'
import Testimonial from '@/components/Testimonial'
import CaseStudy from '@/components/CaseStudy'
import HowWeWork from '@/components/HowWeWork'
import FaqSection from '@/components/FaqSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

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
      <IndustriesServed/>
      <FeaturesGrid/>
      <SmartDispatch/>
      <Communication/>
      <InvoicingPayments/>
      <TwoApps/>
      <HowWeWork/>
      <Comparison/>
      <Testimonial/>
      <CaseStudy/>
      <SupportOnboarding/>
      <FaqSection/>
      {/*<ComingSoon/>*/}
      <ContactForm/>
      <Footer/>
    </main>
  )
}

'use client'
import {useEffect} from 'react'
import HeroSection from '@/components/Hero'
import WhoWeAre from "@/components/who-we-are";
import OurServices from "@/components/our-services";
import Testimonial from "@/components/Testimonial";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudy from "@/components/CaseStudy";
import TwoApps from "@/components/TwoApps";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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
      <TwoApps/>
      <Testimonial/>
      <HowWeWork/>
      <WhyChooseUs/>
      <CaseStudy/>
      <FaqSection/>
      <ContactForm/>
      <Footer/>
    </main>
  )
}

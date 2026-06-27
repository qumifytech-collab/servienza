import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TradesMarquee from '@/components/TradesMarquee'
import SavingsCalculator from '@/components/SavingsCalculator'
import Trades from '@/components/Trades'
import Features from '@/components/Features'
import Workflow from '@/components/Workflow'
import DispatchShowcase from '@/components/DispatchShowcase'
import CommunicationShowcase from '@/components/CommunicationShowcase'
import PaymentsShowcase from '@/components/PaymentsShowcase'
import HowItWorks from '@/components/HowItWorks'
import WhiteGloveSetup from '@/components/WhiteGloveSetup'
import TwoApps from '@/components/TwoApps'
import Compare from '@/components/Compare'
import FounderPromise from '@/components/FounderPromise'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import Security from '@/components/Security'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import ClientInit from '@/components/ClientInit'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <TradesMarquee />
        <SavingsCalculator />
        <Trades />
        <Features />
        <Workflow />
        <DispatchShowcase />
        <CommunicationShowcase />
        <PaymentsShowcase />
        <HowItWorks />
        <WhiteGloveSetup />
        <TwoApps />
        <Compare />
        <FounderPromise />
        <Pricing />
        <Faq />
        <Security />
        <FinalCta />
      </main>
      <Footer />
      <ClientInit />
    </>
  )
}

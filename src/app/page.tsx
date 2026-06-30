import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WhySpainSection from '@/components/WhySpainSection'
import ProductsSection from '@/components/ProductsSection'
import WhyTopicalsSection from '@/components/WhyTopicalsSection'
import TrustSection from '@/components/TrustSection'
import ComplianceSection from '@/components/ComplianceSection'
import FaqSection from '@/components/FaqSection'
import WaitlistSection from '@/components/WaitlistSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <WhySpainSection />
        <ProductsSection />
        <WhyTopicalsSection />
        <TrustSection />
        <ComplianceSection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}

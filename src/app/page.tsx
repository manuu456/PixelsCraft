'use client'

import {
  HeroSection,
  ServicesSection,
  TechStackSection,
  PortfolioSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections'
import { Preloader } from '@/components/ui'

export default function HomePage() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import HowWeDoIt from '@/components/HowWeDoIt'
import SuccessStories from '@/components/SuccessStories'
import AboutUs from '@/components/AboutUs'
import FAQ from '@/components/FAQ'
import AIReadinessQuiz from '@/components/AIReadinessQuiz'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowWeDoIt />
      <SuccessStories />
      <AboutUs />
      <FAQ />
      <AIReadinessQuiz />
      <Contact />
    </>
  )
}

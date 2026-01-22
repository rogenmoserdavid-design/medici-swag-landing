import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import Thermometer from '@/components/Thermometer'
import WhatWereBuilding from '@/components/WhatWereBuilding'
import Confirmed from '@/components/Confirmed'
import StillHunting from '@/components/StillHunting'
import HowToHelp from '@/components/HowToHelp'
import TheAudience from '@/components/TheAudience'
import Footer from '@/components/Footer'
import StickyProgress from '@/components/StickyProgress'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Countdown />
      <Thermometer />
      <WhatWereBuilding />
      <Confirmed />
      <StillHunting />
      <TheAudience />
      <HowToHelp />
      <Footer />
      <StickyProgress />
    </main>
  )
}

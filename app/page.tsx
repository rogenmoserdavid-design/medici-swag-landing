import Hero from '@/components/Hero'
import Thermometer from '@/components/Thermometer'
import WhatWereBuilding from '@/components/WhatWereBuilding'
import Confirmed from '@/components/Confirmed'
import StillHunting from '@/components/StillHunting'
import HowToHelp from '@/components/HowToHelp'
import TheAudience from '@/components/TheAudience'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Thermometer />
      <WhatWereBuilding />
      <Confirmed />
      <StillHunting />
      <TheAudience />
      <HowToHelp />
      <Footer />
    </main>
  )
}

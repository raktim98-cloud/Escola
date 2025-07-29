import Banner from '@/components/HomePage/Banner'
import FutureGeneration from '@/components/HomePage/FutureGeneration'
import Knowledge from '@/components/HomePage/Knowledge'
import NewsletterSubscribe from '@/components/HomePage/NewsletterSubscribe'
import OurCourse from '@/components/HomePage/OurCourse'
import PopularCourse from '@/components/HomePage/PopularCourse'
import YourJourney from '@/components/HomePage/YourJourney'
import YourPartner from '@/components/HomePage/YourPartner'
import React from 'react'

function Home() {
  return (
    <div>
      <Banner/>
      <OurCourse/>
      <PopularCourse/>
      <Knowledge/>
      <FutureGeneration/>
      <NewsletterSubscribe/>
      <YourPartner/>
      <YourJourney/>
    </div>
  )
}

export default Home
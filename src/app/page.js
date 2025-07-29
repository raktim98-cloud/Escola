import Banner from '@/components/HomePage/Banner'
import ContactSection from '@/components/HomePage/ContactSection'
import FutureGeneration from '@/components/HomePage/FutureGeneration'
import Knowledge from '@/components/HomePage/Knowledge'
import NewsletterSubscribe from '@/components/HomePage/NewsletterSubscribe'
import OurCourse from '@/components/HomePage/OurCourse'
import PopularCourse from '@/components/HomePage/PopularCourse'
import Testimonial from '@/components/HomePage/Testimonial'
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
      <Testimonial/>
      <ContactSection/>
    </div>
  )
}

export default Home
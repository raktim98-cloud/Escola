import Banner from '@/components/HomePage/Banner'
import Knowledge from '@/components/HomePage/Knowledge'
import OurCourse from '@/components/HomePage/OurCourse'
import PopularCourse from '@/components/HomePage/PopularCourse'
import React from 'react'

function Home() {
  return (
    <div>
      <Banner/>
      <OurCourse/>
      <PopularCourse/>
      <Knowledge/>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from '../Hero'
import Category from '../Category'
import SliderSection from '../SliderSection'
import CustomNavBar from '../CustomNavBar'
import Footer from '../Footer'

function Index() {
  return (
    <div className='website'>
      <CustomNavBar />
        <Hero />
        <SliderSection />
        <Category />
        <Footer />
    </div>
  )
}

export default Index
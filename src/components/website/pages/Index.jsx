import React from 'react'
import Hero from '../Hero'
import Category from '../Category'
import SliderSection from '../SliderSection'
import Footer from './Footer'
import CustomNavBar from '../CustomNavBar'

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
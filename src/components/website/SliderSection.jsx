import React from 'react'
import SliderComponent from './SliderComponent'

function SliderSection() {
  return (
    <div className='slider-section'>
        <h2 className="h1 text-center">Find by Car Type</h2>
        <div className="div-slider">
        <SliderComponent />
        </div>
    </div>
  )
}

export default SliderSection
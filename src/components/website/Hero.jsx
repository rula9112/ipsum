import React from 'react'
import Button from 'react-bootstrap/Button';
import {Image } from 'react-bootstrap'
import FilterBar from './FilterBar';
import imgSrc from './../../images/website/picture.png'




function Hero() {
  return (
    <div className='hero'>
        <div className="d-flex flex-xs-column  flex-lg-row justify-content-lg-evenly align-items-center">
        <div className='w-50 ml-5'>
            <h4>Arriving Summer 2019</h4>
            <h2 className=' font-Roboto'>MAKE EVERY DAY LEGENDARY.</h2>
            <p className=' font-Roboto'> The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.</p>
            <Button varient="primary">EXPLORE</Button>
        </div>
        <div className="d-flex justify-content-between flex-lg-row-reverse">
          <Image src={imgSrc} className='w-75' />
        </div>
        </div>
     
       
        <div className=' d-flex justify-content-center'>
        <FilterBar />
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import {Image , Button , Container} from 'react-bootstrap'
import SliderComponent from '../SliderComponent'
import carImage from './../../../images/website/68f9a3c07615a35e40f6ae98efce3a76-removebg-preview 1.png';
import star from './../../../images/website/star.svg'
import starFull from './../../../images/website/starFull.svg'
import CustomNavBar from '../CustomNavBar';
function Details() {
  return (
      <div className='details bg-right'>
       <CustomNavBar />
       <Container>
      <div className='linksMap'>
        Type  &gt; Car  &gt;<span className="text-dark">Details </span>
        </div>
        <div>
          <div className='d-lg-inline-block w-60'> 
            <h1>Honda - Civic Type R</h1>
            <span className="h-3 color-primary text-bold">6000 cc</span>
            <Image src={carImage}  className='img w-100'/>
            <div className="div-slider">
           <SliderComponent />
            </div>
          </div>
          <div className='w-35 d-lg-inline-block mx-auto '>
            <div className="bg-victor"></div>
            <h4 className='mb-3'>Details</h4>
            <span className='h3 d-block'>Rating And Review</span>
           <Image src={starFull} className='svg' />
           <Image src={starFull} className='svg' />
           <Image src={starFull} className='svg' />
           <Image src={starFull} className='svg' />
           <Image src={star} className='svg' />
            <span>4</span>
            <h4 className='mb-3 mt-5'>Description</h4>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos, est placeat eveniet incidunt debitis cumque, impedit similique molestias saepe dolore id molestiae eius ipsum repellendus nemo soluta perferendis suscipit.</p>
            <h4>Colors</h4>
            <div>
            <div className='active bg bg-white'></div>
            <div className='bg-blue bg'></div>
            <div className='bg-black bg'></div>
            </div>
            <div className='mb-3'>
            <Button variant='outline-primary' className='btn-radius'>-</Button>
            <span className='ml-2 mr-2'>1</span>
            <Button className='btn-radius'>+</Button>
            <span className='ml-3'>Price: <span>250 $</span></span>
            </div>
            <Button variant='outline-primary'>Add To Cart</Button>
            <Button variant='primary margin'>Buy Now</Button>
          </div>
        </div>
      </Container>
      </div>
  )
}

export default Details
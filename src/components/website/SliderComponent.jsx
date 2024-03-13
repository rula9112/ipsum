import React from 'react'
import imageSrc from './../../images/website/picture (3).png'
import imageSrc2 from './../../images/website/Frame 94.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from 'react-bootstrap'
function SliderComponent() {
  const myData = [
    {src:imageSrc,alt:"Honda"},
    {src:imageSrc2,alt:"Honda"},
    {src:imageSrc,alt:"Honda"},
    {src:imageSrc,alt:"Honda"},
    {src:imageSrc,alt:"Honda"}
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const show = myData.map((item , index)=>{
    return(
 (index==2)?
      <Image src={item.src} alt={item.alt} className='active' />: <Image src={item.src} alt={item.alt} />
  
    )
  })
  return (
    <div className='slider-component'>
      <div className='mySlider'>
        <Slider  {...settings}>
      {show}
      </Slider>
    
      </div>
    </div>
  )
}

export default SliderComponent
import React from 'react'

import car from './../../../images/website/picture (3).png'
import car2 from './../../../images/website/picture (2).png'
import car3 from './../../../images/website/picture (5).png'
import car4 from './../../../images/website/picture (4).png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import CustomNavBar from '../CustomNavBar'

function Cart() {
  const myData = [
    {
      carName:'Audi',
      price:"240",
      color:"Black",
      code:"#695755",
      engineCapacity:"60000",
      img:car
    },
    {
      carName:'Honda',
      price:"240",
      color:"Black",
      code:"#695755",
      engineCapacity:"60000",
      img:car2
    },
    {
      carName:'BMW',
      price:"140",
      color:"Black",
      code:"#695755",
      engineCapacity:"60000",
      img:car3
    },
    {
      carName:'Volvo',
      price:"240",
      color:"Black",
      code:"#695755",
      engineCapacity:"60000",
      img:car4
    }
  ];
  const showData = myData.map((item,index)=>{
    return(<tr key={index} className=''>
      <td className='d-flex align-items-center'>
        <Image src={item.img}  />
       <div className='m-3'>
       <h6>{item.carName}</h6>
        <p>Code: {item.code}</p>
        <p>Enging Capacity :{item.engineCapacity}cc </p>
       </div>
       </td>
      <td>
       <Image src={item.img}  />
       <h6>{item.carName}</h6>
        <p>Code: {item.code}</p>
        <p>Enging Capacity :{item.engineCapacity}cc </p>
       </td>
      <td>{item.price} $</td>
      <td>{item.color}</td>
      <td>*</td>
    </tr>)
  });
  const show = myData.map(
    (item , index)=>{
      return(
        <Row  key={index}>
          <Col xs={3}>
          <Image src={item.img}  className='w-50'/>
       <div className='m-3  text-normal'>
       <h6>{item.carName}</h6>
        <p>Code: {item.code}</p>
        <p>Enging Capacity :{item.engineCapacity}cc </p>
       </div>
        </Col>
        <Col xs={3} >
        {item.price}
        </Col>
        <Col xs={3}>
        {item.color}
        </Col>
        <Col xs={3}>
        
        </Col>
        </Row>
        
      )
    }
  )

  //////////////////component//////////////////////
  return (
    <div className='cart text-bold bg-top'>
      <CustomNavBar />
      <Container>
        <div className='text-underLine'>
        <span>
            My Cart
         </span>
        </div>
     
         <Row className='m-5'>
         <Col xs={3} >
         Product
            </Col>
            <Col xs={3}>
            Price
            </Col>
            <Col xs={3}>
            Color
            </Col>
            <Col xs={3}>
            Delete
            </Col>
         </Row>
         {show}

      </Container>
    </div>
  )
}

export default Cart
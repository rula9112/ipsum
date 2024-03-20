import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import CustomNavBar from '../CustomNavBar'
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
  const {cartStore}  = useSelector(state=>state.cart);
  const showData =cartStore.length > 0? cartStore.map((item,index)=>{
    return(    <Row  key={index}>
      <Col xs={3}>
      <Image src={item.src}  className='w-50'/>
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
    </Row>)
  }):"no item"
 
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
         {showData}

      </Container>
    </div>
  )
}

export default Cart
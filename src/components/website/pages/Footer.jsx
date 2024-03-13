import React from 'react'
import { Col, Row , Image, Container} from 'react-bootstrap'
import location from './../../../images/website/lcation.svg';
import faceBook from './../../../images/website/facebook.svg';
import insta from './../../../images/website/instagram.svg';
import twiter from './../../../images/website/Vector (4).svg'
import logo from './../../../images/website/Logo.svg'


function Footer() {
  return (
    <footer>
      <Container>
      <Row className='text-xs-center text-md-right justify-content-md-between'>
        <Col xs={12} md={2} sm={6}>
          <Image src={logo} className='w-100'/>
          <span className="d-block">
            Car Company
          </span>
        </Col>
        <Col xs={12} md={2} sm={6}>
          <h6>Menue</h6>
          <span className="d-block">Home</span>
          <span className="d-block">Car Catalogue</span>
          <span className="d-block">Services</span>
        </Col>
        <Col xs={12} md={2} sm={6}>
          <h6>Further Information</h6>
          <span className="d-block">Trems & Condition</span>
          <span className="d-block">Privicy Policy</span>
        </Col>
        <Col xs={12} md={2} sm={6}>
          <h6>Contact Us</h6>
          <span className="d-block">sef aldein , aleppo , syria</span>
          <span className="d-block">+963 9888888</span>
          <span className="d-block">Tagres@gmail.com</span>
        </Col>
        <Col xs={12} md={2} sm={6}>
          <h6>Folow Us</h6>
          <Image src={twiter}  className='svg'></Image>
          <Image src={faceBook}  className='svg'></Image>
          <Image src={insta}  className='svg' />
        </Col>
      </Row>
      </Container>
    </footer>
  )
}

export default Footer
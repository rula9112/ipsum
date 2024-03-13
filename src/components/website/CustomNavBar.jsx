import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Image} from 'react-bootstrap'
import logo from './../../images/website/Logo.svg'
import myCart from './../../images/website/myCart.svg'
import { Link } from 'react-router-dom';

function CustomNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" justify-content-between">
      <Container>
        <Navbar.Brand href="#home"><Image src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#" className='active'><Link to="">Home</Link></Nav.Link>
            <Nav.Link href="#Catalogue">Catalogue</Nav.Link>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
            <Nav.Link href="#Help">Help</Nav.Link>
          </Nav>
          <Nav className='align-items-center'>
            <Nav.Link href="#"><Link to="/cart"><Image src={myCart} /></Link></Nav.Link>
            <Button variant="outline-primary text-bold ml-3">register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavBar
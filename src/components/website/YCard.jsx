import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import manual from './../../images/website/SVGRepo_iconCarrier (1).svg'
import speed from './../../images/website/SVGRepo_iconCarrier (2).svg'
import set from './../../images/website/seat-svgrepo-com(1) 1.svg'
import { Image } from 'react-bootstrap';

function YCard( {info }) {
  return (
    <Card>
    <Card.Img variant="top" src={info.src} />
    <Card.Body className='d-flex aligne-item-center flex-column'>
      <Card.Title className='text-center text-bold h-1'>{info.carName}</Card.Title>
      <Card.Text className='text-center'>
      <span className='m-1'>
        <Image src={set}  className='svg' /> 4 Seatore
        </span>
      <span className='m-1'>
        <Image src={manual}  className='svg' /> Manual
        </span>
      <span className='m-1'>
        <Image src={speed}  className='svg' /> 5KM/1-lt
        </span>
      </Card.Text>
      <Card.Text className='text-center text-dark'>
       <span>Starting at ${info.price}/Day</span>
      </Card.Text>
      <div className='d-flex justify-content-around'>
      <Card.Link className='btn btn-outline-primary text-dark text-bold' href="#"><Link to="/details">Details  &gt;</Link></Card.Link>
      <Card.Link className='btn btn-primary'>Buy Now</Card.Link>
      </div>
    </Card.Body>
  </Card>
  )
}

export default YCard
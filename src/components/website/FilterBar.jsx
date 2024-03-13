import React from 'react'
import Form from 'react-bootstrap/Form';
import {Button , Image} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import carIcon from './../../images/website/icon car.png'

function FilterBar() {
  return (
    
          <Form className='filterbar '>
             <Stack direction="horizontal" gap={2}>
  
      <Form.Group className="p-2" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-bold'>Name</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1"><Image src={carIcon} /> One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </Form.Select>
         </Form.Group>
         <Form.Group className="" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-bold'>Price</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </Form.Select>
         </Form.Group>
         <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className='text-bold'>Engine Capicity</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </Form.Select>
         </Form.Group>
         <Form.Group  controlId="exampleForm.ControlInput1">
          <Form.Label className='text-bold'>Brand</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </Form.Select>
         </Form.Group>
         <Button>Search</Button>
         </Stack>
    </Form>

  )
}

export default FilterBar
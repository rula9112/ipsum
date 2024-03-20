import React from 'react'
import YCard from './YCard'
import{Row , Col,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';


function Category() {
    const {cars , cartStore}  = useSelector(state=>state.cart);
    const dispatch = useDispatch(); 

    const cards =cars.length > 0? cars.map((item , index)=>{
        return(
            <Col md={6} xs={12} className='pb-5 d-flex justify-content-center'>
                <YCard car={item} cartStore={cartStore} dispatch={dispatch} index={index} />
            </Col>
        )
    }) :"notavailable";
  return (
    <section className='category'>
        <h2 className="h1 text-center">Top Categories</h2>
        <Container>
        <Row>
            {cards}
        </Row>
        </Container>
        
    </section>
  )
}

export default Category
import React from 'react'
import YCard from './YCard'
import{Row , Col,Container} from 'react-bootstrap'
import car from './../../images/website/picture (3).png'
import car2 from './../../images/website/picture (2).png'
import car3 from './../../images/website/picture (5).png'
import car4 from './../../images/website/picture (4).png'

function Category() {
    const myData=[
        {
            CarName:"Audi",
            price:5000,
            src:car
        },
        {
            CarName:"Honda",
            price:5500,
            src:car2
        },

        {
            CarName:"Volvo",
            price:4000,
            src:car3
        },
        {
            CarName:"BMW",
            price:6000,
            src:car4
        },
    ];

    const cards = myData.map((item )=>{
        return(
            <Col md={6} xs={12} className='pb-5 d-flex justify-content-center'>
                <YCard info={item} />
            </Col>
        )
    }) 
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
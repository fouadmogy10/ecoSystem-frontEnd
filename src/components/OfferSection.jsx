import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
function CommonSection() {
  return (
    <>
    <Container className='py-3'>
        
    <Card className=" text-white common" >
      <Card.ImgOverlay className='py-5'>
        <Card.Text className='py-5 fs-1 px-5'>
         خصم 30 % علي الكاميرات
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card> 
    </Container>
    </>
  )
}

export default CommonSection

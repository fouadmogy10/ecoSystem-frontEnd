import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Title from '../titleSection/Title'
import BrandItem from './BrandItem'

function BrandContainer({btnTitle,title}) {
  return (
    <>
    <Title title={title}  btnTitle={btnTitle} url="/all-brand"/>
    <Container >
        <Row className='my-2 d-flex justify-content-between'>
            <BrandItem  />
            <BrandItem  />
            <BrandItem />
            <BrandItem  />
            <BrandItem  />
            <BrandItem  />
          
        </Row>
    </Container>
    </>
  )
}

export default BrandContainer

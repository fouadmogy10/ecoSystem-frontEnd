import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import  brand from "../../assets/img/brand.png"
function BrandItem() {
  return (
    <>
    <Col className='mb-2' md="2" sm="4" xs="4">
    <Card>
    <Card.Img variant="top" src={brand} />
  </Card>
    </Col>
     </>
  )
}

export default BrandItem

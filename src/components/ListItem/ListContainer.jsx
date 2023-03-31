import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../titleSection/Title'
import ListItem from './ListItem'

function ListContainer({title,btnTitle ,url}) {
  return (
    <>
    <Title title={title} btnTitle={btnTitle} url="/products"/>
      <Container>
        <Row className='align-items-center'>
            <Col className='mb-3' lg="3" md="4" sm="6"><ListItem/></Col>
            <Col className='mb-3' lg="3" md="4" sm="6"><ListItem/></Col>
            <Col className='mb-3' lg="3" md="4" sm="6"><ListItem/></Col>
            <Col className='mb-3' lg="3" md="4" sm="6"><ListItem/></Col>
            
        </Row>
      </Container>
    </>
  )
}

export default ListContainer

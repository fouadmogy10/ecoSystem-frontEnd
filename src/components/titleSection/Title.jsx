import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Title({title,btnTitle,url}) {
  return (
    <Container>
      <Row className='align-items-center justify-content-between pt-5 pb-1'>
        <Col>
                <p className='fw-bold fs-4'>{title}</p>
        </Col>
        <Col  style={{textAlign: "left"}}>
        {
            btnTitle &&(

            <Link to={url}>
            <Button variant="outline-dark" >
                {btnTitle}
            </Button>
            </Link>
            )
        }
        </Col>
      </Row>
    </Container>
  )
}

export default Title

import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetalis = () => {
    return (
        <>
                <Container>
            <Row className='py-3'>
                <Col lg="4">
                    <ProductGallery />
                </Col>

                <Col lg="8" className='py-5'>

                       <ProductText />
                </Col>
            </Row>
                </Container>
        </>
    )
}

export default ProductDetalis
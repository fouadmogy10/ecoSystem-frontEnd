import React from 'react'
import { Container } from 'react-bootstrap'
import CardProductsContainer from '../components/ListItem/ListContainer'
import ProductDetalis from '../components/ListItem/ProductDetails'
import RateContainer from '../components/Rate/RateContainer'

const ProductDetalisPage = () => {
    return (
        <section >
            <Container>
                <ProductDetalis />
                <RateContainer />
                <CardProductsContainer title="منتجات قد تعجبك" />
            </Container>
        </section>
    )
}

export default ProductDetalisPage
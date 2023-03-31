import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ListItem from '../ListItem/ListItem';
import Paginate from '../Utlity/Paginate'
import Title from '../titleSection/Title';
const UserFavoriteProduct = () => {
    return (
        <div>
            <Title title={"قائمة المفضلة"}/>
            <Row className='justify-content-start'>
                <Col className='mb-3' sm="6" md="4" lg="3">

                <ListItem />
                </Col>
                <Col className='mb-3' sm="6" md="4" lg="3">

                <ListItem />
                </Col>
                <Col className='mb-3' sm="6" md="4" lg="3">

                <ListItem />
                </Col>
                <Col className='mb-3' sm="6" md="4" lg="3">

                <ListItem />
                </Col>
                
            </Row>
            <Paginate />
        </div>
    )
}

export default UserFavoriteProduct

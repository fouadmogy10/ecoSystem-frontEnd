import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from '../Utlity/Paginate';
import RateItem from './RateItem';
import RatePost from './RatePost';
import { FaStar } from 'react-icons/fa';
const RateContainer = () => {
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <FaStar size={16} color="#ffc107" className='my-2'/>
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
                </Col>
            </Row>
            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />

            <Pagination />
        </Container>
    )
}

export default RateContainer
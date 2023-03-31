import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ListContainer from '../components/ListItem/ListContainer'
import FilterDrobdown from '../components/Utlity/FilterDrobdown'
import Pagination from '../components/Utlity/Paginate'
import SideFilter from '../components/Utlity/SideFilter'

function Products() {
  return (
    <section>
       <Container>
                <FilterDrobdown title="400 نتجية بحث" />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <ListContainer title="" btntitle=""/>
                    </Col>
                </Row>
                    <Pagination />
            </Container>
    </section>
  )
}

export default Products

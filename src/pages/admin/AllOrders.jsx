import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OrderIrem from '../../components/admin/all-order/OrderItem'
import SideNav from '../../components/admin/sideNav/SideNav'
import Title from '../../components/titleSection/Title'
import Pagination from '../../components/Utlity/Paginate'

function AllOrders() {
  return (
    <div class={"wrapper" } >

    <SideNav/>
    <section>
      <Container>
          <Title title={"ادارة جميع الاوردارات  "}/>
          <Row className='d-flex justify-content-center'>
                    <OrderIrem />
                    <OrderIrem />
                    <OrderIrem />
                    <OrderIrem />

               
            </Row>
            <Pagination/>
      </Container>
    </section>
  </div>
  )
}

export default AllOrders

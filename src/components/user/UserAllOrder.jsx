import React from 'react'
import { Col, Row } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

function UserAllOrder() {
  return (
    <>
    
      <div className="user-order my-3">

    <Row>
        <div className="py-2 order-title">طلب رقم #234556</div>
    </Row>
    <UserAllOrderCard />
    <UserAllOrderCard />
    <Row className="d-flex justify-content-between ">
        <Col xs="6" className="px-4">
            <div>
                <div className="d-inline">الحالة</div>
                <div className="d-inline mx-2 stat">قيد التنفيذ</div>
            </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end ">
            <div>
                <div className="barnd-text px-4">4000 جنيه</div>
            </div>
        </Col>
    </Row>
</div></>
  )
}

export default UserAllOrder

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../../titleSection/Title'
import SideNav from '../sideNav/SideNav'
import OrderIrem from './OrderItem'

function OrderDetails() {
  return (
    <>
       <div class={"wrapper" } >

<SideNav/>
<section>
  <Container>
     
  <Title title={" تفاصيل الطلب رقم #55   "}/>
          <Row className='d-flex justify-content-center'>
                    <OrderIrem />
                    <OrderIrem />
               
            </Row>

            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        احمد عبداللة
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        ahmed@gmail.com
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    المجموع ٤٠٠٠ جنيه
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="form-select  mt-1  text-center px-2 w-50">
                        <option  disabled selected>حالة الطلب</option>
                        <option value="val2">قيد التنفيذ</option>
                        <option value="val2">تم الانتهاء</option>
                        <option value="val2">الغاء</option>
                    </select>
                    <button className="btn btn-outline-dark px-3 d-inline mx-2 ">حفظ </button>
                </div>
            </Row>
  </Container>
</section>
</div>
    </>
  )
}

export default OrderDetails

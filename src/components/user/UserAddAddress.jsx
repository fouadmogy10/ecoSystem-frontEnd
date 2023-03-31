import React from 'react'
import { Row,Col } from 'react-bootstrap'

const UserAddAddress = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="form-control d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                    />
                    <textarea
                        className="form-control p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                    />
                    <input
                        type="text"
                        className="form-control d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-outline-dark btn d-inline mt-2 ">اضافة عنوان</button>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddAddress

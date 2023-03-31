import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import Title from '../titleSection/Title'

const UserAllAddress = () => {
    return (
        <div>
            <Title title={"دفتر العنوانين"}/>
            <UserAddressCard />
            <UserAddressCard />
            <UserAddressCard />

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn btn-outline-dark">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress

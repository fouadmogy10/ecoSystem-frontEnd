import React from 'react'
import { Col,Form,Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import {FaStar,FaStarHalfAlt} from "react-icons/fa"
 const RatePost = () => {

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <FaStar />,
        halfIcon: <FaStarHalfAlt/>,
        filledIcon: <FaStar />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
    return (
        <div>
        <Row className="mt-3 ">
          <Col sm="12" className="me-5  d-flex">
            <div className="rate-name  d-inline ms-3 mt-1 ">علي محمد</div>
            <ReactStars {...setting} />
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            
             <Form.Control as="textarea" rows={3}  placeholder="اكتب تعليقك...."  />
            <div className=" d-flex justify-content-end al my-2">
              <div className="product-cart-add px-3  py-2 text-center d-inline">اضف تعليق</div>
            </div>
          </Col>
        </Row>
      </div>
    )
}

export default RatePost
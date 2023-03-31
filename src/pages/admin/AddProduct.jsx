import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import avatar from "../../assets/img/avatar.png"
import SideNav from '../../components/admin/sideNav/SideNav'
import Multiselect from 'multiselect-react-dropdown';
import { FaPlus, FaPlusCircle } from 'react-icons/fa'
import Title from '../../components/titleSection/Title'
function AddProduct() {
  

  const onSelect = () => {

  }
  const onRemove = () => {

  }

  const options = [
      { name: "التصنيف الاول", id: 1 },
      { name: "التصنيف الثاني", id: 2 },
  ];
  return (
    <div class={"wrapper" } >

      <SideNav/>
      <section>
        <Container>
        <div>
            <Row className="justify-content-start w-50">
               <Title title={"اضافه منتج جديد"}/>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <label htmlFor="avatar">

                    <img src={avatar}  alt="" height="100px" width="120px" />
                    </label>
                    <input type="file" hidden id="avatar" />
                    <input
                        type="text"
                        className="form-control d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        className="form-control p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        type="number"
                        className="form-control d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        type="number"
                        className="form-control d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                    />
                    <select
                        name="languages"
                        id="lang"
                        className="form-select  mt-3 px-5 ">
                        <option value="val">التصنيف الرئيسي</option>
                        <option value="val">التصنيف الاول</option>
                        <option value="val2">التصنيف الثاني</option>
                        <option value="val2">التصنيف الثالث</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        className="form-select mt-3 px-5 ">
                        <option value="val">الماركة</option>
                        <option value="val2">التصنيف الماركة الاولي</option>
                        <option value="val2">التصنيف الماركة الثانيه</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        <div
                            className="color ms-2 border mt-1 "
                            style={{ backgroundColor: "white" }}></div>
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "black" }}></div>
                        <FaPlus  size={25} className="ms-2 p-1 border rounded-circle  mt-2"/>
                    </div>
                </Col>
            </Row>
            <Row className='w-50'>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-outline-dark btn d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
        </Container>
      </section>
    </div>

  )
}

export default AddProduct

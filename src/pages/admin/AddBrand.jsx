import React from 'react'
import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import SideNav from '../../components/admin/sideNav/SideNav'
import Title from '../../components/titleSection/Title'
import avatar  from "../../assets/img/avatar.png"
function AddBrand() {
  

  return (
    <div class={"wrapper" } >

      <SideNav/>
      <section>
        <Container>
            <Title title={"اضف ماركه "}/>
            <Form  onSubmit={"OnSubmit"}>

            <Form.Group className="mb-3" controlId="name">
            <div className="text-muted pb-2">صوره الماركه</div>
            <label htmlFor="avatar">

                    <img src={avatar}  alt="" height="100px" width="120px"className='mb-3' />
            </label>
              <Form.Control
                required
                onChange={"onchange"}
                name="name"
                type="file"
               
                id="avatar" 
                className='mtb-3'
                hidden
              />
              <Form.Control
                required
                onChange={"onchange"}
                name="name"
                type="text"
                placeholder='اسم الماركه'
              />

            </Form.Group>
            
    
            <Button variant="outline-dark mt-3 " style={{float:"left"}} type="submit">
              حفظ التعديلات 
            </Button>

          </Form>
        </Container>
      </section>
    </div>

  )
}

export default AddBrand

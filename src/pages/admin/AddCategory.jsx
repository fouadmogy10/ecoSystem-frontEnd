import React from 'react'
import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import SideNav from '../../components/admin/sideNav/SideNav'
import Title from '../../components/titleSection/Title'
import avatar  from "../../assets/img/avatar.png"
function AddCategory() {
  

  return (
    <div class={"wrapper" } >

      <SideNav/>
      <section>
        <Container>
            <Title title={"اضف تصنيف جديد "}/>
            <Form className="w-50" onSubmit={"OnSubmit"}>

            <Form.Group className="mb-3" controlId="name">
            <div className="text-muted pb-2">صوره التصنيف</div>
            <label  for="files">  
            
                    <img src={avatar} alt="" height="100px" width="120px"className='mb-3' />
            </label>
              <Form.Control
                required
                onChange={"onchange"}
                name="name"
                type="file"
               placeholder='اضف تصنيف'
                aria-describedby="basic-addon1"
                id="files" 
                hidden
              />
              
              <Form.Control
                required
                onChange={"onchange"}
                name="name"
                type="text"
               placeholder='اسم تصنيف'
                aria-describedby="basic-addon1"
                className='my-3'
              />
            </Form.Group>
            
    
            <Button variant="outline-dark  " style={{float:"left"}} type="submit">
              حفظ التعديلات 
            </Button>

          </Form>
        </Container>
      </section>
    </div>

  )
}

export default AddCategory

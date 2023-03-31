import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import SideNav from '../../components/admin/sideNav/SideNav'
import Title from '../../components/titleSection/Title'

function AddSubCategory() {
  return (
    <div class={"wrapper" } >

    <SideNav/>
    <section>
      <Container>
          <Title title={"اضف التصنيف الفرعي "}/>
          <Form  onSubmit={"OnSubmit"}>

         
           
                    <input
                        type="text"
                        className="form-control d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />
                    <select name="languages" id="lang" className="form-select my-3 px-5 ">
                        <option value="val">التصنيف الاول</option>
                        <option value="val2">التصنيف الثاني</option>
                        <option value="val2">التصنيف الثالث</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
            
           
        
  
          <Button variant="outline-dark  " style={{float:"left"}} type="submit">
            حفظ التعديلات 
          </Button>

        </Form>
      </Container>
    </section>
  </div>
  )
}

export default AddSubCategory

import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
function SignUp() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();






useEffect(() => {

}, [])

  const onchange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    
     
    }
  
  
     return(
        <section>
          <Container className="text-center pt-5">
          <div className="title text-capitalize py-3">
            <h2 className="display-6 fw-bolder mb-2">
              <FaUser size={32} /> تسجيل حساب جديد
            </h2>
            <span className="text-muted fs-5">من فضلك قم بتسجيل حساب</span>
          </div>
    
          <Form className="w-75 mx-auto" onSubmit={OnSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                required
                onChange={onchange}
                name="name"
                value={name}
                type="text"
                placeholder="ادخل اسمك"
                aria-describedby="basic-addon1"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                required
                onChange={onchange}
                name="email"
                type="email"
                placeholder="ادخل الايميل الخاص بك"
              />
              <Form.Text className="text-muted">
                لن نقوم بمشاركه الايميل الخاص بك مع اي احد 
              </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                required
                onChange={onchange}
                name="password"
                value={password}
                type="password"
                placeholder="كلمة السر"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password2">
              <Form.Control
                required
                onChange={onchange}
                name="password2"
                type="password"
                placeholder=" تاكيد كلمة السر"
                value={password2}
              />
            </Form.Group>
    
            <Button variant="outline-dark w-50" type="submit">
              تسجيل
            </Button>

          </Form>
          <p className="text-black py-2"> لدي حساب بالفعل ؟  
          <Link to={"/login"}>
            
             <span className="text-muted">  تسجيل الدخول </span>
             </Link>
             </p>
        </Container>
        </section>
      )
  

}

export default SignUp;

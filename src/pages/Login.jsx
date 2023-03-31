import React, { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  const { email, password } = formData;


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
   
  };
  
  return (
    <section>
          <Container className="text-center pt-5">
          <div className="title text-capitalize py-5">
            <h2 className="display-6 fw-bolder mb-2">
              <FaSignInAlt size={32} /> تسجيل الدخول 
            </h2>
            <span className="text-muted fs-5">من فضلك قم بتسجيل الدخول</span>
          </div>
    
          <Form className="w-75 mx-auto" onSubmit={OnSubmit}>
           
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
            
    
            <Button variant="outline-dark w-50" type="submit">
               تسجيل دخول
            </Button>
          </Form>
            <p className="text-black py-2"> ليس لدي حساب ؟  
          <Link to={"/register"}>
            
             <span className="text-muted">  تسجيل حساب </span>
             </Link>
             </p>
          <p>
            <Link to={"/admin/add-product"}>
            الادمن
            </Link>
            
          </p>
          <p>
            <Link to={"/user/all-orders"}>
            user
            </Link>
            
          </p>
        </Container>
        </section>
  )
}

export default Login;

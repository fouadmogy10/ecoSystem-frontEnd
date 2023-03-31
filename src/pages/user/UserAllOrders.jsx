import React from 'react'
import {  Container } from 'react-bootstrap'
import SideNav from '../../components/user/sideNav/SideNav'
import Title from '../../components/titleSection/Title'
import UserAllOrder from '../../components/user/UserAllOrder'
function UserAllOrders() {
  

  return (
    <div class={"wrapper" } >

      <SideNav/>
      <section>
        <Container>
        <Title title={" اهلا فؤاد "}/>
            
            <UserAllOrder/>
            <UserAllOrder/>
        </Container>
      </section>
    </div>

  )
}

export default UserAllOrders

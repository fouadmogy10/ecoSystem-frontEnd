import React from 'react'
import { Container } from 'react-bootstrap'
import SideNav from '../../components/user/sideNav/SideNav'
import UserAllAddress from '../../components/user/UserAllAdress'
const UserAllAddresPage = () => {
    return (
        <div class={"wrapper" } >

      <SideNav/>
      <section>
        <Container>
        <UserAllAddress />
        </Container>
      </section>
    </div>
    )
}

export default UserAllAddresPage

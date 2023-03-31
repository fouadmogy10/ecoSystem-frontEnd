import React from 'react'
import SideNav from '../../components/user/sideNav/SideNav'
import { Container } from 'react-bootstrap'
import UserProfile from '../../components/user/UserProfile'

function Profile() {
  return (
    <>
      <div class={"wrapper"}>
      <SideNav />
      <section>
        <Container className="py-5">
        <UserProfile />
        </Container>
      </section>
    </div>
    </>
  )
}

export default Profile

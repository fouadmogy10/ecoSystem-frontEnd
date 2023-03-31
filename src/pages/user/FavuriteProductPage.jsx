import React from 'react'
import SideNav from '../../components/user/sideNav/SideNav'
import { Container } from 'react-bootstrap'
import Title from '../../components/titleSection/Title'
import UserFavoriteProduct from '../../components/user/UserFavoriteProduct'

function FavuriteProductPage() {
  return (
    <div class={"wrapper" } >

      <SideNav/>
      <section>
        <Container>
        <UserFavoriteProduct/>
        </Container>
      </section>
    </div>
  )
}

export default FavuriteProductPage

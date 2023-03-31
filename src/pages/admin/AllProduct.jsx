import React from 'react'
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CardItem from '../../components/admin/cardItem/ProductCard';
import SideNav from '../../components/admin/sideNav/SideNav'
import Title from '../../components/titleSection/Title';
import Pagination from '../../components/Utlity/Paginate';
function AllProduct() {
  return (
    <>
      <div class={"wrapper"}>
        <SideNav />
        <section>
          <Container>
            
            <Title title=" ادارة جميع المنتجات"  />
            <Row>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </Row>
            <Pagination/>
          </Container>
        </section>
      </div>
    </>
  );
}

export default AllProduct;

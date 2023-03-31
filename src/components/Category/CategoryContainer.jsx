import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard';
import clothe from "../../assets/img/pngwing.png";
import Title from '../titleSection/Title';

const CategoryContainer = ({btnTitle,title}) => {
    return (
        <>
        <Title title={title} btnTitle={btnTitle} url="/all-category" />
        <Container >
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA5" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA0" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DB4" />
              
            </Row>
        </Container>
        </>
    )
}

export default CategoryContainer
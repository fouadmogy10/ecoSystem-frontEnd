import React from 'react'
import BrandContainer from '../components/Brand/BrandContainer'
import Pagination from '../components/Utlity/Paginate'

function AllBrand() {
  return (
    <section>
      <BrandContainer title = "كل الماركات"/>
      <BrandContainer/>
      <Pagination/>
    </section>
  )
}

export default AllBrand

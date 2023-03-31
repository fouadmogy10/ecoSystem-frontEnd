import React from 'react'
import CategoryContainer from '../components/Category/CategoryContainer'
import Pagination from '../components/Utlity/Paginate'

function AllCategory() {
  return (
    <section>
      <CategoryContainer title = "كل التصنيفات"/>
      <CategoryContainer/>
      <Pagination/>
    </section>
  )
}

export default AllCategory

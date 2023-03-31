import React from 'react'
import BrandContainer from '../components/Brand/BrandContainer'
import CategoryContainer from '../components/Category/CategoryContainer'
import CommonSection from '../components/OfferSection'
import ListContainer from '../components/ListItem/ListContainer'
import Slide from '../components/slide/Slide'

function Home() {
  return (
    < >
        <Slide/>

<CategoryContainer btnTitle="المزيد" title = "كل التصنيفات"/>
<ListContainer title="الاكثر مبيعا" btnTitle="المزيد" />
<CommonSection/>
<ListContainer title=" احدث الازياء" btnTitle="المزيد"/>
<BrandContainer btnTitle="المزيد" title = "كل الماركات"/>
    </>
  )
}

export default Home

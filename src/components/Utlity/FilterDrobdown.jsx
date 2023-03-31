import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa';
import UnopDropdown from "unop-react-dropdown";
const FilterDrobdown = ({title}) => {
    const handler=()=> {

    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-2">
                            <FaArrowCircleDown className='mx-2'/>
                            ترتيب حسب
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item">الاكثر مبيعا</div>
                        <div className="border-bottom card-filter-item">الاعلي تقييما</div>
                        <div className="border-bottom card-filter-item">
                            السعر من الاقل للاعلي
                        </div>
                        <div className=" card-filter-item">السعر من الاعلي للاقل</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default FilterDrobdown
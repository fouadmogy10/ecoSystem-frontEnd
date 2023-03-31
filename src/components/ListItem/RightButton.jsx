import React from 'react'
import {FaArrowRight} from "react-icons/fa"
const RightButton = ( onClick, onDisable ) => {
    return (
        <FaArrowRight
          
            onClick={onClick}
            onDisable={onDisable}
            size={35}
            style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
        />
    )
}


export default RightButton
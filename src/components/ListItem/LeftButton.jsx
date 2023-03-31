import React from 'react'
import {FaArrowLeft} from "react-icons/fa"
const LeftButton = ( onClick, onDisable ) => {
    return (
        <FaArrowLeft
          
            onClick={onClick}
            onDisable={onDisable}
            size={35}
            style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
        />
    )
}

export default LeftButton
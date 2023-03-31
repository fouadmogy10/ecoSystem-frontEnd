import React from 'react'
import { Link } from 'react-router-dom'
import "./ListItem.scss"
import {FaHeart,FaArrowRight, FaEye, FaStar} from "react-icons/fa"
function ListItem() {

  return (
     <div className="card-hover ">
    <div className="card-hover__content">
      <h3 className="card-hover__title">
        Product <span>Name</span> 
      </h3>
      <p className="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div className="card-hover__link d-flex justify-content-around " style={{width:"100%"}}>
    
       <span>4.5 <FaStar color='#ffc107'/></span>
       <div >
      <Link to="/products/productDetals/1" >
        <FaEye color='black'/>     
        
      </Link>
       <span onClick={()=>console.log("hello")}> <FaHeart color='red'/>     </span>
      </div>
      </div>
     
    </div>
    <img className='w-100' src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" alt=""/>
  </div>
  )
}

export default ListItem

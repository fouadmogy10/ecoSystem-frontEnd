import React from 'react'
import {FaFacebook ,FaInstagram,FaTwitter,FaYoutube,FaLinkedin,FaGoogle} from "react-icons/fa"
function Footer() {
  return (
    <>
      <footer className="bg-light text-center text-dark mt-5">
  <div className="container p-4 pb-0">
    <div className="mb-4">
      <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaFacebook/></a>

      <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaTwitter/></a>

      <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaInstagram/></a>

      <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaYoutube/></a>

      <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaLinkedin/></a>

      <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaGoogle/></a>
    </div>
  </div>

  <div className="text-center  p-3" style={{backgroundColor: "#dee8c2"}}>
    © 2022 Copyright :
    <a className="text-muted fw-bolder" href="!#">{" "} F-Mogy {" "}</a>
  </div>
</footer>
    </>
  )
}

export default Footer

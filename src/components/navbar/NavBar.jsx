import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import mobile from "../../assets/img/Apple-iPhone-11-PNG-Image.png"
import {FaSearch,FaTimes,FaShoppingBag,FaHeart} from "react-icons/fa"
function NavBar() {
    const [active, setActive] = useState("");
    let toggleHundel = (e) => {
        active === "" ? setActive("active") : setActive("");
    };
  return (
    <div
    className="navbar"
    style={
        window.location.pathname === "/login"
            ? { background: "#f1f1f1" }
            : window.location.pathname === "/signup"
            ? { background: "#f1f1f1" }
            : { background: "#fff" }
    }
>
    {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    /> */}
    {/* <ReqLoading loading={reqLoading} /> */}
    <div className="container">
        <h1 className="logo">
            <Link to="/"> الشعار</Link>
        </h1>
        <div className={`search_over ${active}`}>
            <button
                className="toggle-close"
                onClick={(_) => toggleHundel()}
            >
                <FaTimes />
            </button>

            <div className="search-box">
                <input
                    type="text"
                    name="search"
                    className="search px-2"
                    placeholder="ابحث من هنا"
                    // value={search}
                    
                />
                
               
                <button
                    className="search-btn"
                    aria-label="search-btn"
                >
                    <FaSearch />
                </button>
            </div>
        </div>
        <div className="options">
            <button
                className="search-tog"
                aria-label="search-tog"
                onClick={(_) => toggleHundel()}
            >
                <FaSearch />
            </button>
            <Link to="/cart">

            <button
                className="shop-cart"
                aria-label="cart-btn"
                
                >

                <FaShoppingBag/>
                <span className="cart-count">0</span>
            </button>
                </Link>
            <Link
                to="/user/favuriteProduct"
                className="shop-fav"
                aria-label="fav-btn"
            >
                <FaHeart />
            </Link>
            <div className="profile_menu">
                <img
                    src={mobile}
                    alt=""
                />
                <div className="dorp_down_menu">
                    <ul>
                        <li>
                            <Link to="/user/profile">حسابي</Link>
                        </li>
                        <li>
                            <Link to="/cart">العربه</Link>
                        </li>
                        
                        <li>
                            <Link to="/user/favuriteProduct">
                                المفضله
                            </Link>
                        </li>
                    </ul>
                    <hr />
                   
                        <Link className="login" to="/login">
                             تسجيل الدخول
                        </Link>
                     
                        
                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default NavBar

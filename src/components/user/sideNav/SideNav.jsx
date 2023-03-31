import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import "./sidenav.css";
function SideNav() {
  const [active, setactive] = useState(true);

  const click = () => {
    setactive(!active);
  };
  return (
    <>
      {/* Top menu */}
      <div className={active ? "sidebar active" : "sidebar"}>
        <div className="hamburger" onClick={click}>
          <FaBars />
        </div>
        {/* profile image & text-->
            menu item */}
        <div className="profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile_picture"
          />
          <h3>Anamika Roy</h3>
          <p>Designer</p>
        </div>
        <ul>
          <li>
            <NavLink to="/user/all-orders" >
              <span className="item">ادارة جميع  الطلبات</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/favuriteProduct" >
              <span className="item"> قائمة المفضله  </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/address" >
              <span className="item">  العناوين الشخصيه  </span>
            </NavLink>
          </li>
         
         
          
        </ul>
      </div>
    </>
  );
}

export default SideNav;

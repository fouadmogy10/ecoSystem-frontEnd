import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/admin/all-product" >
              <span className="item">ادارة جميع  المنتجات</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/all-orders" >
             
              <span className="item"> ادارة جمبع الاوردارات </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-product" >
             
              <span className="item">اضافة منتج</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-brand" >
             
              <span className="item">اضافة ماركه</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-category" >
             
              <span className="item">اضافة تصنيف جديد</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-sub-category" >
             
              <span className="item">اضافة تصنيف فرعي</span>
            </NavLink>
          </li>
         
          
        </ul>
      </div>
    </>
  );
}

export default SideNav;

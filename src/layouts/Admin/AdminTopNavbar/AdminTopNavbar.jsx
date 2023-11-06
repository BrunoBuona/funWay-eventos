import React from "react";
import './AdminTopNavbar.css'
import { Link } from "react-router-dom";
import {FaBell, FaRegSun, FaSignInAlt} from 'react-icons/fa'

export default function AdminTopNavbar(props) {
  const { links } = props;
  return (
    <nav className="header-admin">
      <div className="header-admin-links">
        {links?.map((link, index) => (
          <Link key={index} to={link.path}>{link.label}</Link>
        ))}
      </div>
      <div className="header-admin-other-links">
       <Link to='/menu/settings'><FaRegSun color="black"/></Link>
       <Link to='/menu/notifications'><FaBell color="black"/></Link>
       <Link to='/menu/logout'><FaSignInAlt color="black"/></Link>
      </div>
    </nav>
  );
}

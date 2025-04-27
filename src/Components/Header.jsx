import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
  <nav>
    <ul className="text-center space-x-2">
        <NavLink className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        }
       to='/login'>Login</NavLink>
    </ul>
  </nav>
  )
};

export default Header;

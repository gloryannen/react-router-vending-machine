import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <NavLink exact to="/">
          Home /
        </NavLink>
        <NavLink exact to="/candy">
          Candy /
        </NavLink>
        <NavLink exact to="/chips">
          Chips /
        </NavLink>
        <NavLink exact to="/water">
          Water
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;

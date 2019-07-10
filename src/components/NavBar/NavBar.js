import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import {
  header as headerClass,
  logo,
  nav as navClass,
  link,
  activeLink
} from "./NavBar.module.css";

const activeLinkStyle = {
  color: "greenyellow",
  fontWeight: "bold",
  cursor: "pointer"
};
function NavBar(props) {
  return (
    <header className={headerClass}>
      <Logo className={logo} />
      <nav className={navClass}>
        <NavLink
          className={link}
          activeClassName={activeLink}
          to="/landing-page"
        >
          Home
        </NavLink>
        <NavLink className={link} activeStyle={activeLinkStyle} to="/aboutme">
          About me
        </NavLink>
        <NavLink className={link} activeClassName={activeLink} to="/todoapp">
          Todo App
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;

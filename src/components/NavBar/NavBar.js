import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import {
  header as headerClass,
  logo,
  nav as navClass,
  link
} from "./NavBar.module.css";

function NavBar(props) {
  return (
    <header className={headerClass}>
      <Logo className={logo} />
      <nav className={navClass}>
        <Link className={link} to="/">
          Home
        </Link>
        <Link className={link} to="/aboutme" {...props}>
          About me
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;

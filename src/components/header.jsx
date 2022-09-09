import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  function onClick() {
    props.setOpenMenu((prevState) => !prevState);
  }
  return (
    <nav className="navbar">
      <div className="logo">LoginAuth</div>

      <ul className={props.openMenu ? "nav-items show" : "nav-items"}>
        <li className="nav-item">
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="text-white">
            dashboard
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={onClick}>
        <i class="fa fa-bars"></i>
      </div>
    </nav>
  );
}

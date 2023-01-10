import React from "react";

import Logo from "../Logo/Logo";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <ul className="header__nav">
        <li className="header__link">Ducks</li>
        <li className="header__link">My profile</li>
        <li className="header__link">Log out</li>
      </ul>
    </div>
  );
}

export default Header;

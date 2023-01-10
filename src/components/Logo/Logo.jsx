import React from "react";

import "./Logo.css";

import LogoDuck from "./logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo__container">
        <img className="logo__image" src={LogoDuck} alt="CryptoDucks logo" />
      </div>
    </div>
  );
}

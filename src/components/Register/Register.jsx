import React, { useState } from "react";
import Logo from "../Logo/Logo";

import "../Register/Register.css";

export default function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password);  
  }

  return (
    <div className="register">
      <Logo title="CryptoDucks" />
      <form onSubmit={handleSubmit} className="register__form">
        <label for="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="email"
        />
        <label for="password">Пароль:</label>
        <input
          value={password.password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          type="password"
        />
        <button type="submit" className="register__link">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__sign-in">
        <p>Уже зарегистрированы?</p>
        {/* <Link to="login" className="registerlogin-link">Войти</Link> */}
      </div>
    </div>
  );
}

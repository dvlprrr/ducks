import React, { useState } from "react";
import Logo from "../Logo/Logo";

import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }
  return (
    <div className="login">
      <Logo />
      <p className="login__welcome">
        Это приложение содержит конфиденциальную информацию. Пожалуйста, войдите
        или зарегистрируйтесь, чтобы получить доступ к CryptoDucks.
      </p>
      <form onSubmit={handleSubmit} className="login__form">
        <label for="username">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="username"
          required
          name="username"
          type="text"
        />
        <label for="password">Пароль:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          required
          name="password"
          type="password"
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

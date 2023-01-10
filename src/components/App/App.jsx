import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DuckList from "../DuckList/DuckList";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ProtectedRoute from "../ProtectedRouteElement";

import * as auth from "../../utils/auth";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const history = useNavigate();

  function handleRegister(email, password) {
    auth.register(email, password).then(() => {
      history("/sign-in", { replace: true });
    });
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then(() => {
        history("/", { replace: true });
        setLoggedIn(true);
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - не передано одно из полей");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден");
        }
      });
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            const userData = {
              username: res.username,
              email: res.email,
            };
            setLoggedIn(true);
            setUserData(userData);
            history("/", { replace: true });
          }
        })
        .catch((err) => {
          if (err.status === 401) {
            console.log("401 — Токен не передан или передан не в том формате");
          }
          console.log("401 — Переданный токен некорректен");
        });
    }
  }, [history]);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header />
              <DuckList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-up"
          element={<Register onRegister={handleRegister} />}
        />
        <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;

//Criando um context no ReactJS
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  //Deixando os dados de usuário fixos
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoverdUser = localStorage.getItem("user");
    if (recoverdUser) {
      console.log(recoverdUser);
      setUser(JSON.parse(recoverdUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const verifyUser = localStorage.getItem("user");
    if (verifyUser) {
      navigate("/dashboard");
    }
  }, []);

  const cadastro = (name, username, password) => {
    console.log("cadastro auth", { name, username, password });

    const cadastrado = {
      id: Math.floor(Math.random() * 100),
      name,
      username,
      password,
    };

    localStorage.setItem("user", JSON.stringify(cadastrado));

    setUser(cadastrado);
    navigate("/dashboard");
  };

  const login = (username, password) => {
    console.log("login auth", { username, password });

    const loggedUser = {
      id: "1",
      username,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "123") {
      setUser(loggedUser);
      navigate("/dashboard");
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, cadastro, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

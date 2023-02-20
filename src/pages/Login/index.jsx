import React, { useState, useContext } from "react";
import { BoxLogin, Error } from "./styles";

import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username == "") {
      setError("Preencha o campo *Nome de Usuário");
      return;
    }

    if (password != "123") {
      setError("Usuário não encontrado ou *Senha inválida");
      return;
    }

    console.log("Dados do submit", { username, password });

    login(username, password);
  };

  return (
    <BoxLogin>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <Error className="error">{error}</Error>}
        <div className="field">
          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="field">
          <p>
            Não tem uma conta? <Link to="/cadastro"> Registre-se</Link>
          </p>
        </div>

        <div className="action">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </BoxLogin>
  );
};

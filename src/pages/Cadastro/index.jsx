import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { BoxCadastro, Error } from "./styles";

export const Cadastro = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { cadastro } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name == "") {
      setError("Preencha o campo *Nome");
      return;
    }

    if (username == "") {
      setError("Preencha o campo *Nome de Usuário");
      return;
    }

    if (username == name) {
      setError("Username deve ser diferente de Nome de usuário");
      return;
    }

    if (password == "") {
      setError("Preencha o campo *Senha inválida");
      return;
    }

    if (password != "123") {
      password = "123";
      setError("Valor da senha Alterado para padrão: " + password);
    }

    console.log("Dados do submit cadastro", { name, username, password });

    cadastro(name, username, password);
  };

  return (
    <BoxCadastro>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>
        {error && <Error className="error">{error}</Error>}
        <div className="field">
          <label htmlFor="name">Nome de usuário</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
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
            Já tem uma conta? <Link to="/"> Entre</Link>
          </p>
        </div>

        <div className="action">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </BoxCadastro>
  );
};

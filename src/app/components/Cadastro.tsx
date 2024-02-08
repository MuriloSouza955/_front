"use client";
import { useState } from "react";
import "./style.css";
import { validateEmail } from "./validateCadastro";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [qtdeKW, setQtdeKW] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const validate = () => {
    if (!validateEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  };
  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <div className="wrap-input">
            <input
              className={nome !== "" ? "has-val input" : "input"}
              type="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <span
              className="focus-input"
              data-placeholder="Nome completo"
            ></span>
          </div>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && <p>Digite um email válido</p>}

            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={qtdeKW !== "" ? "has-val input" : "input"}
              type="number"
              value={qtdeKW}
              onChange={(e) => setQtdeKW(e.target.value)}
            />
            <span
              className="focus-input"
              data-placeholder="Quantidade de KW"
            ></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Enviar</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <a className="txt2" href="#">
              Criar conta
            </a>
          </div>
        </form>
      </div>
    </div>
  );
  console.log(nome);
  console.log(email);
  console.log(qtdeKW);
}

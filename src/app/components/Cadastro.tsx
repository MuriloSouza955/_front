import { useState } from "react";

import "./style.css";

export default function Cadastro(){
    return (
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">

              <div className="wrap-input">
                <input className="input" type="name"/>
                <span className="focus-input" data-placeholder="Nome completo"></span>
              </div>

              <div className="wrap-input">
                <input className="input" type="email"></input>
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
              
              <div className="wrap-input">
                <input className="input" type="number"/>
                <span className="focus-input" data-placeholder="Quantidade de KW"></span>
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
}
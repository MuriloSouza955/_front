"use client";

import { useState } from "react";
export default function CadastroInversor() {
    const [marcaInversor, setMarcaInversor] = useState("");
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <div className="containerCredenciamento">
            <div className="wrap-login">
                <form>
                    <div className="card-container">
                        <div className="card-container">
                            <div className="card">
                                <span className="titulo">Dados do Inversor</span>
                                <div className="login-form">
                                    <div className="wrap-input">
                                        <input
                                            className={marcaInversor !== "" ? "has-val input" : "input"}
                                            type="text"
                                            value={marcaInversor}
                                            onChange={(e) => setMarcaInversor(e.target.value)}
                                            autoComplete="off"
                                            id="nome" required
                                        />

                                        <span
                                            className="focus-input"
                                            data-placeholder="Marca do Inversor"
                                        ></span>
                                    </div>

                                    <div className="wrap-input">
                                        <input
                                            className={login !== "" ? "has-val input" : "input"}
                                            type="string"
                                            value={login}
                                            onChange={(e) => setLogin(e.target.value)}
                                            autoComplete="off"
                                            id="cnpj" required
                                        />
                                        <span
                                            className="focus-input"
                                            data-placeholder="Login"
                                        ></span>
                                    </div>

                                    <div className="wrap-input">
                                        <input
                                            className={senha !== "" ? "has-val input" : "input"}
                                            type="password"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            autoComplete="off"
                                            id="cnpj" required
                                        />
                                        <span
                                            className="focus-input"
                                            data-placeholder="Senha"
                                        ></span>
                                    </div>
                                </div>
                                <div className="container-login-form-btn">
                                    <button className="login-form-btn">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
"use client";

import { useState } from "react";
import "./cadastroCredenciamento.css"

export default function CadastroCredenciamneto1() {
    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [emailEmpresa, setEmailEmpresa] = useState("");
    const [siteEmpresa, setSiteEmpresa] = useState("");
    const [contatoEmpresa, setContatoEmpresa] = useState("");

    const [cpf, setCPF] = useState("");
    const [contatoResponsavel, setContatoResponsavel] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const [CEP, setCEP] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");


    return (
        <div className="containerCredenciamento">
            <div className="wrap-login">
                <div className="card-container">
                    <div className="card-container">
                        <div className="card">
                            <form className="formResponsavel">
                                <span className="titulo">Responsável</span>

                                <div className="wrap-input">
                                    <input
                                        className={cpf !== "" ? "has-val input" : "input"}
                                        type="text"
                                        value={cpf}
                                        onChange={(e) => setCPF(e.target.value)}
                                        autoComplete="off"
                                        id="cpf" required
                                    />
                                    <span
                                        className="focus-input"
                                        data-placeholder="CPF"
                                    ></span>
                                </div>

                                <div className="wrap-input">
                                    <input
                                        className={contatoResponsavel !== "" ? "has-val input" : "input"}
                                        type="text"
                                        value={contatoResponsavel}
                                        onChange={(e) => setContatoResponsavel(e.target.value)}
                                        autoComplete="off"
                                        id="contatoResponsavel" required
                                    />
                                    <span
                                        className="focus-input"
                                        data-placeholder="Telefone"
                                    ></span>
                                </div>

                                <div className="wrap-input">
                                    <input
                                        className={dataNascimento !== "dd/mm/aaaa" ? "has-val input" : "input"}
                                        type="date"
                                        value={dataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                        autoComplete="off"
                                        id="dataNascimento" required
                                    />
                                    <span
                                        className="focus-input dataNascimento"
                                        data-placeholder="Data de nascimento"
                                    ></span>
                                </div>
                                <div className="wrap-input">
                                    <input
                                        className={CEP !== "" ? "has-val input" : "input"}
                                        type="text"
                                        value={CEP}
                                        onChange={(e) => setCEP(e.target.value)}
                                        autoComplete="off"
                                        id="CEP" required
                                    />
                                    <span
                                        className="focus-input"
                                        data-placeholder="CEP"
                                    ></span>
                                </div>
                                <div className="wrap-input">
                                    <input
                                        className={numero !== "" ? "has-val input" : "input"}
                                        type="number"
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                        autoComplete="off"
                                        id="numero" required
                                    />
                                    <span
                                        className="focus-input"
                                        data-placeholder="Numero"
                                    ></span>
                                </div>
                            </form>
                        </div>

                        <div className="card">
                            <div className="login-form">
                                <span className="titulo">Para empresas</span>
                                <div className="wrap-input">
                                    <input
                                        className={razaoSocial !== "" ? "has-val input" : "input"}
                                        type="name"
                                        value={razaoSocial}
                                        onChange={(e) => setRazaoSocial(e.target.value)}
                                        autoComplete="off"
                                        id="nome" required
                                    />

                                    <span
                                        className="focus-input"
                                        data-placeholder="Razão Social"
                                    ></span>
                                </div>

                                <div className="wrap-input">
                                    <input
                                        className={cnpj !== "" ? "has-val input" : "input"}
                                        type="string"
                                        value={cnpj}
                                        onChange={(e) => setCNPJ(e.target.value)}
                                        autoComplete="off"
                                        id="cnpj" required
                                    />
                                    <span
                                        className="focus-input"
                                        data-placeholder="CNPJ"
                                    ></span>
                                </div>

                                <div className="wrap-input">
                                    <input
                                        className={emailEmpresa !== "" ? "has-val input" : "input"}
                                        type="string"
                                        value={emailEmpresa}
                                        onChange={(e) => setEmailEmpresa(e.target.value)}
                                        autoComplete="off"
                                        id="cnpj" required
                                    />
                                    <span
                                        className="focus-input"
                                        data-placeholder="Email empresarial"
                                    ></span>
                                </div>

                                <div className="wrap-input">
                                    <input
                                        className={siteEmpresa !== "" ? "has-val input" : "input"}
                                        type="string"
                                        value={siteEmpresa}
                                        onChange={(e) => setSiteEmpresa(e.target.value)}
                                        autoComplete="off"
                                    />
                                    <span
                                        className="focus-input"
                                        data-placeholder="Site / facebook"
                                    ></span>
                                </div>

                                <div className="wrap-input">
                                    <input
                                        className={contatoEmpresa !== "" ? "has-val input" : "input"}
                                        type="string"
                                        value={contatoEmpresa}
                                        onChange={(e) => setContatoEmpresa(e.target.value)}
                                        autoComplete="off"
                                        id="contatoEmpresa" required
                                    />
                                    <span
                                        className="focus-input contatoEmpresa"
                                        data-placeholder="Contato da empresa"
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Enviar</button>
                </div>
            </div>
        </div>

    )
}
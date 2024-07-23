import React from "react"

import Menu from "../menu/menu"
import Footer from "../footer/Footer"

import './App.css'

function App() {

    return (
        <>
            <div className="container">

                <Menu></Menu>

                <div className="body">

                    <div className="conteudo-body">
                        <h1 className="msg-saudacao">Bem-vindo(a)!</h1>
                        <button className="btn-cadastrar">Cadastrar Vendas</button>
                        <button className="btn-visualizar">Visualizar Vendas Totais</button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default App
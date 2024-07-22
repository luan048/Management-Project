import React from "react"
import { useNavigate } from "react-router-dom"

import Menu from "../menu/menu"
import Footer from "../footer/Footer"

import './App.css'

function App() {
    const navigate = useNavigate()

    const registerPage = () => {
        navigate('/registerPage')
    }

    const listRequestsPage = () => {
        navigate('/listRequests')
    }

    return (
        <>
            <div className="container">

                <Menu></Menu>

                <div className="body">

                    <div className="conteudo-body">
                        <h1 className="msg-saudacao">Bem-vindo(a)!</h1>
                        <button className="btn-cadastrar" onClick={registerPage} >Cadastrar Vendas</button>
                        <button className="btn-visualizar" onClick={listRequestsPage} >Visualizar Vendas Totais</button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default App
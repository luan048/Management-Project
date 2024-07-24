import React from "react";
import { useNavigate } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'

import logoMenu from '../../public/logoMenu.jpg'

import './sidebar.css'

function Siderbar() {

    const navigate = useNavigate()

    const homePage = () => {
        navigate('/')
    }

    const listPage = () => {
        navigate('/listPage')
    }

    const registerPage = () => {
        navigate('/registerPage');
    }
    
    return (
        <div className="siderbar">
            <img src={logoMenu} className="logoMenu" />
            <FontAwesomeIcon icon={faHouse} className="faHouse" onClick={homePage} />
            <div className="conteudo-sidebar">
                <button className="btn-cadastrar" onClick={registerPage}>Cadastrar Vendas</button>
                <button className="btn-visualizar" onClick={listPage} >Visualizar Vendas Totais</button>
            </div>
        </div>
    )
}

export default Siderbar
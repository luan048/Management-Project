import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'

import logoMenu from '../../public/logoMenu.jpg'

import './sidebar.css'

function Siderbar({fixed}) {

    const navigate = useNavigate()

    const homePage = () => {
        navigate('/')
    }

    const handleNavigation = (page) => {
        navigate(page)
    }

    
    return (
        <div className={`siderbar ${fixed ? 'fixed' : ''}`}>
            <img src={logoMenu} className="logoMenu" />
            <FontAwesomeIcon icon={faHouse} className='faHouse' onClick={homePage} />
            <div className="conteudo-sidebar">
                <button className='btn-cadastrar' onClick={() => handleNavigation('/registerPage', 'register')}>Cadastrar Vendas</button>
                <button className='btn-visualizar' onClick={() => handleNavigation('/listPage', 'list')} >Visualizar Vendas Totais</button>
                <button className='btn-materiais' onClick={() => handleNavigation('/purchasePage', 'purchase')} >Cadastrar Materiais</button>
                <button className='btn-desempenho ' onClick={() => handleNavigation('/performaceMonth', 'performace')} >Visualizar Desempenho</button>
            </div>
        </div>
    )
}

export default Siderbar
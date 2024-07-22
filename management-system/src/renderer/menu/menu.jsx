import React from "react";

import logoMenu from '../../public/logoMenu.jpg'

import './menu.css'

function Menu() {
    return (
        <div className="menu">
            <img src={logoMenu} className="logoMenu" />
        </div>
    )
}

export default Menu
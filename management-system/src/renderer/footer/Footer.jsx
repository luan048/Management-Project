import React from "react";

import imgFooter from '../../public/imgFooter.png'

import './Footer.css';

function Footer() {
    return (
        <footer>
            <img src={imgFooter} className="imgFooter" />
        </footer>
    )
}

export default Footer
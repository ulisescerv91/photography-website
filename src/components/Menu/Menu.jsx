import React from 'react'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'

import './Menu.css';

let  showMenu = () =>{
    let menu = document.getElementById('container')
    menu.classList.remove('hideMenu')
    menu.classList.add('showMenu')
    
}

let  hideMenu = () =>{
    let menu = document.getElementById('container')
    menu.classList.remove('showMenu')
    menu.classList.add('hideMenu')
}

export default function Menu() {
    return (
        <div className="menu">
            <div id="openMenu" className="openMenu" onClick={showMenu}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
            <div id="container" className="container">
                <div className="closeMenu" onClick={hideMenu}>
                    <AiOutlineClose className="icon_close"/>
                </div>
                <div className="img_container">
                    <img src={require(`../../Assets/images/logo_150px.png`)}  alt="Me Dicen Beto"/>
                </div>
                <div className="menu_options_container">
                    <a href="#">Inicio</a>
                    <a href="#">Galeria</a>
                    <a href="#">Contactame</a>
                    <a href="#">Acerca de mi</a>
                </div>
                <div className="follow">
                    <div className="socialMedia">
                        <a className="linkNetwork instagram" href="https://instagram.com/beto.mc" target="_blank">
                            <div className="network">
                                <FiInstagram className="icon"/>
                            </div>
                        </a>
                        <a className="linkNetwork " href="https://www.facebook.com/Me-dicen-BetoFotografia-115496536880287" target="_blank">
                            <div className="network">
                                <FaFacebook className="icon"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

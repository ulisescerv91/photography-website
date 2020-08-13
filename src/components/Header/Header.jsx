import React, { useState }  from 'react';
//import img1 from '../../Assets/images/header-1.jpg';

import './Header.css'



const Header = () => {

    // const [images, setImages] = useState([1]);//numero de imagenes

    return (
        <div className="header">   
            <nav>
                <ul>
                    <div className="left">

                        <li>
                            <a className="link_menu" href="#home">Inicio</a>    
                        </li>
                        <li>
                            <a className="link_menu" href="#">Galeria</a>
                        </li>
                    </div>
                    <div className="center">
                        <li>
                            <a className="" href="#">
                                <div className="logo">
                                    <img src={require(`../../Assets/images/logo_150px.png`)}  alt="Me Dicen Beto" id="logo_img"/>
                                </div>
                            </a>
                        </li>
                    </div>
                    <div className="right">
                        <li>
                            <a className="link_menu" href="#">Contactanos</a>
                        </li>
                        <li>
                            <a className="link_menu" href="#">Acerca de mi</a>
                        </li>
                    </div>
                </ul>
                
            </nav>
            <div className="phrase">
                <p className="">Lorem ipsum dolor sit amet </p>
                <span className="little_phrase">Lorem ipsum dolor sit</span>
            </div>
            <div className="mainImg_container">
                <img  id="mainImg" src={require(`../../Assets/images/volcan_1920.jpg`)} alt="Volcan de Colima"  />
            </div>
        </div>
    );
}

export default Header;

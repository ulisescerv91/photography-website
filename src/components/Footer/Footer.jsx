import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook,FaWhatsapp } from 'react-icons/fa';

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <img src={require(`../../Assets/images/logo_150px.png`)} alt="Me dicen Beto"/>
            <div className="follow">
                <div className="socialMedia">
                    <a className="linkNetwork instagram" href="https://instagram.com/beto.mc" target="_blank">
                        <div className="network">
                            <FiInstagram className="icon"/>
                        </div>
                    </a>
                    <a className="linkNetwork instagram" href="https://wa.me/5213123182276" target="_blank">
                        <div className="network">
                            <FaWhatsapp className="icon"/>
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
    );
}

export default Footer;

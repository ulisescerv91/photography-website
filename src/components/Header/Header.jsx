import React, { useState }  from 'react';
//import img1 from '../../Assets/images/header-1.jpg';

import './Header.css'



const Header = () => {

    const [images, setImages] = useState([1]);//numero de imagenes

    return (
        <div className="header">
            <div className="name_container">                
                <div className="torka">                    
                    <span className ="firstName">Alberto</span>
                    <span className="lastName">Mejia</span>
                </div>
                <div className="skill">
                    fotógrafo
                </div>
            </div>
            <div className="galery">
                {
                   images.map( (item,index) => <img  id={`imagen${item}`} src={require(`../../Assets/images/volcan.JPG`)} alt="" key={index} />)                   
                }
            </div>
        </div>
    );
}

export default Header;

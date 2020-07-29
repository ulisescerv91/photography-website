import React from 'react';

import './ImageLetters.css'


const ImageLetters = () => {
    return (
        <div className="imageLetters">
            <div className="container-text">
                <p className="phrase">
                    Lorem, <span className="txtColor"> ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci dolore sequi, quaerat</span> reprehenderit ea!
                </p>
                <img className="tijuana" src={require(`../../Assets/images/tijuana.jpg`)} alt=""/>

            </div>
            <div className="container_house">
                <div className="stars">
                    <img className="casa_img" src={require(`../../Assets/images/casa-estrellas.jpg`)} alt=""/>

                </div>

            </div>
        </div>
    );
}

export default ImageLetters;


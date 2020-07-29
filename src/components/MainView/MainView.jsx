import React from 'react';
import './MainView.css';

import Header from  '../Header/Header'
import ImageLetters from "../ImageLetters/ImageLetters"
import AboutMe from '../AboutMe/AboutMe'
const MainView = () => {
    return (
        <div className="main">
            <Header/>
            <ImageLetters/>
            <AboutMe/>
        </div>
    );
}

export default MainView;

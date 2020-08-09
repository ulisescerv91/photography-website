import React from 'react';
import './MainView.css';

import Header from  '../Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Gallery from '../Gallery/Gallery'

const MainView = () => {
    return (
        <div className="main">
            <Header/>
            <About/>
            <Gallery/>
            <Contact/>
        </div>
    );
}

export default MainView;

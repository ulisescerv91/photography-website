import React from 'react';
import './MainView.css';

import Header from  '../Header/Header'
import Menu from '../Menu/Menu'
import About from '../About/About'

const MainView = () => {
    return (
        <div className="main">
            <Menu/>
            <Header/>
            <About/>
        </div>
    );
}

export default MainView;

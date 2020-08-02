import React from 'react';
import './MainView.css';

import Header from  '../Header/Header'
import Menu from '../Menu/Menu'
import About from '../About/About'
import Contact from '../Contact/Contact'

const MainView = () => {
    return (
        <div className="main">
            <Menu/>
            <Header/>
            <About/>
            <Contact/>
        </div>
    );
}

export default MainView;

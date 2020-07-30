import React from 'react';
import './MainView.css';

import Header from  '../Header/Header'
import Menu from '../Menu/Menu'

const MainView = () => {
    return (
        <div className="main">
            <Menu/>
            <Header/>
        </div>
    );
}

export default MainView;

import React from 'react';

import Header from  '../Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'

import './MainView.css';

const MainView = () => {
    return (
        <div className="main">
            <Header/>
            <About/>
            <Gallery className="view_gallery"/>
            {/* <Contact/> */}
            <Footer/>
        </div>
    );
}

export default MainView;

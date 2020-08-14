import React from 'react'

import  "./About.css";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="info">
                <div className="title">
                    <span>Acerca de mi</span>
                    <p className="phrase">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repellat sed libero incidunt voluptas iusto, eos nulla a magnam eum culpa aliquid, aspernatur dignissimos, perspiciatis accusantium corrupti ipsam quos neque numquam. Harum quis fuga nulla ad omnis beatae deserunt vero.</p>
                    <div className="followMeBtn">Follow me!</div>
                </div>
            </div>
            <div className="beto_img_container">
                <img src={require(`../../Assets/images/beto-about_450.png`)}  alt="Beto" id="beto_img"/>
            </div>
        </div>
    )
}

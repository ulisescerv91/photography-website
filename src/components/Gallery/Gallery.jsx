import React, {useState}  from 'react';
import GalleryItems from '../GalleryItems/GalleryItems'
import './Gallery.css'
import {Animated} from "react-animated-css";

const Gallery = () => {
    
    const [visible, setVisible] = useState(true);//numero de imagenes
    const [optionGallery, setOptionGallery] = useState('nature');//galery selected
    const  click = (option) =>{
        setOptionGallery(option)
        setVisible(!visible)
    }

    const  showCategories = () =>{
        setVisible(true);
    }
    return (
        <div className="Gallery "  >   
            {/* title */}
            <div className="gallery_title" id="gallery_title">
                <h1 className="">
                    Galeria
                </h1>                            
                <div onClick={ showCategories }  className="showCat" style={ (visible)? {display: "none"}:{display: "block"} } >Ver Mas Categorias</div>
            </div>
            <div className="container">
                {/* Options */}
                <div className="gallery_options" style={ (visible)? {display: "block"}:{display: "none"} }  >
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={visible}>
                        {/* Volcan */}
                        <div className="gallery_options_item opc_volcan" >
                            <a href="#gallery_title">
                                <div className="gallery_options_item_container_img " onClick={ ()=>click('nature') } >
                                    <div className="gallery_bg_img gallery_bg_volcan"></div>    
                                    <div className="show_gallery ">
                                        <svg  viewBox="0 0 469.33333 469.33333"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/>
                                        </svg>
                                        
                                    </div>                                                                
                                </div>
                            </a>
                            <div className="gallery_options_item_description">
                                <div className="title">
                                    Wild
                                </div>
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit.</p>
                            </div>
                        </div>

                        {/* People */}
                        <div className="gallery_options_item  opc_people">
                            <a href="#gallery_title">
                                <div className="gallery_options_item_container_img gallery_people" onClick={ ()=>click('people') }>
                                    <div className="gallery_bg_img gallery_bg_people"></div> 
                                    <div className="show_gallery ">
                                        <svg  viewBox="0 0 469.33333 469.33333"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/>
                                        </svg>
                                        
                                    </div>   
                                </div>
                            </a>
                            <div className="gallery_options_item_description">
                                <div className="title">
                                    People
                                </div>
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit.</p>
                            </div>
                        </div>

                        {/* Street */}
                        <div className="gallery_options_item opc_street">
                            <a href="#gallery_title">
                                <div className="gallery_options_item_container_img gallery_street" onClick={ ()=>click('street') }>                        
                                    <div className="gallery_bg_img gallery_bg_street"></div>
                                    <div className="show_gallery ">
                                        <svg  viewBox="0 0 469.33333 469.33333"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/>
                                        </svg>
                                        
                                    </div>  
                                </div>
                            </a>
                            <div className="gallery_options_item_description">
                                <div className="title">
                                    Street Photography
                                </div>
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit.</p>
                            </div>
                        </div>
                    </Animated>
                </div>
                
                {/* Itemos */}
                <div className="gallery_items" style={ (!visible)? {display: "block"}:{display: "none"} }>
                    <Animated  animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!visible}>
                        <GalleryItems selection={optionGallery}/>
                    </Animated>
                </div>
            </div>
           

        </div>
        
    );
}

export default Gallery;

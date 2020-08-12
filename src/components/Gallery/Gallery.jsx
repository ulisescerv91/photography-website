import React  from 'react';

import './Gallery.css'
const Gallery = () => {
    
    return (
        <div className="Gallery">
            <div className="gallery_title">
                <h1>
                    Galeria
                </h1>
                
            </div>
            <div className="gallery_options">
                {/* Volcan */}
                <div className="gallery_options_item">
                    <div className="gallery_options_item_container_img ">
                        <div className="gallery_bg_img gallery_bg_volcan"></div>    
                        <div className="show_gallery ">
                            <svg  viewBox="0 0 469.33333 469.33333"  xmlns="http://www.w3.org/2000/svg">
                                <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/>
                            </svg>
                            
                        </div>                                                                
                    </div>
                    <div className="gallery_options_item_description">
                        <div className="title">
                            Lorem, ipsum dolor
                            
                        </div>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit.</p>
                    </div>
                </div>

                {/* People */}
                <div className="gallery_options_item img_center">
                    <div className="gallery_options_item_container_img gallery_people">
                        <div className="gallery_bg_img gallery_bg_people"></div>   
                    </div>
                    <div className="gallery_options_item_description">
                        <div className="title">
                            Lorem, ipsum dolor
                        </div>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit.</p>
                    </div>
                </div>

                {/* Street */}
                <div className="gallery_options_item">
                    <div className="gallery_options_item_container_img gallery_street">                        
                        <div className="gallery_bg_img gallery_bg_street"></div>
                    </div>
                    <div className="gallery_options_item_description">
                        <div className="title">
                            Lorem, ipsum dolor
                        </div>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Gallery;

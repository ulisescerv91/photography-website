import React , { useState } from 'react';

import ImageModal from '../ImageModal/ImageModal'
import './GalleryItems.css'

const GalleryItems = (props) => {

    
    
    const nature_img = [1,2,3,4,5,6,7,8,9,10];

    
    const [showModal, setShowModal] = useState(false);
    const [imgToShowInModal,setimgToShowInModal] = useState(null)
    const openModal = (item)=>{
        setimgToShowInModal(item)
        setShowModal(true);
    }
    const closeModal = () =>{
        setShowModal(false);
        
    }

    return (
        <div className="GalleryItems">
            <div className={`grid ${props.selection}`}>
                {
                    nature_img.map((item,i)=> (<figure className="gallery__item gallery__item--5" id={`image_nature_${item}`} key={item}>
                                <img src={require(`../../Assets/images/gallery/${props.selection}/${item}.jpg`)} onClick={() => openModal(item) } alt="Beto"  className="gallery__img" />
                            </figure>) )
                        
                }

            </div>
            {
                showModal && <ImageModal img={imgToShowInModal} closeModalfn={closeModal} lastImg={10} selection={props.selection}/>            
            }
        </div>
    );
}

export default GalleryItems;

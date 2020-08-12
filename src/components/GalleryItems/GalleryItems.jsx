import React , { useState } from 'react';

import ImageModal from '../ImageModal/ImageModal'
import './GalleryItems.css'

const GalleryItems = () => {

    const nature_img = [1,2,3,4,5,6,7,8,9,10]
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
        <div className="galleryItems_container">
            <div className="grid">
                {
                    nature_img.map((item,i)=> (<figure class="gallery__item gallery__item--5" id={`image_nature_${item}`} key={item}>
                                <img src={require(`../../Assets/images/gallery/nature/${item}.jpg`)} onClick={() => openModal(item) } alt="Beto"  className="gallery__img" />
                            </figure>) )
                        
                }

            </div>
            {
                showModal && <ImageModal img={imgToShowInModal} closeModalfn={closeModal} lastImg={10}/>            
            }
        </div>
    );
}

export default GalleryItems;

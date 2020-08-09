import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import {FaRegWindowClose} from 'react-icons/fa'
import {FcNext,FcPrevious} from 'react-icons/fc'

import './ImageModal.css'


const ImageModal = (props) => {
    const [imageToShow, setimageToShow] = useState(props.img);
    
    const nextImgShowInModal = () =>{
        let nextImg = imageToShow + 1;
        setimageToShow( (nextImg <= props.lastImg )? nextImg : 1 )
    }

    const prevImgShowInModal = () =>{
        let prevImg = imageToShow - 1;
        setimageToShow( (prevImg >= 1)? prevImg : props.lastImg )
        
    }

    return (
        <Modal isOpen={true}>
            <FaRegWindowClose className="close_icon" onClick={props.closeModalfn}/>        
            <div className="change_img">
                <FcPrevious className="icon_change_img" onClick={prevImgShowInModal}/>
                <FcNext className="icon_change_img" onClick={nextImgShowInModal}/>
            </div>
            <div className="image_container">
                <img src={require(`../../Assets/images/gallery/nature/${imageToShow}.jpg`)}  alt="Beto"  className="img_modal" />
            </div>
        </Modal>
    );
}

export default ImageModal;

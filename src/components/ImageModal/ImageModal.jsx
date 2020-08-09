import React from 'react';
import {FaRegWindowClose} from 'react-icons/fa'
import Modal from '../Modal/Modal'

import './ImageModal.css'

const ImageModal = (props) => {
    return (
        <Modal isOpen={true}>
            <FaRegWindowClose className="close_icon" onClick={props.closeModalfn}/>        
            <div className="image_container">
                <img src={require(`../../Assets/images/gallery/nature/${props.img}.jpg`)}  alt="Beto"  className="img_modal" />
            </div>
        </Modal>
    );
}

export default ImageModal;

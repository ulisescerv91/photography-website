import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css';

const Modal = (props) => {
    if(!props.isOpen){
        return null
    }
    else{

        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal_container">
                    {
                        props.children
                    }
                </div>
            </div>,
            (document.getElementById('modal'))
        )
    }
}

export default Modal;

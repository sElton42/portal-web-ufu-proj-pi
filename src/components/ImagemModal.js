import React from "react";
import './ImagemModal.css';

const ImagemModal = ( { id="imagemmodalid" , onClose=()=>{} , children } ) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return <div id={id} className="imagemmodal" onClick={handleOutsideClick}>
        <div className="imagemmodal-container">
            <button className="imagemmodal-butclose" onClick={onClose}>X</button>
            <div className="imagemmodal-content">{children}</div>
        </div>
    </div>;
};

export default ImagemModal;
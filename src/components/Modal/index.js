import './modal.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const ModalGif = ({ url, title, category,setShowModal }) => {
    return (
        <div className="modalGif">
            <div className="modalGif-content">
                <img
                    src={url}
                    alt={category}
                    className="modalGif-img"
                />
                <h4> Category: {category}</h4>
                <p>Title: {title}</p>
            </div>

            
            <div
            onClick={()=>{setShowModal(false)}} 
            className="modalGif-boton"
            >
                X</div>
        </div>

    )
}

export default ModalGif;

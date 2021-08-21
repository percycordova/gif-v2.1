
import React, { useState } from 'react';
import { Link } from 'wouter';
import ModalGif from '../Modal';

const CardGif = ({ url, title, id, category }) => {

    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(true);
    }
    //to={`/gif/${id}`}
    return (
        <>
            <Link
                className="item"
                to={`#`}
                style={{ textDecoration: "none" }}
                onClick={handleModal}
            >
                <img
                    src={url}
                    alt=""
                    className=""
                    loading='lazy'
                />

                <h5 style={{ color: "#000000", marginTop: ".3rem" }}>
                    {title}
                </h5>

            </Link>

            {showModal && <ModalGif
                url={url} 
                title={title}
                category={category}
                setShowModal={setShowModal}
                />}

        </>
    )
}

export default CardGif;

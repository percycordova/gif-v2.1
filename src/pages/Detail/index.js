import React, { useContext } from 'react';
import CardGif from '../../components/cardGif/CardGif';
import Context from '../../context/GifsContext';

import "./detail.css"

const Detail = ({ params }) => {
    const { id } = params;
    const { gifs } = useContext(Context);
    

    const gif = gifs.find(singleGif => singleGif.id === id)
    console.log(gif);
    return (
        <div className="detail">
            <CardGif {...gif} />
        </div>
    )
};

export default Detail;

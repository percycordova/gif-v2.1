import React  from 'react';
import { replaceBlanks } from '../../services/validations';
import CardGif from '../cardGif/CardGif';


const ListofGifs = ({ gifs, category }) => {
    
    return (
        <>
            <h4 className="m-3 text-center  "
                style={
                    {
                        display: "inline-block",
                        color: "#f1e60d",
                        fontWeight: "900",
                        fontSize: "2.2rem",
                        borderBottom: "2px solid #007bff",
                        borderTop: "2px solid #007bff",
                        paddingBottom: '.4rem',
                        textTransform: "capitalize",
                    }
                }>
                {replaceBlanks(category)}
            </h4>
            <section className="App-content">

                {
                    gifs.map(singleGif =>

                        <CardGif
                            url={singleGif.url}
                            title={singleGif.title}
                            id={singleGif.id}
                            key={singleGif.id}
                            category={category}


                        />)
                }
            </section>
            

        </>
    )
}

export default ListofGifs;

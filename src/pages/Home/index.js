
import React, { useState } from 'react';
import { useLocation } from 'wouter';
import ListofGifs from '../../components/ListoGifs/ListofGifs';
import ImageGrid from '../../components/SvgPlaceholden/ImageGrid';
import LazyTreding from '../../components/TrendingSearches/LazyTreding';
import useGifs from '../../hooks/useGifs';
import { removeAccents, replaceHyphens } from '../../services/validations';



const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
      console.log(path);
    const { loading, gifs } = useGifs(null, 10);

    const handleSubmit = (e) => {
        e.preventDefault();
        //navegar a otra ruta
        pushLocation(`/search/${replaceHyphens(removeAccents(keyword))}`);
    }
    const handleChange = ({ target }) => {
        setKeyword(target.value);
    };


    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="form"
            >
                <input
                    placeholder="Search a gif here ..."
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                    className="inputBuscar"
                />
                <button className="btn btn-primary ml-1">Buscar</button>
            </form>
            {

                <>
                    <h2 className="text-center mt-1 mb-1"
                        style={{
                            color: "#007bff",
                            fontSize: "2.2rem",
                            fontWeight: "600"
                        }}>Última Búsqueda</h2>
                    {
                        loading
                            ? <ImageGrid />
                            : <ListofGifs gifs={gifs} category={localStorage.getItem('lastkeyword') || ""} />

                    }

                </>

            }
            <h2 className="text-center mt-4 mb-4"
                style={{
                    color: "#007bff",
                    fontSize: "2.5rem",
                    fontWeight: "bold"
                }}
            >Tendencias</h2>
            <LazyTreding />


            {/* <a href="facebook">Facebook</a> al usar href me refresca toda la pagina, en vez uso Link y el atributo to*/}

        </>
    )
}

export default Home;

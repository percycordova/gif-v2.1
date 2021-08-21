import { useContext, useEffect, useState } from 'react'
import Context from '../context/GifsContext';
import getGifs from '../services/getGifs';

const initialPage = 0;
const useGifs = (keyword = null, quantity) => {
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(false);
    const [page, setPage] = useState(initialPage);

    const { gifs, setGifs } = useContext(Context);
    // const [gifs, setGifs] = useState([]);

    const keywordToUse = keyword || localStorage.getItem('lastkeyword');
    useEffect(() => {
        //recuperamos la keyword del localstore

        getGifs({ category: keywordToUse, limit: quantity })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
                //guardamos la keyword en el localstore    
                localStorage.setItem('lastkeyword', keywordToUse);
            });


    }, [keywordToUse, quantity, setGifs])


    useEffect(() => {

        if (page === initialPage) return
        setLoadingPage(true);
        getGifs({ category: keywordToUse, page: page,limit:quantity })
            .then(nextGif => {
                setGifs(prevGif => (prevGif.concat(nextGif)))//aumento el array concatennado el anterior
                setLoadingPage(false);
            })


    }, [keywordToUse, page, setGifs,quantity]);
    return { loading, gifs, setPage,loadingPage }
}

export default useGifs


import React, { useEffect, useState } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService';
import PopularGifs from '../popularGIfs/PopularGifs';


const TrendingSearches = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        getTrendingTerms({ signal: controller.signal })
            .then(resp => setTrends(resp))
            .catch(err => { })
        return () => controller.abort()
    }, [])


    return <PopularGifs popularGifs={trends} />

}
export default TrendingSearches;



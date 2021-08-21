import { API_KEY, API_URL } from "./settings";

//funcion obtener términos de tendencia


const getTrendingTerms = async ({ signal }) => {

    const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;
    const resp = await fetch(url, { signal });
    const { data } = await resp.json();
    return data;
}

export default getTrendingTerms;


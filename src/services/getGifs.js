import { API_URL, API_KEY } from "./settings";



const getGifs = async ({
    category = '',
    limit = 15,
    rating = 'g',
    page = 0,
} = {}) => {

    const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limit}&offset=${page * limit
        }&rating=${rating}&lang=en`

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    return gifs;
}

export default getGifs;

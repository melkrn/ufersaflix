import axios from "axios";

export const api = axios.create({ 
    baseURL: "https://apiufersaflix.herokuapp.com/"
});

export const createSession = async (email, password) => {
    return api.post("/sessions", {email, password})
}

export const getUsers = async() => {
    return api.get("/usuario"); 
}

export const setUsers = async (nome, email, matricula, password) => {
    return api.post("/usuario", {nome, email, matricula, password})
}


// api do TMDB

const API_KEY = "de98b03affef6fe0471936aa8ee6afc0";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/day?api_key=${API_KEY}`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
    } catch (error) {
        console.log("Error getMovies: " + error);       
    }
}

export default categories;
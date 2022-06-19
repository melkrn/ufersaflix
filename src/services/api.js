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

import axios from "axios";

export const api = axios.create({ // colocar URL do back-end
    baseURL: ""
});

export const createSession = async (email, password) => {
    return api.post("/sessions", {email, password})
}

export const getUsers = async() => {
    return api.get("/users");
}
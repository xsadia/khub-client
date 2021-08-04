import axios from "axios";

export const api = axios.create({
    baseURL: 'https://khub-api.herokuapp.com/'
});

//
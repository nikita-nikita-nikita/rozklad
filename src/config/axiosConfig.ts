import axios from "axios";

const baseURL = "" // todo add a base url  and some extra stuff like tokens

const apiAxios = axios.create({
    baseURL
})

export {apiAxios};

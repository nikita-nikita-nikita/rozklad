import axios from "axios";

// todo url from env
const baseURL = "http://localhost:5000/api"

const apiAxios = axios.create({
    baseURL
})

export {apiAxios};

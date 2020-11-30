import axios from "axios";

// todo url from env
const baseURL = "http://185.65.244.35/api"

const apiAxios = axios.create({
    baseURL
})

export {apiAxios};

import axios from "axios";

// todo url from env
const baseURL = "http://mops-study.com/api"

const apiAxios = axios.create({
    baseURL
})

export {apiAxios};

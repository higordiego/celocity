import { getToken } from "./auth"

import axios from 'axios'

const api = axios.create({ 
    baseURL: process.env.BASE_URL
})

api.interceptors.request.use(config => {
    const token = getToken()
    if (token) {
        config.headers.token = token
    }
    return config
});

export default api
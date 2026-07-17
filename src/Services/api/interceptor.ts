import axios from "axios";


const request = axios.create({
    headers: {
        "Content-Type": "multipart/form-data"
    },
    baseURL: 'https://api.al-muamalat.uz/api',
    params: {}
})

request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.error('Xatolik')
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const statusCode = error.status
        if(statusCode === 401) {
            window.localStorage.clear()
        }
        return Promise.reject(error)
    }
)

export {request}
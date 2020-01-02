import axios from 'axios';

const baseURL = process.env.REACT_APP_REST_API_BASE_URL

const get = (url) => {
    return axios.get(`${baseURL}/${url}`)
}

const post = (url, data) => {
    return axios.post(`${baseURL}/${url}`, data)
}

export default {
    get,
    post
}
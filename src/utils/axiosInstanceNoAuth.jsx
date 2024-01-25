import axios from 'axios'

const axiosInstanceNoAuth = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
})

export default axiosInstanceNoAuth
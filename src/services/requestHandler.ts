import axios from 'axios';
import {API_GATEWAY, REQUEST_TIMEOUT} from "../constants/config";

const axiosInstance = axios.create({
    baseURL: API_GATEWAY,
    timeout: REQUEST_TIMEOUT,
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    }
})
// axiosInstance.interceptors.request.use()
// axiosInstance.interceptors.response.use()

export default axiosInstance
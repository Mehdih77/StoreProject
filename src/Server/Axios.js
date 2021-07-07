import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export function get(url, config = {}) {
    return axios.get(url , config )
}

export function post(url, payload,  config ) {
    return axios.post(url , payload , config )
}

export function del(url, config = {}) {
    return axios.delete(url , config)
}
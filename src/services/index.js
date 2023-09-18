import axios from "axios";

export const BASE_URL = 'https://localhost:7185/';

export const ENDPOINTS = {
    Class: 'class',
}

export const createAPIEndpoint = (endpoint, spesificurl) => {

    let url = BASE_URL + 'api/' + endpoint + '/' + spesificurl;

    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: (id) => axios.delete(url + '/' + id),
    }
}
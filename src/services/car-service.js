const { default: axios } = require("axios")

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/car' :
    '//localhost:3000/api/car';

export const carService = {
    query,
    getById,
    remove,
    saveCar
}

function query() {
    console.log('query');
    return axios.get(`http://localhost:3000/car`)
        .then(res => res.data)
}

function getById(id) {
    return axios.get(`http://localhost:3000/car/${id}`)
        .then(res => res.data)
}

function remove(id) {
    return axios.delete(`http://localhost:3000/car/${id}`)
}

function saveCar(car) {
    return (car._id) ? _update(car) : _add(car)
}

function _update(car) {
    return axios.put(`http://localhost:3000/car/${car._id}`, car)
        .then(res => res.data)
}

function _add(car) {
    console.log('add');
    return axios.post(`http://localhost:3000/car/`, car)
        .then(res => res.data)
}
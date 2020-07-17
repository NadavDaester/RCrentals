import { carService } from '../services/car-service.js'

export const carStore = {
    state: {
        cars: []
    },
    getters: {
        cars(state) {
            return state.cars
        }
    },
    mutations: {
        setCars(state, { cars }) {
            state.cars = cars;
        },
        setCar(state, { car }) {
            state.currCar = car
        },
        removeCar(state, { id }) {
            const idx = state.cars.findIndex(car => car._id === id)
            state.cars.splice(idx, 1);
        },
        addCar(state, { savedCar }) {
            state.cars.push(savedCar)
        },
        updateCar(state, { savedCar }) {
            const idx = state.cars.findIndex(car => car._id === savedCar._id)
            state.cars.splice(idx, 1, savedCar)
        }
    },
    actions: {
        async loadCars({ commit, state }) {

          var cars=  await  carService.query()
            commit({ type: 'setCars', cars })
            return cars

        },
        async removeCar({ commit }, { id }) {
            await carService.remove(id)
            commit({ type: 'removeCar', id })
        },
        async saveCar({ commit }, { car }) {
            const type = (car._id) ? 'updateCar' : 'addCar';
            const savedCar = await carService.saveCar(car)
            commit({ type, savedCar })
        },
        async filterBy({ commit }, { filterBy }) {
            const cars = await carService.query(filterBy)
            commit({ type: 'setCars', cars })
        }
    },




}
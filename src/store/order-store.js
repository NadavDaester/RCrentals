import orderService from '../services/order-service.js'

export const orderStore = {
    state: {

    },
    getters: {


    },
    mutations: {

    },
    actions: {
        async bookCar(context, { orderCred }) {
            console.log(orderCred);
        }
    }
}
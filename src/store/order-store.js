import orderService from '../services/order-service.js'

export const orderStore = {
    state: {

    },
    getters: {


    },
    mutations: {

    },
    actions: {
        async saveOrder({ commit }, { order }) {
            console.log(order);
            await orderService.saveOrder(order)
            // commit({type:'sendOrderToOwner',buyer,order,owner})
        }
    }
}
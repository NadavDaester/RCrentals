import orderService from '../services/order-service.js'

export const orderStore = {
    state: {

    },
    getters: {


    },
    mutations: {

    },
    actions: {
        async sendOrderToOwner({ commit }, { buyer, order, owner }) {
            console.log(buyer, 'order', order, owner);
            await orderService.sendOrder(buyer, order, owner)

            // commit({type:'sendOrderToOwner',buyer,order,owner})
        }
    }
}
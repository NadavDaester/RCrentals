import httpService from './http-service';
import userService from '../services/user-service.js'
export default {
    saveOrder,
    remove,
    getOrders
}
async function _add(order) {

    const user = await userService.getById(order.owner._id)
    // user.orders.push(order)
    // console.log(user);

    // await httpService.put(`user/${user._id}`, user)
    return await httpService.post(`order/`, order)

}


async function getOrders() {
    return await httpService.get(`order`)
}

async function remove(id) {
    return await httpService.delete(`order/${id}`)
}

function saveOrder(order) {
    console.log(order);
    return (order._id) ? _update(order) : _add(order)
}

async function _update(order) {
    return await httpService.put(`order/${order._id}`, order)

}


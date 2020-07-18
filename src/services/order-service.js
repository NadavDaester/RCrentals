import httpService from './http-service';
import json from '../../db.json';
import userService from '../services/user-service.js'
var orders = json.order
var users = json.user
export default {
    sendOrder
}

console.log(users);
async function sendOrder(buyer, order, owner) {
    const user = await userService.getById(owner._id)
    order.buyer = buyer
    orders.push(order)
    user.orders.push(order)
    console.log(user);
}
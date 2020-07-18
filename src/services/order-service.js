import httpService from './http-service';
import json from '../../db.json';
import userService from '../services/user-service.js'

var users = json.user
export default {
    sendOrder
}

console.log(users);
async function sendOrder(buyer, order, owner) {
    const user = await userService.getById(owner._id)
    order.buyer = buyer
    user.orders.push(order)
    console.log(user);
}
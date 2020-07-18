import httpService from './http-service'
import json from '../../db.json';
var users = json.user

export default {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

async function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user)
}

async function login(userCred) {
    console.log(userCred);
    const user = users.find(user => user.email === userCred.email)
    if (user.password === userCred.password)
        return user
    // const user = await httpService.post('auth/login', userCred)
    // return _handleLogin(user)
}




async function signup(userCred) {
    users.push(userCred)
    return userCred
    // const user = await httpService.post('auth/signup', userCred)
    // return _handleLogin(user)
}
async function logout() {
    // await httpService.post('auth/logout');
    // sessionStorage.clear();
}

function getUsers() {
    return httpService.get('user')
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

function getLoggedinUser() {
    const user = sessionStorage.getItem('user')
    if (!user) return ''
    return JSON.parse(user);
}



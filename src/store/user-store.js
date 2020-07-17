import userService from '../services/user-service.js'

export const userStore = {
    state: {
        // loggedInUser: null
        loggedInUser: {
            "id": "u101",
            "fullName": "Maor Bason",
            "password": "12345",
            "email": "maor456@walla.com",
            "isAdmin": false,
            "imgUrl": "url",
            "createdAt": 12312312312
        }
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedInUser = user;
        }
    },
    actions: {
        async userSignUp(context, { userCred }) {
            const user = await userService.signup(userCred)
            context.commit({ type: 'setUser', user })
            return user;

        },
        async login(context, { userCred }) {
            const user = await userService.login(userCred);
            context.commit({ type: 'setUser', user })
            return user;
        }
    }



}
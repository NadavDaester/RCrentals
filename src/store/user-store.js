import userService from '../services/user-service.js'

export const userStore = {
    state: {

    },
    getters: {


    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user;
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
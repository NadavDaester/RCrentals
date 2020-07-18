import userService from '../services/user-service.js'

export const userStore = {
    state: {
        // loggedInUser: null
        loggedInUser: {
            "_id": "u103",
            "fullName": "nadav daester",
            "password": "66542",
            "email": "nadav444@gmail.com",
            "isAdmin": true,
            "imgUrl": "url",
            "createdAt": 1123423423,
            "orders": [],
            "favCars": []
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
            console.log(state.loggedInUser);
        },
    },
    actions: {
        async signUp(context, { userCred }) {
            const user = await userService.signup(userCred)
            console.log(user);
            context.commit({ type: 'setUser', user })
            return user;

        },
        async login(context, { userCred }) {
            const user = await userService.login(userCred);
            console.log(user);

            context.commit({ type: 'setUser', user })
            return user;
        },
        async logout(context) {
            await userService.logout();
            context.commit({ type: 'setUser', user: null })
        },
        async updateFavs({ commit }, { car , isLiked }) {
            await userService.updateFavs(car,isLiked)
            // commit()
        }

    }



}
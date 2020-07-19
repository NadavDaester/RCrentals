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
        },
    },
    actions: {
        async signUp(context, { userCred }) {
            const user = await userService.signup(userCred)
            context.commit({ type: 'setUser', user })
            return user;

        },
        async login(context, { userCred }) {
            const user = await userService.login(userCred);

            context.commit({ type: 'setUser', user })
            return user;
        },
        async logout(context) {
            await userService.logout();
            context.commit({ type: 'setUser', user: null })
        },
        async updateFavs({ commit }, { car, isLiked, user }) {
            if (isLiked) {
                user.favCars.push(car)
            } else {
                const idx = user.favCars.findIndex(favCar => favCar._id === car._id)
                user.favCars.splice(idx, 1)
            }
            await userService.updateFavs(user)
        }

    }



}
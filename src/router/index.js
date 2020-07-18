import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import signUp from '../views/signup.vue';
import logIn from '../views/login.vue';
import profile from '../views/profile.vue';
import browseCars from '../views/browse-cars.cmp.vue'
import carDetails from '../views/car-details.cmp.vue';
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'signUp',
        component: signUp
    },
    {
        path: '/login',
        name: 'logIn',
        component: logIn
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/car/:category?',
        name: 'browse cars',
        component: browseCars
    },
    {
        path: '/car/details/:id',
        name: 'car-details',
        component: carDetails
    },
]

const router = new VueRouter({
    routes
})

export default router
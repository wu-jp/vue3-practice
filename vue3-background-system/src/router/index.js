import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/picket',
        name: 'Picket',
        component: () => import('../views/Picket.vue'),
    },
    {
        path: '/grid',
        name: 'GridView',
        component: () => import('../views/GridView'),
    },
    {
        path: '/award',
        name: 'Award',
        component: () => import('../views/Award.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

import {createRouter, createWebHistory} from "vue-router";
import routes from './routes'

export default createRouter({
    history: createWebHistory(undefined),  //mode:'history'
    routes,
})
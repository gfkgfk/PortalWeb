import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/404',
        name: '404',
        component: resolve => require(['@/views/system/error/404'], resolve),
    },
    {
        path: '/Main',
        name: 'Main',
        component: resolve => require(['@/views/Main'], resolve)
    },
    {
        path: '*',
        redirect: '/404',
    }
]

const router = new VueRouter({
    routes
})

export default router

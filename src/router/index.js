import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import {getToken} from "@/utils/utils";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

//白名单
const whitePathList = ['/home', '/About','/About/about2']
//全局前置路由
router.beforeEach((to, from, next) => {

    //白名单校验，否则检查是否有token
    if (whitePathList.indexOf(to.path) != -1) {
        next()
    } else if (!getToken()) {
        next('/home')
    } else {
        next()
    }


});

//全局后置路由
router.afterEach((to) => {
    window.scrollTo(0, 0);
});

export default router

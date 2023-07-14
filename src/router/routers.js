import Home from "@/views/Home";

export default [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['@/views/login/login'], resolve),
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
        path: '/About',
        name: 'About',
        component: resolve => require(['@/views/About'], resolve),
        children: [
            {path: 'about1', component: resolve => require(['@/views/about/about1'],resolve)},
            {path: 'about2', component: resolve => require(['@/views/about/about2'],resolve)},
            {path: ':id', component: resolve => require(['@/views/about/abouttemp'],resolve),props:true}
        ]
    },
    {
        path: '*',
        redirect: '/404',
    }
];
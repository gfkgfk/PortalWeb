export default {
    namespaced:true,
    state: {
        // 定义的数据，tab标签，这是初始化跳转页面进去就存在的，不想要可以设置
        tabsList:[
            {
                path:"/",
                name:"home",
                label:"主页",
                icon:"home"
            }
        ]
    },
    getters:{
    },
    mutations: { //mutations中必须为同步操作
        //左侧菜单栏点击后将数据传递进来将数据添加到tabsList中 添加tab标签
        selectMenu(state,val){
            if(val.name!=='home'){
                let result=state.tabsList.findIndex(item=>item.name===val.name);
                result===-1 ? state.tabsList.push(val) : ''
            }
        },
        // tab标签删除
        closeTab(state,val){
            let result=state.tabsList.findIndex(item=>item.name===val.name);
            state.tabsList.splice(result,1);
        }
    },
    actions: {

    },
}
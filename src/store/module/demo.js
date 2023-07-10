export default {
    namespaced:true,
    state: {
        number:0
    },
    getters:{
        getNumber(state) {
            return state.number+1
        },
    },
    mutations: { //mutations中必须为同步操作
        setNumber(state){
            state.number +=1
        },
        setNumberWithParam(state,payload){
            state.number +=payload.param
        }
    },
    actions: {
        setNumAction(content,payload) {
            // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
            return new Promise(resolve => {
                // 我们模拟一个异步操作，1秒后修改number为888
                setTimeout(() => {
                    content.commit('setNumberWithParam', { param: 888 });
                    resolve();
                }, 1000);
            });
        },
        setNumAction2(content,payload) {
            // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
            return new Promise(resolve => {
                // 我们模拟一个异步操作，1秒后修改number为888
                setTimeout(() => {
                    content.commit('setNumberWithParam', {param:payload.param});
                    resolve();
                }, 1000);
            });
        },
    },
}
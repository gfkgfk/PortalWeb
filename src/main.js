import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {api} from "@/api";
import Fragment from 'vue-fragment'
// 引入ElementUI组件库
import ElementUI from 'element-ui';
//引入ElementUI的所有样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.use(Fragment.Plugin)

Vue.config.productionTip = false
//绑定API
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

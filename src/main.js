// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import "./assets/css/style.css"
import "./less/index.less"
import axios from "axios"//只能在当前模块上面
//花括号
import less from "../src/less/index.less"
import api,{domain} from "./js/api.js"
Vue.config.productionTip = false

Vue.use(ElementUI)
// 创建路由实例 



//  axios.get(domain+api.logout).then(()=>{
//     //  console.log(123456)
//  })
// 配置默认域名, 这样请求的时候就不用在url里加域名了

axios.defaults.baseURL=domain;
// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
// axios.defaults.withCredentials=true;
axios.defaults.withCredentials=true;
// 将axios,api添加到vue的原型当中

Vue.prototype.$axios=axios;
Vue.prototype.$api=api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

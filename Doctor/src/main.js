// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import mock from './mock/mock.js'

//自定义指令
import directive from './directive/index'
import store from './store'
for(let key in directive) {
	Vue.directive(key, directive[key])
}
// var instance = axios.create({
// 	baseURL:'',//打包上线的时候替换baseURL
// 	timeout:1000,
// 	headers:{'X-Custom-Header':'footbar'}
// })
// //添加一个请求拦截器
// instance.interceptors.request.use(function(config){
// 	console.log('请求前')
// 	  //在请求发出之前进行一些操作  加载中
// 	  return config;
// });
// //添加一个响应拦截器
// instance.interceptors.response.use(function(res){
// 	console.log('请求完成')
// 	  //在这里对返回的数据进行处理  加载完成
// 	  return res;
// })

Vue.prototype.$axios = axios;//Vue 原型上有$axios这个方法  其他地方直接this.$axios调用
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

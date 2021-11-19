import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Cookies from 'js-cookie'
Vue.prototype.$cookie = Cookies;

import axios from 'axios'
Vue.prototype.$http= axios.create({
  baseURL:'http://localhost:3000/api/'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

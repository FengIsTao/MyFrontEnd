// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {init,bind} from './utils/custom-life-cyle'
import ElementUI from 'element-ui'

init()
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
const vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
bind(vm)
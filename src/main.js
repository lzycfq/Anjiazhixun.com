// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wapheads from './layout/waphead.vue'
import wapfooters from './layout/wapfooter.vue'
Vue.config.productionTip = false

//Vue.component('waphead',{
//	template: waphead
//})
//Vue.component('wapfooter',{
//	template: wapfooter
//})
Vue.component('waphead',wapheads);
Vue.component('wapfooter',wapfooters);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.prototype.HOST = '/api'
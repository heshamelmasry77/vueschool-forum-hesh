// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AppDate from './components/AppDate' // to register the app date globally
import store from '@/store'
// Vue.component(tagName, options) to register a component globally it takes two arguments tagName and options

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // using the router
  store: store, // inject the store
  template: '<App/>',
  components: {App}
})

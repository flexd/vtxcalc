import Vue from 'vue'
import VeeValidate from 'vee-validate';

import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import * as filters from './filters'
sync(store, router)
Vue.use(VeeValidate);

const app = new Vue({
  router,
  store,
  ...App
})

Object.keys(filters).forEach(k => {
Vue.filter(k, filters[k])
})

export { app, router, store }

import Vue from 'vue'
import App from './components/App.vue'
import {store} from './vuex/store.js'

new Vue({
  el: '#test',
  store,
  render: h => h(App)
})
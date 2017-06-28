import Vue from 'vue'
import route from './src/route.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
    router:route,
}).$mount('#app')
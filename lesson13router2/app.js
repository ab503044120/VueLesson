import vueRoute from 'vue-router'
import Vue from 'vue'
import App from './src/components/App.vue'
import shaoqiroute from './src/route.js'

const router = new vueRoute({
    base:__dirname,
    routes: shaoqiroute
})

Vue.use(vueRoute)

new Vue({
    el: "#test",
    router,
    render: h => h(App)
})
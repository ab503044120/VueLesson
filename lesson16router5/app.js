import vueRoute from 'vue-router'
import Vue from 'vue'
import route from './src/route.js'
import App from './src/components/App.vue'


const router=new vueRoute(
    {
        routes:route
    }
)

Vue.use(vueRoute);

new Vue({
    el:'#test',
    router,
    render:h=>h(App)
})
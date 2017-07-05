import route from './src/route.js'
import vueRoute from 'vue-router'
import Vue from 'vue'
import App from './src/components/app.vue'
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
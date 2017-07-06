import Vue from 'vue'
import vueRoute from 'vue-router'
import app from './src/components/App.vue'
import route from './src/route.js'

const router=new vueRoute(
    {
        routes:route
    }
)

Vue.use(vueRoute);

new Vue({
    el:'#test',
    router,
    render:h=>h(app)
})

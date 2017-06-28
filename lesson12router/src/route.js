import route from 'vue-router'
import Foo from './components/foo.vue'
import Bar from './components/bar.vue'

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

export default new route({
    routes
})
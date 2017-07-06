import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import Home from './components/Home.vue'
import Default from './components/Default.vue'
import Parent from './components/parent.vue'

export default [
    { path: '/', component: Home },
    {
        path: '/parent', component: Parent,
        children: [
            { path: '', component: Default },
            { path: 'foo', component: Foo },
            { path: 'bar', component: Bar }
        ]
    }
]
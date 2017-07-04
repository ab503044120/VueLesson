import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import Home from './components/Home.vue'

export default[
    {path:'/',name:'home',component:Home},
    {path:'/foo',name:'foo',component:Foo},
    {path:'/bar/:id',name:'bar',component:Bar},    
]

import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import Baz from './components/Baz.vue'


export default [
    {path:'/',components:{default:Foo,a:Foo,b:Baz}},
    {path:'/other',components:{default:Foo,a:Baz,b:Baz}}
]
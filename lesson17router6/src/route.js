import Bar from './components/Bar.vue'
import Baz from './components/Baz.vue'
import Default from './components/Default.vue'
import Foo from './components/Foo.vue'
import Home from './components/Home.vue'
import WithParams from './components/withParam.vue'

export default [
    {
        path: '/', component: Home, children: [
            { path: '', component: Default },
            { path: 'foo', component: Foo },
            { path: 'baz', name:'baz', component: Baz },
            { path: 'bar', component: Bar },
            { path: 'withParam/:id', component: WithParams },
            //相对重定向到兄弟节点
            { path: 'relative-redirect', redirect: 'foo' }
        ]
    },
      //绝对重定向
    {
        path: 'absolute-redirect', redirect: '/bar'
    },
    //动态重定向
    {
        path: '/dynamic-redirect/:id?', redirect: to => {
            //这行是什么意思？？？
            const { hash, params, query } = to//析构写法：将to对象中的名字相同的属性付给对应的值
            debugger
            if(query.to==='foo')
            {
                return {path:'/foo',query:null}
            }
            if(hash==="#baz")
            {
                return {path:'baz',hash:''}
            }if(params.id){
                return '/withParam/:id'
            }else{
                return '/bar'
            }
        }
    },
    //名字重定向
    { path: '/named-redirect', redirect: { name: 'baz' }},
    //带参数的重定向
    { path: '/redirect-with-params/:id', redirect: '/withParam/:id' },
    //所有的重定向
    {path:'*',redirect:'/'}
]

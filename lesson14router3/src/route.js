import Home from './components/UserHome.vue'
import Posts from './components/UserPosts.vue'
import Prfile from './components/UserProfile.vue'
import user from './components/User.vue'

//嵌套路由
export default [
    {
        path: '/User/:id', component: user,
        children: [
            { path: '', component: Home },
            //当 路由是/user/:id/profile 的时候 会选择profile的页面
            { path: 'profile', component: Prfile },
            //当 路由是/user/:id/posts 的时候 会选择profile的页面
            { path: 'posts', component: Posts }

        ]
    }
]
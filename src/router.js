import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 引入路由文件
import Home from '@/views/home/Home.vue'
import Cate from '@/views/cate/Cate.vue'
import Jdm from '@/views/jdm/Jdm.vue'
import Cart from '@/views/cart/Cart.vue'
import User from '@/views/user/User.vue'
import Login from '@/views/login/Login.vue'


// 创建所需路由
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/cate',
            component: Cate
        },
        {
            path: '/jdm',
            component: Jdm
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/user',
            component: User
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
          path: '/login',
          component: Login
        }
        
    ]
})
// 抛出路由
export default router;
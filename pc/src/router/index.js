import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue' // 第一种普通
// const load = () => import('@/views/load.vue') // 第三种es import导入方式, 最常用
import Aboutus from '../views/Aboutus.vue'
import Home from '../views/Home.vue'
import about from '../components/aboutus.vue'
import Contactus from '../components/Contactus.vue'
import Requirement from '../components/Requirement.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    // component: () => import('../views/index.vue')
    // component: reslove => (require(['@/views/load.vue'], reslove)) // 第二种引入
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: '/index/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/aboutus',
        name: 'Aboutus',
        component: Aboutus,
        children: [
          {
            path: '/',
            redirect: '/about'
          },
          {
            path: '/about',
            name: 'About',
            component: about
          },
          {
            path: '/contactus',
            name: 'Contactus',
            component: Contactus
          },
          {
            path: '/requirement',
            name: 'Requirement',
            component: Requirement
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
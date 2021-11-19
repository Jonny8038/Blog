import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('@/views/Home.vue')
  },
  {
    path:'/',
    name:'Login',
    component:()=>import('@/components/Login.vue')  //懒加载写法
  },
  {
    path:'/code',
    name:'Code',
    component:()=>import('@/components/Code.vue')  //懒加载写法
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

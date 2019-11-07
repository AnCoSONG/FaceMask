import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path:'/Art',
    name:'Art',
    component:()=>import(/* webpackChunkName: "Art" */ '../views/Art.vue')
  },
  {
    path:'/Yours',
    name:'Yours',
    component:()=>import(/* webpackChunkName: "Yours" */ '../views/Yours.vue')
  },
  {
    path:'/Master',
    name:'Master',
    component:()=>import(/* webpackChunkName: "Master" */ '../views/Master.vue')
  },
  {
    path:'/Fashion',
    name:'Fashion',
    component:()=>import(/* webpackChunkName: "Fashion" */ '../views/Fashion.vue')
  }
]

const router = new VueRouter({
  routes
})



export default router

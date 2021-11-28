import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Item1 from '../views/Item1.vue'
import Item2 from '../views/Item2.vue'
import Item3 from '../views/Item3.vue'
import Item4 from '../views/Item4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Item1',
    name: 'Item1',
    component: Item1
  },
  {
    path: '/Item2',
    name: 'Item2',
    component: Item2
  },
  {
    path: '/Item3',
    name: 'Item3',
    component: Item3
  },
  {
    path: '/Item4',
    name: 'Item4',
    component: Item4
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

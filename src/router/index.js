import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Pokemon from '../views/PokemonDetail.vue'
import BlindTest from '../views/BlindTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon/:id',
    name: Pokemon,
    component: Pokemon
  },

  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },

{
  path: '/blind',
  name: 'BlindTest',
  component: BlindTest
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

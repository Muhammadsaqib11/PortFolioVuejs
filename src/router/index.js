import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import AddProduct from '../views/AddProduct.vue'
import ProductTable from '../views/ProductTable.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/Add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/pTable',
    name: 'ProductTable',
    component: ProductTable
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Clothes from '../views/Clothes.vue'
import Shoes from '../views/Shoes.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/clothes',
    name: 'Clothes',
    component: Clothes
  },
  {
    path: '/shoes',
    name: 'Shoes',
    component: Shoes
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true //för att kunna skicka över id
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

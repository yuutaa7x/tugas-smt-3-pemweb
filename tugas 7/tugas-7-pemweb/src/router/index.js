import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/listProduk.vue'
import CartView from '../views/cardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BranchList from "../views/branches/BranchList";
import ProductList from "../views/products/ProductList";
import ProductDetail from "../views/products/ProductDetail";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/branches',
    name: 'Branch',
    component: BranchList
  },
  {
    path: '/products',
    name: 'Product',
    component: ProductList
  },
  {
    path: '/products/:id',
    name: "ProductDetail",
    component: ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: {requiresGuest: true}
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
      meta: {requiresGuest: true}
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/auth/UserView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/product/ProductView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/products/create',
      name: 'productCreate',
      component: () => import('../views/product/AddProduct.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/products/:id/edit',
      name: 'productEdit',
      component: () => import('../views/product/EditProduct.vue'),
      meta: {requiresAuth: true}
    }





  ]
})

export default router

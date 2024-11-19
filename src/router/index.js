import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' // The "The not today Cafe" page
import LoginPage from '../views/LoginPage.vue' // The Login Page

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Home route
      name: 'home',
      component: App,
    },
    {
      path: '/LoginPage', // Login route
      name: 'login',
      component: LoginPage,
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUp from '../components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Home route
      name: 'home',
      component: Home,
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginPage,
    },

    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
    },
  ],
})

export default router

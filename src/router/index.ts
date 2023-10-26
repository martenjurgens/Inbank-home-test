import { createRouter, createWebHistory } from 'vue-router'
import LoanApplicationView from '../views/LoanApplicationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoanApplicationView
    }
  ]
})

export default router

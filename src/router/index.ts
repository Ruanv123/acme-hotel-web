import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoggedLayout from '@/components/layouts/LoggedLayout.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/',
      component: LoggedLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'quartos',
          name: 'quartos',
          component: () => import('../views/QuartosView.vue'),
        },
        {
          path: 'reservas',
          name: 'reservas',
          component: () => import('../views/ReservasView.vue'),
        },
        {
          path: 'hospedes',
          name: 'hospedes',
          component: () => import('../views/HospedesView.vue'),
        },
        {
          path: 'pagamentos',
          name: 'pagamentos',
          component: () => import('../views/PagamentosView.vue'),
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/ConfiguracoesView.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: NotFoundView,
        },
      ],
    },
  ],
})

export default router

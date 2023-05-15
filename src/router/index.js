import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/painel',
    name: '',
    component: () => import('@/views/PainelView.vue'),
    meta: {
      title: 'Painel de Atendimentos'
    }
  },
  {
    path: '/totem',
    name: 'totem',
    component: () => import('@/views/TotemView.vue'),
    meta: {
      title: 'Totem de AutoAtendimento'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

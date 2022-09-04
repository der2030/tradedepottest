import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), 
    routes: [
      {
        path: '/',
        redirect: '/login'
      },
      {
        path: '/datalist',
        name: 'datalist',
        component: () => import( '../views/datalist.vue')
      },
      {
        path: '/tracking',
        name: 'tracking',
        component: () => import('../views/login.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
      }
    ]
  })
  
  export default router
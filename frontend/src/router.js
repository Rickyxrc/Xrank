import { createRouter, createWebHistory } from 'vue-router'
import mainComponent from './views/mainComponent.vue'
import notFoundComponent from './views/notFoundComponent.vue'
import userComponent from './views/userComponent.vue'

const routes = [
  {
    path: '/',
    component: mainComponent,
  },
  {
    path: '/users/:name',
    component: userComponent,
    props: true,
  },
  {
    path: '/:pathMatch(.*)',
    component: notFoundComponent,
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
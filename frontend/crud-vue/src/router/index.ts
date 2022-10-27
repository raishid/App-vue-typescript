import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'tasks',
      alias: '/tasks',
      component: () => import('../components/TaskList.vue')
    },
    {
      path: '/tasks/new',
      name: 'tasks-new',
      component: () => import('../components/TaskForm.vue')
    },
    {
      path: '/tasks/:id',
      name: 'tasks-details',
      component: () => import('../components/TaskDetail.vue')
    }
  ]
})

export default router

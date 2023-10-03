import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    props: true
  }, 
  {
    path: '/:id',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    props: true
  },
  {
    path: '/blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    props: true
  },
  {
    path: '/blog/:section?',
    component: () => import(/* webpackChunkName: "home" */ '../views/Blog.vue'),
    props: true
  }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

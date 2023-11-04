import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

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
  {
    path: '/sequences',
    component: () => import(/* webpackChunkName: "sequences" */ '../views/Sequences.vue'),
    props: true
  },
  {
    path: '/sequence/:id',
    component: () => import(/* webpackChunkName: "sequence" */ '../views/Sequence.vue'),
    props: true
  },
  {
    path: '/projects',
    component: () => import(/* webpackChunkName: "sequences" */ '../views/Projects.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound'
import EventList from '../views/EventList'
import About from '../views/About'
import EventDetails from '../views/EventDetails'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    beforeEnter: (to, from, next) => {
      next('/page-not-found')
    },
  },
  {
    path: '/page-not-found',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

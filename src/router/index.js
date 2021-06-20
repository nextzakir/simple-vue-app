import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../views/PageNotFound'
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
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
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

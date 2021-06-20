import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList'
import About from '../views/About'
import EventDetails from '../views/EventDetails'
import NotFound from '../views/NotFound'
import NetworkError from '../views/NetworkError'

const routes = [
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
    path: '/about/',
    name: 'About',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NotFound', params: { resource: 'page' } },
  },
  {
    path: '/:resource' + '-not-found/',
    name: 'NotFound',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error/',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

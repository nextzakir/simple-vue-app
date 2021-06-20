import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound'
import EventList from '../views/EventList'
import About from '../views/About'
import EventDetails from '../views/EventDetails'

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
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NotFound', params: { element: 'page' } },
  },
  {
    path: '/:element' + '-not-found',
    name: 'NotFound',
    component: NotFound,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

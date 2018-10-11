import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './components/NotFound.vue'
import Preview from './components/Preview.vue'
import Event from './components/Event.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'preview' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/event/:uid',
      name: 'event',
      component: Event
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})

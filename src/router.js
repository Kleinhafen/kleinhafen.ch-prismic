import Vue from 'vue'
import Event from './components/Event.vue'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import Preview from './components/Preview.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'home'},
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/event/:uid',
      name: 'event',
      component: Event,
    },
    {
      path: '*',
      redirect: {name: 'not-found'},
    }
  ]
})

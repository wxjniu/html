import Vue from 'vue'
import Router from 'vue-router'
import Invit from '@/components/invit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Invit',
      component: Invit
    }
  ]
})

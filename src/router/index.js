import Vue from 'vue'
import Router from 'vue-router'
import Mainsect from '../sections/Mainsect.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainsect',
      component: Mainsect
    }
  ]
})
